import React from 'react';

export default function BillingForm({
  companyName,
  setCompanyName,
  email,
  setEmail,
  gstNumber,
  setGstNumber,
  panNumber,
  setPanNumber,
  premiseHouse,
  setPremiseHouse,
  street,
  setStreet,
  selectedState,
  setSelectedState,
  selectedCity,
  setSelectedCity,
  pincode,
  setPincode,
}) {
  return (
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
  );
}
