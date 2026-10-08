/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [voucherCode, setVoucherCode] = useState('PULSE-FIRST-SG');
  const [step, setStep] = useState<1 | 2>(1);
  const [singpassSynced, setSingpassSynced] = useState(false);

  if (!isOpen) return null;

  const handleSyncSingpass = () => {
    setSingpassSynced(true);
  };

  const handleFinish = () => {
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-black/[0.08] relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f0edef] hover:bg-[#eae7ea] flex items-center justify-center text-[#414753] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {step === 1 ? (
          <div>
            <div className="w-12 h-12 rounded-full bg-[#0071e3]/10 text-[#0059b5] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[28px]">account_circle</span>
            </div>

            <h3 className="text-[22px] font-semibold text-[#1b1b1d]">
              Get Started with PulseNutri
            </h3>
            <p className="text-[13px] text-[#414753] mt-1">
              Connect your Singpass or ActiveSG identity to unlock automated court reservations and smart kiosk NFC taps.
            </p>

            <div className="space-y-3 my-6">
              {/* Singpass card */}
              <div
                onClick={handleSyncSingpass}
                className={`p-4 rounded-2xl cursor-pointer transition-all border flex items-center justify-between ${
                  singpassSynced
                    ? 'bg-[#6ffb85]/20 border-[#006e28]'
                    : 'bg-[#f6f3f5] hover:bg-[#eae7ea] border-black/[0.04]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[24px] text-[#ba1a1a]">
                    fingerprint
                  </span>
                  <div>
                    <span className="text-[14px] font-semibold text-[#1b1b1d] block">
                      Singpass Verified
                    </span>
                    <span className="text-[12px] text-[#717785]">
                      {singpassSynced ? 'Identity Token Active (S****882J)' : 'Click to authorize'}
                    </span>
                  </div>
                </div>
                <span
                  className={`text-[12px] font-semibold ${
                    singpassSynced ? 'text-[#006e28]' : 'text-[#0071e3]'
                  }`}
                >
                  {singpassSynced ? 'Connected' : 'Sync'}
                </span>
              </div>

              {/* ActiveSG Wallet */}
              <div className="p-4 rounded-2xl bg-[#f6f3f5] border border-black/[0.04] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[24px] text-[#006e28]">
                    account_balance_wallet
                  </span>
                  <div>
                    <span className="text-[14px] font-semibold text-[#1b1b1d] block">
                      MyActiveSG+ Wallet
                    </span>
                    <span className="text-[12px] text-[#717785]">Linked • Balance: S$ 42.50</span>
                  </div>
                </div>
                <span className="text-[12px] font-semibold text-[#006e28]">Linked</span>
              </div>

              {/* Voucher Code field */}
              <div>
                <label className="block text-[12px] font-medium text-[#414753] mb-1">
                  Promotional Voucher Code
                </label>
                <input
                  type="text"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl bg-[#f6f3f5] font-mono font-semibold text-[#0059b5] text-[14px] border border-black/[0.04] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20"
                />
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3 rounded-full bg-[#0071e3] hover:bg-[#0059b5] text-white text-[14px] font-semibold transition-all active:scale-95 shadow-md cursor-pointer"
            >
              Complete Setup &amp; Redeem Meal
            </button>
          </div>
        ) : (
          <div className="text-center py-4 animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-[#72fe88] text-[#002107] flex items-center justify-center mx-auto mb-4 shadow-sm">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>

            <h3 className="text-[22px] font-bold text-[#1b1b1d]">
              Welcome to PulseNutri!
            </h3>
            <p className="text-[13px] text-[#414753] mt-2 leading-relaxed">
              Your Singpass and ActiveSG tokens have been securely enrolled. Your complimentary first recovery meal pass <code className="bg-[#f0edef] px-1 py-0.5 rounded text-[#0059b5] font-mono">{voucherCode}</code> is active.
            </p>

            <div className="my-6 p-4 rounded-2xl bg-[#f6f3f5] text-[13px] text-[#1b1b1d] space-y-1 text-left border border-black/[0.04]">
              <div className="flex justify-between">
                <span className="text-[#717785]">ActiveSG Bot Tier:</span>
                <span className="font-semibold text-[#006e28]">Enabled (Next drop 7 AM)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#717785]">Kiosk NFC Token:</span>
                <span className="font-semibold text-[#0059b5]">Loaded to Apple Wallet</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-full bg-[#1b1b1d] hover:bg-[#303032] text-white text-[14px] font-semibold transition-colors cursor-pointer"
            >
              Explore Ecosystem
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
