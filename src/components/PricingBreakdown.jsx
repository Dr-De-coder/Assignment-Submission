import React from 'react';

export default function PricingBreakdown() {
  return (
    <div className="space-y-2.5 px-0.5">
      <div className="flex justify-between text-sm">
        <span className="text-slate-500">Subtotal</span>
        <span className="font-bold text-slate-900">₹14,999.00</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-slate-500">Tax (18% GST)</span>
        <span className="font-bold text-slate-900">₹1,079.64</span>
      </div>
      <div className="flex justify-between items-center pt-3 border-t border-slate-200">
        <span className="text-sm font-bold text-slate-900">Total due today</span>
        <span className="text-2xl font-bold text-blue-600">16,078.64</span>
      </div>
    </div>
  );
}
