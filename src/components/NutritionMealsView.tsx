/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MealItem, PageRoute } from '../types.ts';
import { MEALS_DATA } from '../data/mockData.ts';

interface NutritionMealsViewProps {
  onNavigate: (route: PageRoute) => void;
  onReserveMeal: (meal: MealItem) => void;
  onOpenGetStarted: () => void;
}

export const NutritionMealsView: React.FC<NutritionMealsViewProps> = ({
  onNavigate,
  onReserveMeal,
  onOpenGetStarted,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hiit' | 'endurance' | 'plant' | 'senior'>('all');
  const [lensScanning, setLensScanning] = useState(false);
  const [voucherCopied, setVoucherCopied] = useState(false);

  const categories = [
    { key: 'all', label: 'All Recovery Meals' },
    { key: 'hiit', label: 'High Protein (Post-HIIT)' },
    { key: 'endurance', label: 'Low GI Endurance' },
    { key: 'plant', label: 'Plant-Powered' },
    { key: 'senior', label: 'Senior Vitality & Active Aging' },
  ] as const;

  const filteredMeals = MEALS_DATA.filter((meal) => {
    if (activeCategory === 'all') return true;
    return meal.category === activeCategory;
  });

  const handleCopyVoucher = () => {
    navigator.clipboard?.writeText('PULSE-FIRST-SG');
    setVoucherCopied(true);
    setTimeout(() => setVoucherCopied(false), 2500);
  };

  const handleSimulateLensScan = () => {
    setLensScanning(true);
    setTimeout(() => {
      setLensScanning(false);
    }, 1800);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Ambient Glow */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-[#0059b5]/10 via-[#6ffb85]/10 to-transparent blur-3xl pointer-events-none rounded-full"></div>

        {/* Editorial Header Section */}
        <section className="max-w-[1320px] mx-auto px-4 md:px-10 pt-10 pb-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#eae7ea]/80 backdrop-blur-md mb-4 shadow-sm border border-black/[0.04]">
            <span className="w-2 h-2 rounded-full bg-[#006e28]"></span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#414753]">
              Precision Performance Kitchens • Singapore Grid
            </span>
          </div>

          <h1 className="text-[36px] md:text-[56px] leading-[1.08] font-semibold tracking-tight text-[#1b1b1d] max-w-4xl mx-auto">
            Precision fuel.<br className="hidden sm:inline" /> Verified by science.
          </h1>
          <p className="text-[17px] leading-[24px] text-[#414753] max-w-2xl mx-auto mt-4">
            Created by Board-certified sports dietitians, cooked fresh across SFA Grade-A cloud kitchens, and calibrated to your biometric recovery window.
          </p>

          {/* Interactive Metric Snapshot Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-black/[0.04] flex flex-col items-center">
              <span className="text-[32px] font-bold text-[#1b1b1d] tabular-nums">45m</span>
              <span className="text-[12px] text-[#717785]">Post-Workout Window</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-black/[0.04] flex flex-col items-center">
              <span className="text-[32px] font-bold text-[#006e28]">A</span>
              <span className="text-[12px] text-[#717785]">Nutri-Grade Certified</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-black/[0.04] flex flex-col items-center">
              <span className="text-[32px] font-bold text-[#0059b5] tabular-nums">48</span>
              <span className="text-[12px] text-[#717785]">ActiveSG Vending Hubs</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-black/[0.04] flex flex-col items-center">
              <span className="text-[32px] font-bold text-[#1b1b1d] tabular-nums">100%</span>
              <span className="text-[12px] text-[#717785]">Cold-Chain Tracked</span>
            </div>
          </div>
        </section>
      </div>

      {/* Segmented Dietary Pill Bar */}
      <section className="max-w-[1320px] w-full mx-auto px-4 md:px-10 py-3">
        <div className="p-1 rounded-full bg-[#eae7ea]/70 backdrop-blur-md flex items-center gap-1 overflow-x-auto no-scrollbar shadow-sm border border-black/[0.04]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all whitespace-nowrap active:scale-95 cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#1b1b1d] shadow-sm font-semibold'
                    : 'text-[#414753] hover:text-[#1b1b1d]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Bento Meal Showcase */}
      <section className="max-w-[1320px] w-full mx-auto px-4 md:px-10 pt-4 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Meal 1: Sous-vide Miso Salmon (Large Asymmetric Span) */}
          {(activeCategory === 'all' || activeCategory === 'hiit') && (
            <article className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-black/[0.04]">
              <div>
                <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-6 bg-[#f0edef]">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Sous-vide Miso Salmon & Forbidden Rice"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUfDc30p8DYmt8Ct5QZdxN6X1E5HJZLE-IJFIaGOypuh-PGFeYm9jmHnnDBSxkU_Sy3wJHrJAoVHDC9VpeIRSse_j53LrP9-BlYXmKTp-pMfro5dfTY1gG6jJ6238mEK6OAfd3sjSRnlpagerTE02pLHRJrzf_BVpRbzLdaLdkB3LkZA2ZW5WscSjXa1YCTeywMxWi5LpXQWjM7V5g3ORzdNIW_De7-LJwejsOmn4"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-semibold text-[#1b1b1d] shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#006e28]"></span>
                      In Stock @ Tampines Hub Kiosk
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#eae7ea]/90 backdrop-blur-md text-[11px] font-medium text-[#414753]">
                      Post-Strength Target
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-md">
                    <span className="text-[18px] font-semibold text-[#1b1b1d]">$12.50</span>
                    <span className="text-[12px] text-[#717785] ml-1">or Pass Tier</span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0059b5]">
                      Anabolic Recovery Compound
                    </span>
                    <h3 className="text-[26px] font-semibold text-[#1b1b1d] mt-1 leading-snug">
                      Sous-vide Miso Salmon &amp; Forbidden Rice
                    </h3>
                    <p className="text-[13px] text-[#414753] mt-2 max-w-lg leading-relaxed">
                      Atlantic salmon infused with white miso, paired with antioxidant-rich anthocyanin forbidden black rice, bok choy, and cold-pressed sesame amino glaze.
                    </p>
                  </div>

                  {/* Macro Donut Micro-Chart */}
                  <div className="hidden sm:flex flex-col items-center flex-shrink-0 bg-[#f6f3f5] p-3 rounded-2xl border border-black/[0.03]">
                    <svg className="w-14 h-14 -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-[#e4e2e4]"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                      />
                      <path
                        className="text-[#0059b5]"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeDasharray="42, 100"
                        strokeLinecap="round"
                        strokeWidth="3.5"
                      />
                      <path
                        className="text-[#006e28]"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeDasharray="28, 100"
                        strokeDashoffset="-42"
                        strokeLinecap="round"
                        strokeWidth="3.5"
                      />
                    </svg>
                    <span className="text-[11px] font-semibold text-[#1b1b1d] mt-1">42g Prot</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 bg-[#f6f3f5] rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 border border-black/[0.03]">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="text-[26px] font-bold text-[#1b1b1d]">42<span className="text-sm font-normal">g</span></span>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Protein</p>
                  </div>
                  <div>
                    <span className="text-[26px] font-bold text-[#1b1b1d]">520</span>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Kcal</p>
                  </div>
                  <div>
                    <span className="text-[26px] font-bold text-[#1b1b1d]">48<span className="text-sm font-normal">g</span></span>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Clean Carbs</p>
                  </div>
                </div>

                <button
                  onClick={() => onReserveMeal(MEALS_DATA[0])}
                  className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-[#0071e3] hover:bg-[#0059b5] text-white text-[14px] font-medium transition-all active:scale-95 shadow-md cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">contactless</span>
                  <span>Reserve at Tampines Kiosk</span>
                </button>
              </div>
            </article>
          )}

          {/* Meal 2: Citrus Herb Grilled Chicken (HPB Certified) */}
          {(activeCategory === 'all' || activeCategory === 'endurance') && (
            <article className="lg:col-span-5 bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-black/[0.04]">
              <div>
                <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-4 bg-[#f0edef]">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Citrus Herb Grilled Chicken & Mash"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEST94oOXJpmpMDQK_DiG_MyEf208SALgPC6U5NcbzLMackC7dNRUsA-jJCHONxokikC8-K4EwPuze2yIfolUfa3hTYyq6KBS8VJxFJhYrG5C4N_AhF8hAE5QAtawMiaVfjVOSMpvGOtq3gbTsvHJfrVpkl3WNTlnoD7F0VMetdJis_g-UY76dJxiVWNIeqg-obthTeyrZLP3lA6GpIMVIZ8v9ZLpNwpqbFBi-6fA"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#72fe88]/90 backdrop-blur-md text-[11px] font-semibold text-[#002107]">
                      <span className="material-symbols-outlined text-[14px]">verified</span> HPB Healthier Choice
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm">
                    <span className="text-[18px] font-semibold text-[#1b1b1d]">$11.80</span>
                  </div>
                </div>

                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#006e28]">
                  Endurance Replenishment
                </span>
                <h3 className="text-[22px] font-semibold text-[#1b1b1d] mt-1 leading-snug">
                  Citrus Herb Grilled Chicken &amp; Mash
                </h3>
                <p className="text-[13px] text-[#414753] mt-1.5 leading-relaxed">
                  Free-range chicken breast steeped in citrus herbs, served with slow-release beta-carotene sweet potato mash and blanched asparagus spears.
                </p>
              </div>

              <div className="mt-4 pt-3 flex items-center justify-between border-t border-black/[0.04]">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-[22px] font-bold text-[#1b1b1d]">38<span className="text-sm font-normal">g</span></span>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Protein</p>
                  </div>
                  <div>
                    <span className="text-[22px] font-bold text-[#1b1b1d]">480</span>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Kcal</p>
                  </div>
                </div>

                <button
                  onClick={() => onReserveMeal(MEALS_DATA[1])}
                  className="inline-flex items-center gap-1.5 h-9 px-4 rounded-full bg-[#f0edef] hover:bg-[#eae7ea] text-[#1b1b1d] text-[14px] font-medium transition-all active:scale-95 cursor-pointer"
                >
                  <span>Reserve</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </article>
          )}

          {/* Meal 3: Tempeh & Edamame Quinoa Power Bowl */}
          {(activeCategory === 'all' || activeCategory === 'plant') && (
            <article className="lg:col-span-5 bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-black/[0.04]">
              <div>
                <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-4 bg-[#f0edef]">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Tempeh & Edamame Quinoa Bowl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgNH8vF_7FYUpbPtA4j8EMBILZiafffRjDy5LLkortCw3IoQ4pFP0nD7HsudOjjyUPuFtEht8aOMDoDLOoN8ITe37bT1Jq93iv781lRLQG2KgLvCCv56OcPNP-kQuZOf7oYDZArvsrggnuxe4weH7P0suKM99ikQipLugTcO7cN8Amfh_cKn5L2kbZMZ7Ej7AUo6oGUnBErOhVG8rrKrfVapc1bTNytYUWDFyyQ6w"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#eae7ea]/90 backdrop-blur-md text-[11px] font-semibold text-[#414753]">
                      100% Plant-Based
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm">
                    <span className="text-[18px] font-semibold text-[#1b1b1d]">$10.90</span>
                  </div>
                </div>

                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ab6200]">
                  Microbiome &amp; Glycemic Control
                </span>
                <h3 className="text-[22px] font-semibold text-[#1b1b1d] mt-1 leading-snug">
                  Tempeh &amp; Edamame Quinoa Bowl
                </h3>
                <p className="text-[13px] text-[#414753] mt-1.5 leading-relaxed">
                  Naturally fermented artisanal non-GMO tempeh, young green edamame, tri-color Peruvian quinoa, and prebiotic avocado sesame dressing.
                </p>
              </div>

              <div className="mt-4 pt-3 flex items-center justify-between border-t border-black/[0.04]">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-[22px] font-bold text-[#1b1b1d]">28<span className="text-sm font-normal">g</span></span>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Plant Prot</p>
                  </div>
                  <div>
                    <span className="text-[22px] font-bold text-[#1b1b1d]">440</span>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Kcal</p>
                  </div>
                </div>

                <button
                  onClick={() => onReserveMeal(MEALS_DATA[2])}
                  className="inline-flex items-center gap-1.5 h-9 px-4 rounded-full bg-[#f0edef] hover:bg-[#eae7ea] text-[#1b1b1d] text-[14px] font-medium transition-all active:scale-95 cursor-pointer"
                >
                  <span>Reserve</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </article>
          )}

          {/* Meal 4: Warm Bone Broth & Vitality Congee */}
          {(activeCategory === 'all' || activeCategory === 'senior') && (
            <article className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-black/[0.04]">
              <div>
                <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-6 bg-[#f0edef]">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Warm Bone Broth & Vitality Congee"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1QwkN5Y8w2x9H2Zysj8zRzBJYJJ0RnYSDD4yIGBdCcnDni3XMRf5XRow3z5vRCk7aHuDr_J3CXzuPyyPeRoN1cuJhOnn0eXcSTPFistO_42e92Y4Z0zvYYiWQ_n4yQmtXkqFFzRNlPYVzwBVdrZV8RYmzl6yf5SOxkPVAvDFiC80_QQgBThlabjHWh3oz6gG8zQaT6Slmk-CouvvoxIqgi7X0T81hFHpdfmQvQOQ"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ffdcbf]/90 backdrop-blur-md text-[11px] font-semibold text-[#2d1600]">
                      <span className="material-symbols-outlined text-[14px]">elderly</span> Active Aging &amp; Collagen Formula
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-medium text-[#414753]">
                      Low Sodium • Gentle GI
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-md">
                    <span className="text-[18px] font-semibold text-[#1b1b1d]">$9.80</span>
                    <span className="text-[12px] text-[#717785] ml-1">Pioneer Pass: $8.50</span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#884d00]">
                      Gentle Absorption &amp; Joint Health
                    </span>
                    <h3 className="text-[26px] font-semibold text-[#1b1b1d] mt-1 leading-snug">
                      Warm Bone Broth &amp; Vitality Congee
                    </h3>
                    <p className="text-[13px] text-[#414753] mt-2 max-w-lg leading-relaxed">
                      12-hour slow-simmered organic chicken bone broth with pearl grains, high-bioavailability collagen peptide infusion, Ningxia wolfberries, and soft gingered cod flakes.
                    </p>
                  </div>
                  <div className="hidden sm:flex flex-col items-center flex-shrink-0 bg-[#f6f3f5] p-3 rounded-2xl border border-black/[0.03]">
                    <span className="material-symbols-outlined text-[#006e28] text-2xl">vital_signs</span>
                    <span className="text-[11px] font-semibold text-[#1b1b1d] mt-1">GI: 48 (Low)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 bg-[#f6f3f5] rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 border border-black/[0.03]">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="text-[26px] font-bold text-[#1b1b1d]">26<span className="text-sm font-normal">g</span></span>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Bio-Protein</p>
                  </div>
                  <div>
                    <span className="text-[26px] font-bold text-[#1b1b1d]">360</span>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Kcal</p>
                  </div>
                  <div>
                    <span className="text-[26px] font-bold text-[#006e28]">12g</span>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">Collagen</p>
                  </div>
                </div>

                <button
                  onClick={() => onReserveMeal(MEALS_DATA[3])}
                  className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-[#e4e2e4] hover:bg-[#eae7ea] text-[#1b1b1d] text-[14px] font-medium transition-all active:scale-95 shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">bookmark_add</span>
                  <span>Reserve Batch</span>
                </button>
              </div>
            </article>
          )}
        </div>
      </section>

      {/* 'Snap & Calculate' Feature Card (Camera Mockup + Live Bounding Telemetry) */}
      <section className="max-w-[1320px] w-full mx-auto px-4 md:px-10 py-12">
        <div className="bg-white rounded-3xl p-8 lg:p-14 shadow-sm relative overflow-hidden border border-black/[0.04]">
          {/* Background subtle gradient */}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#d7e2ff]/40 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Text & Telemetry Value Props */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d7e2ff] text-[#001b3f] text-[11px] font-semibold self-start uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                Computer Vision Nutrition Engine
              </div>

              <h2 className="text-[32px] md:text-[36px] font-semibold tracking-tight text-[#1b1b1d] leading-tight">
                Snap. Analyze.<br />Hydrate to replenish.
              </h2>
              <p className="text-[17px] text-[#414753] leading-relaxed">
                Point your camera at any meal—whether from our kiosks, a local Singapore hawker stall, or home kitchen. The proprietary PulseNutri neural pipeline instantly parses macro ratios, glycemic indices, and pairs automated kiosk drinks.
              </p>

              {/* Interactive Stat Matrix */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-[#f6f3f5] p-4 rounded-2xl border border-black/[0.03]">
                  <span className="text-[22px] font-bold text-[#0059b5]">0.8s</span>
                  <p className="text-[13px] text-[#414753] mt-0.5">Recognition Speed</p>
                </div>
                <div className="bg-[#f6f3f5] p-4 rounded-2xl border border-black/[0.03]">
                  <span className="text-[22px] font-bold text-[#006e28]">98.4%</span>
                  <p className="text-[13px] text-[#414753] mt-0.5">HPB Database Match</p>
                </div>
                <div className="bg-[#f6f3f5] p-4 rounded-2xl border border-black/[0.03]">
                  <span className="text-[22px] font-bold text-[#ab6200]">+120k</span>
                  <p className="text-[13px] text-[#414753] mt-0.5">Regional Dishes</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  onClick={handleSimulateLensScan}
                  className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-full bg-[#0071e3] hover:bg-[#0059b5] text-white text-[14px] font-medium transition-all active:scale-95 shadow-md cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {lensScanning ? 'hourglass_top' : 'center_focus_strong'}
                  </span>
                  <span>{lensScanning ? 'Scanning Telemetry...' : 'Launch Live Lens in App'}</span>
                </button>
                <button
                  onClick={() => onNavigate('smart-dispensers')}
                  className="inline-flex items-center gap-1 text-[14px] font-medium text-[#0071e3] hover:underline cursor-pointer"
                >
                  <span>See Dispenser Integration</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Interactive Mockup Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md bg-[#eae7ea] rounded-3xl p-3 shadow-xl border border-black/[0.06]">
                {/* Simulated Phone Frame */}
                <div className="relative w-full h-[460px] rounded-2xl overflow-hidden bg-white">
                  <img
                    className="w-full h-full object-cover"
                    alt="Smartphone Camera Viewfinder"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAktWTnJhXK4k4zTeytFVM8AflcKFdVGScBEE6s99s65Ybly-qCMFkaSy562B359neTBRWi9fN6V1cS0aOiGcXtvrmYr5sSVDT3T_F4vH9zMCSxV-lzmzoBXzo6k8u0XNA1AUNOwekRzf4kJZRFOWv65L5k41CPTSR_1LEsUYhYvmmtdGsTkDlH-JQHP8JdllI2TFD2u1OLJwejkkFTXVorzf8ayiFZS2txTubwl_0"
                  />

                  {/* Viewfinder Overlays & Bounding Boxes */}
                  <div className="absolute inset-0 bg-black/25 flex flex-col justify-between p-4 text-white">
                    {/* Top Phone HUD */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[#1b1b1d] text-[12px] font-medium shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#006e28] animate-pulse"></span>
                        <span>AI Recognition: {lensScanning ? 'Processing...' : 'Active'}</span>
                      </div>
                      <span className="material-symbols-outlined text-white/80 text-[20px]">
                        flash_auto
                      </span>
                    </div>

                    {/* Live Bounding Boxes on food */}
                    <div className="relative w-full h-40">
                      {/* Box 1: Protein */}
                      <div className="absolute top-2 left-6 w-36 h-28 border-2 border-[#0071e3] bg-[#0071e3]/20 rounded-lg backdrop-blur-[2px] p-1.5 flex flex-col justify-between shadow-lg animate-pulse">
                        <span className="text-[11px] font-semibold uppercase bg-[#0071e3] text-white px-1.5 py-0.5 rounded self-start">
                          Salmon Belly • 99%
                        </span>
                        <span className="text-[12px] font-bold text-white drop-shadow">
                          34.2g Protein
                        </span>
                      </div>

                      {/* Box 2: Grain */}
                      <div className="absolute bottom-1 right-8 w-32 h-20 border-2 border-[#006e28] bg-[#006e28]/20 rounded-lg backdrop-blur-[2px] p-1.5 flex flex-col justify-between shadow-lg">
                        <span className="text-[11px] font-semibold uppercase bg-[#006e28] text-white px-1.5 py-0.5 rounded self-start">
                          Forbidden Rice
                        </span>
                        <span className="text-[12px] font-bold text-white drop-shadow">
                          41g Carb (Low GI)
                        </span>
                      </div>
                    </div>

                    {/* Bottom Telemetry HUD Card */}
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-3.5 text-[#1b1b1d] shadow-lg space-y-2 border border-white/40">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[#006e28] text-[20px]">
                            check_circle
                          </span>
                          <span className="text-[14px] font-semibold">Post-Squat Recovery Index</span>
                        </div>
                        <span className="text-[18px] text-[#006e28] font-bold">94%</span>
                      </div>
                      <div className="w-full bg-[#f0edef] rounded-full h-1.5 overflow-hidden">
                        <div className="bg-[#006e28] h-1.5 rounded-full" style={{ width: '94%' }}></div>
                      </div>
                      <div className="pt-1 flex items-center justify-between text-[#414753] text-[12px]">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[#0071e3] text-[16px]">
                            water_drop
                          </span>
                          Recom. Hydration: <strong>380ml Electrolyte B</strong>
                        </span>
                        <button
                          onClick={() => onNavigate('smart-dispensers')}
                          className="text-[#0071e3] font-semibold hover:underline"
                        >
                          Dispense @ Tampines →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Kitchens & Cold-Chain Logistics Guarantee */}
      <section className="max-w-[1320px] w-full mx-auto px-4 md:px-10 py-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                Quality Assurance Architecture
              </span>
              <h2 className="text-[32px] md:text-[36px] font-semibold text-[#1b1b1d] mt-1 tracking-tight">
                Singapore Central Cloud Kitchen Infrastructure
              </h2>
            </div>
            <p className="text-[15px] text-[#414753] max-w-md">
              Cooked inside SFA Grade-A sterile production centers with sub-degree temperature monitors for instant field deployment.
            </p>
          </div>

          {/* Bento 3-Grid for Logistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/[0.04] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#f0edef] flex items-center justify-center text-[#0059b5] mb-4">
                  <span className="material-symbols-outlined text-[22px]">verified_user</span>
                </div>
                <h4 className="text-[18px] font-semibold text-[#1b1b1d]">SFA Grade A Hygiene Standards</h4>
                <p className="text-[13px] text-[#414753] mt-2 leading-relaxed">
                  All facilities operate under continuous ISO 22000 and Singapore Food Agency Grade A inspection protocols with microbiological testing on every protein production batch.
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center gap-2 text-[12px] text-[#006e28] font-semibold border-t border-black/[0.04]">
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>Batch Certs Visible via Singpass</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/[0.04] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#f0edef] flex items-center justify-center text-[#0059b5] mb-4">
                  <span className="material-symbols-outlined text-[22px]">ac_unit</span>
                </div>
                <h4 className="text-[18px] font-semibold text-[#1b1b1d]">Sub-4°C Real-Time IoT Cold Chain</h4>
                <p className="text-[13px] text-[#414753] mt-2 leading-relaxed">
                  GPS and temperature telemetry feed directly from electric delivery vans to sports venue kiosks, preventing nutritional degradation or thermal variance.
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center gap-2 text-[12px] text-[#414753] border-t border-black/[0.04]">
                <span className="material-symbols-outlined text-[16px]">sensors</span>
                <span>Live Telemetry at 48 Locations</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/[0.04] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#f0edef] flex items-center justify-center text-[#0059b5] mb-4">
                  <span className="material-symbols-outlined text-[22px]">schedule</span>
                </div>
                <h4 className="text-[18px] font-semibold text-[#1b1b1d]">Same-Day Post-Workout Drop</h4>
                <p className="text-[13px] text-[#414753] mt-2 leading-relaxed">
                  Synchronized replenishment schedules align with ActiveSG court peak hours (06:30–09:00 &amp; 18:00–22:00) guaranteeing peak freshness directly after your session.
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center gap-2 text-[12px] text-[#414753] border-t border-black/[0.04]">
                <span className="material-symbols-outlined text-[16px]">update</span>
                <span>Twice-Daily Replenishment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Voucher Banner for First Downloads */}
      <section className="max-w-[1320px] w-full mx-auto px-4 md:px-10 py-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0059b5] via-[#0071e3] to-[#005cbb] p-8 lg:p-12 text-white shadow-xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-white mb-3">
                <span className="material-symbols-outlined text-[16px]">redeem</span>
                <span>First Experience Complimentary</span>
              </div>
              <h3 className="text-[28px] md:text-[34px] font-semibold tracking-tight text-white leading-tight">
                Claim Your Free Precision Recovery Meal &amp; Electrolyte
              </h3>
              <p className="text-[15px] text-white/90 mt-2 leading-relaxed">
                Download the PulseNutri App, sync your ActiveSG ID or Singpass, and unlock a complimentary SFA Grade-A recovery box at any smart vending kiosk.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              {/* Voucher Ticket Stub */}
              <button
                onClick={handleCopyVoucher}
                className="px-4 py-2.5 rounded-xl bg-white/15 backdrop-blur-md flex flex-col justify-center text-left hover:bg-white/25 transition-all cursor-pointer border border-white/20"
                title="Click to copy voucher code"
              >
                <span className="text-[11px] uppercase tracking-wider text-white/80 font-semibold">
                  {voucherCopied ? 'Copied to Clipboard!' : 'Voucher Code (Click to Copy)'}
                </span>
                <span className="text-[20px] text-white font-mono tracking-wider font-bold">
                  PULSE-FIRST-SG
                </span>
              </button>

              <button
                onClick={onOpenGetStarted}
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white hover:bg-[#f6f3f5] text-[#1b1b1d] text-[14px] font-semibold transition-all active:scale-95 shadow-md cursor-pointer"
              >
                <span>Redeem at Kiosk</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
