import React from 'react';

export default function WalletBalance() {
  return (
    <div className="flex items-center justify-between gap-2 border border-slate-200 rounded-xl p-3 sm:p-3.5 bg-white w-full min-w-0">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <div className="text-blue-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900">Wallet Balance</h4>
          <p className="text-xs text-slate-500 mt-0.5">₹500.00 available</p>
        </div>
      </div>
      <button
        type="button"
        className="px-3 sm:px-4 py-1.5 bg-white border border-slate-200 text-blue-600 font-semibold text-xs rounded-lg cursor-pointer shrink-0"
      >
        Apply
      </button>
    </div>
  );
}
