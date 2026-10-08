/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MealItem } from '../types.ts';

interface ReservationModalProps {
  meal: MealItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenLocker: (kioskName?: string) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  meal,
  isOpen,
  onClose,
  onOpenLocker,
}) => {
  const [confirmed, setConfirmed] = useState(false);
  const [pickupSlot, setPickupSlot] = useState('Immediately (Ready in 10s)');

  if (!isOpen || !meal) return null;

  const handleConfirm = () => {
    setConfirmed(true);
  };

  const handleProceedToKiosk = () => {
    onClose();
    onOpenLocker(meal.locationStock);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-black/[0.08] relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f0edef] hover:bg-[#eae7ea] flex items-center justify-center text-[#414753] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {!confirmed ? (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0059b5]">
                {meal.compound}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#72fe88]/40 text-[#002107] text-[10px] font-bold">
                Nutri-Grade {meal.nutriGrade || 'A'}
              </span>
            </div>

            <h3 className="text-[22px] font-semibold text-[#1b1b1d] leading-snug">
              {meal.name}
            </h3>

            <div className="flex items-center gap-3 my-4 p-3 rounded-2xl bg-[#f6f3f5] border border-black/[0.03]">
              <img
                src={meal.imageUrl}
                alt={meal.name}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1">
                <span className="text-[14px] font-bold text-[#1b1b1d]">
                  S${meal.price.toFixed(2)}
                </span>
                <p className="text-[12px] text-[#717785]">{meal.locationStock}</p>
                <div className="flex items-center gap-3 text-[12px] text-[#414753] mt-1">
                  <span>💪 {meal.protein}g Protein</span>
                  <span>⚡ {meal.calories} kcal</span>
                  <span>🌾 {meal.carbs}g Carbs</span>
                </div>
              </div>
            </div>

            {/* Pickup selection */}
            <div className="space-y-3 mb-6">
              <label className="block text-[12px] font-semibold text-[#414753]">
                Dispense Timing Option
              </label>
              <div className="space-y-2">
                {[
                  'Immediately (Ready in 10s)',
                  'Post-Match (Sync with 20:00 Court Slot)',
                  'Reserve for Later (Holds for 4 hours)',
                ].map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors border ${
                      pickupSlot === opt
                        ? 'bg-[#d7e2ff]/30 border-[#0071e3]'
                        : 'bg-[#f6f3f5] hover:bg-[#f0edef] border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="pickup"
                        checked={pickupSlot === opt}
                        onChange={() => setPickupSlot(opt)}
                        className="text-[#0071e3] focus:ring-0"
                      />
                      <span className="text-[13px] font-medium text-[#1b1b1d]">{opt}</span>
                    </div>
                    {opt.includes('Immediately') && (
                      <span className="text-[11px] text-[#006e28] font-bold">Fastest</span>
                    )}
                  </label>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#f0edef] flex items-center justify-between text-[12px] mb-6">
              <span className="text-[#414753]">Payment Method</span>
              <span className="font-semibold text-[#1b1b1d]">
                ActiveSG$ Wallet / Singpass Direct
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="w-1/3 py-2.5 rounded-full bg-[#f0edef] hover:bg-[#eae7ea] text-[#1b1b1d] text-[14px] font-medium transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="w-2/3 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0059b5] text-white text-[14px] font-semibold transition-all active:scale-95 shadow-md cursor-pointer"
              >
                Confirm &amp; Hold Box
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-4 animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-[#72fe88] text-[#002107] flex items-center justify-center mx-auto mb-4 shadow-sm">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#006e28] bg-[#6ffb85]/40 px-3 py-1 rounded-full">
              Locker Reserved
            </span>

            <h3 className="text-[22px] font-bold text-[#1b1b1d] mt-2">
              Ready for NFC Collection
            </h3>
            <p className="text-[13px] text-[#414753] mt-1 max-w-sm mx-auto">
              Your recovery box is warm/chilled inside <strong className="text-[#1b1b1d]">{meal.locationStock}</strong>.
            </p>

            <div className="my-6 p-4 rounded-2xl bg-[#f6f3f5] flex items-center justify-around border border-black/[0.04]">
              <div>
                <span className="text-[11px] text-[#717785] uppercase tracking-wider font-semibold">
                  Pickup Passcode
                </span>
                <p className="text-[28px] font-mono font-bold text-[#0059b5] tracking-widest mt-0.5">
                  884-219
                </p>
              </div>
              <div className="w-px h-12 bg-black/[0.08]"></div>
              <div>
                <span className="text-[11px] text-[#717785] uppercase tracking-wider font-semibold">
                  Pod Assigned
                </span>
                <p className="text-[28px] font-bold text-[#1b1b1d] mt-0.5">#04</p>
              </div>
            </div>

            <button
              onClick={handleProceedToKiosk}
              className="w-full py-3 rounded-full bg-[#0071e3] hover:bg-[#0059b5] text-white text-[14px] font-semibold transition-all active:scale-95 shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">contactless</span>
              <span>Open Locker Tap Interface Now</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
