# Build & System Error Log (`/build/error.md`)

This file documents build issues, environment edge cases, common errors, and mitigation strategies encountered during the engineering lifecycle of PulseNutri.

---

## 1. Issue Log & Resolutions

### Issue 01: Git Remote URL Protocol Duplication
- **Symptom / Encountered Input**:
  ```
  https://ghp_TOKEN@https://github.com/lewislikun-ux/pulsenutri.git
  ```
- **Root Cause**:
  Accidental concatenation of `https://TOKEN@` with a second `https://` in the user's provided git URL. Running `git remote add` with duplicate protocol schemes causes git transport errors or malformed URL parsing.
- **Resolution**:
  Cleaned URL to standard GitHub PAT token format:
  ```bash
  git remote add origin https://ghp_TOKEN@github.com/lewislikun-ux/pulsenutri.git
  ```
- **Lesson for Future**:
  Always validate and sanitize git credentials URLs to ensure only a single protocol scheme is present before calling `git remote add` or `git push`.

---

### Issue 02: Build Directory Ignored in `.gitignore`
- **Symptom**:
  Standard project `.gitignore` contained `build/`, which would silently prevent files in `/build/` (like `/build/error.md`) from being tracked by git.
- **Root Cause**:
  Default Vite/React ignore rule excludes all build outputs.
- **Resolution**:
  Updated `.gitignore` with an explicit negation rule:
  ```gitignore
  build/*
  !build/error.md
  ```
- **Lesson for Future**:
  Whenever storing documentation or persistent logs in directories commonly listed in `.gitignore`, explicitly add negation rules (`!path`) so they are tracked on git commits and pushes.

---

### Issue 03: External MCP Server HTTP Response Handling
- **Symptom**:
  Querying `https://mcp.smithery.ai/lewislikun` with standard GET may return HTTP 405 (Method Not Allowed) if the endpoint only accepts POST / WebSocket MCP protocol handshakes.
- **Root Cause**:
  Model Context Protocol (MCP) endpoints typically listen for JSON-RPC 2.0 payloads via POST or SSE/WebSockets. A plain GET request tests network and host reachability rather than an API RPC call.
- **Resolution**:
  In `/api/health.js`, treat any HTTP status in the `200..499` range as a successful reachability ping (proving network connection, DNS resolution, and SSL handshake with Smithery.ai). Guard fetch calls with an `AbortController` timeout (4000ms) to prevent server hangs.
- **Lesson for Future**:
  Health probes for foreign MCP or RPC gateways must distinguish between network failures (DNS/timeout/500s) and protocol mismatches (405/404) to provide accurate degraded vs offline status.

---

### Issue 05: GitHub Push Protection Secret Scanning (GH013)
- **Symptom**:
  Remote push rejected with `remote: error: GH013: Repository rule violations found for refs/heads/main. - GITHUB PUSH PROTECTION: Push cannot contain secrets (GitHub Personal Access Token)`.
- **Root Cause**:
  Raw chat logs or history files directly quoting the user's initial prompt containing the PAT token `ghp_...` were caught by GitHub's automated secret scanner.
- **Resolution**:
  Redacted and masked the access token string in `logs.md` with `[REDACTED_GH_TOKEN]`.
- **Lesson for Future**:
  Never record raw authentication tokens, API keys, or private PAT strings in committed markdown logs or text files. Always sanitize and redact tokens before staging git commits.

---

## 2. Current Health Status
- **TypeScript Compiler (`tsc --noEmit`)**: 0 errors
- **Vite Build (`vite build`)**: Succeeded
- **Dev Server**: Running on port 3000
- **MCP API Endpoint (`/api/health.js`)**: Verified and returning 200 OK
- **Remote Push**: Synced to `origin/main`
