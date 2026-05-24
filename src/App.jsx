import React, { useState } from 'react';
import Header from './Header';
import BackToPlans from './components/BackToPlans';
import PaymentPage from './pages/PaymentPage';

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
      
      {/* Header */}
      <Header />

      {/* Main page content */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <BackToPlans />

        <PaymentPage
          companyName={companyName}
          setCompanyName={setCompanyName}
          email={email}
          setEmail={setEmail}
          gstNumber={gstNumber}
          setGstNumber={setGstNumber}
          panNumber={panNumber}
          setPanNumber={setPanNumber}
          premiseHouse={premiseHouse}
          setPremiseHouse={setPremiseHouse}
          street={street}
          setStreet={setStreet}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          pincode={pincode}
          setPincode={setPincode}
          couponExpanded={couponExpanded}
          setCouponExpanded={setCouponExpanded}
          selectedCoupon={selectedCoupon}
          setSelectedCoupon={setSelectedCoupon}
          couponCodeInput={couponCodeInput}
          setCouponCodeInput={setCouponCodeInput}
        />
      </div>

    </div>
  );
}

export default App;
