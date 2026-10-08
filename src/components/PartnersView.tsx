/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageRoute } from '../types.ts';

interface PartnersViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const PartnersView: React.FC<PartnersViewProps> = ({ onNavigate }) => {
  const [revenueTab, setRevenueTab] = useState<'consumer' | 'kitchen' | 'therapist' | 'venue'>('consumer');
  const [formStep, setFormStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [partnerType, setPartnerType] = useState<string>('gym');
  const [companyName, setCompanyName] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');
  const [capacity, setCapacity] = useState<string>('200 – 600 daily athletes / meals');

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !contactName || !contactEmail) return;
    setFormStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep(3);
  };

  const handleResetForm = () => {
    setFormStep(1);
    setCompanyName('');
    setContactName('');
    setContactEmail('');
    setPostalCode('');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero / Introduction Section */}
      <section className="relative w-full max-w-[1320px] mx-auto px-4 md:px-10 py-10 lg:py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white to-[#f6f3f5] p-6 md:p-14 shadow-sm border border-black/[0.04]">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#d7e2ff]/30 blur-3xl pointer-events-none"></div>
          <div className="absolute right-1/3 -bottom-20 w-80 h-80 rounded-full bg-[#72fe88]/20 blur-3xl pointer-events-none"></div>

          <div className="max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#eae7ea]/60 text-[#414753] text-[11px] font-semibold tracking-wider uppercase mb-4 border border-black/[0.04]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#006e28]"></span>
              Singapore Enterprise &amp; Public Health Framework
            </div>

            <h1 className="text-[36px] md:text-[56px] leading-[1.08] font-semibold tracking-tight text-[#1b1b1d] mb-4">
              Empowering Singapore’s wellness infrastructure.
            </h1>
            <p className="text-[17px] leading-[26px] text-[#414753] max-w-2xl">
              Partner with PulseNutri. Connecting cloud kitchens, nutritionists, sports facilities, and vending hardware manufacturers into a high-yield, sustainable wellness economy.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8 pt-1">
              <a
                href="#partner-apply"
                className="inline-flex items-center justify-center h-11 px-8 rounded-full bg-[#0071e3] text-white text-[14px] font-medium transition-all hover:bg-[#0059b5] active:scale-95 shadow-md"
              >
                <span>Apply for Ecosystem Access</span>
                <span className="material-symbols-outlined ml-1.5 text-base">arrow_forward</span>
              </a>
              <a
                href="#business-model"
                className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-[#f0edef] hover:bg-[#eae7ea] text-[#1b1b1d] text-[14px] font-medium transition-all active:scale-95"
              >
                <span>Explore BCM Cost &amp; Revenue Model</span>
              </a>
            </div>
          </div>

          {/* Quick Island Grid Metric Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12 pt-6 border-t border-black/[0.04]">
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border border-black/[0.04]">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                ActiveSG &amp; Private Sites
              </span>
              <span className="block text-[32px] font-bold text-[#1b1b1d] mt-1 tabular-nums">48+</span>
              <span className="block text-[13px] text-[#414753] mt-0.5">High-footfall sports nodes</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border border-black/[0.04]">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                HPB Compliance
              </span>
              <span className="block text-[32px] font-bold text-[#006e28] mt-1">Grade A/B</span>
              <span className="block text-[13px] text-[#414753] mt-0.5">Nutri-Grade strict formulation</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border border-black/[0.04]">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                Partner Yield
              </span>
              <span className="block text-[32px] font-bold text-[#0059b5] mt-1 tabular-nums">18.4%</span>
              <span className="block text-[13px] text-[#414753] mt-0.5">Avg. gym rev share margin</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border border-black/[0.04]">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                SFA Licensed
              </span>
              <span className="block text-[32px] font-bold text-[#1b1b1d] mt-1 tabular-nums">100%</span>
              <span className="block text-[13px] text-[#414753] mt-0.5">Verified cold-chain kitchens</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Opportunities Bento Grid */}
      <section className="w-full max-w-[1320px] mx-auto px-4 md:px-10 py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
              Bespoke Stakeholder Tiers
            </span>
            <h2 className="text-[32px] md:text-[36px] font-semibold text-[#1b1b1d] tracking-tight mt-1">
              Engineered for symbiotic scale.
            </h2>
          </div>
          <p className="text-[15px] text-[#414753] max-w-md">
            From facility space monetization to clinical consultation throughput, PulseNutri replaces fragmentation with zero-friction automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Gym & Facility Providers */}
          <div className="md:col-span-7 rounded-3xl bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all border border-black/[0.04]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d7e2ff] text-[#001b3f] text-[12px] font-medium">
                  <span className="material-symbols-outlined text-sm">fitness_center</span>
                  Facility Operators &amp; Private Gyms
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#006e28]">
                  Zero Capital Outlay
                </span>
              </div>

              <h3 className="text-[26px] font-semibold text-[#1b1b1d] tracking-tight mb-2">
                Host a Smart Vending Kiosk.
              </h3>
              <p className="text-[15px] text-[#414753] mb-6 leading-relaxed">
                Deploy automated cryo-recovery and micro-nutrient dispensers in your clubhouse or locker pavilion. Earn passive recurring revenue on every shake and electrolyte formulation consumed.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                  <span className="block text-[11px] font-semibold uppercase text-[#717785]">Footprint</span>
                  <span className="text-[18px] font-bold text-[#1b1b1d]">1.2 m²</span>
                  <span className="block text-[12px] text-[#414753]">Standard AC220V plug</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                  <span className="block text-[11px] font-semibold uppercase text-[#717785]">Member Retention</span>
                  <span className="text-[18px] font-bold text-[#006e28]">+27%</span>
                  <span className="block text-[12px] text-[#414753]">Post-workout habit loop</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                  <span className="block text-[11px] font-semibold uppercase text-[#717785]">Net Share</span>
                  <span className="text-[18px] font-bold text-[#0059b5]">15–22%</span>
                  <span className="block text-[12px] text-[#414753]">Automated monthly payout</span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl h-48 bg-[#f0edef]">
              <img
                className="w-full h-full object-cover"
                alt="Automated Sports Nutrition Kiosk"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZiceC0HxLSV56xT0RIe4jyz3-ZtHjWLCPEk5KbLnZDj7-ZHsczE4XzH3eQI_Zdn3L2Aq-gd-MGOWu81DKxK3c6Ba3ZZ8Pxie3Y0O0kTj3xFpugF8ZkXUP-F6Yt5TjBuYdFat30Inx8XODo8iuVQMhJMBiHSB0rjlmeqaMImDC_GaLy6ovqUwP8y3odMHX0S3aLmxgujjXlDUchvUKsrMu7P0g6PgJ-u5LvQFK7hs"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent flex items-end p-4">
                <span className="text-[12px] text-[#1b1b1d] font-medium flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#006e28] text-sm">check_circle</span>
                  Pre-approved for Singapore Sport Facilities Safety Standards
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Nutritionists & Sports Therapists */}
          <div className="md:col-span-5 rounded-3xl bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all border border-black/[0.04]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eae7ea] text-[#1b1b1d] text-[12px] font-medium">
                  <span className="material-symbols-outlined text-sm">vital_signs</span>
                  Clinical Network
                </span>
                <span className="text-[11px] font-semibold uppercase text-[#717785]">Telehealth Sync</span>
              </div>

              <h3 className="text-[26px] font-semibold text-[#1b1b1d] tracking-tight mb-2">
                Meal Verification &amp; Telehealth.
              </h3>
              <p className="text-[15px] text-[#414753] mb-4 leading-relaxed">
                Monetize your sports science credentials. Verify customized HPB macro formulations, prescribe precision electrolyte ratios, and receive direct patient bookings via the PulseNutri user app.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                  <span className="material-symbols-outlined text-[#0059b5] mt-0.5">verified</span>
                  <div>
                    <span className="block text-[14px] font-semibold text-[#1b1b1d]">Digital Prescriptions</span>
                    <span className="text-[13px] text-[#414753]">Lock custom powder blends to athlete QR dispensers.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                  <span className="material-symbols-outlined text-[#0059b5] mt-0.5">payments</span>
                  <div>
                    <span className="block text-[14px] font-semibold text-[#1b1b1d]">30% Telehealth Cut</span>
                    <span className="text-[13px] text-[#414753]">S$85 - S$160 avg. consultation yield.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#f0edef] p-4 border border-black/[0.03]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006e28]"></span>
                  <span className="text-[12px] text-[#1b1b1d] font-semibold">Active Demand Queue</span>
                </div>
                <span className="text-[11px] font-semibold uppercase text-[#717785]">Live Telemetry</span>
              </div>
              <p className="text-[13px] text-[#414753] mt-1">
                1,420 athletes currently logged awaiting weekly macro adjustments across Queenstown &amp; Bishan hubs.
              </p>
            </div>
          </div>

          {/* Card 3: Cloud Kitchens & Central Kitchens */}
          <div className="md:col-span-6 rounded-3xl bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all border border-black/[0.04]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eae7ea] text-[#1b1b1d] text-[12px] font-medium">
                  <span className="material-symbols-outlined text-sm">soup_kitchen</span>
                  Culinary Operators
                </span>
                <span className="text-[11px] font-semibold uppercase text-[#717785]">SFA Licensed</span>
              </div>

              <h3 className="text-[26px] font-semibold text-[#1b1b1d] tracking-tight mb-2">
                High-Volume Batch Preparation.
              </h3>
              <p className="text-[15px] text-[#414753] mb-4 leading-relaxed">
                Eliminate unpredictable dining rush hours. Receive automated scheduled production orders for blast-chilled recovery meal boxes with zero delivery commission burn.
              </p>

              <div className="rounded-2xl bg-[#f6f3f5] p-4 space-y-3 mb-4 border border-black/[0.03]">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[13px] text-[#414753]">Guaranteed Weekly Volume</span>
                  <span className="text-[14px] text-[#1b1b1d] font-semibold">800–2,500 units</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[13px] text-[#414753]">Cold-Chain Distribution</span>
                  <span className="text-[14px] text-[#006e28] font-semibold">Handled by PulseNutri ($3,000 fleet spec)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[13px] text-[#414753]">Ingredient Yield Rebates</span>
                  <span className="text-[14px] text-[#1b1b1d] font-semibold">Tier 1 SG Wholesale Pricing</span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl h-40 bg-[#f0edef]">
              <img
                className="w-full h-full object-cover"
                alt="Commercial Cloud Kitchen"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI3vB87H8fjL72b-nE3r3rhw3Tk4lzFWJt_1Onzn5xRJNJmrRDl-YmyvjwMwj8QBUA2uQJtN033KQYT6YSuoqL7vvAkq-Jbygf9nK5RGHUQpAOtf4y3n4FF-IOpA5nh5E-ur504pyDPEF8gUlvk9_RmXOsNkFu9avJ5UdnXciJrobCsCIKhGANvaP-Lxe4WBxdApf823qh3x4fIFqdQ7cXwagvXiJ5YjYNCyKrnBs"
              />
            </div>
          </div>

          {/* Card 4: Government & Grants */}
          <div className="md:col-span-6 rounded-3xl bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all border border-black/[0.04]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#72fe88] text-[#002107] text-[12px] font-semibold">
                  <span className="material-symbols-outlined text-sm">account_balance</span>
                  Institutional &amp; Grants
                </span>
                <span className="text-[11px] font-semibold uppercase text-[#006e28]">
                  Healthier SG Aligned
                </span>
              </div>

              <h3 className="text-[26px] font-semibold text-[#1b1b1d] tracking-tight mb-2">
                HPB &amp; SportSG Healthier Nation Alignment.
              </h3>
              <p className="text-[15px] text-[#414753] mb-4 leading-relaxed">
                PulseNutri integrates directly into Singapore’s national health tech priorities. Hardware deployments qualify for innovation transformation roadmaps and corporate wellness matching grants.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3.5 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                  <span className="block text-[11px] font-semibold uppercase text-[#717785]">
                    National Steps Challenge
                  </span>
                  <span className="text-[18px] font-bold text-[#1b1b1d]">API Linked</span>
                  <span className="block text-[12px] text-[#414753]">Step-to-protein credit burns</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                  <span className="block text-[11px] font-semibold uppercase text-[#717785]">
                    Enterprise SG
                  </span>
                  <span className="text-[18px] font-bold text-[#0059b5]">Grant Compatible</span>
                  <span className="block text-[12px] text-[#414753]">Productivity Solutions Grant</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#f6f3f5] flex items-center justify-between border border-black/[0.03]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#0059b5] text-2xl">verified_user</span>
                <div>
                  <span className="block text-[14px] font-semibold text-[#1b1b1d]">
                    Singpass &amp; ActiveSG Data Vault
                  </span>
                  <span className="text-[12px] text-[#414753]">
                    Compliant with Singapore Personal Data Protection Act (PDPA).
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#717785]">lock</span>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Financial Architecture & Revenue Overview */}
      <section className="w-full max-w-[1320px] mx-auto px-4 md:px-10 py-10" id="business-model">
        <div className="p-6 md:p-12 rounded-3xl bg-white shadow-sm border border-black/[0.04]">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
              Financial Architecture
            </span>
            <h2 className="text-[32px] md:text-[36px] font-semibold text-[#1b1b1d] tracking-tight mt-1">
              A four-pillar circular revenue model.
            </h2>
            <p className="text-[15px] text-[#414753] mt-2">
              Designed after the Business Model Canvas (BCM) framework. Predictable unit economics that create long-term incentives for physical hubs, food operators, and health specialists.
            </p>
          </div>

          {/* Segmented Interactive Tab Control */}
          <div className="inline-flex p-1.5 rounded-full bg-[#f0edef] mb-8 max-w-full overflow-x-auto no-scrollbar border border-black/[0.04]">
            <button
              onClick={() => setRevenueTab('consumer')}
              className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                revenueTab === 'consumer'
                  ? 'bg-white text-[#1b1b1d] shadow-sm font-semibold'
                  : 'text-[#414753] hover:text-[#1b1b1d]'
              }`}
            >
              Consumer Subscriptions
            </button>
            <button
              onClick={() => setRevenueTab('kitchen')}
              className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                revenueTab === 'kitchen'
                  ? 'bg-white text-[#1b1b1d] shadow-sm font-semibold'
                  : 'text-[#414753] hover:text-[#1b1b1d]'
              }`}
            >
              Cloud Kitchen Commissions
            </button>
            <button
              onClick={() => setRevenueTab('therapist')}
              className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                revenueTab === 'therapist'
                  ? 'bg-white text-[#1b1b1d] shadow-sm font-semibold'
                  : 'text-[#414753] hover:text-[#1b1b1d]'
              }`}
            >
              Therapist &amp; Nutritionist Cut
            </button>
            <button
              onClick={() => setRevenueTab('venue')}
              className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                revenueTab === 'venue'
                  ? 'bg-white text-[#1b1b1d] shadow-sm font-semibold'
                  : 'text-[#414753] hover:text-[#1b1b1d]'
              }`}
            >
              Venue Booking Fees
            </button>
          </div>

          {/* Tab 1: Consumer Subscriptions */}
          {revenueTab === 'consumer' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d7e2ff] text-[#001b3f] text-[11px] font-semibold uppercase tracking-wider">
                  Recurring Core Tier
                </div>
                <h3 className="text-[26px] font-semibold text-[#1b1b1d] tracking-tight leading-snug">
                  High-LTV Athletic Subscriptions &amp; On-Demand Vending.
                </h3>
                <p className="text-[15px] text-[#414753] leading-relaxed">
                  PulseNutri monetizes elite athletes, corporate fitness accounts, and casual ActiveSG participants through monthly meal-prep auto-replenishment alongside instant QR tap dispenser charges.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                    <span className="text-[13px] text-[#1b1b1d] font-medium">Corporate Athletic Tier ($1,000/mo)</span>
                    <span className="text-[14px] text-[#0059b5] font-semibold">Daily Meal Box + Unlimited Electrolytes</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                    <span className="text-[13px] text-[#1b1b1d] font-medium">Casual Gym Pass (Pay-per-shake)</span>
                    <span className="text-[14px] text-[#1b1b1d] font-semibold">S$5.80 – S$7.50 / tap</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                    <span className="text-[13px] text-[#1b1b1d] font-medium">Target Gross Margin</span>
                    <span className="text-[14px] text-[#006e28] font-semibold">61.2%</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 rounded-2xl bg-[#f6f3f5] border border-black/[0.04]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                  Subscription Cohort Spread
                </span>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex justify-between text-[12px] mb-1 text-[#414753]">
                      <span>Corporate Wellness Accounts (S$1,000/mo)</span>
                      <span className="font-semibold text-[#1b1b1d]">42%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-[#eae7ea] overflow-hidden">
                      <div className="h-full bg-[#0059b5] rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[12px] mb-1 text-[#414753]">
                      <span>Active Athlete Monthly ($280/mo)</span>
                      <span className="font-semibold text-[#1b1b1d]">36%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-[#eae7ea] overflow-hidden">
                      <div className="h-full bg-[#0071e3] rounded-full" style={{ width: '36%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[12px] mb-1 text-[#414753]">
                      <span>Smart Kiosk Micropayments</span>
                      <span className="font-semibold text-[#1b1b1d]">22%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-[#eae7ea] overflow-hidden">
                      <div className="h-full bg-[#006e28] rounded-full" style={{ width: '22%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-[#eae7ea] flex items-center justify-between">
                  <span className="text-[13px] text-[#414753]">Average Annualized Contract Value (ACV)</span>
                  <span className="text-[26px] font-bold text-[#1b1b1d]">S$3,480</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Cloud Kitchen */}
          {revenueTab === 'kitchen' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eae7ea] text-[#1b1b1d] text-[11px] font-semibold uppercase tracking-wider">
                  Culinary Commission
                </div>
                <h3 className="text-[26px] font-semibold text-[#1b1b1d] tracking-tight leading-snug">
                  High-Volume Production Without Marketplace Squeeze.
                </h3>
                <p className="text-[15px] text-[#414753] leading-relaxed">
                  Traditional food delivery platforms strip 30–35% of merchant revenues. PulseNutri pays central kitchens on a guaranteed wholesale batch rate with a transparent 10% platform facilitation fee.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                    <span className="text-[13px] text-[#1b1b1d] font-medium">Standard Delivery Apps Cut</span>
                    <span className="text-[14px] text-[#ba1a1a] font-semibold">30% – 35%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                    <span className="text-[13px] text-[#1b1b1d] font-medium">PulseNutri Protocol Fee</span>
                    <span className="text-[14px] text-[#006e28] font-semibold">Only 10% Flat</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                    <span className="text-[13px] text-[#1b1b1d] font-medium">Batch Predictability</span>
                    <span className="text-[14px] text-[#0059b5] font-semibold">7-Day Forward Schedules</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 rounded-2xl bg-[#f6f3f5] border border-black/[0.04] space-y-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                  Central Kitchen Unit Economics
                </span>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white border border-black/[0.03]">
                    <div className="flex justify-between items-center">
                      <span className="text-[14px] font-semibold text-[#1b1b1d]">Meal Preparation Retainer</span>
                      <span className="text-[22px] font-bold text-[#1b1b1d]">S$8.20</span>
                    </div>
                    <span className="text-[13px] text-[#414753]">Paid to kitchen per verified HPB meal container</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-black/[0.03]">
                    <div className="flex justify-between items-center">
                      <span className="text-[14px] font-semibold text-[#1b1b1d]">PulseNutri Logistics Absorption</span>
                      <span className="text-[22px] font-bold text-[#006e28]">S$0.00</span>
                    </div>
                    <span className="text-[13px] text-[#414753]">Zero driver booking costs billed to kitchen</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Therapist & Nutritionist */}
          {revenueTab === 'therapist' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eae7ea] text-[#1b1b1d] text-[11px] font-semibold uppercase tracking-wider">
                  Clinical Marketplace
                </div>
                <h3 className="text-[26px] font-semibold text-[#1b1b1d] tracking-tight leading-snug">
                  Seamless Clinical Telehealth &amp; Prescription Cuts.
                </h3>
                <p className="text-[15px] text-[#414753] leading-relaxed">
                  Practitioners take home 70% of consultation bookings directly, plus an ongoing 4% formulation recurring dividend whenever patients order certified post-recovery shakes linked to their plan.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                    <span className="text-[13px] text-[#1b1b1d] font-medium">Nutritionist Consult Share</span>
                    <span className="text-[14px] text-[#006e28] font-semibold">70% Direct Payout</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                    <span className="text-[13px] text-[#1b1b1d] font-medium">Smart Dispenser Royalty</span>
                    <span className="text-[14px] text-[#0059b5] font-semibold">4% Ongoing Residual</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 rounded-2xl bg-[#f6f3f5] border border-black/[0.04]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                  Simulated Monthly Therapist Revenue
                </span>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[13px] text-[#414753]">25 Telehealth Consultations (@ S$110 avg)</span>
                    <span className="text-[18px] font-semibold text-[#1b1b1d]">S$1,925</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[13px] text-[#414753]">Recurring Athlete Powder Subscriptions</span>
                    <span className="text-[18px] font-semibold text-[#1b1b1d]">S$640</span>
                  </div>
                  <div className="pt-3 border-t border-[#eae7ea] flex justify-between items-baseline">
                    <span className="text-[14px] font-semibold text-[#1b1b1d]">Total Estimated Yield</span>
                    <span className="text-[26px] font-bold text-[#0059b5]">S$2,565/mo</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Venue Booking Fees */}
          {revenueTab === 'venue' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eae7ea] text-[#1b1b1d] text-[11px] font-semibold uppercase tracking-wider">
                  Facility Infrastructure
                </div>
                <h3 className="text-[26px] font-semibold text-[#1b1b1d] tracking-tight leading-snug">
                  Sports Court Booking Convenience &amp; Fuel Bundles.
                </h3>
                <p className="text-[15px] text-[#414753] leading-relaxed">
                  By bundling ActiveSG badminton, padel, or futsal bookings with pre-chilled recovery beverages, venues unlock higher yield per square meter without adding administrative staff.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                    <span className="text-[13px] text-[#1b1b1d] font-medium">Slot Convenience Fee</span>
                    <span className="text-[14px] text-[#1b1b1d] font-semibold">S$1.20 / booking</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f6f3f5] border border-black/[0.03]">
                    <span className="text-[13px] text-[#1b1b1d] font-medium">Automatic Hydration Add-on</span>
                    <span className="text-[14px] text-[#006e28] font-semibold">38% Opt-in rate</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 rounded-2xl bg-[#f6f3f5] border border-black/[0.04]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                  Court Partner Yield Lift
                </span>
                <div className="mt-4 p-5 rounded-xl bg-white border border-black/[0.03]">
                  <span className="block text-[32px] font-bold text-[#006e28]">+S$1,850</span>
                  <span className="block text-[13px] text-[#414753] mt-1 leading-relaxed">
                    Average incremental revenue per court per month with zero overhead or equipment leases.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Partner Onboarding Multi-Step Inquiry Form */}
      <section className="w-full max-w-[1320px] mx-auto px-4 md:px-10 py-10 mb-14" id="partner-apply">
        <div className="rounded-3xl bg-gradient-to-tr from-white via-[#f6f3f5] to-white p-6 md:p-14 shadow-sm border border-black/[0.04]">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
              Application Pipeline
            </span>
            <h2 className="text-[32px] md:text-[36px] font-semibold text-[#1b1b1d] tracking-tight mt-1">
              Join the Singapore Pilot Grid.
            </h2>
            <p className="text-[15px] text-[#414753] mt-2">
              Express interest to deploy smart dispensers, integrate central kitchen capacity, or provide registered nutritionist consultations. Applications reviewed within 48 business hours.
            </p>

            {/* Form Step Indicator */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                <span
                  className={`w-7 h-7 rounded-full text-[12px] font-semibold flex items-center justify-center ${
                    formStep >= 1 ? 'bg-[#0071e3] text-white' : 'bg-[#eae7ea] text-[#414753]'
                  }`}
                >
                  1
                </span>
                <span className="text-[12px] text-[#1b1b1d] font-medium">Organization</span>
              </div>
              <div className="w-8 h-0.5 bg-[#e4e2e4]"></div>
              <div className="flex items-center gap-2">
                <span
                  className={`w-7 h-7 rounded-full text-[12px] font-semibold flex items-center justify-center ${
                    formStep >= 2 ? 'bg-[#0071e3] text-white' : 'bg-[#eae7ea] text-[#414753]'
                  }`}
                >
                  2
                </span>
                <span className="text-[12px] text-[#717785] font-medium">Requirements</span>
              </div>
              <div className="w-8 h-0.5 bg-[#e4e2e4]"></div>
              <div className="flex items-center gap-2">
                <span
                  className={`w-7 h-7 rounded-full text-[12px] font-semibold flex items-center justify-center ${
                    formStep === 3 ? 'bg-[#006e28] text-white' : 'bg-[#eae7ea] text-[#414753]'
                  }`}
                >
                  3
                </span>
                <span className="text-[12px] text-[#717785] font-medium">Confirmation</span>
              </div>
            </div>
          </div>

          <div className="max-w-xl mx-auto bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-black/[0.04]">
            {/* Step 1 */}
            {formStep === 1 && (
              <form onSubmit={handleStep1Submit} className="space-y-4">
                <div>
                  <label className="block text-[12px] font-medium text-[#414753] mb-2">
                    Partner Classification
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { val: 'gym', label: 'Gym / Sports Venue' },
                      { val: 'kitchen', label: 'Central / Cloud Kitchen' },
                      { val: 'nutritionist', label: 'Nutritionist / Clinician' },
                      { val: 'hardware', label: 'Hardware / Technology' },
                    ].map((opt) => (
                      <label
                        key={opt.val}
                        className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer transition-colors border ${
                          partnerType === opt.val
                            ? 'bg-[#d7e2ff]/30 border-[#0071e3]'
                            : 'bg-[#f6f3f5] hover:bg-[#f0edef] border-transparent'
                        }`}
                      >
                        <input
                          type="radio"
                          name="partner_type"
                          value={opt.val}
                          checked={partnerType === opt.val}
                          onChange={(e) => setPartnerType(e.target.value)}
                          className="text-[#0071e3] focus:ring-0"
                        />
                        <span className="text-[13px] font-medium text-[#1b1b1d]">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-medium text-[#414753] mb-1.5">
                    Registered Entity / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Kinetic Recovery Singapore Pte Ltd"
                    className="w-full h-11 px-4 rounded-xl bg-[#f6f3f5] text-[#1b1b1d] placeholder:text-[#717785] text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 border border-transparent focus:border-[#0071e3]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-medium text-[#414753] mb-1.5">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full h-11 px-4 rounded-xl bg-[#f6f3f5] text-[#1b1b1d] placeholder:text-[#717785] text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 border border-transparent focus:border-[#0071e3]"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[#414753] mb-1.5">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="partner@domain.sg"
                      className="w-full h-11 px-4 rounded-xl bg-[#f6f3f5] text-[#1b1b1d] placeholder:text-[#717785] text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 border border-transparent focus:border-[#0071e3]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-11 mt-4 rounded-full bg-[#0071e3] text-white text-[14px] font-medium hover:bg-[#0059b5] transition-all active:scale-[0.98] cursor-pointer shadow-sm"
                >
                  Continue to Facility Details
                </button>
              </form>
            )}

            {/* Step 2 */}
            {formStep === 2 && (
              <form onSubmit={handleStep2Submit} className="space-y-4">
                <div>
                  <label className="block text-[12px] font-medium text-[#414753] mb-1.5">
                    Singapore Location Cluster / Postal Code
                  </label>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="e.g. Jurong East, Kallang, Downtown (Postal 138667)"
                    className="w-full h-11 px-4 rounded-xl bg-[#f6f3f5] text-[#1b1b1d] placeholder:text-[#717785] text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 border border-transparent focus:border-[#0071e3]"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-medium text-[#414753] mb-1.5">
                    Estimated Daily Footfall or Batch Capacity
                  </label>
                  <select
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    className="w-full h-11 px-4 rounded-xl bg-[#f6f3f5] text-[#1b1b1d] text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 border border-transparent focus:border-[#0071e3]"
                  >
                    <option>Under 200 daily athletes / meals</option>
                    <option>200 – 600 daily athletes / meals</option>
                    <option>600 – 1,500 daily athletes / meals</option>
                    <option>1,500+ large sports complex / industrial fleet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-medium text-[#414753] mb-2">
                    Compliance &amp; Accreditations
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[13px] text-[#1b1b1d]">
                      <input type="checkbox" defaultChecked className="rounded text-[#0071e3] focus:ring-0" />
                      <span>Singapore Food Agency (SFA) Grade A/B Kitchen License</span>
                    </label>
                    <label className="flex items-center gap-2 text-[13px] text-[#1b1b1d]">
                      <input type="checkbox" defaultChecked className="rounded text-[#0071e3] focus:ring-0" />
                      <span>Singapore Nutrition and Dietetics Association (SNDA) Registered</span>
                    </label>
                    <label className="flex items-center gap-2 text-[13px] text-[#1b1b1d]">
                      <input type="checkbox" defaultChecked className="rounded text-[#0071e3] focus:ring-0" />
                      <span>ActiveSG Registered Merchant or Venue Operator</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="w-1/3 h-11 rounded-full bg-[#f0edef] text-[#1b1b1d] text-[14px] font-medium hover:bg-[#eae7ea] transition-all cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 h-11 rounded-full bg-[#0071e3] text-white text-[14px] font-medium hover:bg-[#0059b5] transition-all active:scale-[0.98] cursor-pointer shadow-sm"
                  >
                    Submit Formal Application
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Success Confirmation */}
            {formStep === 3 && (
              <div className="text-center py-8 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#72fe88] text-[#002107] flex items-center justify-center mx-auto shadow-sm">
                  <span className="material-symbols-outlined text-3xl">verified</span>
                </div>
                <h3 className="text-[24px] font-semibold text-[#1b1b1d] tracking-tight">
                  Application Transmitted.
                </h3>
                <p className="text-[14px] text-[#414753] max-w-sm mx-auto leading-relaxed">
                  Thank you for anchoring Singapore's automated wellness economy. Our ecosystem partnership director will contact you at <strong className="text-[#1b1b1d]">{contactEmail || 'your email'}</strong> within 48 business hours with site survey credentials.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="px-6 h-10 rounded-full bg-[#f0edef] text-[#1b1b1d] text-[14px] font-medium hover:bg-[#eae7ea] transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
