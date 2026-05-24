import React from 'react';

const COUPONS = [
  { code: 'WELCOME20', description: '20% off on your first month' },
  { code: 'ANNUAL50', description: '50% off on annual plans' },
];

function CouponOption({ code, description, isSelected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(code)}
      className={`flex items-center justify-between rounded-lg p-3 cursor-pointer select-none transition-all ${
        isSelected
          ? 'border-2 border-green-500 bg-white'
          : 'border border-slate-200 bg-white'
      }`}
    >
      <div>
        <span className="text-sm font-bold text-slate-900">{code}</span>
        <p className="text-xs text-slate-500 mt-0.5">{description}</p>
      </div>
      <div className="w-[18px] h-[18px] rounded-full border-2 border-blue-500 flex items-center justify-center shrink-0 bg-white">
        {isSelected && <div className="w-2 h-2 rounded-full bg-blue-500" />}
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
    <div className="border border-slate-200 rounded-xl p-3 sm:p-4 bg-white w-full min-w-0">
      <div
        onClick={() => setCouponExpanded(!couponExpanded)}
        className="flex items-center justify-between cursor-pointer select-none"
      >
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
          </svg>
          <span className="font-bold text-sm text-slate-900">Apply Coupon</span>
        </div>
        <svg
          className={`w-4 h-4 text-slate-500 transform transition-transform duration-200 ${couponExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {couponExpanded && (
        <div className="mt-4 space-y-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={couponCodeInput}
              onChange={(e) => setCouponCodeInput(e.target.value)}
              placeholder="Enter coupon code"
              className="w-full min-w-0 flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-all"
            />
            <button
              type="button"
              className="w-full sm:w-auto shrink-0 px-4 py-2 border border-slate-200 text-blue-600 bg-white text-sm font-semibold rounded-lg cursor-pointer"
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
