import React from 'react';

const COUPONS = [
  { code: 'WELCOME20', description: '20% off on your first month' },
  { code: 'ANNUAL50', description: '50% off on annual plans' },
];

function CouponOption({ code, description, isSelected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(code)}
      className={`flex items-center justify-between border rounded-xl p-3 cursor-pointer select-none transition-all ${
        isSelected ? 'border-blue-200 bg-blue-50/20' : 'border-slate-100 hover:bg-slate-50/50'
      }`}
    >
      <div>
        <span className={`text-xs font-extrabold ${isSelected ? 'text-slate-900' : 'text-slate-500'}`}>
          {code}
        </span>
        <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{description}</p>
      </div>
      <div
        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
          isSelected ? 'border-blue-500 bg-blue-500' : 'border-slate-300 bg-white'
        }`}
      >
        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
      </div>
    </div>
  );
}

export default function CouponSection({
  couponExpanded,
  setCouponExpanded,
  selectedCoupon,
  setSelectedCoupon,
  couponCodeInput,
  setCouponCodeInput,
}) {
  return (
    <div className="border-t border-slate-100 pt-3">
      <div
        onClick={() => setCouponExpanded(!couponExpanded)}
        className="flex items-center justify-between py-2 cursor-pointer select-none"
      >
        <div className="flex items-center gap-2.5 text-slate-700">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-extrabold text-sm text-slate-800">Apply Coupon</span>
        </div>
        <div className="text-slate-400">
          <svg
            className={`w-4 h-4 transform transition-transform duration-200 ${couponExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {couponExpanded && (
        <div className="mt-3 space-y-3 pt-1">
          <div className="flex gap-2">
            <input
              type="text"
              value={couponCodeInput}
              onChange={(e) => setCouponCodeInput(e.target.value)}
              placeholder="Enter coupon code"
              className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/5 transition-all"
            />
            <button
              type="button"
              className="px-4 py-2 border border-blue-200 text-blue-600 bg-white hover:bg-blue-50/30 text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              Apply
            </button>
          </div>

          <div className="space-y-2.5">
            {COUPONS.map((coupon) => (
              <CouponOption
                key={coupon.code}
                code={coupon.code}
                description={coupon.description}
                isSelected={selectedCoupon === coupon.code}
                onSelect={setSelectedCoupon}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
