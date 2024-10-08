import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mobile Number:", mobileNumber);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={onClose}>
            <FaTimes className="text-black" />
          </button>
        </div>

        {/* Title */}
        <h2 className="text-center text-lg font-bold">Log in</h2>
        <div className="border-b-2 border-gray-200 my-2"></div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
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
          <button
            type="submit"
            className="bg-blue-800 text-white rounded-full py-2 px-4 w-full text-lg"
          >
            SUBMIT
          </button>
         
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
