import React, { useState } from 'react';

const BankDetails = () => {
  const [statementImage, setStatementImage] = useState(null);

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setStatementImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Bank Details</h2>
      <p className="text-gray-600 mb-6">
        Share your bank details for convenient payment processing and itinerary display
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1">Account Holder Name</label>
          <input 
            type="text" 
            placeholder="Enter Account Holder Name" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required 
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Account Number</label>
          <input 
            type="text" 
            placeholder="Enter Account Number" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required 
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">IFSC Code</label>
          <input 
            type="text" 
            placeholder="Enter IFSC Code" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required 
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Bank Name</label>
          <input 
            type="text" 
            placeholder="Enter Bank Name" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required 
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">UPI ID</label>
          <input 
            type="text" 
            placeholder="Enter UPI ID" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required 
          />
        </div>

        <div className="flex items-center gap-4 mt-4">
          <p className="text-gray-700">Upload Statement/Cancelled Cheque</p>
          <label 
            className="w-36 h-36 flex items-center justify-center border-2 border-dashed border-gray-400 bg-gray-100 cursor-pointer rounded-lg overflow-hidden"
          >
            {statementImage ? (
              <img src={statementImage} alt="Uploaded Statement" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-500">Select Image</span>
            )}
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload} 
              className="hidden" 
            />
          </label>
        </div>

      <div className=' flex justify-end'>
      <button 
          type="submit" 
          className=" bg-purple-600 text-white py-2 px-4 rounded-lg mt-6 hover:bg-purple-700 transition duration-300"
        >
          Save Changes
        </button>
      </div>
       
      </form>
    </div>
  );
};

export default BankDetails;
