import React, { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="w-full bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        
        {/* Left Side: Search Bar */}
        <div className="flex-1 max-w-md min-w-0">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Find Influencers to collaborate with"
              className="w-full pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 font-sans text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
            />
            {/* Search Icon */}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side: Navigation & Actions */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          
          {/* Upgrade Button */}
          <button 
            type="button"
            className="flex items-center gap-1.5 px-3 py-2 bg-[#f0a830] active:scale-95 text-white font-medium text-xs sm:text-sm rounded-lg shadow-sm transition-all cursor-pointer"
          >
            {/* Crown Icon */}
            <svg 
              className="w-4 h-4 text-white" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold">Upgrade</span>
          </button>

          {/* Create Campaign Button */}
          <button 
            type="button"
            className="flex items-center gap-1 px-3 py-2 bg-[#3b82f6] active:scale-95 text-white font-medium text-xs sm:text-sm rounded-lg shadow-sm transition-all cursor-pointer"
          >
            <span className="text-base sm:text-lg font-bold leading-none">+</span>
            <span className="font-semibold">Create Campaign</span>
          </button>

          {/* Profile & Hamburger Pill */}
          <div className="flex items-center gap-2 sm:gap-3 pl-1 sm:pl-2 py-1 pr-1 border border-slate-200 rounded-full bg-white transition-colors duration-150 cursor-pointer select-none">
            {/* Blue Profile Icon */}
            <div className="w-8 h-8 rounded-full bg-[#dbeafe] flex items-center justify-center text-[#2563eb]">
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                  clipRule="evenodd"
                />
              </svg>
            </div>
            
            {/* Hamburger Icon */}
            <div className="pr-2 sm:pr-3 text-slate-600">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
