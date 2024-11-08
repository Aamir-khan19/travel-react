import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { companiesStoreAsync } from '../../../features/company/companySlice';

const servicesOptions = [
    { value: 'b2b_services', label: 'B2B Services' },
    { value: 'car_rental', label: 'Car Rental' },
    { value: 'dmc', label: 'DMC' },
    { value: 'forex_services', label: 'Forex Services' },
    { value: 'full_service_agency', label: 'Full Service Agency' },
    { value: 'hotel_lodging', label: 'Hotel and Lodging' },
    { value: 'local_transportation', label: 'Local Transportation' },
    { value: 'package_booking', label: 'Package Booking' },
    { value: 'ticketing', label: 'Ticketing' },
    { value: 'visa_passport', label: 'Visa and Passport' }
  ];

function CreateCompanyDetails() {
    const dispatch = useDispatch();  
    const user = useSelector(state => state.users.user);

    const [companyImageUrl, setCompanyImageUrl] = useState(null);
    const [companyImage, setCompanyImage] = useState({});
  
    const [companyDetails, setCompanyDetails] = useState({
      company_name: '',
      company_address: '',
      company_city: '',
      pin_code: '',
      company_status: '',
      services_offered: [],
      number_of_staff: '',
      about_company: '',
      company_website: ''
    });
  
  
    const handleLogoUpload = (event) => {
      setCompanyImage(event.target.files[0]);
      setCompanyImageUrl(URL.createObjectURL(event.target.files[0]));
    };
  
    const handleSaveCompanyDetails = () => {
      console.log('Company details saved:', companyDetails);

      if(companyImage?.name){
        dispatch(companiesStoreAsync({...companyDetails, company_image: companyImage}));
      }
      else{
        dispatch(companiesStoreAsync({...companyDetails}));
      }
     
    };


    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#7C3AED' : provided.backgroundColor, // Purple background when selected
          color: state.isSelected ? 'white' : 'black',                             // White text when selected
        }),
        multiValue: (provided) => ({
          ...provided,
          backgroundColor: '#7C3AED', // Purple background for selected items
          color: 'white',
        }),
        multiValueLabel: (provided) => ({
          ...provided,
          color: 'white',
        }),
        multiValueRemove: (provided) => ({
          ...provided,
          color: 'white',
          '&:hover': { backgroundColor: '#5B21B6' }, // Darker purple on hover
        }),
      };



      useEffect(()=>{
      setCompanyDetails({...companyDetails, company_name: user?.company_name || ''})
      }, [user])

  return (
    <div className="flex flex-col items-center lg:items-start gap-8">
    {/* Company Logo */}
    <div className="flex justify-center">
      <label htmlFor="logo-upload">
        <div className="relative w-64 h-64 border border-gray-300 bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200">
          {companyImageUrl ? (
            <img src={companyImageUrl} alt="Company Logo" className="object-cover w-full h-full" />
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
      <input readOnly={true} type="text" placeholder="Company Name" className="w-full p-3 border border-gray-300 rounded-md" value={companyDetails.company_name} onChange={e => setCompanyDetails({ ...companyDetails, company_name: e.target.value })} />

      <label className="block text-gray-700">Company Address</label>
      <input type="text" placeholder="Company Address" className="w-full p-3 border border-gray-300 rounded-md" value={companyDetails.company_address} onChange={e => setCompanyDetails({ ...companyDetails, company_address: e.target.value })} />

      <label className="block text-gray-700">Company City</label>
      <input type="text" placeholder="Company City" className="w-full p-3 border border-gray-300 rounded-md" value={companyDetails.company_city} onChange={e => setCompanyDetails({ ...companyDetails, company_city: e.target.value })} />

      <label className="block text-gray-700">Pin Code / Zip Code</label>
      <input type="text" placeholder="Pin Code / Zip Code" className="w-full p-3 border border-gray-300 rounded-md" value={companyDetails.pin_code} onChange={e => setCompanyDetails({ ...companyDetails, pin_code: e.target.value })} />


      <label className="block text-gray-700">Company Website</label>
      <input type="text" placeholder="Company Website" className="w-full p-3 border border-gray-300 rounded-md" value={companyDetails.company_website} onChange={e => setCompanyDetails({ ...companyDetails, company_website: e.target.value })} />


      <label className="block text-gray-700">Company Status</label>
      <select className="w-full p-3 border border-gray-300 rounded-md" value={companyDetails.company_status} onChange={e => setCompanyDetails({ ...companyDetails, company_status: e.target.value })}>
        <option value="">Company Status</option>
        <option value="Sole Proprietorship">Sole Proprietorship</option>
        <option value="PartnerShip">Partnership</option>
        <option value="LLP">LLP</option>
        <option value="Private Limited">Private Limited</option>
        <option value="Public Limited">Public Limited</option>
      </select>

      {/* Services Offered */}
      <label className="block text-gray-700">Services Offered</label>
      <div className="space-y-2">
      <Select
        styles={customStyles}
        isMulti
        options={servicesOptions}
        onChange={(e)=>setCompanyDetails((preVal)=> ({...preVal, services_offered: e}))}
        placeholder="Select a service or services"
        className="rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <label className="block text-gray-700">Number of Staff</label>
      <select className="w-full p-3 border border-gray-300 rounded-md" value={companyDetails.number_of_staff} onChange={e => setCompanyDetails({ ...companyDetails, number_of_staff: e.target.value })}>
        <option value="1-10">1-10</option>
        <option value="11-50">11-50</option>
        <option value="51-200">51-200</option>
        <option value="201-500">201-500</option>
        <option value="500+">500+</option>
      </select>

      <label className="block text-gray-700">About Company</label>
      <textarea placeholder="About Company" className="w-full p-3 border border-gray-300 rounded-md" value={companyDetails.about_company} onChange={e => setCompanyDetails({ ...companyDetails, about_company: e.target.value })}></textarea>

      <button className="bg-purple-600 text-white px-5 py-2 rounded-md" onClick={handleSaveCompanyDetails}>Save Company Details</button>
    </div>
  </div>
  )
}

export default CreateCompanyDetails
