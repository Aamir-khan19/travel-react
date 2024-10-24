import React, { useState } from 'react';

const servicesOptions = [
  'Web Development',
  'App Development',
  'Digital Marketing',
  'SEO Services',
  'Graphic Design'
];

const CompanyProfile = () => {
  const [companyLogo, setCompanyLogo] = useState(null);
  const [companyDetails, setCompanyDetails] = useState({
    companyName: '',
    companyAddress: '',
    companyCity: '',
    pinCode: '',
    companyStatus: 'Sole Proprietorship',
    servicesOffered: [],
    noOfStaff: '1-10',
    aboutCompany: ''
  });

  const [howItWorks, setHowItWorks] = useState({
    title: '',
    description: '',
    images: []
  });

  const [termsAndConditions, setTermsAndConditions] = useState({
    title: '',
    description: ''
  });

  const handleLogoUpload = (event) => {
    setCompanyLogo(URL.createObjectURL(event.target.files[0]));
  };

  const handleServiceRemove = (service) => {
    setCompanyDetails({
      ...companyDetails,
      servicesOffered: companyDetails.servicesOffered.filter(item => item !== service)
    });
  };

  const handleAddService = (service) => {
    if (!companyDetails.servicesOffered.includes(service)) {
      setCompanyDetails({
        ...companyDetails,
        servicesOffered: [...companyDetails.servicesOffered, service]
      });
    }
  };

  const handleSaveCompanyDetails = () => {
    console.log('Company details saved:', companyDetails);
  };

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className=' text-[#594cda] text-2xl'>Company Profile</h1>
        <h2 className="text-gray-700">Set or Edit Your Company Information for a Professional Presence</h2>
      </div>

      {/* Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Company Logo */}
        <div className="flex justify-center">
          <label htmlFor="logo-upload">
            <div className="relative w-64 h-64 border border-gray-300 bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200">
              {companyLogo ? (
                <img src={companyLogo} alt="Company Logo" className="object-cover w-full h-full" />
              ) : (
                <span className="text-gray-600">Upload Company Logo</span>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
          </label>
          <input id="logo-upload" type="file" onChange={handleLogoUpload} className="hidden" />
        </div>

        {/* Company Details */}
        <div className="space-y-4">
          <label className="block text-gray-700">Company Name</label>
          <input type="text" placeholder="Company Name" className="w-full p-3 border border-gray-300 rounded-md" value={companyDetails.companyName} onChange={e => setCompanyDetails({ ...companyDetails, companyName: e.target.value })} />

          <label className="block text-gray-700">Company Address</label>
          <input type="text" placeholder="Company Address" className="w-full p-3 border border-gray-300 rounded-md" value={companyDetails.companyAddress} onChange={e => setCompanyDetails({ ...companyDetails, companyAddress: e.target.value })} />

          <label className="block text-gray-700">Company City</label>
          <input type="text" placeholder="Company City" className="w-full p-3 border border-gray-300 rounded-md" value={companyDetails.companyCity} onChange={e => setCompanyDetails({ ...companyDetails, companyCity: e.target.value })} />

          <label className="block text-gray-700">Pin Code / Zip Code</label>
          <input type="text" placeholder="Pin Code / Zip Code" className="w-full p-3 border border-gray-300 rounded-md" value={companyDetails.pinCode} onChange={e => setCompanyDetails({ ...companyDetails, pinCode: e.target.value })} />

          <label className="block text-gray-700">Company Status</label>
          <select className="w-full p-3 border border-gray-300 rounded-md" value={companyDetails.companyStatus} onChange={e => setCompanyDetails({ ...companyDetails, companyStatus: e.target.value })}>
            <option value="Sole Proprietorship">Sole Proprietorship</option>
            <option value="PartnerShip">Partnership</option>
            <option value="LLP">LLP</option>
            <option value="Private Limited">Private Limited</option>
            <option value="Public Limited">Public Limited</option>
          </select>

          {/* Services Offered */}
          <label className="block text-gray-700">Services Offered</label>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {companyDetails.servicesOffered.map(service => (
                <span key={service} className="flex items-center bg-purple-600 text-white rounded-full px-3 py-1">
                  {service}
                  <button onClick={() => handleServiceRemove(service)} className="ml-2 text-xs">✕</button>
                </span>
              ))}
            </div>
            <select onChange={e => handleAddService(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md">
              <option value="">Select a service</option>
              {servicesOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <label className="block text-gray-700">Number of Staff</label>
          <select className="w-full p-3 border border-gray-300 rounded-md" value={companyDetails.noOfStaff} onChange={e => setCompanyDetails({ ...companyDetails, noOfStaff: e.target.value })}>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="500+">500+</option>
          </select>

          <label className="block text-gray-700">About Company</label>
          <textarea placeholder="About Company" className="w-full p-3 border border-gray-300 rounded-md" value={companyDetails.aboutCompany} onChange={e => setCompanyDetails({ ...companyDetails, aboutCompany: e.target.value })}></textarea>

          <button className="bg-purple-600 text-white px-5 py-2 rounded-md" onClick={handleSaveCompanyDetails}>Save Company Details</button>
        </div>
      </div>

      {/* How It Works Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Enhance Your Profile: Showcase your expertise by adding a 'How It Works' section</h3>
        <div className="space-y-4 mt-4">
          <label className="block text-gray-700">Title</label>
          <input type="text" placeholder="Title" className="w-full p-3 border border-gray-300 rounded-md" value={howItWorks.title} onChange={e => setHowItWorks({ ...howItWorks, title: e.target.value })} />

          <label className="block text-gray-700">Description</label>
          <textarea placeholder="Description" className="w-full p-3 border border-gray-300 rounded-md" value={howItWorks.description} onChange={e => setHowItWorks({ ...howItWorks, description: e.target.value })}></textarea>

          <div className="border-2 border-dashed border-gray-300 p-4 text-center">
            <label htmlFor="image-upload" className="cursor-pointer">Click to upload images</label>
            <input id="image-upload" type="file" className="hidden" multiple onChange={e => setHowItWorks({ ...howItWorks, images: [...e.target.files] })} />
          </div>

          <button className="bg-purple-600 text-white px-5 py-2 rounded-md float-right">Add</button>
        </div>
      </div>

      {/* Terms and Conditions Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Terms and Conditions</h3>
        <div className="space-y-4 mt-4">
          <label className="block text-gray-700">Title</label>
          <input type="text" placeholder="Title" className="w-full p-3 border border-gray-300 rounded-md" value={termsAndConditions.title} onChange={e => setTermsAndConditions({ ...termsAndConditions, title: e.target.value })} />

          <label className="block text-gray-700">Description</label>
          <textarea placeholder="Description" className="w-full p-3 border border-gray-300 rounded-md" value={termsAndConditions.description} onChange={e => setTermsAndConditions({ ...termsAndConditions, description: e.target.value })}></textarea>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
