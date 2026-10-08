/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

interface LockerModalProps {
  isOpen: boolean;
  kioskName?: string;
  onClose: () => void;
}

export const LockerModal: React.FC<LockerModalProps> = ({ isOpen, kioskName, onClose }) => {
  const [unlocked, setUnlocked] = useState(false);
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && unlocked && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setUnlocked(false);
      setCountdown(15);
    }
    return () => clearInterval(timer);
  }, [isOpen, unlocked, countdown]);

  if (!isOpen) return null;

  const handleTapNfc = () => {
    setUnlocked(true);
    setCountdown(15);
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-black/[0.08] relative text-center">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f0edef] hover:bg-[#eae7ea] flex items-center justify-center text-[#414753] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {!unlocked ? (
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[44px] animate-pulse">
                contactless
              </span>
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#006e28] bg-[#6ffb85]/30 px-3 py-1 rounded-full mb-2">
              NFC &amp; Singpass Authenticator Ready
            </span>

            <h3 className="text-[22px] font-semibold text-[#1b1b1d]">
              Hold Near Terminal Reader
            </h3>
            <p className="text-[13px] text-[#414753] mt-1 max-w-xs">
              {kioskName || 'Changi City Point Hub • Locker Pod #04'}
            </p>

            {/* Simulated QR Code / NFC Target */}
            <div
              onClick={handleTapNfc}
              className="my-6 p-6 rounded-2xl bg-[#f6f3f5] border-2 border-dashed border-[#0071e3]/40 flex flex-col items-center justify-center cursor-pointer hover:bg-[#eae7ea] transition-all group"
            >
              <div className="w-36 h-36 bg-white p-2 rounded-xl shadow-sm flex items-center justify-center border border-black/[0.04]">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PULSENUTRI_LOCKER_UNLOCK_TOKEN_04"
                  alt="Locker QR Token"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[12px] font-semibold text-[#0071e3] mt-3 group-hover:underline flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">touch_app</span>
                Click here to simulate NFC Tap
              </span>
            </div>

            <div className="flex items-center justify-between w-full p-3 rounded-xl bg-[#f0edef] text-[12px] text-[#414753]">
              <span>Thermal Sensor: <strong>65°C Active</strong></span>
              <span>Singpass Token: <strong>Valid</strong></span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center py-4 animate-scaleUp">
            <div className="w-20 h-20 rounded-full bg-[#72fe88] text-[#002107] flex items-center justify-center mb-4 shadow-md">
              <span className="material-symbols-outlined text-[44px]">lock_open</span>
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#006e28] bg-[#6ffb85]/40 px-3 py-1 rounded-full mb-2">
              Chamber Door Unlatched
            </span>

            <h3 className="text-[24px] font-bold text-[#1b1b1d]">
              Pod #04 Open
            </h3>
            <p className="text-[13px] text-[#414753] mt-1">
              Please collect your fresh thermal recovery box.
            </p>

            <div className="my-6 p-6 rounded-2xl bg-[#f6f3f5] w-full text-center border border-black/[0.04]">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785]">
                Auto-Safety Relatch In
              </span>
              <p className="text-[36px] font-bold text-[#0059b5] tabular-nums mt-1">
                00:{countdown.toString().padStart(2, '0')}
              </p>
              <div className="w-full bg-[#eae7ea] h-2 rounded-full overflow-hidden mt-3">
                <div
                  className="bg-[#0071e3] h-full rounded-full transition-all duration-1000"
                  style={{ width: `${(countdown / 15) * 100}%` }}
                ></div>
              </div>
            </div>

            <button
              onClick={() => {
                setUnlocked(false);
                onClose();
              }}
              className="w-full py-3 rounded-full bg-[#1b1b1d] text-white text-[14px] font-medium hover:bg-[#303032] transition-colors cursor-pointer"
            >
              Done &amp; Close Chamber
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
