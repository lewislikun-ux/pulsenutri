/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute, MealItem } from './types.ts';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { OverviewView } from './components/OverviewView.tsx';
import { NutritionMealsView } from './components/NutritionMealsView.tsx';
import { SportsVenuesView } from './components/SportsVenuesView.tsx';
import { SmartDispensersView } from './components/SmartDispensersView.tsx';
import { PartnersView } from './components/PartnersView.tsx';
import { McpStatusModal } from './components/McpStatusModal.tsx';
import { LockerModal } from './components/LockerModal.tsx';
import { ReservationModal } from './components/ReservationModal.tsx';
import { GetStartedModal } from './components/GetStartedModal.tsx';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('overview');
  const [isMcpModalOpen, setIsMcpModalOpen] = useState(false);
  const [isLockerModalOpen, setIsLockerModalOpen] = useState(false);
  const [activeLockerKiosk, setActiveLockerKiosk] = useState<string | undefined>(undefined);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<MealItem | null>(null);
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (
        hash === 'overview' ||
        hash === 'nutrition-and-meals' ||
        hash === 'sports-venues' ||
        hash === 'smart-dispensers' ||
        hash === 'for-partners'
      ) {
        setCurrentRoute(hash as PageRoute);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLocker = (kioskName?: string) => {
    setActiveLockerKiosk(kioskName);
    setIsLockerModalOpen(true);
  };

  const handleReserveMeal = (meal: MealItem) => {
    setSelectedMeal(meal);
    setIsReservationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fcf8fb] text-[#1b1b1d] font-sans antialiased flex flex-col justify-between selection:bg-[#d7e2ff] selection:text-[#001b3f]">
      {/* Top Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenGetStarted={() => setIsGetStartedModalOpen(true)}
        onOpenProfile={() => setIsGetStartedModalOpen(true)}
        onOpenMcpStatus={() => setIsMcpModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-16 bg-[#fcf8fb] min-h-[calc(100vh-4rem)] flex-1">
        {currentRoute === 'overview' && (
          <OverviewView
            onNavigate={handleNavigate}
            onOpenLocker={handleOpenLocker}
            onReserveMeal={handleReserveMeal}
            onOpenGetStarted={() => setIsGetStartedModalOpen(true)}
          />
        )}

        {currentRoute === 'nutrition-and-meals' && (
          <NutritionMealsView
            onNavigate={handleNavigate}
            onReserveMeal={handleReserveMeal}
            onOpenGetStarted={() => setIsGetStartedModalOpen(true)}
          />
        )}

        {currentRoute === 'sports-venues' && (
          <SportsVenuesView
            onNavigate={handleNavigate}
            onReserveMeal={handleReserveMeal}
            onOpenLocker={handleOpenLocker}
          />
        )}

        {currentRoute === 'smart-dispensers' && (
          <SmartDispensersView
            onNavigate={handleNavigate}
            onOpenLocker={handleOpenLocker}
            onOpenMcpStatus={() => setIsMcpModalOpen(true)}
          />
        )}

        {currentRoute === 'for-partners' && (
          <PartnersView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Ecosystem Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenMcpStatus={() => setIsMcpModalOpen(true)}
      />

      {/* Interactive Modals */}
      <McpStatusModal
        isOpen={isMcpModalOpen}
        onClose={() => setIsMcpModalOpen(false)}
      />

      <LockerModal
        isOpen={isLockerModalOpen}
        kioskName={activeLockerKiosk}
        onClose={() => setIsLockerModalOpen(false)}
      />

      <ReservationModal
        isOpen={isReservationModalOpen}
        meal={selectedMeal}
        onClose={() => setIsReservationModalOpen(false)}
        onOpenLocker={handleOpenLocker}
      />

      <GetStartedModal
        isOpen={isGetStartedModalOpen}
        onClose={() => setIsGetStartedModalOpen(false)}
      />
    </div>
  );
}
