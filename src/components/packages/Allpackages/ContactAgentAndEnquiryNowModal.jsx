import React, { useEffect, useRef } from "react";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ContactAgentAndEnquiryNowModal({ onClose, setIsPhoneNumberModal,  setIsEnquiryModal}) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handlePhoneNumberModal = function(){
    setIsPhoneNumberModal(true);
    onClose();
  }

  const handleEnquiryFormModal = function(){
    setIsEnquiryModal(true);
    onClose();
  }

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[90]" />
      <div
        ref={modalRef}
        className="z-[100] fixed top-[50vh] left-1/2 transform -translate-x-1/2 max-w-4xl bg-white p-4 rounded-lg shadow-lg flex justify-center gap-4"
      >
        <button onClick={handlePhoneNumberModal} className="flex items-center px-8 py-3 bg-blue-900 text-white rounded-lg shadow hover:bg-indigo-900 transition duration-300">
          <FaPhone className="mr-2" /> CONTACT AGENT
        </button>
       
          <button onClick={handleEnquiryFormModal} className="flex items-center px-8 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition duration-300">
            <FaEnvelope className="mr-2" /> ENQUIRE NOW
          </button>
        
      </div>
    </>
  );
}

export default ContactAgentAndEnquiryNowModal;
