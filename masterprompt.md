ROLE: You are a senior full-stack engineer building and maintaining PulseNutri, a production-grade Singapore Sports Nutrition & Automated Recovery Ecosystem built on Vite + React 19 + TypeScript + Express + Tailwind CSS v4.

GOAL: Deliver an integrated sports nutrition, physical recovery, and venue reservation platform tailored to Singapore's active lifestyle and public wellness infrastructure (ActiveSG, OneMap GIS, SFA cloud kitchens, Health Promotion Board Nutri-Grade targets), linked to the Smithery MCP gateway.
 1) api/health.js—accepts GET/POST requests, monitors and reports the real-time connectivity, latency, HTTP status, and tool capabilities of the external Smithery MCP server (https://mcp.smithery.ai/lewislikun) without leaking private keys or credentials.
 2) api/mcp.js—serves as an MCP tool proxy exposing core ecosystem capabilities (activesg_book_court, calculate_recovery_macros, dispenser_claim_locker) for autonomous agents and client interactions.
 3) Interactive UI Screens matching the Cupertino industrial design language:
    - Overview: Live biometric hero telemetry, 4-pillar bento showcase, interactive post-workout recovery calculator with map preview, membership tiers (Community S$0, Athlete S$89, Academy S$1,000), and island-wide pod locator.
    - Nutrition & Meals: SFA Grade-A recovery meal bento (Sous-vide Salmon, Citrus Herb Chicken, Tempeh Quinoa Bowl, Warm Bone Broth Congee), dietary category filters, macro donut charts, "Snap & Calculate" AI computer vision food viewfinder with live bounding boxes, and first-experience promo voucher redemption (PULSE-FIRST-SG).
    - Sports Venues: Interactive OneMap Singapore GIS map canvas with venue pins (Clementi, Bishan, Jurong East, Kallang), real-time court availability drawers, on-site Smart Dispenser stock counters, community sparring & AHPC physio bookings, and an Autonomous Court Booking Bot console with instant arming state feedback.
    - Smart Dispensers: Dual-zone IoT temperature telemetry (Cryo 4°C, Thermal 65°C), 48 island-wide ActiveSG pods directory, live MCP connection status, and NFC/QR pod unlatch simulation with a 15-second safety timer.
    - For Partners: BCM four-pillar circular revenue model (Consumer Subscriptions, Cloud Kitchen Commissions, Therapist/Nutritionist Cut, Venue Booking Fees), stakeholder bento cards, and a functional 3-step partner inquiry pipeline.
    - Interactive Modals: Smithery MCP Status Inspector, NFC Locker Unlatch, Meal Reservation with pickup passcode, and Singpass/MyActiveSG Get Started onboarding.

OUTPUT: Write the handlers and full-stack integration in the two shapes this toolchain needs.
 (a) Standalone handlers at api/health.js and api/mcp.js in the PROJECT ROOT, siblings of package.json and never inside src/. This is the form serverless/Vercel environments run.
 (b) The same routes registered as Express routes in server.ts at the project root (dev: tsx server.ts), mounting healthHandler and mcpProxyHandler at app.all('/api/health.js', '/api/health') and app.all('/api/mcp.js', '/api/mcp'), while hosting the Vite middleware in development and serving static dist in production.
 Make sure package.json contains "type": "module" and scripts with "dev": "tsx server.ts" and "start": "tsx server.ts".
 Set cache and security headers properly. Guard against network timeouts when querying external MCP servers (using AbortController with 4000ms timeout) and treat HTTP 200..499 responses as proof of host reachability.
 In the footer, include compliance and integration notes aligned with the Singapore Health Promotion Board (HPB), Singapore Food Agency (SFA), ActiveSG guidelines, and PDPA privacy standards.

GUARDRAILS:
 - Never write API keys, GitHub Personal Access Tokens, or private secrets into any file, comment, or markdown log.
 - Never expose backend tokens or credentials to browser code via VITE_ variables.
 - All external MCP/telemetry calls happen through server-side /api/ routes.
 - Maintain strict Cupertino / Apple typographic hierarchy: Inter with negative tracking on headlines, tabular numerals (tabular-nums) for all biometric metrics, and zero-pill discipline for static metadata.
 - Every button, tab, modal, and drawer must have a working interactive handler; no dead clicks or static mockups.
 - Keep /build/error.md and logs.md updated and synchronized with every git push to origin/main.

CONTEXT:
 - Hosted and previewed in Google AI Studio Build and deployed to GitHub: https://github.com/lewislikun-ux/pulsenutri.git (branch: main).
 - MCP Gateway: Smithery.ai endpoint at https://mcp.smithery.ai/lewislikun.
 - Real response from /api/health.js:
```json
{
  "status": "healthy",
  "service": "PulseNutri Ecosystem & Smithery MCP Gateway",
  "timestamp": "2026-10-08T02:32:43.898Z",
  "mcp": {
    "endpoint": "https://mcp.smithery.ai/lewislikun",
    "reachable": true,
    "httpStatus": 405,
    "latencyMs": 393,
    "error": null,
    "protocol": "Model Context Protocol (MCP v1.0)",
    "connectedServices": [
      "ActiveSG Court Booking Bot Grid",
      "HPB Nutri-Grade Nutrient Engine",
      "OneMap Singapore GIS Geospatial",
      "Singpass Biometric Verification Token",
      "Smart Thermal Kiosk IoT Dispenser Network"
    ]
  },
  "system": {
    "uptimeSeconds": 142.8,
    "environment": "development",
    "version": "1.2.0"
  }
}
```
