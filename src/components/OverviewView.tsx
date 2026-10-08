/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageRoute, MealItem } from '../types.ts';
import { ACTIVITIES_DATA, MEALS_DATA } from '../data/mockData.ts';

interface OverviewViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenLocker: (kioskName?: string) => void;
  onReserveMeal: (meal: MealItem) => void;
  onOpenGetStarted: () => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({
  onNavigate,
  onOpenLocker,
  onReserveMeal,
  onOpenGetStarted,
}) => {
  const [activeActivity, setActiveActivity] = useState<string>('badminton');
  const [selectedTier, setSelectedTier] = useState<string>('athlete');

  const currentActivity = ACTIVITIES_DATA[activeActivity] || ACTIVITIES_DATA['badminton'];

  const handlePreorderCurrentActivity = () => {
    // Find closest meal or default to first
    const matchedMeal = MEALS_DATA.find((m) =>
      m.name.toLowerCase().includes(currentActivity.title.toLowerCase().slice(0, 10))
    ) || MEALS_DATA[0];
    onReserveMeal(matchedMeal);
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden pt-10 pb-16 md:pb-[5rem] px-4 md:px-10">
        {/* Atmospheric Ambient Glows */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#0059b5]/10 via-[#006e28]/5 to-transparent blur-3xl pointer-events-none rounded-full"></div>

        <div className="max-w-[1320px] mx-auto flex flex-col items-center text-center relative z-10">
          {/* Live Operational Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0edef] shadow-sm mb-6 backdrop-blur-md border border-black/[0.04]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006e28] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006e28]"></span>
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1b1b1d]">
              Singapore's First Integrated Sports Recovery Ecosystem
            </span>
          </div>

          {/* Grand Apple Typography */}
          <h1 className="text-[36px] md:text-[56px] leading-[1.08] font-semibold text-[#1b1b1d] max-w-4xl tracking-tight mb-4 text-balance">
            Peak performance meets intelligent recovery.
          </h1>
          <p className="text-[17px] leading-[24px] text-[#414753] max-w-2xl text-balance mb-8">
            Nutritionist-crafted balanced post-workout meals, automated sports court bookings across ActiveSG venues, and on-demand chilled &amp; warm smart vending machines.
          </p>

          {/* Primary & Ghost CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#calculator"
              className="inline-flex items-center justify-center h-11 px-8 rounded-full bg-[#0071e3] text-white text-[14px] font-medium hover:bg-[#0059b5] transition-all active:scale-[0.97] shadow-md shadow-[#0071e3]/20"
            >
              Explore Ecosystem
            </a>
            <button
              onClick={() => onNavigate('smart-dispensers')}
              className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-full bg-[#f0edef] text-[#1b1b1d] text-[14px] font-medium hover:bg-[#eae7ea] transition-all active:scale-[0.97] cursor-pointer"
            >
              <span>Locate Nearby Kiosks</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          {/* Bento Hero Showcase Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
            {/* Card A: Real-Time Meal Macro Engine */}
            <div className="md:col-span-4 rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group border border-black/[0.04]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                    AI Vision Telemetry
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#006e28]/10 text-[#006e28] text-[12px] font-medium">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    SFA Approved
                  </span>
                </div>

                <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 bg-[#f0edef]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Teriyaki Salmon Recovery Bowl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDilWcHcXzKKE9E0kocTtluxMj_masV468zQXRMSgx7ix_i7RD8g9yjkLfYIpcAHoBd4HwMhZef98HrOEajEzv5c13c1R90BP5bneYGCrI-Fgym2Ma4Z8I46855Yu-hM_YWqftm_hYUC2LiUni_rU79JdOnsFaEqAlMcNXs1oOBqGVnQ_yr0YhE-w3gtMtGjO9tv3rQp1KR8wmqJOQnlOj_8hfDHlgFgASI25zeQ0E"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#303032]/85 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 text-white text-[12px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#72fe88]"></span>
                    <span>Visual Macro Scan 99.4%</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-[18px] font-semibold text-[#1b1b1d]">
                      Teriyaki Salmon Recovery
                    </h3>
                    <span className="text-[20px] font-bold text-[#0059b5]">
                      450 <span className="text-[13px] font-normal text-[#717785]">kcal</span>
                    </span>
                  </div>
                  <p className="text-[13px] text-[#414753] mb-4">
                    Formulated for rapid glycogen restoration and lean myofibrillar recovery after intense cardio.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1 p-3 bg-[#f6f3f5] rounded-xl text-center">
                <div>
                  <p className="text-[18px] font-bold text-[#1b1b1d]">38g</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Protein</p>
                </div>
                <div>
                  <p className="text-[18px] font-bold text-[#1b1b1d]">42g</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Carbs</p>
                </div>
                <div>
                  <p className="text-[18px] font-bold text-[#1b1b1d]">11g</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Lipids</p>
                </div>
              </div>
            </div>

            {/* Card B: OneMap ActiveSG Smart Court Reservation */}
            <div className="md:col-span-4 rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-black/[0.04]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                    ActiveSG Sync Engine
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0059b5]/10 text-[#0059b5] text-[12px] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0059b5]"></span>
                    OneMap Live
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#f6f3f5] mb-4 border border-black/[0.03]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-full bg-[#eae7ea] flex items-center justify-center text-[#0059b5]">
                      <span className="material-symbols-outlined text-[20px]">sports_tennis</span>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-semibold text-[#1b1b1d]">Kallang Tennis Centre</h4>
                      <p className="text-[12px] text-[#717785]">Court 03 • Hardcourt Outdoor</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-1 text-[#414753] text-[12px]">
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-[#006e28]">schedule</span>
                      19:00 - 21:00 Today
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#006e28]">
                      CONFIRMED
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-[#1b1b1d] font-medium">Bot Auto-Sniped via ActiveSG</span>
                    <span className="text-[#717785]">0.42s latency</span>
                  </div>
                  <div className="w-full bg-[#eae7ea] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#006e28] h-full rounded-full w-full"></div>
                  </div>
                  <p className="text-[13px] text-[#414753] pt-1">
                    Singpass identity verified. Automated court reservation synchronized with post-match thermal meal dispensing.
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-[#f0edef] flex items-center justify-between text-[12px]">
                <span className="text-[#414753]">ActiveSG Wallet Balance</span>
                <span className="font-semibold text-[#1b1b1d]">S$ 42.50 ActiveSG$</span>
              </div>
            </div>

            {/* Card C: Smart Dispenser Kiosk State */}
            <div className="md:col-span-4 rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-black/[0.04]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                    Smart Dispenser 08
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#72fe88] text-[#002107] text-[12px] font-semibold">
                    Ready for Pickup
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-full bg-[#0059b5]/10 flex items-center justify-center text-[#0059b5] flex-shrink-0">
                    <span className="material-symbols-outlined text-[24px]">microwave</span>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold text-[#1b1b1d]">Changi City Point Hub</h4>
                    <p className="text-[13px] text-[#414753]">Locker Pod #04 • Heated 65°C</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f6f3f5] mb-4 flex items-center justify-between border border-black/[0.03]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                      Dispense Timer
                    </p>
                    <p className="text-[22px] font-bold text-[#1b1b1d] tabular-nums">
                      14.8 <span className="text-[13px] font-normal text-[#717785]">sec prep</span>
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-[#f0edef] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[26px] text-[#0071e3] animate-pulse">
                      contactless
                    </span>
                  </div>
                </div>

                <p className="text-[13px] text-[#414753]">
                  Tap Apple Wallet or Singpass NFC token to unlatch your temperature-controlled chamber. Zero waiting queue.
                </p>
              </div>

              <button
                onClick={() => onOpenLocker('Changi City Point Hub - Locker #04')}
                className="w-full mt-4 py-2.5 px-4 rounded-full bg-[#1b1b1d] hover:bg-[#303032] text-white text-[14px] font-medium active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">lock_open</span>
                <span>Unlock Locker via NFC</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* REGULATORY & PARTNERSHIP TRUST ROW */}
      <section className="w-full py-10 px-4 md:px-10 bg-[#f6f3f5] border-y border-black/[0.04]">
        <div className="max-w-[1320px] mx-auto flex flex-col items-center">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785] mb-6 text-center">
            National Ecosystem Infrastructure &amp; Singapore Governance Standards
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white shadow-sm border border-black/[0.04]">
              <span className="material-symbols-outlined text-[24px] text-[#1b1b1d]">health_and_safety</span>
              <div className="flex flex-col text-left">
                <span className="text-[14px] font-semibold text-[#1b1b1d]">SFA Compliant</span>
                <span className="text-[12px] text-[#717785]">Food Safety Grade A</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white shadow-sm border border-black/[0.04]">
              <span className="material-symbols-outlined text-[24px] text-[#006e28]">eco</span>
              <div className="flex flex-col text-left">
                <span className="text-[14px] font-semibold text-[#1b1b1d]">HPB Partner</span>
                <span className="text-[12px] text-[#717785]">Nutri-Grade A &amp; B</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white shadow-sm border border-black/[0.04]">
              <span className="material-symbols-outlined text-[24px] text-[#0071e3]">map</span>
              <div className="flex flex-col text-left">
                <span className="text-[14px] font-semibold text-[#1b1b1d]">OneMap GIS</span>
                <span className="text-[12px] text-[#717785]">SLA Live Geo-Routing</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white shadow-sm border border-black/[0.04]">
              <span className="material-symbols-outlined text-[24px] text-[#884d00]">stadium</span>
              <div className="flex flex-col text-left">
                <span className="text-[14px] font-semibold text-[#1b1b1d]">ActiveSG Grid</span>
                <span className="text-[12px] text-[#717785]">48 Stadiums &amp; Halls</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO VALUE PROPOSITION GRID */}
      <section className="w-full py-16 px-4 md:px-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col items-start max-w-xl mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0071e3] mb-1">
              Engineered for Human Athletic Recovery
            </span>
            <h2 className="text-[32px] md:text-[36px] font-semibold text-[#1b1b1d] tracking-tight">
              Four synchronized pillars. One seamless lifestyle.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Bento 1: Cloud Kitchen Meals (Span 7) */}
            <div className="md:col-span-7 rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden relative border border-black/[0.04]">
              <div className="z-10 max-w-md">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785] mb-1 block">
                  Precision Fuel
                </span>
                <h3 className="text-[26px] font-semibold text-[#1b1b1d] mb-2 leading-tight">
                  Healthy food at your fingertips, zero meal prep hassle.
                </h3>
                <p className="text-[15px] text-[#414753] leading-relaxed mb-6">
                  Fresh nutritionist-planned dishes delivered daily through centralized cloud kitchens. From cold-pressed electrolytes to piping-hot sous-vide proteins, served steaming or chilled within 15 seconds.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#f0edef] text-[#1b1b1d] text-[12px] font-medium">
                    Nutri-Grade A/B
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#f0edef] text-[#1b1b1d] text-[12px] font-medium">
                    Under 15s Vend
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#f0edef] text-[#1b1b1d] text-[12px] font-medium">
                    Zero Preservatives
                  </span>
                </div>
              </div>

              <div className="mt-6 w-full h-60 rounded-xl overflow-hidden relative bg-[#f0edef]">
                <img
                  className="w-full h-full object-cover"
                  alt="Precision Sports Nutrition Kitchen"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNDaH3eV1p6eOT7lggI5I-MTiA28pc1tA6lxsXYJUvPnhxSuvu7LXUC9WNicjfZjgDl77noyuBWKWsOHLhYPXnM6HWZV1fJpgHjZU87DQUlQPFilsW3Ow9uouMjRUj5M8ieIzFBnqN0eCtbKjRXP9OyQK15U41PrDUpyjRGas5x3uDos1_yZ1aGyIPKMWrjpzSlAxk9funw1v9VZDFOf8E6rqFhGUabkf5tD7POa0"
                />
              </div>
            </div>

            {/* Bento 2: Unified Booking & Bots (Span 5) */}
            <div className="md:col-span-5 rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-black/[0.04]">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785] mb-1 block">
                  ActiveSG Integration
                </span>
                <h3 className="text-[26px] font-semibold text-[#1b1b1d] mb-2 leading-tight">
                  Unified Sports Booking + Auto-booking Bots.
                </h3>
                <p className="text-[15px] text-[#414753] leading-relaxed mb-4">
                  Never miss coveted peak-hour badminton, squash, or tennis courts. PulseNutri's bot automatically secures slots 14 days in advance via official Singpass authentication.
                </p>
              </div>

              <div className="p-4 bg-[#f6f3f5] rounded-xl space-y-2.5 my-4 border border-black/[0.03]">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="font-medium text-[#1b1b1d]">Clementi Sports Hall (Badminton)</span>
                  <span className="text-[#006e28] font-semibold">Auto-Reserved</span>
                </div>
                <div className="flex items-center justify-between text-[13px] text-[#717785]">
                  <span>Jurong East Stadium (Gym Access)</span>
                  <span className="text-[#0071e3] font-medium">Queued for 07:00</span>
                </div>
                <div className="flex items-center justify-between text-[13px] text-[#717785]">
                  <span>Bishan Swimming Complex</span>
                  <span>Open Pass</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[12px] text-[#717785]">
                <span>Peak slot hit rate: 96.8%</span>
                <span className="text-[#0071e3] font-medium">Synced with ActiveSG$</span>
              </div>
            </div>

            {/* Bento 3: AI Photo Nutrition Engine (Span 5) */}
            <div className="md:col-span-5 rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-black/[0.04]">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785] mb-1 block">
                  Computer Vision
                </span>
                <h3 className="text-[26px] font-semibold text-[#1b1b1d] mb-2 leading-tight">
                  AI Photo Nutrition Engine.
                </h3>
                <p className="text-[15px] text-[#414753] leading-relaxed mb-4">
                  Snap a quick photo of any meal or workout snack. Our neural network computes micro and macro nutritional breakdowns, cross-referencing your Apple Watch or Garmin heart telemetry.
                </p>
              </div>

              <div className="relative w-full h-48 rounded-xl bg-[#f0edef] overflow-hidden my-4">
                <img
                  className="w-full h-full object-cover"
                  alt="AI Photo Nutrition Scan"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRPx2EiXL0eRVq8Z6ouNvwUXgywT3APwoem53WN_GS266S34rTFT6zUNqRof65vmPtM2SVfRkXFySJUWRM0gxFQZjCOt7HVDJnwfX7cOlkkTUyfwdb0S--44QXEZ_f8DO7IzWO-JlxaAb-rSH7PksuqIGIRIgVZwoaMWFsAxFMHzdtP3FlR1eHIvFNUll1e0kqbbqJLstVUymkYrxtar6SUTBGKDBS3_ZjCyPXb9s"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-[13px] text-white font-medium">
                    Auto-adjusted for 680 active kcal burned
                  </span>
                </div>
              </div>

              <p className="text-[12px] text-[#717785]">
                Continuous sync with Apple HealthKit &amp; HPB Healthy 365.
              </p>
            </div>

            {/* Bento 4: Smart Thermal Vending Kiosks (Span 7) */}
            <div className="md:col-span-7 rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-black/[0.04]">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785] mb-1 block">
                  Hardware Innovation
                </span>
                <h3 className="text-[26px] font-semibold text-[#1b1b1d] mb-2 leading-tight">
                  Smart Thermal Vending Kiosks.
                </h3>
                <p className="text-[15px] text-[#414753] leading-relaxed mb-6">
                  Stationed directly at turnstiles of high-traffic ActiveSG sports centres and prime private gyms. Dual-zone thermal management guarantees crisp cold recovery smoothies (4°C) or piping warm grain boxes (65°C) within arm's reach.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#f6f3f5] flex flex-col border border-black/[0.03]">
                  <span className="text-[22px] font-bold text-[#1b1b1d]">65°C</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                    Thermal Zone Hot
                  </span>
                  <span className="text-[13px] text-[#414753] mt-1">Ready in 10s</span>
                </div>
                <div className="p-4 rounded-xl bg-[#f6f3f5] flex flex-col border border-black/[0.03]">
                  <span className="text-[22px] font-bold text-[#1b1b1d]">4°C</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                    Cryo Zone Chilled
                  </span>
                  <span className="text-[13px] text-[#414753] mt-1">Instant dispense</span>
                </div>
                <div className="p-4 rounded-xl bg-[#f6f3f5] flex flex-col border border-black/[0.03]">
                  <span className="text-[22px] font-bold text-[#1b1b1d]">48</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                    Singapore Pods
                  </span>
                  <span className="text-[13px] text-[#414753] mt-1">Expanding weekly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CALCULATOR & RECOVERY PLAN PREVIEW */}
      <section className="w-full py-16 px-4 md:px-10 bg-[#f6f3f5] border-t border-black/[0.04]" id="calculator">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0071e3]">
              Active Biometric Recommendation
            </span>
            <h2 className="text-[32px] md:text-[36px] font-semibold text-[#1b1b1d] tracking-tight mt-1">
              Match workout strain with automated recovery.
            </h2>
            <p className="text-[15px] text-[#414753] mt-2">
              Select your training discipline to simulate your tailored nutrition formulation and nearest pickup pod.
            </p>
          </div>

          {/* Interactive Container */}
          <div className="rounded-2xl bg-white p-6 md:p-10 shadow-sm border border-black/[0.04]">
            {/* Activity Selector Tabs */}
            <div className="flex items-center justify-center mb-10">
              <div className="inline-flex p-1.5 rounded-full bg-[#f0edef] gap-1.5 flex-wrap justify-center border border-black/[0.04]">
                {Object.keys(ACTIVITIES_DATA).map((key) => {
                  const act = ACTIVITIES_DATA[key];
                  const isActive = activeActivity === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveActivity(key)}
                      className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all cursor-pointer ${
                        isActive
                          ? 'bg-white text-[#1b1b1d] shadow-sm font-semibold'
                          : 'text-[#414753] hover:text-[#1b1b1d]'
                      }`}
                    >
                      {act.emoji} {act.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Output Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Meal & Nutrition Specs */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#0071e3]/10 text-[#0059b5] text-[12px] font-semibold">
                    {currentActivity.tag}
                  </span>
                  <span className="text-[12px] text-[#717785]">{currentActivity.burn}</span>
                </div>

                <h3 className="text-[24px] font-semibold text-[#1b1b1d] leading-snug">
                  {currentActivity.title}
                </h3>
                <p className="text-[15px] text-[#414753] leading-relaxed">{currentActivity.desc}</p>

                <div className="grid grid-cols-4 gap-2 p-4 bg-[#f6f3f5] rounded-xl text-center border border-black/[0.03]">
                  <div>
                    <p className="text-[20px] font-bold text-[#1b1b1d]">{currentActivity.protein}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Protein</p>
                  </div>
                  <div>
                    <p className="text-[20px] font-bold text-[#1b1b1d]">{currentActivity.carbs}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Carbs</p>
                  </div>
                  <div>
                    <p className="text-[20px] font-bold text-[#1b1b1d]">{currentActivity.sodium}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Electrolytes</p>
                  </div>
                  <div>
                    <p className="text-[20px] font-bold text-[#006e28]">{currentActivity.temp}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Kiosk Temp</p>
                  </div>
                </div>

                {/* Kiosk Pickup Card */}
                <div className="flex items-center justify-between p-4 bg-[#f0edef] rounded-xl border border-black/[0.03]">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#0071e3] text-[26px]">
                      location_on
                    </span>
                    <div>
                      <h4 className="text-[14px] font-semibold text-[#1b1b1d]">
                        {currentActivity.kiosk}
                      </h4>
                      <p className="text-[12px] text-[#717785]">{currentActivity.dist}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#72fe88] text-[#002107] text-[12px] font-semibold">
                    Stock: 12 Units
                  </span>
                </div>
              </div>

              {/* Visual Telemetry & Map representation */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="w-full h-64 rounded-xl overflow-hidden bg-[#f0edef] relative border border-black/[0.06]">
                  <img
                    src={currentActivity.mapImage}
                    alt="Kiosk Map Area"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[12px] text-[#1b1b1d] shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#006e28] animate-pulse"></span>
                    <span>Automated Locker Dispense Active</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f6f3f5] flex items-center justify-between border border-black/[0.03]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                      Sync With Booking
                    </p>
                    <p className="text-[13px] text-[#1b1b1d]">Dispense triggered on final game set point</p>
                  </div>
                  <button
                    onClick={handlePreorderCurrentActivity}
                    className="px-5 py-2 rounded-full bg-[#0071e3] text-white text-[14px] font-medium hover:bg-[#0059b5] transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    Pre-order Box
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="w-full py-16 px-4 md:px-10" id="tiers">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0071e3]">
              Transparent Membership
            </span>
            <h2 className="text-[32px] md:text-[36px] font-semibold text-[#1b1b1d] tracking-tight mt-1">
              Tailored for everyday runners and elite athletic setups.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Tier 1: Free Tier */}
            <div
              className={`rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border ${
                selectedTier === 'community' ? 'border-[#0071e3] ring-2 ring-[#0071e3]/20' : 'border-black/[0.06]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[18px] font-semibold text-[#1b1b1d]">Community Member</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#f0edef] text-[12px] text-[#717785]">
                    PAYG
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-[32px] font-bold text-[#1b1b1d]">S$ 0</span>
                  <span className="text-[13px] text-[#717785]"> / month</span>
                </div>
                <p className="text-[13px] text-[#414753] mb-6">
                  Full access to smart vending kiosks across Singapore at standard retail rates plus ActiveSG partner discounts.
                </p>
                <div className="space-y-3 text-[13px] text-[#414753] mb-8">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006e28] text-[18px]">check_circle</span>
                    <span>NFC tap-and-go kiosk purchases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006e28] text-[18px]">check_circle</span>
                    <span>HPB Healthy 365 step point integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006e28] text-[18px]">check_circle</span>
                    <span>AI Photo Nutrition scanning (5 / day)</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedTier('community');
                  onOpenGetStarted();
                }}
                className="w-full py-2.5 px-4 rounded-full bg-[#f0edef] hover:bg-[#eae7ea] text-[#1b1b1d] text-[14px] font-medium transition-all cursor-pointer"
              >
                Get Community Pass
              </button>
            </div>

            {/* Tier 2: Consumer Athlete Pass (Hero tier) */}
            <div className="rounded-2xl bg-white p-8 shadow-md transition-all flex flex-col justify-between relative md:-translate-y-2 border-2 border-[#0071e3]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0071e3] text-white text-[11px] font-semibold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
                Most Popular
              </div>
              <div>
                <div className="flex items-center justify-between mb-2 pt-1">
                  <h3 className="text-[18px] font-semibold text-[#1b1b1d]">Consumer Athlete Pass</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0071e3]/10 text-[12px] text-[#0059b5] font-semibold">
                    Priority
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-[32px] font-bold text-[#0071e3]">S$ 89</span>
                  <span className="text-[13px] text-[#717785]"> / month</span>
                </div>
                <p className="text-[13px] text-[#414753] mb-6">
                  Designed for committed weekly players. Includes automated court reservation bots and subsidized recovery credits.
                </p>
                <div className="space-y-3 text-[13px] text-[#1b1b1d] mb-8">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006e28] text-[18px]">check_circle</span>
                    <span><strong>ActiveSG Auto-booking Bot</strong> (Unlimited)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006e28] text-[18px]">check_circle</span>
                    <span>8 Monthly Kiosk Recovery Meals included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006e28] text-[18px]">check_circle</span>
                    <span>Unlimited AI macro computer vision</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006e28] text-[18px]">check_circle</span>
                    <span>15% off additional thermal items</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedTier('athlete');
                  onOpenGetStarted();
                }}
                className="w-full py-2.5 px-4 rounded-full bg-[#0071e3] hover:bg-[#0059b5] text-white text-[14px] font-medium transition-all shadow-md shadow-[#0071e3]/20 cursor-pointer active:scale-95"
              >
                Start 14-Day Free Trial
              </button>
            </div>

            {/* Tier 3: Enterprise / Pro Academy */}
            <div
              className={`rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border ${
                selectedTier === 'academy' ? 'border-[#0071e3] ring-2 ring-[#0071e3]/20' : 'border-black/[0.06]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[18px] font-semibold text-[#1b1b1d]">Pro Academy / Club</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#f0edef] text-[12px] text-[#717785]">
                    Institutions
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-[32px] font-bold text-[#1b1b1d]">S$ 1,000</span>
                  <span className="text-[13px] text-[#717785]"> / month</span>
                </div>
                <p className="text-[13px] text-[#414753] mb-6">
                  End-to-end nutrition logistics and facility locker allocation for sports clubs, academies, and corporate leagues.
                </p>
                <div className="space-y-3 text-[13px] text-[#414753] mb-8">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006e28] text-[18px]">check_circle</span>
                    <span>Dedicated bulk kiosk pod allocations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006e28] text-[18px]">check_circle</span>
                    <span>Custom team macronutrient formulation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006e28] text-[18px]">check_circle</span>
                    <span>Tournament automated court grid reservation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#006e28] text-[18px]">check_circle</span>
                    <span>Dedicated Singapore dietitian consultations</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('for-partners')}
                className="w-full py-2.5 px-4 rounded-full bg-[#f0edef] hover:bg-[#eae7ea] text-[#1b1b1d] text-[14px] font-medium transition-all cursor-pointer"
              >
                Contact Enterprise Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTION LOCATION FOOTER BANNER */}
      <section className="w-full py-10 px-4 md:px-10 bg-[#f6f3f5] border-t border-black/[0.04]">
        <div className="max-w-[1320px] mx-auto p-8 rounded-2xl bg-white shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 border border-black/[0.04]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#006e28]/10 flex items-center justify-center text-[#006e28] flex-shrink-0">
              <span className="material-symbols-outlined text-[32px]">cell_tower</span>
            </div>
            <div>
              <h3 className="text-[20px] font-semibold text-[#1b1b1d]">
                48 ActiveSG Pods Active Island-wide
              </h3>
              <p className="text-[14px] text-[#414753]">
                Tap your Singpass app or PulseNutri QR code at any terminal in Singapore for instant post-training refueling.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => onNavigate('smart-dispensers')}
              className="h-11 px-6 rounded-full bg-[#0071e3] text-white text-[14px] font-medium hover:bg-[#0059b5] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              Open Kiosk Map
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
