---
type: concept
sources:
  - security/2026-03-25-sophisticated-aitm-phishing-attack-via-twitter-t-co-links.md
created: 2026-04-12
modified: 2026-04-12
---

# AITM Phishing (Adversary-in-the-Middle)

A sophisticated credential phishing technique where attackers act as a proxy between the victim and a legitimate authentication server, harvesting credentials in real-time while passing them through to create a seamless (and deceptive) login experience. Particularly dangerous when combined with URL shorteners like Twitter's t.co.

## Key Points
- **t.co exploitation**: Twitter's link shortener masks malicious URLs — users (especially on mobile) cannot verify the true destination before clicking
- **AITM proxy mechanism**: the attacker relays credentials to a real OAuth server while capturing them, making the login appear legitimate to the victim
- **Social engineering layers**: brand confusion (DocuSign, ShareFile, Adobe, Microsoft impersonation), lookalike domains, and manufactured financial urgency
- **Detection difficulty**: the victim completes a real login flow, so standard "check if the site looks real" advice fails
- Documented by Sublime Security in a detailed attack chain analysis

## Related
- [[crypto-tokenization]] — crypto users are high-value phishing targets

## Sources
- [[security/2026-03-25-sophisticated-aitm-phishing-attack-via-twitter-t-co-links]] — Sublime Security analysis of t.co-based AITM phishing
