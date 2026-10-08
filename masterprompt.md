# PulseNutri Master Prompt & Product Specification

## 1. Project Overview & Identity
- **Application Name**: PulseNutri — Singapore Sports Nutrition & Automated Recovery Ecosystem
- **Ecosystem Focus**: Singapore national sports nutrition, automated physical recovery, ActiveSG venue integration, OneMap geospatial routing, and dual-zone IoT smart vending dispensers.
- **Brand Aesthetic**: Cupertino / Apple-inspired precision industrial design. Atmospheric glassmorphism (`backdrop-blur-xl`), squircle bento containers, hairline borders (`1px solid rgba(0,0,0,0.06)`), and high typographic hierarchy.

---

## 2. Core Functional Pillars & Screens

### A. Overview Screen (`#overview`)
- **Hero & Live Telemetry**: Dynamic headline ("Peak performance meets intelligent recovery"), operational badge indicating real-time ActiveSG & Singpass synchronization.
- **Hero Bento Showcase**:
  - Real-Time Meal Macro Engine (Teriyaki Salmon Recovery, visual scan accuracy 99.4%, 450 kcal, 38g Protein, 42g Carbs, 11g Lipids).
  - OneMap ActiveSG Smart Court Reservation (Kallang Tennis Centre Court 03, bot auto-sniped 0.42s latency, ActiveSG wallet S$42.50).
  - Smart Dispenser Kiosk State (Changi City Point Hub Locker Pod #04, 65°C heated, 14.8s prep, NFC tap unlatch).
- **Singapore Trust Strip**: SFA Compliant Grade A, HPB Nutri-Grade A & B, OneMap GIS, ActiveSG Grid (48 stadium clusters).
- **Four Pillars Architecture**: Precision Fuel (Cloud Kitchens), ActiveSG Bot Integration, Computer Vision AI Meal Scan, Dual-Zone Thermal Hardware.
- **Interactive Recovery Calculator**: Discipline selector (Badminton, Running 10K, Heavy Gym Lifting, Lap Swimming) dynamically updating meal specs, electrolytes, temperature, kiosk pickup pod, and interactive pre-order action.
- **Membership Tiers**: Community Member (S$0 PAYG), Consumer Athlete Pass (S$89/mo - Priority), Pro Academy / Club (S$1,000/mo).

### B. Nutrition & Meals Screen (`#nutrition-and-meals`)
- **Headline**: "Precision fuel. Verified by science."
- **Dietary Filter Segment**: All Recovery Meals, High Protein (Post-HIIT), Low GI Endurance, Plant-Powered, Senior Vitality & Active Aging.
- **Bento Menu**:
  - *Sous-vide Miso Salmon & Forbidden Rice* ($12.50, 42g Protein, 520 kcal, 48g Carbs, macro donut micro-chart).
  - *Citrus Herb Grilled Chicken & Mash* ($11.80, HPB Healthier Choice, 38g Protein, 480 kcal).
  - *Tempeh & Edamame Quinoa Power Bowl* ($10.90, 100% Plant-Based, 28g Plant Protein, 440 kcal).
  - *Warm Bone Broth & Vitality Congee* ($9.80, Pioneer Pass $8.50, Active Aging, 26g Bio-Protein, 360 kcal, 12g Collagen, GI 48).
- **Snap & Calculate Vision Engine**: Camera viewfinder simulation with live bounding boxes (Salmon Belly 99%, Forbidden Rice 41g Carb, 94% Recovery Index).
- **Logistics Architecture**: Central cloud kitchens, sub-4°C cold chain, peak-hour replenishment drops.
- **Promo Voucher Banner**: Code `PULSE-FIRST-SG` with 1-click copy and instant kiosk redemption.

### C. Sports Venues Screen (`#sports-venues`)
- **Headline**: "One app for every court, pitch, and gym in Singapore."
- **Autonomous Auto-Booking Bot Deck**:
  - Target discipline selector (Badminton, Tennis, Pickleball, Squash, Futsal).
  - Venue Priority Ladder (Clementi Sports Hall, Jurong East Sports Complex, Bishan Sports Hall, Kallang Tennis Hub).
  - Singpass / MyActiveSG wallet auto-debit profile ($9.70/slot + $1.80 commission only on win).
  - "Arm Bot for Tomorrow 7 AM" with interactive state transitions and telemetry graph.
- **OneMap Singapore GIS Canvas**:
  - Interactive map canvas with geolocation pins across Singapore.
  - Venue detail drawer with real-time court vacancy (18:00–21:00) and on-site Smart Dispenser stock.
- **Community Sparring & Allied Health**:
  - Open sparring match joiners (West Coast Smashers).
  - Certified AHPC Physio mobile pod bookings (Kenneth Koh, PT).
  - Community dawn running sessions (Marina Bay Waterfront 7.5KM).

### D. Smart Dispensers Screen (`#smart-dispensers`)
- **Kiosk Network Explorer**: Searchable directory of 48 active pods island-wide.
- **Dual-Zone Hardware Telemetry**: Live temperature gauges (Cryo Chilled 3.8°C–4.1°C, Thermal Hot 64.8°C–65.4°C).
- **Interactive Door Unlatch**: NFC tap and QR scan simulation with 15-second safety relatch countdown.

### E. For Partners Screen (`#for-partners`)
- **Stakeholder Opportunities**: Facility Operators (zero CAPEX, 15-22% net share), Clinical Telehealth Network (70% consultation share + 4% formulation royalty), Culinary Cloud Kitchens (800-2,500 units guaranteed, 10% protocol fee), Institutional Grants (PSG compatible, National Steps Challenge API).
- **Interactive BCM Revenue Model**: 4 interactive tabs showing unit economics and cohort breakdowns.
- **Multi-Step Onboarding Pipeline**: Step 1 (Organization), Step 2 (Requirements & Scale), Step 3 (Confirmation).

---

## 3. Technology Stack & Architecture

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Motion, Lucide icons & Google Material Symbols Outlined.
- **Typography**: Inter (Google Fonts) with San Francisco optical tracking.
- **Backend / API**: Express full-stack entrypoint (`server.ts`) mounting Vite middleware in development and static assets in production.
- **MCP Integration**:
  - Monitored MCP Server: `https://mcp.smithery.ai/lewislikun`
  - Health Endpoint: `/api/health.js` and `/api/health`
  - MCP Tool Gateway: `/api/mcp.js` (tools: `activesg_book_court`, `calculate_recovery_macros`, `dispenser_claim_locker`)
  - Real-time client status modal inspectable from navigation header and footer.
- **Version Control & Remote**:
  - Repository: `https://github.com/lewislikun-ux/pulsenutri.git`
  - Default Branch: `main`
  - Tracking protocol: Automatically update `masterprompt.md`, `build/error.md`, and `logs.md` upon every git push.
