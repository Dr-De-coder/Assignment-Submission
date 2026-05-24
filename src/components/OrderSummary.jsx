import React from 'react';
import SelectedPlanCard from './SelectedPlanCard';
import CheckoutCard from './CheckoutCard';

export default function OrderSummary({
  couponExpanded,
  setCouponExpanded,
  selectedCoupon,
  setSelectedCoupon,
  couponCodeInput,
  setCouponCodeInput,
}) {
  return (
    <div className="space-y-4 sm:space-y-6 w-full min-w-0 lg:sticky lg:top-24">
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-3 sm:mb-4">
          Order Summary
        </h2>
        <SelectedPlanCard />
      </div>

      <CheckoutCard
        couponExpanded={couponExpanded}
        setCouponExpanded={setCouponExpanded}
        selectedCoupon={selectedCoupon}
        setSelectedCoupon={setSelectedCoupon}
        couponCodeInput={couponCodeInput}
        setCouponCodeInput={setCouponCodeInput}
      />
    </div>
  );
}
