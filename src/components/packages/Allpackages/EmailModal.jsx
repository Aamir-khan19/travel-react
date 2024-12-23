import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const EmailModal = ({ onClose }) => {
  const navigate = useNavigate();
  const particularItineraryId = useSelector(state => state.public.particularItineraryId);

  const [email, setEmail] = useState('');
  const [emailReqErr, setEmailReqErr] = useState('');

  const handleEmailSubmit = function(){
    setEmailReqErr("");
  if(!email.trim()){
   setEmailReqErr("Please Enter Your Email Id");

   return;
  }


  navigate(`/package-details/${particularItineraryId}`);

  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={onClose}>
            <FaTimes className=" text-black font-bold text-2xl" />
          </button>
        </div>


        {/* Div */}
         
        <div className="flex flex-col items-center justify-center">
  <div className=" rounded-lg w-full max-w-sm">
    <label
      htmlFor="email"
      className="block text-lg font-semibold text-gray-700 mb-2"
    >
      Email Address
    </label>

    <input
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    name='email'
    type="email"
    id="email"
    placeholder="Enter your email"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800 placeholder-gray-400"
    />

   <p className=' text-sm font-semibold text-red-500 mt-4'>{emailReqErr}</p>

    <button
    onClick={handleEmailSubmit}
      className="mt-4 w-full bg-blue-800 text-white font-bold py-2 rounded-full hover:shadow-lg hover:from-purple-600 hover:to-blue-600 transition-transform transform hover:-translate-y-1"
    >
      Submit
    </button>

  </div>
</div>

      </div>

    </div>
  );
};

export default EmailModal;
