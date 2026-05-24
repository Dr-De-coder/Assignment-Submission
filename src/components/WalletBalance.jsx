import React from 'react';

export default function WalletBalance() {
  return (
    <div className="flex items-center justify-between border border-slate-100 rounded-xl p-3.5 bg-slate-50/50">
      <div className="flex items-center gap-3">
        <div className="text-blue-500 bg-blue-50 p-2 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-800">Wallet Balance</h4>
          <p className="text-xs text-slate-400 font-semibold mt-0.5">₹500.00 available</p>
        </div>
      </div>
      <button
        type="button"
        className="px-4 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-lg shadow-sm transition-all cursor-pointer"
      >
        Apply
      </button>
    </div>
  );
}
