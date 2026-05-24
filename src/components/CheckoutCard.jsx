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
    <div className="space-y-4">
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
        className="w-full py-3.5 bg-[#2563eb] text-white font-bold text-base rounded-xl cursor-pointer text-center"
      >
        Proceed to Payment
      </button>
    </div>
  );
}
