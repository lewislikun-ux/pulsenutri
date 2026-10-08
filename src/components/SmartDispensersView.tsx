/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageRoute } from '../types.ts';
import { VENUES_DATA } from '../data/mockData.ts';

interface SmartDispensersViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenLocker: (kioskName?: string) => void;
  onOpenMcpStatus: () => void;
}

export const SmartDispensersView: React.FC<SmartDispensersViewProps> = ({
  onNavigate,
  onOpenLocker,
  onOpenMcpStatus,
}) => {
  const [selectedKioskIndex, setSelectedKioskIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const kiosks = [
    {
      id: 'kiosk-01',
      name: 'Tampines Hub Kiosk #01',
      zone: 'East Singapore',
      address: '1 Tampines Walk, Our Tampines Hub, Level 2 Atrium',
      hotTemp: '65.2°C',
      coldTemp: '3.8°C',
      hotStock: 14,
      coldStock: 22,
      status: 'Online • NFC Active',
      supportedPayments: ['Apple Pay', 'Singpass Tap', 'ActiveSG Wallet', 'NETS FlashPay'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZiceC0HxLSV56xT0RIe4jyz3-ZtHjWLCPEk5KbLnZDj7-ZHsczE4XzH3eQI_Zdn3L2Aq-gd-MGOWu81DKxK3c6Ba3ZZ8Pxie3Y0O0kTj3xFpugF8ZkXUP-F6Yt5TjBuYdFat30Inx8XODo8iuVQMhJMBiHSB0rjlmeqaMImDC_GaLy6ovqUwP8y3odMHX0S3aLmxgujjXlDUchvUKsrMu7P0g6PgJ-u5LvQFK7hs'
    },
    {
      id: 'kiosk-02',
      name: 'Clementi Sports Hall Pod #04',
      zone: 'West Singapore',
      address: '518 Clementi Ave 3, Concourse Level outside Court 3',
      hotTemp: '65.0°C',
      coldTemp: '4.1°C',
      hotStock: 9,
      coldStock: 18,
      status: 'Online • Fast Vend',
      supportedPayments: ['Apple Pay', 'Singpass Tap', 'ActiveSG Wallet'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPnW-pjJ0RmmP09sLSCrV1rQ5f6RGA1EB_jOqTVNUwMwYzMJmmNO-TbOY_hV16WmjL7BBX0rfBGrNMny8xhh9bk1Lrz_1SwLQs_w1bReS_jwpWT1B3XEK3JLhM0adikTz0G86KFWWS0EcB7WixfrF-Rb1_XymPovzWxbJpKT77sgQSx0fcjfhRyduhHAMoT2ROAsINVMRdgQvaglRpGrPNGbsqPcQVND8EBOxMT4A'
    },
    {
      id: 'kiosk-03',
      name: 'Kallang Sports Hub Pod #02',
      zone: 'Central East',
      address: '8 Stadium Blvd, Kallang Tennis & Squash Center Gate 4',
      hotTemp: '64.8°C',
      coldTemp: '3.9°C',
      hotStock: 16,
      coldStock: 25,
      status: 'Online • Heavy Footfall',
      supportedPayments: ['Apple Pay', 'Singpass Tap', 'ActiveSG Wallet', 'Visa'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwNfKLvYywjnzZCyNTeD1I4Mv5cQXQcYbK_3K8bh8qhki56k-D4wHO1F0cIuO52QKhAT7ksINGR0NG04908w1LTHR_38pUXDfQOUnTqI7j9WGMNdNDTKXT8HNoxJNbQPxXnF6RzqTskJxqVwbDrOxCmsHO7n8QxUOO-KyI9au7rpid5nltoExVC3t-T8QYmVDd228Q4eluksOcj5jrJGVuVGt9ub4j-rlV4Riwus0'
    },
    {
      id: 'kiosk-04',
      name: 'Bishan Aquatic Centre Pod #01',
      zone: 'Central',
      address: '5 Bishan St 14, Main Pool Turnstiles',
      hotTemp: '65.4°C',
      coldTemp: '4.0°C',
      hotStock: 11,
      coldStock: 20,
      status: 'Online • NFC Active',
      supportedPayments: ['Apple Pay', 'Singpass Tap', 'ActiveSG Wallet'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZiceC0HxLSV56xT0RIe4jyz3-ZtHjWLCPEk5KbLnZDj7-ZHsczE4XzH3eQI_Zdn3L2Aq-gd-MGOWu81DKxK3c6Ba3ZZ8Pxie3Y0O0kTj3xFpugF8ZkXUP-F6Yt5TjBuYdFat30Inx8XODo8iuVQMhJMBiHSB0rjlmeqaMImDC_GaLy6ovqUwP8y3odMHX0S3aLmxgujjXlDUchvUKsrMu7P0g6PgJ-u5LvQFK7hs'
    }
  ];

  const filteredKiosks = kiosks.filter(k => 
    k.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    k.zone.toLowerCase().includes(searchQuery.toLowerCase()) ||
    k.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentKiosk = filteredKiosks[selectedKioskIndex] || kiosks[0];

  return (
    <div className="flex flex-col w-full">
      {/* Header section */}
      <section className="max-w-[1320px] mx-auto px-4 md:px-10 pt-10 pb-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0edef] text-[11px] font-semibold uppercase tracking-wider text-[#0059b5] mb-2 border border-black/[0.04]">
              <span className="w-2 h-2 rounded-full bg-[#006e28] animate-pulse"></span>
              Dual-Zone IoT Hardware Network
            </div>
            <h1 className="text-[32px] md:text-[44px] font-semibold tracking-tight text-[#1b1b1d]">
              Smart Thermal Dispensers
            </h1>
            <p className="text-[16px] text-[#414753] mt-1 max-w-xl">
              Precision thermal vending pods stationed directly at ActiveSG turnstiles. Instant meal unlatching with zero queue via Singpass NFC.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenMcpStatus}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#f6f3f5] border border-black/[0.08] text-[13px] font-medium text-[#1b1b1d] shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#0059b5]">hub</span>
              <span>Smithery MCP Live Status</span>
            </button>
          </div>
        </div>

        {/* Search & Location Bar */}
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-black/[0.04] flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-[#717785] ml-2">search</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedKioskIndex(0);
            }}
            placeholder="Search kiosk by name, district, or MRT..."
            className="flex-1 text-[14px] outline-none text-[#1b1b1d] placeholder:text-[#717785]"
          />
          <span className="text-[12px] text-[#717785] pr-3 hidden sm:inline">
            Showing {filteredKiosks.length} of 48 active island-wide pods
          </span>
        </div>

        {/* Main Grid: Kiosk Detail & List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Left Kiosk list (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {filteredKiosks.map((kiosk, idx) => {
              const isSelected = kiosk.id === currentKiosk.id;
              return (
                <div
                  key={kiosk.id}
                  onClick={() => setSelectedKioskIndex(idx)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-white border-[#0071e3] shadow-md ring-2 ring-[#0071e3]/10'
                      : 'bg-white/80 hover:bg-white border-black/[0.04] shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0059b5]">
                      {kiosk.zone}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#006e28] bg-[#6ffb85]/30 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#006e28]"></span>
                      {kiosk.status}
                    </span>
                  </div>
                  <h4 className="text-[16px] font-semibold text-[#1b1b1d]">{kiosk.name}</h4>
                  <p className="text-[12px] text-[#414753] mt-0.5">{kiosk.address}</p>

                  <div className="flex items-center gap-4 mt-3 pt-2 border-t border-black/[0.03] text-[12px] text-[#717785]">
                    <span>🔥 Hot 65°C: <strong className="text-[#1b1b1d]">{kiosk.hotStock} units</strong></span>
                    <span>❄️ Cold 4°C: <strong className="text-[#1b1b1d]">{kiosk.coldStock} units</strong></span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Kiosk Telemetry & Dispenser Unit (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-black/[0.04] flex flex-col justify-between">
            <div>
              <div className="relative w-full h-60 rounded-2xl overflow-hidden mb-6 bg-[#f0edef]">
                <img
                  src={currentKiosk.image}
                  alt={currentKiosk.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[12px] font-semibold text-[#1b1b1d] shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#006e28] animate-pulse"></span>
                  <span>Live Telemetry Connected</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-[#1b1b1d]/85 backdrop-blur-md px-3 py-1.5 rounded-full text-[12px] text-white">
                  <span>Singpass / Apple Pay Ready</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                    Stationed at {currentKiosk.zone}
                  </span>
                  <h2 className="text-[24px] font-semibold text-[#1b1b1d] mt-0.5">
                    {currentKiosk.name}
                  </h2>
                  <p className="text-[13px] text-[#414753] mt-1">{currentKiosk.address}</p>
                </div>
              </div>

              {/* Temperature & Capacity Readings */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
                <div className="p-3.5 rounded-xl bg-[#f6f3f5] text-center border border-black/[0.03]">
                  <span className="text-[11px] font-semibold uppercase text-[#717785]">Thermal Hot</span>
                  <p className="text-[20px] font-bold text-[#ab6200] mt-0.5">{currentKiosk.hotTemp}</p>
                  <span className="text-[11px] text-[#414753]">{currentKiosk.hotStock} meals loaded</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f6f3f5] text-center border border-black/[0.03]">
                  <span className="text-[11px] font-semibold uppercase text-[#717785]">Cryo Chilled</span>
                  <p className="text-[20px] font-bold text-[#0059b5] mt-0.5">{currentKiosk.coldTemp}</p>
                  <span className="text-[11px] text-[#414753]">{currentKiosk.coldStock} drinks loaded</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f6f3f5] text-center border border-black/[0.03]">
                  <span className="text-[11px] font-semibold uppercase text-[#717785]">Door Latency</span>
                  <p className="text-[20px] font-bold text-[#006e28] mt-0.5">0.12s</p>
                  <span className="text-[11px] text-[#414753]">NFC response</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f6f3f5] text-center border border-black/[0.03]">
                  <span className="text-[11px] font-semibold uppercase text-[#717785]">Inspection</span>
                  <p className="text-[20px] font-bold text-[#1b1b1d] mt-0.5">Grade A</p>
                  <span className="text-[11px] text-[#414753]">SFA Verified</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-black/[0.04] flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenLocker(currentKiosk.name)}
                className="w-full sm:flex-1 py-3 px-6 rounded-full bg-[#0071e3] hover:bg-[#0059b5] text-white text-[14px] font-semibold transition-all active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">contactless</span>
                <span>Tap to Unlock Locker Pod</span>
              </button>
              <button
                onClick={() => onNavigate('nutrition-and-meals')}
                className="w-full sm:w-auto py-3 px-6 rounded-full bg-[#f0edef] hover:bg-[#eae7ea] text-[#1b1b1d] text-[14px] font-medium transition-all cursor-pointer"
              >
                View Available Meals
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
