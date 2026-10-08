/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageRoute, VenueItem, MealItem } from '../types.ts';
import { VENUES_DATA, MEALS_DATA } from '../data/mockData.ts';

interface SportsVenuesViewProps {
  onNavigate: (route: PageRoute) => void;
  onReserveMeal: (meal: MealItem) => void;
  onOpenLocker: (kioskName?: string) => void;
}

export const SportsVenuesView: React.FC<SportsVenuesViewProps> = ({
  onNavigate,
  onReserveMeal,
  onOpenLocker,
}) => {
  const [selectedSport, setSelectedSport] = useState<string>('Badminton');
  const [botArmed, setBotArmed] = useState<boolean>(false);
  const [armingLoading, setArmingLoading] = useState<boolean>(false);
  const [selectedVenueId, setSelectedVenueId] = useState<string>('venue-clementi');
  const [venueFilter, setVenueFilter] = useState<'all' | 'stadiums' | 'indoor' | 'dispensers'>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const selectedVenue = VENUES_DATA.find((v) => v.id === selectedVenueId) || VENUES_DATA[0];

  const sportsList = ['Badminton', 'Tennis', 'Pickleball', 'Squash', 'Futsal'];

  const handleArmBot = () => {
    if (botArmed) {
      setBotArmed(false);
      setToastMessage('Bot disarmed.');
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    setArmingLoading(true);
    setTimeout(() => {
      setArmingLoading(false);
      setBotArmed(true);
      setToastMessage('Autonomous Bot armed for 7:00:00 AM ActiveSG drop!');
      setTimeout(() => setToastMessage(null), 4000);
    }, 800);
  };

  const handlePreorderItem = (itemName: string) => {
    const meal = MEALS_DATA.find((m) => m.name.toLowerCase().includes(itemName.toLowerCase().slice(0, 8))) || MEALS_DATA[0];
    onReserveMeal(meal);
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1b1b1d] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white/10 animate-bounce">
          <span className="material-symbols-outlined text-[#72fe88] text-[20px]">check_circle</span>
          <span className="text-[13px] font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Subtle Ambient Glow Canvas */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[540px] h-[540px] bg-[#d7e2ff]/30 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-96 -left-32 w-[460px] h-[460px] bg-[#72fe88]/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1320px] mx-auto px-4 md:px-10 pt-10 pb-16 flex flex-col gap-14">
          {/* Top Hero Section: Headline & Value Proposition */}
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0edef] w-fit shadow-sm border border-black/[0.04]">
                <span className="w-2 h-2 rounded-full bg-[#006e28] animate-pulse"></span>
                <span className="text-[11px] font-semibold text-[#414753] uppercase tracking-wider">
                  ActiveSG API 2.4 • OneMap Geospatial Engine
                </span>
              </div>
              <h1 className="text-[36px] md:text-[56px] leading-[1.08] text-[#1b1b1d] font-semibold tracking-tight">
                One app for every court, pitch, and gym in Singapore.
              </h1>
              <p className="text-[17px] leading-[24px] text-[#414753] max-w-2xl pt-1">
                Integrated with OneMap and ActiveSG venues. Pre-set your court preferences and let auto-booking bots secure prime slots before they run out.
              </p>
            </div>

            {/* Telemetry Pill / Quick Metric */}
            <div className="flex flex-col gap-1 bg-[#f6f3f5] p-4 rounded-2xl shadow-sm border border-black/[0.04] flex-shrink-0 min-w-[240px]">
              <div className="flex items-center justify-between text-[#414753]">
                <span className="text-[12px]">Peak Slot Win Rate</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#006e28] bg-[#6ffb85]/40 px-2 py-0.5 rounded-full">
                  Live 99.4%
                </span>
              </div>
              <div className="flex items-baseline gap-1 pt-1">
                <span className="text-[32px] font-bold text-[#1b1b1d] tabular-nums">0.14s</span>
                <span className="text-[13px] text-[#717785]">Singpass latency</span>
              </div>
              <span className="text-[12px] text-[#414753] pt-1">Targeting next 7:00 AM ActiveSG drop</span>
            </div>
          </section>

          {/* Section 2: Smart Auto-Booking Bot Bento Deck */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
            {/* Interactive Bot Configuration Console (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-md flex flex-col gap-6 border border-black/[0.04]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0071e3] text-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[22px]">precision_manufacturing</span>
                  </div>
                  <div>
                    <h2 className="text-[20px] font-semibold text-[#1b1b1d]">
                      Auto-Booking Autonomous Bot
                    </h2>
                    <p className="text-[13px] text-[#414753]">
                      Synchronized with ActiveSG release scheduler at sub-millisecond cadence
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#eae7ea] text-[#1b1b1d] text-[12px] font-medium self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-[#006e28]"></span>
                  <span>Singpass Token Valid</span>
                </div>
              </div>

              {/* Controls Grid */}
              <div className="flex flex-col gap-4 pt-1">
                {/* Sport Selector */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                    Target Sport Discipline
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                    {sportsList.map((sport) => {
                      const isActive = selectedSport === sport;
                      return (
                        <button
                          key={sport}
                          onClick={() => setSelectedSport(sport)}
                          className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-[14px] font-medium transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#0059b5] text-white shadow-sm font-semibold'
                              : 'bg-[#f0edef] hover:bg-[#eae7ea] text-[#1b1b1d]'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[16px]">sports_tennis</span>
                          <span>{sport}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Venue Selectors & Multi-cluster Fallback */}
                <div className="flex flex-col gap-2 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                      Venue Priority Ladder (Target Sport: {selectedSport})
                    </span>
                    <span
                      onClick={() => setSelectedVenueId('venue-clementi')}
                      className="text-[12px] text-[#0071e3] cursor-pointer hover:underline"
                    >
                      Reset Ladder
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {VENUES_DATA.map((venue, idx) => {
                      const isSelected = selectedVenueId === venue.id;
                      return (
                        <div
                          key={venue.id}
                          onClick={() => setSelectedVenueId(venue.id)}
                          className={`flex items-center justify-between p-4 rounded-2xl transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-[#d7e2ff]/30 border-[#0071e3] shadow-sm'
                              : 'bg-[#f6f3f5] hover:bg-[#f0edef] border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold ${
                                isSelected
                                  ? 'bg-[#0071e3] text-white'
                                  : 'bg-[#eae7ea] text-[#1b1b1d]'
                              }`}
                            >
                              {idx + 1}
                            </span>
                            <div>
                              <p className="text-[14px] font-semibold text-[#1b1b1d]">{venue.name}</p>
                              <p className="text-[12px] text-[#717785]">
                                {venue.sports.slice(0, 2).join(' • ')} • {venue.mrt}
                              </p>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-[#717785]">drag_handle</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Time Window & Auto Retries */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                      Time Target
                    </span>
                    <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-[#f6f3f5] border border-black/[0.03]">
                      <span className="material-symbols-outlined text-[#414753]">schedule</span>
                      <div className="flex flex-col">
                        <span className="text-[14px] font-medium text-[#1b1b1d]">
                          Weekdays 7:00 PM – 9:00 PM
                        </span>
                        <span className="text-[12px] text-[#717785]">Prime peak quota filter</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                      Booking Engine Profile
                    </span>
                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#f6f3f5] border border-black/[0.03]">
                      <div className="flex flex-col">
                        <span className="text-[14px] font-medium text-[#1b1b1d]">MyActiveSG Linked</span>
                        <span className="text-[12px] text-[#006e28] font-medium">Auto-debit SGD $9.70 / slot</span>
                      </div>
                      <span className="material-symbols-outlined text-[#006e28]">verified_user</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA & Fee Transparency */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 bg-[#f6f3f5] p-4 rounded-2xl border border-black/[0.03]">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                      Transaction Fee • BMC Bot Commission
                    </span>
                  </div>
                  <p className="text-[13px] text-[#1b1b1d]">
                    <strong className="font-semibold text-[#1b1b1d]">S$1.80</strong> micro-commission charged{' '}
                    <span className="italic text-[#414753]">only upon successful slot allocation</span>.
                  </p>
                </div>

                <button
                  onClick={handleArmBot}
                  disabled={armingLoading}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-medium transition-all shadow-md active:scale-95 whitespace-nowrap cursor-pointer ${
                    botArmed
                      ? 'bg-[#006e28] text-white hover:bg-[#00531c]'
                      : 'bg-[#0059b5] hover:bg-[#00458f] text-white'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[18px] ${armingLoading ? 'animate-spin' : ''}`}>
                    {armingLoading ? 'refresh' : botArmed ? 'done_all' : 'bolt'}
                  </span>
                  <span>
                    {armingLoading
                      ? 'Calibrating Clock...'
                      : botArmed
                      ? 'Armed & Ready for 7:00 AM'
                      : 'Arm Bot for Tomorrow 7 AM'}
                  </span>
                </button>
              </div>
            </div>

            {/* Bot Live Telemetry Status & Chart (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md flex flex-col justify-between flex-1 border border-black/[0.04]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#6ffb85]/30 text-[#00732a] text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#006e28] animate-ping"></span>
                      {botArmed ? 'Autonomous Mode Engaged' : 'Standby Mode Ready'}
                    </span>
                    <span className="text-[12px] text-[#717785]">Queue ID: #SG-8842</span>
                  </div>

                  <div>
                    <h3 className="text-[20px] font-semibold text-[#1b1b1d]">
                      {botArmed ? 'Bot Armed • Awaiting 7:00:00 AM' : 'Bot Armed & Pre-Calibrated'}
                    </h3>
                    <p className="text-[13px] text-[#414753] pt-1 leading-relaxed">
                      Scheduler calibrated to UTC+8 Singapore time server. Instant SMS and In-App notification dispatch configured via Singpass Mobile Push.
                    </p>
                  </div>

                  {/* Step Visualizer */}
                  <div className="flex flex-col gap-2.5 p-4 rounded-2xl bg-[#f6f3f5] border border-black/[0.03]">
                    <div className="flex items-center justify-between text-[#1b1b1d]">
                      <span className="text-[13px] flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#006e28] text-[18px]">check_circle</span>
                        Singpass Biometric Token Cached
                      </span>
                      <span className="text-[12px] text-[#717785]">Ready</span>
                    </div>
                    <div className="flex items-center justify-between text-[#1b1b1d]">
                      <span className="text-[13px] flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#006e28] text-[18px]">check_circle</span>
                        MyActiveSG+ Wallet Balance Linked
                      </span>
                      <span className="text-[12px] text-[#006e28] font-semibold">S$120.00</span>
                    </div>
                    <div className="flex items-center justify-between text-[#1b1b1d]">
                      <span className="text-[13px] flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#0071e3] text-[18px]">sync</span>
                        Smart Recovery Kiosk Voucher Pre-loaded
                      </span>
                      <span className="text-[12px] text-[#0071e3] font-semibold">Dispenser #04</span>
                    </div>
                  </div>
                </div>

                {/* Micro-Chart */}
                <div className="pt-4">
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                      Court Availability vs. Bot Response Time
                    </span>
                    <span className="text-[12px] text-[#717785]">Past 7 Days Avg</span>
                  </div>
                  <svg className="w-full h-16 stroke-current text-[#0059b5] overflow-visible" fill="none" viewBox="0 0 340 70">
                    <path
                      d="M 0 55 Q 30 50 60 45 T 120 25 T 180 30 T 240 12 T 300 8 L 340 5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M 0 55 Q 30 50 60 45 T 120 25 T 180 30 T 240 12 T 300 8 L 340 5 L 340 70 L 0 70 Z"
                      fill="currentColor"
                      fillOpacity="0.08"
                    />
                    <circle className="fill-[#0059b5]" cx="340" cy="5" r="4" />
                  </svg>
                  <div className="flex justify-between text-[#717785] text-[11px] font-semibold uppercase tracking-wider pt-1">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                    <span>Today (0.09s)</span>
                  </div>
                </div>
              </div>

              {/* Anti-Hoarding Compliance */}
              <div className="p-4 rounded-2xl bg-[#f0edef] flex items-center gap-3 border border-black/[0.04]">
                <span className="material-symbols-outlined text-[#414753] text-[28px]">shield</span>
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold text-[#1b1b1d]">
                    HPB &amp; ActiveSG Anti-Scalping Compliant
                  </span>
                  <span className="text-[12px] text-[#414753]">
                    Direct individual account binding. Zero reselling, automated forfeiture refund.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Interactive OneMap Venue & Smart Vending Kiosk Locator */}
          <section className="flex flex-col gap-4 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5 text-[#0059b5] pb-1">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider">
                    OneMap Singapore GIS Integration
                  </span>
                </div>
                <h2 className="text-[28px] md:text-[36px] font-bold text-[#1b1b1d]">
                  Find Sports Venues &amp; PulseNutri Dispensers
                </h2>
              </div>

              <div className="flex items-center gap-1.5 bg-[#f6f3f5] p-1.5 rounded-full overflow-x-auto no-scrollbar border border-black/[0.04]">
                <button
                  onClick={() => setVenueFilter('all')}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                    venueFilter === 'all'
                      ? 'bg-white text-[#1b1b1d] shadow-sm font-semibold'
                      : 'text-[#414753] hover:text-[#1b1b1d]'
                  }`}
                >
                  All Venues (48)
                </button>
                <button
                  onClick={() => setVenueFilter('stadiums')}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                    venueFilter === 'stadiums'
                      ? 'bg-white text-[#1b1b1d] shadow-sm font-semibold'
                      : 'text-[#414753] hover:text-[#1b1b1d]'
                  }`}
                >
                  ActiveSG Stadiums
                </button>
                <button
                  onClick={() => setVenueFilter('indoor')}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                    venueFilter === 'indoor'
                      ? 'bg-white text-[#1b1b1d] shadow-sm font-semibold'
                      : 'text-[#414753] hover:text-[#1b1b1d]'
                  }`}
                >
                  Indoor Halls
                </button>
                <button
                  onClick={() => setVenueFilter('dispensers')}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                    venueFilter === 'dispensers'
                      ? 'bg-white text-[#1b1b1d] shadow-sm font-semibold'
                      : 'text-[#414753] hover:text-[#1b1b1d]'
                  }`}
                >
                  Smart Dispensers Only
                </button>
              </div>
            </div>

            {/* Map Canvas & Venue Detail Drawer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white p-4 md:p-6 rounded-3xl shadow-md border border-black/[0.04]">
              {/* Map Canvas (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col gap-2 relative">
                <div
                  className="w-full h-[480px] rounded-2xl relative overflow-hidden bg-[#f0edef] shadow-inner flex flex-col justify-between p-4 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwNfKLvYywjnzZCyNTeD1I4Mv5cQXQcYbK_3K8bh8qhki56k-D4wHO1F0cIuO52QKhAT7ksINGR0NG04908w1LTHR_38pUXDfQOUnTqI7j9WGMNdNDTKXT8HNoxJNbQPxXnF6RzqTskJxqVwbDrOxCmsHO7n8QxUOO-KyI9au7rpid5nltoExVC3t-T8QYmVDd228Q4eluksOcj5jrJGVuVGt9ub4j-rlV4Riwus0')`,
                  }}
                >
                  {/* Map Overlay Header */}
                  <div className="flex items-center justify-between w-full relative z-10">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm text-[#1b1b1d] text-[12px] font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#006e28]"></span>
                      <span>OneMap SLA Realtime Traffic • Clear</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md p-1 rounded-full shadow-sm text-[#1b1b1d]">
                      <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#f0edef] transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-[18px]">add</span>
                      </button>
                      <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#f0edef] transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-[18px]">remove</span>
                      </button>
                      <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#f0edef] transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-[18px]">my_location</span>
                      </button>
                    </div>
                  </div>

                  {/* Interactive Singapore Map Pins */}
                  <div className="absolute inset-0 pointer-events-none">
                    {VENUES_DATA.map((venue) => {
                      const isSelected = selectedVenueId === venue.id;
                      return (
                        <div
                          key={venue.id}
                          style={{
                            left: `${venue.coordinates.x}%`,
                            top: `${venue.coordinates.y}%`,
                          }}
                          onClick={() => setSelectedVenueId(venue.id)}
                          className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                        >
                          {isSelected ? (
                            <div className="flex flex-col items-center animate-bounce">
                              <div className="bg-[#0059b5] text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-lg flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">local_drink</span>
                                <span>{venue.name.split(' ')[0]} • Kiosk</span>
                              </div>
                              <div className="w-3 h-3 bg-[#0059b5] rotate-45 -mt-1.5 shadow-sm"></div>
                            </div>
                          ) : (
                            <div className="w-9 h-9 rounded-full bg-white/95 backdrop-blur text-[#1b1b1d] shadow-md flex items-center justify-center hover:bg-[#eae7ea] hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-[#0059b5] text-[18px]">
                                sports_tennis
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Map Legend Bar */}
                  <div className="flex items-center justify-between w-full relative z-10 bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl shadow-sm">
                    <div className="flex items-center gap-4 text-[#1b1b1d] text-[12px]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0059b5]"></span> PulseNutri Dispenser
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#006e28]"></span> ActiveSG Badminton/Tennis
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#884d00]"></span> Recovery Lounge
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#717785] uppercase tracking-wider hidden sm:block">
                      Singapore Grid SLA 2025
                    </span>
                  </div>
                </div>
              </div>

              {/* Venue & On-Site Smart Dispenser Detail Drawer (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#006e28]">
                        {selectedVenue.district}
                      </span>
                      <h3 className="text-[24px] font-bold text-[#1b1b1d] leading-snug">
                        {selectedVenue.name}
                      </h3>
                      <p className="text-[13px] text-[#414753] mt-0.5">
                        {selectedVenue.address} • {selectedVenue.mrt}
                      </p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[#6ffb85]/40 text-[#00732a] text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap">
                      Open Today till 10 PM
                    </div>
                  </div>

                  {/* Real-time Court Availability Segment */}
                  <div className="p-4 rounded-2xl bg-[#f6f3f5] flex flex-col gap-2 border border-black/[0.03]">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-semibold text-[#1b1b1d]">
                        Court Occupancy Status
                      </span>
                      <span className="text-[12px] text-[#006e28] font-semibold">
                        {selectedVenue.slotsLeft} Slots Left Tonight
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 pt-1 text-center text-[11px] font-semibold">
                      {selectedVenue.timeSlots.map((slot) => (
                        <div
                          key={slot.time}
                          className={`py-1.5 rounded-lg ${
                            slot.available
                              ? 'bg-[#0059b5] text-white shadow-sm'
                              : 'bg-[#e4e2e4] text-[#717785]'
                          }`}
                        >
                          {slot.time} {slot.available ? 'Avail' : 'Full'}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dedicated Hardware Bento: PulseNutri Smart Dispenser */}
                  <div className="p-4 rounded-2xl bg-[#f0edef] flex flex-col gap-3 border border-black/[0.03]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#0059b5] text-[20px]">
                          inventory_2
                        </span>
                        <span className="text-[14px] font-semibold text-[#1b1b1d]">
                          {selectedVenue.dispenser.name}
                        </span>
                      </div>
                      <span className="text-[12px] text-[#006e28] font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006e28]"></span>
                        {selectedVenue.dispenser.status}
                      </span>
                    </div>

                    <p className="text-[13px] text-[#414753]">
                      Located directly opposite Court entrance. Supports Apple Pay, Singpass Tap, and ActiveSG Credit.
                    </p>

                    {/* Dispenser Inventory */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {selectedVenue.dispenser.items.map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => handlePreorderItem(item.name)}
                          className="p-3 rounded-xl bg-white flex items-center gap-3 shadow-sm border border-black/[0.04] cursor-pointer hover:border-[#0071e3] transition-colors"
                        >
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              item.type === 'chilled'
                                ? 'bg-[#d7e2ff] text-[#001b3f]'
                                : 'bg-[#ffdcbf] text-[#2d1600]'
                            }`}
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              {item.type === 'chilled' ? 'water_drop' : 'lunch_dining'}
                            </span>
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[12px] font-semibold text-[#1b1b1d] truncate">
                              {item.name}
                            </span>
                            <span className="text-[11px] text-[#006e28]">
                              {item.specs} • S${item.price.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => onOpenLocker(selectedVenue.dispenser.name)}
                    className="flex-1 py-2.5 px-4 rounded-full bg-[#0059b5] hover:bg-[#00458f] text-white text-[14px] font-medium text-center shadow-sm active:scale-95 transition-all cursor-pointer"
                  >
                    Pre-order to Dispenser
                  </button>
                  <button
                    onClick={() => {
                      setToastMessage(`Opening OneMap directions to ${selectedVenue.name}`);
                      setTimeout(() => setToastMessage(null), 3000);
                    }}
                    className="py-2.5 px-5 rounded-full bg-[#f0edef] hover:bg-[#eae7ea] text-[#1b1b1d] text-[14px] font-medium transition-colors active:scale-95 cursor-pointer"
                  >
                    Directions (OneMap)
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Social & Community Sparring & Therapist Sessions */}
          <section className="flex flex-col gap-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
              <div className="flex flex-col gap-1 max-w-2xl">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0071e3]">
                  Pulse Community &amp; Certified Recovery
                </span>
                <h2 className="text-[28px] md:text-[36px] font-bold text-[#1b1b1d]">
                  Sparring Sessions &amp; Sports Therapist Hub
                </h2>
                <p className="text-[15px] text-[#414753]">
                  Join open court meetups, run crews, or schedule post-match manual release with Singapore Allied Health certified physios court-side.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-[12px] text-[#717785]">Partner Commission: 8% platform revenue cut</span>
                <button
                  onClick={() => onNavigate('for-partners')}
                  className="px-4 py-2 rounded-full bg-[#f0edef] hover:bg-[#eae7ea] text-[#1b1b1d] text-[12px] font-medium transition-colors cursor-pointer"
                >
                  Host a Community Session
                </button>
              </div>
            </div>

            {/* Mosaiced Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Community Badminton Sparring */}
              <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-4 border border-black/[0.04]">
                <div className="flex flex-col gap-4">
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-[#f0edef]">
                    <img
                      className="w-full h-full object-cover"
                      alt="Indoor Badminton Hall"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu1on83xptOHBib-w0Mnwkpil_LxxUqhGyzJXNxXnNc9PWxq2my4ZozUPM96li-IqDN-0eQI6CtGqWIFunKN3i5deq79GYKrABaUMvhZT5DKSPBT3Qp2fWSMEE2ShduTzPIVrn84E2I2o1tG20h8XssEnmzVpHAn1z502KFeAonO3Zite4EfHsr75W2-6Ll-8021dkLnpFkBoflSyR-jmWOY8LYnQ0-vpITEi0p3I"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1b1b1d] text-[11px] font-semibold">
                      Intermediate (Level 5-7)
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-[#0059b5] text-white text-[11px] font-bold">
                      S$12 / pax
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-[#717785] text-[12px]">
                      <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                      <span>Tonight • 8:00 PM – 10:00 PM</span>
                    </div>
                    <h3 className="text-[18px] font-semibold text-[#1b1b1d] pt-1">
                      West Coast Smashers Open Sparring
                    </h3>
                    <p className="text-[13px] text-[#414753] pt-1 leading-relaxed">
                      Clementi Sports Hall • Court 4 &amp; 5. Includes Victor shuttlecocks and isotonic refill perk.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-black/[0.04]">
                  <div className="flex items-center gap-1.5">
                    <div className="flex -space-x-2">
                      <div className="w-7 h-7 rounded-full bg-[#eae7ea] border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#1b1b1d]">TL</div>
                      <div className="w-7 h-7 rounded-full bg-[#d7e2ff] border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#001b3f]">JY</div>
                      <div className="w-7 h-7 rounded-full bg-[#72fe88] border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#002107]">AK</div>
                    </div>
                    <span className="text-[12px] text-[#414753]">5/8 joined</span>
                  </div>
                  <button
                    onClick={() => {
                      setToastMessage('Joined West Coast Smashers! Slot confirmed.');
                      setTimeout(() => setToastMessage(null), 3000);
                    }}
                    className="px-4 py-1.5 rounded-full bg-[#0059b5] hover:bg-[#00458f] text-white text-[12px] font-medium transition-all active:scale-95 cursor-pointer shadow-sm"
                  >
                    Join Match
                  </button>
                </div>
              </div>

              {/* Card 2: Certified Sports Physio Partner */}
              <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-4 border border-black/[0.04]">
                <div className="flex flex-col gap-4">
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-[#f0edef]">
                    <img
                      className="w-full h-full object-cover"
                      alt="Certified Physical Therapist"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw4yBmNuCmYJbu27ajaYVUZ-us28MupZyRJBraACIudHpmaF9F4KVvV5CqKnycb0hXh5i14BfuX4_G64JANOXUdbjDQH9Pk_F4SS5QihBNy4laliqjVDHot1fb39tsYMt_aGUhwwJ0LQHzVTghRpCxkcPNh9Ea1Fo-dYxw72k-GqVlSVecWNQr3e11t-XrnyUym-kTxn8cogYY6_lEUG9B5qPY-eZhgXEsLlgcQxE"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#6ffb85]/90 backdrop-blur-md text-[#00732a] text-[11px] font-semibold">
                      Certified AHPC Physio
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-[#eae7ea] text-[#1b1b1d] text-[11px] font-bold">
                      S$65 / 30m
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-[#717785] text-[12px]">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      <span>Court-side Mobile Pod • Jurong East</span>
                    </div>
                    <h3 className="text-[18px] font-semibold text-[#1b1b1d] pt-1">
                      Rapid Myofascial Release &amp; Taping
                    </h3>
                    <p className="text-[13px] text-[#414753] pt-1 leading-relaxed">
                      Partnered with PhysioPulse SG. Direct ActiveSG session synchronization with instant PDPA-encrypted clinical notes.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-black/[0.04]">
                  <div className="flex items-center justify-between text-[#717785] text-[11px] font-semibold uppercase tracking-wider">
                    <span>Therapist: Kenneth Koh, PT</span>
                    <span className="text-[#006e28]">★ 4.9 (124)</span>
                  </div>
                  <button
                    onClick={() => {
                      setToastMessage('Booked 30m session with Kenneth Koh, PT.');
                      setTimeout(() => setToastMessage(null), 3000);
                    }}
                    className="w-full py-2 rounded-full bg-[#f0edef] hover:bg-[#eae7ea] text-[#1b1b1d] text-[12px] font-medium transition-all active:scale-95 cursor-pointer"
                  >
                    Book Slot (12% Commission Model)
                  </button>
                </div>
              </div>

              {/* Card 3: Sunrise Marina Bay Track & Recovery Run */}
              <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-4 border border-black/[0.04]">
                <div className="flex flex-col gap-4">
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-[#f0edef]">
                    <img
                      className="w-full h-full object-cover"
                      alt="Marina Bay Runners"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuASbAIxyaeuOhMPpuKMK7EE1JWJ_kherop5CyxKphxNa1G9Zp2f2O-veFwkXRPM8wMkYwPXE_RiGKsGy3XSYUSwTvyDTRcxI7VbkdwaIG62DIUItOPmssXUDf8I5E2nr5_6dXkW-zCbidG_faPD5Z66pJVJ8vXlMVybrisofpJFrwSSNJiAZfHeryYZpfqOe5oKiL54GVmMyNrRQht_Wfru7qP5HfoxAmW960IFErU"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1b1b1d] text-[11px] font-semibold">
                      Community Run • 7.5KM
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-[#006e28] text-white text-[11px] font-bold">
                      Free Access
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-[#717785] text-[12px]">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      <span>Saturday • 6:30 AM • Singapore Sports Hub</span>
                    </div>
                    <h3 className="text-[18px] font-semibold text-[#1b1b1d] pt-1">
                      Kallang Riverfront Tempo &amp; Hydration
                    </h3>
                    <p className="text-[13px] text-[#414753] pt-1 leading-relaxed">
                      Led by Pulse Pacers. Concludes at Gate 4 PulseNutri Kiosk for complimentary electrolyte recovery shakes.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-black/[0.04]">
                  <div className="flex items-center gap-1.5 text-[#414753] text-[12px]">
                    <span className="material-symbols-outlined text-[18px] text-[#0059b5]">
                      directions_run
                    </span>
                    <span>42 runners registered</span>
                  </div>
                  <button
                    onClick={() => {
                      setToastMessage('RSVP confirmed for Kallang Riverfront Tempo!');
                      setTimeout(() => setToastMessage(null), 3000);
                    }}
                    className="px-4 py-1.5 rounded-full bg-[#0059b5] hover:bg-[#00458f] text-white text-[12px] font-medium transition-all active:scale-95 cursor-pointer shadow-sm"
                  >
                    RSVP Spot
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Platform Ecosystem Guarantee Strip */}
          <section className="bg-[#f6f3f5] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-black/[0.04]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#eae7ea] flex items-center justify-center text-[#0059b5] flex-shrink-0">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-semibold text-[#1b1b1d]">
                  Integrated Singapore Smart Nation Architecture
                </span>
                <span className="text-[13px] text-[#414753]">
                  Compliant with ActiveSG fair booking charter, Singpass authentication tokens, and Singapore PDPA security standards.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => {
                  setToastMessage('Syncing ActiveSG account via Singpass...');
                  setTimeout(() => setToastMessage('ActiveSG account synced successfully!'), 1500);
                }}
                className="px-5 py-2 rounded-full bg-[#0059b5] text-white text-[12px] font-medium transition-all shadow-sm cursor-pointer hover:bg-[#00458f]"
              >
                Sync ActiveSG Account
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
