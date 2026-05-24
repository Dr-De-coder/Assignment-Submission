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
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-4 pl-1">
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
