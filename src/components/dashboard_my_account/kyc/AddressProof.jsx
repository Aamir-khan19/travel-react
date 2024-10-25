import React, { useState } from 'react';

const AddressProof = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [registrationProof, setRegistrationProof] = useState('');
  const [registrationId, setRegistrationId] = useState('');

  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="p-8 space-y-6">
      {/* Heading */}

      {/* Registration Proof Field */}
      <div className="space-y-2">
        <label htmlFor="registrationProof" className="block text-gray-700 font-semibold">
          Address Proof
        </label>
        <select
          id="registrationProof"
          className="w-full p-3 border border-gray-300 rounded-md"
          value={registrationProof}
          onChange={(e) => setRegistrationProof(e.target.value)}
        >
          <option value="">Select Registration ID</option>
          <option value="GST">Latest Elect/Phone/Water/Property Tax Bill or 
          Receipt in Company/Proprietorship Name </option>
          <option value="Current A/C Latest Statement">Current A/c Latest Statement</option>
          <option value="Udyog Aadhar">Udyog Aadhar</option>
         
          <option value="Incorporation Certificate">Name (ONLY Registered, Non-Notorized) Max 3 Months Old</option>
          
        </select>
      </div>

      {/* Registration ID Field */}
      <div className="space-y-2">
        <label htmlFor="registrationId" className="block text-gray-700 font-semibold">
          Address Proof ID
        </label>
        <input
          type="text"
          id="registrationId"
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Enter Number"
          value={registrationId}
          onChange={(e) => setRegistrationId(e.target.value)}
        />
      </div>

      {/* Upload Photo Field */}
      <div className="space-y-2">
        <label className="block text-gray-700 font-semibold">Upload Photo</label>
        <div className="flex justify-between items-center space-x-4">
          <span className="text-gray-600">Upload Image</span>
          <label htmlFor="image-upload">
            <div className="w-40 h-40 border-2 border-dashed border-gray-300 bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200">
              {selectedImage ? (
                <img src={selectedImage} alt="Uploaded" className="object-cover w-full h-full" />
              ) : (
                <span className="text-gray-600">Upload Image</span>
              )}
            </div>
          </label>
          <input
            id="image-upload"
            type="file"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressProof;





 

 

