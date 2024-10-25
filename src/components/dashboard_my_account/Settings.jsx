import React, { useState } from 'react';

const Settings = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className=" md:w-[70%] p-6 ">
      <h2 className="text-2xl font-bold mb-2">Settings</h2>
      <p className="text-gray-600 mb-6">
        Personalize your information and secure your account with email & mobile verification
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-4">
          <p className="text-gray-700">Upload Your Photo</p>
          <label 
            className="w-36 h-36 flex items-center justify-center border-2 border-dashed border-gray-400 bg-gray-100 cursor-pointer rounded-lg overflow-hidden"
          >
            {profileImage ? (
              <img src={profileImage} alt="Uploaded Profile" className="w-full h-full object-cover" />
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

        <div>
          <label className="block font-medium text-gray-700 mb-1">Your Name</label>
          <input 
            type="text" 
            placeholder="Enter Your Name" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required 
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Email Address</label>
          <input 
            type="email" 
            placeholder="Enter Your Email Address" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required 
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Phone Number</label>
          <input 
            type="text" 
            placeholder="Enter Your Phone Number with Country Code" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required 
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Gender</label>
          <select 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Preferred Language</label>
          <input 
            type="text" 
            placeholder="Enter Preferred Language" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
          />
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

export default Settings;
