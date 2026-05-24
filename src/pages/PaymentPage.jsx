import React from 'react';
import BillingForm from '../components/BillingForm';
import OrderSummary from '../components/OrderSummary';

export default function PaymentPage({
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
  couponExpanded,
  setCouponExpanded,
  selectedCoupon,
  setSelectedCoupon,
  couponCodeInput,
  setCouponCodeInput,
}) {
  return (
    <div className="p-4 sm:p-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <BillingForm
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
        />

        <OrderSummary
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
