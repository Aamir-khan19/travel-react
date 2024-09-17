import React, { useState } from 'react';

const RequestQuoteModal = ({isRequestQuoteModalOpen, handleRequestQuoteCloseModal}) => {
 

  return (
    <div>

      {isRequestQuoteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-2 rounded-lg shadow-lg w-[400px] max-[600]:w-[320px] max-[400px]:w-[280px] relative px-4 pb-4">
            <button 
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-4xl -m-2" 
              onClick={handleRequestQuoteCloseModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2 text-center">Request a Quote</h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                placeholder="Email" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="tel" 
                placeholder="Phone" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="text" 
                placeholder="Destination" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea 
                placeholder="Message" 
                rows="4" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button 
                type="submit" 
                className="w-full p-3 text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg hover:opacity-90 transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestQuoteModal;
