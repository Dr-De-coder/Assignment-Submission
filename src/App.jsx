import React, { useState } from 'react';
import Header from './Header';

function App() {
  // Dropdown states
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  
  // Coupon states
  const [couponExpanded, setCouponExpanded] = useState(true);
  const [selectedCoupon, setSelectedCoupon] = useState('WELCOME20'); // 'WELCOME20' or 'ANNUAL50'
  const [couponCodeInput, setCouponCodeInput] = useState('');

  // Form input fields
  const [companyName, setCompanyName] = useState('abhigyan');
  const [email, setEmail] = useState('abhigyan.pandey@getreelax.com');
  const [gstNumber, setGstNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [premiseHouse, setPremiseHouse] = useState('');
  const [street, setStreet] = useState('');
  const [pincode, setPincode] = useState('');

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F6F8] text-slate-800 selection:bg-blue-500 selection:text-white font-sans">
      
      {/* 1. Header Component with dynamic hover selection border */}
      <Header />

      {/* Main page content wraps the sub-components */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* 2. "Back to Plans" Bar (Interactive Figma border hover) */}
        <div className="group/plans relative mb-5 p-[3px] rounded-lg transition-all duration-300 ease-in-out">
          {/* Transparent spacer border that becomes blue on hover */}
          <div className="border-[3px] border-transparent hover:border-[#1A73E8] rounded-lg transition-all duration-300 ease-in-out p-3 bg-transparent flex items-center justify-start cursor-pointer select-none">
            <button className="flex items-center gap-2 text-slate-600 group-hover/plans:text-slate-900 font-medium text-sm transition-colors duration-200">
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
        </div>

        {/* 3. Main Grid layout representing the checkout (Interactive Figma border hover) */}
        <div className="border-[3px] border-transparent hover:border-[#1A73E8] rounded-2xl p-4 sm:p-5 transition-all duration-300 ease-in-out">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* Left Side Column: Billing details Form */}
            <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                Review your details
              </h1>
              <h2 className="text-lg font-bold text-slate-500 mb-6">
                Billing Information
              </h2>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  
                  {/* Company Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Company Name"
                      className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 font-sans text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 font-sans text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all"
                    />
                  </div>

                  {/* GST Number */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                      GST Number <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={gstNumber}
                      onChange={(e) => setGstNumber(e.target.value)}
                      placeholder="GST Number"
                      className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 font-sans text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all"
                    />
                  </div>

                  {/* PAN Number */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                      PAN Number <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={panNumber}
                      onChange={(e) => setPanNumber(e.target.value)}
                      placeholder="PAN Number"
                      className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 font-sans text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all"
                    />
                  </div>

                  {/* Premise/House no. */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                      Premise/House no.
                    </label>
                    <input
                      type="text"
                      value={premiseHouse}
                      onChange={(e) => setPremiseHouse(e.target.value)}
                      placeholder="Premise/House no."
                      className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 font-sans text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all"
                    />
                  </div>

                  {/* Street */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                      Street
                    </label>
                    <input
                      type="text"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      placeholder="Street"
                      className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 font-sans text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all"
                    />
                  </div>

                  {/* State Dropdown */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                      State
                    </label>
                    <div className="relative">
                      <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg text-slate-800 font-sans text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select state</option>
                        <option value="delhi">Delhi</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="tamilnadu">Tamil Nadu</option>
                        <option value="uttarpradesh">Uttar Pradesh</option>
                      </select>
                      {/* Chevron Arrow */}
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-blue-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* City Dropdown */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                      City
                    </label>
                    <div className="relative">
                      <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg text-slate-800 font-sans text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select city</option>
                        <option value="newdelhi">New Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bengaluru">Bengaluru</option>
                        <option value="chennai">Chennai</option>
                        <option value="noida">Noida</option>
                      </select>
                      {/* Chevron Arrow */}
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-blue-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Country (Disabled / Default India) */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                      Country
                    </label>
                    <input
                      type="text"
                      value="India"
                      disabled
                      className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-lg text-slate-500 font-sans text-sm select-none cursor-not-allowed"
                    />
                  </div>

                  {/* Pin Code */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1.5">
                      Pin Code
                    </label>
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="Pincode"
                      className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 font-sans text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all"
                    />
                  </div>

                </div>

                {/* Cancel & Save Buttons */}
                <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    className="px-6 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-bold text-sm hover:bg-slate-50 active:scale-95 transition-all duration-150 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-sm rounded-lg shadow-sm active:scale-95 transition-all duration-150 cursor-pointer"
                  >
                    Save Details
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side Column: Order Summary Details */}
            <div className="space-y-6">
              
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-4 pl-1">
                  Order Summary
                </h2>

                {/* Card 1: Selected Plan Details */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex justify-between items-center gap-4">
                    
                    {/* Price & Credits Info */}
                    <div className="flex-1">
                      <div className="flex items-baseline text-slate-900">
                        <span className="text-3xl font-extrabold tracking-tight">₹4,999</span>
                        <span className="text-slate-400 text-sm font-semibold ml-1">/month</span>
                      </div>
                      <p className="text-xs font-semibold text-slate-400 mt-1">
                        Includes 5,000 credits/mo.
                      </p>
                    </div>

                    {/* Startup Box Badge */}
                    <div className="border border-blue-100 bg-[#eff6ff] rounded-xl p-2.5 px-4 text-right flex flex-col justify-center">
                      <span className="text-[10px] tracking-wider text-blue-500 font-extrabold uppercase mb-0.5">
                        SELECTED PLAN
                      </span>
                      <span className="text-base font-extrabold text-slate-900">
                        Startup
                      </span>
                    </div>

                  </div>

                  {/* Upgrade to Growth Plan Button */}
                  <button 
                    type="button"
                    className="w-full py-2.5 px-4 mt-5 bg-white border border-blue-200 hover:bg-blue-50/50 text-blue-600 font-bold text-sm rounded-xl flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
                  >
                    {/* Arrow Up Circle */}
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
              </div>

              {/* Card 2: Wallet, Coupon, Pricing and Checkout button */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
                
                {/* Wallet Balance box */}
                <div className="flex items-center justify-between border border-slate-100 rounded-xl p-3.5 bg-slate-50/50">
                  <div className="flex items-center gap-3">
                    {/* Wallet Icon */}
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

                {/* Apply Coupon Accordion */}
                <div className="border-t border-slate-100 pt-3">
                  <div 
                    onClick={() => setCouponExpanded(!couponExpanded)}
                    className="flex items-center justify-between py-2 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2.5 text-slate-700">
                      {/* Tag Icon */}
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-extrabold text-sm text-slate-800">Apply Coupon</span>
                    </div>
                    {/* Chevron icon */}
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

                  {/* Accordion Content */}
                  {couponExpanded && (
                    <div className="mt-3 space-y-3 pt-1">
                      
                      {/* Input Box & Apply button */}
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

                      {/* Coupon Options */}
                      <div className="space-y-2.5">
                        
                        {/* Option 1: WELCOME20 */}
                        <div 
                          onClick={() => setSelectedCoupon('WELCOME20')}
                          className={`flex items-center justify-between border rounded-xl p-3 cursor-pointer select-none transition-all ${selectedCoupon === 'WELCOME20' ? 'border-blue-200 bg-blue-50/20' : 'border-slate-100 hover:bg-slate-50/50'}`}
                        >
                          <div>
                            <span className={`text-xs font-extrabold ${selectedCoupon === 'WELCOME20' ? 'text-slate-900' : 'text-slate-500'}`}>
                              WELCOME20
                            </span>
                            <p className="text-[10px] text-slate-400 font-semibold mt-0.5">20% off on your first month</p>
                          </div>
                          
                          {/* Custom Radio Button */}
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${selectedCoupon === 'WELCOME20' ? 'border-blue-500 bg-blue-500' : 'border-slate-300 bg-white'}`}>
                            {selectedCoupon === 'WELCOME20' && (
                              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            )}
                          </div>
                        </div>

                        {/* Option 2: ANNUAL50 */}
                        <div 
                          onClick={() => setSelectedCoupon('ANNUAL50')}
                          className={`flex items-center justify-between border rounded-xl p-3 cursor-pointer select-none transition-all ${selectedCoupon === 'ANNUAL50' ? 'border-blue-200 bg-blue-50/20' : 'border-slate-100 hover:bg-slate-50/50'}`}
                        >
                          <div>
                            <span className={`text-xs font-extrabold ${selectedCoupon === 'ANNUAL50' ? 'text-slate-900' : 'text-slate-500'}`}>
                              ANNUAL50
                            </span>
                            <p className="text-[10px] text-slate-400 font-semibold mt-0.5">50% off on annual plans</p>
                          </div>
                          
                          {/* Custom Radio Button */}
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${selectedCoupon === 'ANNUAL50' ? 'border-blue-500 bg-blue-500' : 'border-slate-300 bg-white'}`}>
                            {selectedCoupon === 'ANNUAL50' && (
                              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            )}
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                </div>

                {/* Subtotals list */}
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

                {/* Proceed to Payment CTA */}
                <button
                  type="button"
                  className="w-full py-3.5 bg-[#2563eb] hover:bg-blue-700 text-white font-extrabold text-base rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer text-center"
                >
                  Proceed to Payment
                </button>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
