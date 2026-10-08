/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute, McpHealthReport } from '../types.ts';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenGetStarted: () => void;
  onOpenProfile: () => void;
  onOpenMcpStatus: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenGetStarted,
  onOpenProfile,
  onOpenMcpStatus,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mcpHealth, setMcpHealth] = useState<'healthy' | 'degraded' | 'checking'>('checking');

  useEffect(() => {
    // Quick polling check for MCP status
    fetch('/api/health.js')
      .then((res) => res.json())
      .then((data: McpHealthReport) => {
        setMcpHealth(data.status === 'healthy' ? 'healthy' : 'degraded');
      })
      .catch(() => {
        setMcpHealth('degraded');
      });
  }, []);

  const navItems: { route: PageRoute; label: string }[] = [
    { route: 'overview', label: 'Overview' },
    { route: 'nutrition-and-meals', label: 'Nutrition & Meals' },
    { route: 'sports-venues', label: 'Sports Venues' },
    { route: 'smart-dispensers', label: 'Smart Dispensers' },
    { route: 'for-partners', label: 'For Partners' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcf8fb]/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-black/[0.04]">
      <div className="h-16 max-w-[1320px] mx-auto px-4 md:px-10 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <button
            onClick={() => onNavigate('overview')}
            className="flex items-center gap-2 group transition-transform active:scale-[0.98] text-left cursor-pointer"
          >
            <img
              alt="PulseFit Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1VeTehJQlaEzYwYZXwt_b-2S2DrO_y5yj4vNJPGQTDdnNsmIeCisvFRf7d3VXz7cnAlMgQS5903a9r-o1w7kfkuGOvlq7aG4GT66XWFOolmsGhHMWVvTbXuo2g-3g4RUQIcrNZZz7pGMX3_Q1vZF7HvPP8v9wUWkKPkkDz7VeKAmGGqxpqroGnkBhl9i3Bqkg_WiQPTT_PhMzmbEayfRTRuvQ3YfdNePS5wtrZ6vd7n"
            />
            <div className="flex flex-col">
              <span className="text-[18px] font-semibold tracking-tight text-[#1b1b1d] group-hover:text-[#0059b5] transition-colors leading-tight">
                PulseNutri
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785] -mt-0.5 hidden sm:block">
                Singapore Ecosystem
              </span>
            </div>
          </button>

          {/* Desktop Navigation Segment */}
          <nav className="hidden xl:flex items-center gap-1 p-1 rounded-full bg-[#f6f3f5]/80 border border-black/[0.04]">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => onNavigate(item.route)}
                  className={`px-4 py-1.5 text-[14px] font-medium transition-all rounded-full cursor-pointer ${
                    isActive
                      ? 'bg-[#eae7ea] text-[#1b1b1d] font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
                      : 'text-[#414753] hover:text-[#1b1b1d]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* MCP Health Pill */}
          <button
            onClick={onOpenMcpStatus}
            title="Inspect Smithery MCP Connection Status"
            className="hidden lg:inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-white border border-black/[0.06] hover:bg-[#f6f3f5] text-[12px] font-medium text-[#414753] transition-all shadow-sm cursor-pointer"
          >
            <span
              className={`w-2 h-2 rounded-full ${
                mcpHealth === 'healthy'
                  ? 'bg-[#006e28] animate-pulse'
                  : mcpHealth === 'checking'
                  ? 'bg-amber-500 animate-ping'
                  : 'bg-emerald-600'
              }`}
            ></span>
            <span>Smithery MCP</span>
            <span className="text-[10px] px-1 py-0.2 bg-[#f0edef] rounded text-[#717785]">v1.0</span>
          </button>

          {/* Locate Kiosk Quick Button */}
          <button
            onClick={() => onNavigate('smart-dispensers')}
            className="hidden md:inline-flex items-center gap-1.5 h-9 px-4 rounded-full bg-[#f0edef] hover:bg-[#eae7ea] text-[#1b1b1d] text-[14px] font-medium transition-all active:scale-95 shadow-[0_1px_2px_rgba(0,0,0,0.02)] cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#006e28]"></span>
            <span>Locate Vending Kiosk</span>
          </button>

          {/* Get Started Button */}
          <button
            onClick={onOpenGetStarted}
            className="inline-flex items-center justify-center h-9 px-5 rounded-full bg-[#0071e3] hover:bg-[#0059b5] text-white text-[14px] font-medium transition-all active:scale-95 shadow-[0_2px_8px_rgba(0,113,227,0.25)] cursor-pointer"
          >
            <span>Get Started</span>
          </button>

          {/* User Profile Avatar */}
          <button
            onClick={onOpenProfile}
            className="inline-flex items-center p-0.5 rounded-full hover:bg-[#eae7ea] transition-colors cursor-pointer"
            title="ActiveSG & Singpass Profile"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-transparent hover:ring-[#0071e3]/40 transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs-qwKNclSm2NdrLr8nIuWN4Xy5Psj76-YuXsMUoHua6QuGi3KGwcKF3ppYR16c0BbmGYwdE9FkGK4u7YBq62LL9qR1wVKi_5BY8yUxIbizccRAU_FVDHal8i9Fh0WSWhbf4ulG8lOmdMKXGyHRRajxyKT9wQpJ2Ua3uQXYfAqnnslqd659zNFvwwmZfEs9BQk3CsbXP8T3yKnA4j6Wn2BBvgPxhFmY2jCn812ESE"
            />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#1b1b1d] hover:bg-[#eae7ea] transition-colors"
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-black/[0.06] bg-[#fcf8fb] px-4 py-3 space-y-1 shadow-lg animate-fadeIn">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => {
                  onNavigate(item.route);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-[15px] font-medium transition-colors ${
                  isActive
                    ? 'bg-[#eae7ea] text-[#1b1b1d] font-semibold'
                    : 'text-[#414753] hover:bg-[#f6f3f5]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-black/[0.04] flex items-center justify-between">
            <button
              onClick={() => {
                onOpenMcpStatus();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-[13px] text-[#414753] font-medium py-1"
            >
              <span className="w-2 h-2 rounded-full bg-[#006e28]"></span>
              <span>MCP Smithery Status (Live)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
