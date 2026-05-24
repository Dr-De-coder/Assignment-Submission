import React from 'react';

export default function SelectedPlanCard() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
      <div className="flex justify-between items-center gap-4">
        <div className="flex-1">
          <div className="flex items-baseline text-slate-900">
            <span className="text-3xl font-extrabold tracking-tight">₹4,999</span>
            <span className="text-slate-400 text-sm font-semibold ml-1">/month</span>
          </div>
          <p className="text-xs font-semibold text-slate-400 mt-1">
            Includes 5,000 credits/mo.
          </p>
        </div>

        <div className="border border-blue-100 bg-[#eff6ff] rounded-xl p-2.5 px-4 text-right flex flex-col justify-center">
          <span className="text-[10px] tracking-wider text-blue-500 font-extrabold uppercase mb-0.5">
            SELECTED PLAN
          </span>
          <span className="text-base font-extrabold text-slate-900">Startup</span>
        </div>
      </div>

      <button
        type="button"
        className="w-full py-2.5 px-4 mt-5 bg-white border border-blue-200 hover:bg-blue-50/50 text-blue-600 font-bold text-sm rounded-xl flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
      >
        <svg
          className="w-4 h-4 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l3-3m0 0l3 3m-3-3v12" />
        </svg>
        <span>Upgrade to Growth Plan</span>
      </button>
    </div>
  );
}
