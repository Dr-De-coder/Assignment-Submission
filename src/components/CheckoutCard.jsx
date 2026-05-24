import React from 'react';
import WalletBalance from './WalletBalance';
import CouponSection from './CouponSection';
import PricingBreakdown from './PricingBreakdown';

export default function CheckoutCard({
  couponExpanded,
  setCouponExpanded,
  selectedCoupon,
  setSelectedCoupon,
  couponCodeInput,
  setCouponCodeInput,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
      <WalletBalance />

      <CouponSection
        couponExpanded={couponExpanded}
        setCouponExpanded={setCouponExpanded}
        selectedCoupon={selectedCoupon}
        setSelectedCoupon={setSelectedCoupon}
        couponCodeInput={couponCodeInput}
        setCouponCodeInput={setCouponCodeInput}
      />

      <PricingBreakdown />

      <button
        type="button"
        className="w-full py-3.5 bg-[#2563eb] hover:bg-blue-700 text-white font-extrabold text-base rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer text-center"
      >
        Proceed to Payment
      </button>
    </div>
  );
}
