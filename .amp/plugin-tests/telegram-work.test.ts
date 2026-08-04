import { afterEach, beforeEach, describe, expect, test } from 'bun:test'
import type { ThreadMessage, WebhookEvent } from '@ampcode/plugin'
import {
	TelegramBridge,
	openBridgeDatabase,
	type BridgeConfig,
	type BridgeDependencies,
	type BridgeThread,
} from '../plugins/telegram-work'
import type { Database } from 'bun:sqlite'

const encoder = new TextEncoder()
const signal = new AbortController().signal

class FakeThread implements BridgeThread {
	readonly prompts: string[] = []
	readonly state = { get: async () => 'idle' as const }

	constructor(readonly id: `T-${string}`) {}

	async appendUserMessage(message: { type: 'user-message'; content: string }) {
		this.prompts.push(message.content)
	}

	async messages(): Promise<ThreadMessage[]> {
		return this.prompts.map((text, index) => ({
			role: 'user',
			id: index,
			content: [{ type: 'text', text }],
		}))
	}
}

function telegramBody(updateID: number, userID = 101, chatID = 101, text: unknown = 'Review the auth module') {
	return encoder.encode(JSON.stringify({
		update_id: updateID,
		message: { from: { id: userID }, chat: { id: chatID, type: 'private' }, text },
	}))
}

function webhookEvent(id: string, body: Uint8Array, secret = 'test_secret'): WebhookEvent {
	return {
		id,
		body,
		headers: { 'x-telegram-bot-api-secret-token': secret },
		payload: null,
		metadata: {},
		receivedAt: new Date().toISOString(),
	}
}

describe('TelegramBridge', () => {
	let db: Database
	let config: BridgeConfig
	let dependencies: BridgeDependencies
	let bridge: TelegramBridge
	let createCount: number
	let threads: Map<string, FakeThread>
	let acknowledgements: Array<{ chatID: number; text: string }>

	beforeEach(() => {
		db = openBridgeDatabase(':memory:')
		config = {
			botToken: 'unused-test-token',
			webhookSecret: 'test_secret',
			allowedUserIDs: new Set([101]),
			allowedChatIDs: new Set(),
		}
		createCount = 0
		threads = new Map()
		acknowledgements = []
		dependencies = {
			async createThread() {
				createCount++
				const thread = new FakeThread(`T-test-${createCount}`)
				threads.set(thread.id, thread)
				return thread
			},
			getThread(threadID) {
				const thread = threads.get(threadID)
				if (!thread) throw new Error('missing fake thread')
				return thread
			},
			threadURL(threadID) {
				return `https://amp.example/threads/${threadID}`
			},
			async sendTelegram(chatID, text) {
				acknowledgements.push({ chatID, text })
			},
		}
		bridge = new TelegramBridge(db, config, dependencies)
	})

	afterEach(() => db.close())

	test('valid allowed owner message creates and routes to a child thread', async () => {
		await bridge.handle(webhookEvent('event-1', telegramBody(1)), { signal })

		expect(createCount).toBe(1)
		expect(threads.get('T-test-1')?.prompts).toHaveLength(1)
		expect(threads.get('T-test-1')?.prompts[0]).toContain('UNTRUSTED_TELEGRAM_MESSAGE_METADATA_JSON=')
		expect(threads.get('T-test-1')?.prompts[0]).not.toContain('Review the auth module')
		expect(acknowledgements[0]?.text).toContain('Started Amp thread:')
	})

	test('later message routes to the existing child thread', async () => {
		await bridge.handle(webhookEvent('event-1', telegramBody(1)), { signal })
		const thread = threads.get('T-test-1')
		if (!thread) throw new Error('missing fake thread')
		thread.state.get = async () => { throw new Error('thread.state is not supported in this environment') }
		await bridge.handle(webhookEvent('event-2', telegramBody(2, 101, 101, 'Fix it and test it')), { signal })

		expect(createCount).toBe(1)
		expect(thread.prompts).toHaveLength(2)
		expect(acknowledgements[1]?.text).toBe('Sent to the current Amp thread.')
	})

	test('invalid Telegram secret is rejected before parsing or routing', async () => {
		await bridge.handle(webhookEvent('event-1', encoder.encode('{broken'), 'wrong_secret'), { signal })
		expect(createCount).toBe(0)
	})

	test('non-allowlisted sender is rejected', async () => {
		await bridge.handle(webhookEvent('event-1', telegramBody(1, 999, 101)), { signal })
		expect(createCount).toBe(0)
	})

	test('non-allowlisted chat is rejected', async () => {
		config.allowedChatIDs = new Set([202])
		await bridge.handle(webhookEvent('event-1', telegramBody(1)), { signal })
		expect(createCount).toBe(0)
	})

	test('malformed JSON is rejected', async () => {
		await bridge.handle(webhookEvent('event-1', encoder.encode('{broken')), { signal })
		expect(createCount).toBe(0)
	})

	test('unsupported update is ignored', async () => {
		const body = encoder.encode(JSON.stringify({ update_id: 1, callback_query: { id: 'callback' } }))
		await bridge.handle(webhookEvent('event-1', body), { signal })
		expect(createCount).toBe(0)
	})

	test('duplicate Amp event.id does not route twice', async () => {
		const event = webhookEvent('event-1', telegramBody(1))
		await bridge.handle(event, { signal })
		await bridge.handle(event, { signal })

		expect(createCount).toBe(1)
		expect(threads.get('T-test-1')?.prompts).toHaveLength(1)
	})

	test('duplicate Telegram update_id does not route twice', async () => {
		await bridge.handle(webhookEvent('event-1', telegramBody(1)), { signal })
		await bridge.handle(webhookEvent('event-2', telegramBody(1)), { signal })

		expect(createCount).toBe(1)
		expect(threads.get('T-test-1')?.prompts).toHaveLength(1)
	})

	test('/new clears the mapping and the next message creates a new child thread', async () => {
		await bridge.handle(webhookEvent('event-1', telegramBody(1)), { signal })
		await bridge.handle(webhookEvent('event-2', telegramBody(2, 101, 101, '/new')), { signal })
		await bridge.handle(webhookEvent('event-3', telegramBody(3, 101, 101, 'Start fresh')), { signal })

		expect(createCount).toBe(2)
		expect(acknowledgements[1]?.text).toContain('next message will start a new thread')
		expect(threads.get('T-test-2')?.prompts).toHaveLength(1)
	})
})
