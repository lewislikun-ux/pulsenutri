/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageRoute } from '../types.ts';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenMcpStatus: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenMcpStatus }) => {
  return (
    <footer className="w-full bg-[#ffffff] mt-14 border-t border-black/[0.04] shadow-[0_-1px_12px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1320px] mx-auto px-4 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-14 border-b border-black/[0.06]">
          {/* Col 1: Brand & Gov Badges */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                alt="PulseFit Logo"
                className="h-7 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1VeTehJQlaEzYwYZXwt_b-2S2DrO_y5yj4vNJPGQTDdnNsmIeCisvFRf7d3VXz7cnAlMgQS5903a9r-o1w7kfkuGOvlq7aG4GT66XWFOolmsGhHMWVvTbXuo2g-3g4RUQIcrNZZz7pGMX3_Q1vZF7HvPP8v9wUWkKPkkDz7VeKAmGGqxpqroGnkBhl9i3Bqkg_WiQPTT_PhMzmbEayfRTRuvQ3YfdNePS5wtrZ6vd7n"
              />
              <span className="text-[18px] font-semibold text-[#1b1b1d] tracking-tight">
                PulseNutri
              </span>
            </div>
            <p className="text-[13px] text-[#414753] leading-relaxed max-w-sm">
              Singapore's unified precision performance grid. Synchronizing real-time biometric telemetry, ActiveSG court bookings, Health Promotion Board targets, and automated micro-nutrient dispensing across the island.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0edef] text-[11px] font-semibold uppercase tracking-wider text-[#414753]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006e28]"></span>
                ActiveSG Sync Online
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0edef] text-[11px] font-semibold uppercase tracking-wider text-[#414753]">
                Singpass Ready
              </span>
              <button
                onClick={onOpenMcpStatus}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0071e3]/10 text-[11px] font-semibold uppercase tracking-wider text-[#0059b5] hover:bg-[#0071e3]/20 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[13px]">hub</span>
                Smithery MCP Linked
              </button>
            </div>
          </div>

          {/* Col 2: Ecosystem */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
              Ecosystem
            </span>
            <button
              onClick={() => onNavigate('overview')}
              className="text-left text-[13px] text-[#414753] hover:text-[#1b1b1d] transition-colors"
            >
              Platform Overview
            </button>
            <button
              onClick={() => onNavigate('nutrition-and-meals')}
              className="text-left text-[13px] text-[#414753] hover:text-[#1b1b1d] transition-colors"
            >
              Targeted Meal Boxes
            </button>
            <button
              onClick={() => onNavigate('smart-dispensers')}
              className="text-left text-[13px] text-[#414753] hover:text-[#1b1b1d] transition-colors"
            >
              Automated Kiosks
            </button>
            <button
              onClick={() => onNavigate('sports-venues')}
              className="text-left text-[13px] text-[#414753] hover:text-[#1b1b1d] transition-colors"
            >
              ActiveSG Venues
            </button>
          </div>

          {/* Col 3: Frameworks */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
              Frameworks
            </span>
            <button
              onClick={() => onNavigate('nutrition-and-meals')}
              className="text-left text-[13px] text-[#414753] hover:text-[#1b1b1d] transition-colors"
            >
              HPB Nutri-Grade
            </button>
            <button
              onClick={() => onNavigate('overview')}
              className="text-left text-[13px] text-[#414753] hover:text-[#1b1b1d] transition-colors"
            >
              Electrolyte Science
            </button>
            <button
              onClick={() => onNavigate('for-partners')}
              className="text-left text-[13px] text-[#414753] hover:text-[#1b1b1d] transition-colors"
            >
              Facility Operator Hub
            </button>
            <button
              onClick={onOpenMcpStatus}
              className="text-left text-[13px] text-[#414753] hover:text-[#1b1b1d] transition-colors flex items-center gap-1"
            >
              <span>Developer APIs &amp; MCP</span>
              <span className="text-[10px] text-[#0071e3] font-semibold">/api/health.js</span>
            </button>
          </div>

          {/* Col 4: Public Health Integration */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
              Public Health Integration
            </span>
            <p className="text-[13px] text-[#414753] leading-relaxed">
              Aligned with the Singapore Health Promotion Board (HPB) National Steps Challenge and ActiveSG infrastructure guidelines. All protein compounds and automated sports drinks comply with Singapore Nutri-Grade standards.
            </p>
            <div className="p-4 rounded-2xl bg-[#f6f3f5] flex items-start gap-3 border border-black/[0.04]">
              <span className="material-symbols-outlined text-[#0071e3] text-[22px] mt-0.5">
                foster_family
              </span>
              <div className="flex flex-col">
                <span className="text-[14px] font-semibold text-[#1b1b1d]">
                  Smart Dispenser Grid
                </span>
                <span className="text-[13px] text-[#414753]">
                  NFC tap checkout at 48 ActiveSG stadium, sports hall, and gym clusters island-wide.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-[12px] text-[#717785]">
            <span className="hover:text-[#1b1b1d] transition-colors cursor-pointer">
              Privacy Statement (PDPA Singapore)
            </span>
            <span>•</span>
            <span className="hover:text-[#1b1b1d] transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span>•</span>
            <span className="hover:text-[#1b1b1d] transition-colors cursor-pointer">
              Health &amp; Clinical Disclaimer
            </span>
            <span>•</span>
            <button
              onClick={onOpenMcpStatus}
              className="hover:text-[#0071e3] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#006e28]"></span>
              <span>MCP Smithery Status</span>
            </button>
          </div>
          <div className="text-[12px] text-[#717785]">
            © 2025 PulseNutri Singapore Pte. Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
