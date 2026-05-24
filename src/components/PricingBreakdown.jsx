import React from 'react';

export default function PricingBreakdown() {
  return (
    <div className="space-y-2.5 w-full min-w-0">
      <div className="flex justify-between gap-2 text-sm">
        <span className="text-slate-500 shrink-0">Subtotal</span>
        <span className="font-bold text-slate-900 text-right">₹14,999.00</span>
      </div>
      <div className="flex justify-between gap-2 text-sm">
        <span className="text-slate-500 shrink-0">Tax (18% GST)</span>
        <span className="font-bold text-slate-900 text-right">₹1,079.64</span>
      </div>
      <div className="flex justify-between items-center gap-2 pt-3 border-t border-slate-200">
        <span className="text-sm font-bold text-slate-900 shrink-0">Total due today</span>
        <span className="text-xl sm:text-2xl font-bold text-blue-600 text-right">16,078.64</span>
      </div>
    </div>
  );
}
