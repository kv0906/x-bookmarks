---
type: concept
sources:
  - tools/2026-04-11-introducing-langserve-deploying-langchain-applications-as-re.md
created: 2026-04-12
modified: 2026-04-12
---

# LangServe

A deployment framework by LangChain that turns LangChain chains and agents into production-ready REST APIs with minimal effort. Bridges the gap between prototyping LLM applications and deploying them as web services.

## Key Points
- Automates REST API creation from LangChain code — eliminates manual API development
- Built on **FastAPI** for performance and **Pydantic** for data validation and schema enforcement
- Provides `invoke`, `batch`, and `stream` endpoints plus streaming of intermediate results
- Includes a built-in **playground** for testing chains, experimenting with parameters, and team collaboration
- Significantly streamlines the prototype-to-production pipeline for LangChain applications

## Related
- [[agent-orchestration]] — LangServe deploys the agents that orchestration frameworks build
- [[mcp]] — complementary deployment approach; MCP for tool exposure, LangServe for API exposure

## Sources
- [[tools/2026-04-11-introducing-langserve-deploying-langchain-applications-as-re]] — official LangServe announcement by @hwchase17
