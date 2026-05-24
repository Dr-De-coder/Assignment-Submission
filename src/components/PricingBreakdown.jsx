import React from 'react';

export default function PricingBreakdown() {
  return (
    <div className="border-t border-slate-100 pt-4 space-y-2.5">
      <div className="flex justify-between text-sm text-slate-500 font-semibold">
        <span>Subtotal</span>
        <span className="text-slate-800">₹14,999.00</span>
      </div>
      <div className="flex justify-between text-sm text-slate-500 font-semibold">
        <span>Tax (18% GST)</span>
        <span className="text-slate-800">₹1,079.64</span>
      </div>
      <div className="flex justify-between items-baseline pt-2 border-t border-slate-100">
        <span className="text-base font-extrabold text-slate-800">Total due today</span>
        <span className="text-xl font-extrabold text-blue-600">₹16,078.64</span>
      </div>
    </div>
  );
}
