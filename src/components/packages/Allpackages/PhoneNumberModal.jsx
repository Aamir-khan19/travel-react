import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneNumberModal = ({ onClose, setIsEmailModal, mobileNumber, setMobileNumber }) => {
  const [mobileNumberReqErr, setMobileNumberReqErr] = useState("");

  
const handlePhoneNumberSubmit = function(){
  setMobileNumberReqErr("");

  if(!mobileNumber.trim()){
    setMobileNumberReqErr("Please Enter Your Phone Number");

    return;
  }


    onClose();
    setIsEmailModal(true);
}
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[90]">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={onClose}>
            <FaTimes className="text-black text-2xl" />
          </button>
        </div>


        {/* Div */}
        <div className="flex flex-col items-center space-y-4">
          <PhoneInput
            country={'in'}
            value={mobileNumber}
            onChange={setMobileNumber}
            inputClass="!w-full !h-12 !border !rounded-lg"
            inputStyle={{
              width: "100%",
              height: "3rem",
            }}
          />

<div className=' w-full'>
<p className=' text-red-500 text-sm font-semibold'>{mobileNumberReqErr}</p>
</div>
         

          <button
          onClick={handlePhoneNumberSubmit}
            type="submit"
            className="bg-blue-900 text-white rounded-full py-2 px-4 w-full text-lg"
          >
            SUBMIT
          </button>
         
        </div>

      </div>
    </div>
  );
};

export default PhoneNumberModal;
