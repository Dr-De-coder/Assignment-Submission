import React from 'react';

export default function BackToPlans() {
  return (
    <div className="p-3 sm:px-5 sm:py-2 flex items-center justify-start cursor-pointer select-none">
      <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors duration-200">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back to plans</span>
      </button>
    </div>
  );
}
