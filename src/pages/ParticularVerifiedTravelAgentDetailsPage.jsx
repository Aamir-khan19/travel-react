import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import { publicGetParticularVerifiedTravelAgentAsync } from "../features/public/publicSlice";
import conf from "../../conf/conf";

const ParticularVerifiedTravelAgentDetailsPage = () => {
  const { id } = useParams(); // Get ID from URL
  const dispatch = useDispatch();
  const verifiedTravelAgentDetails = useSelector(state => state.public.verifiedTravelAgentDetails);
  const isLoading = useSelector(state=> state.public.isLoading);

useEffect(()=>{
dispatch(publicGetParticularVerifiedTravelAgentAsync(id));
}, [])

  return (
    <>
    <Navbar />

    {
         isLoading?  <div className=' flex justify-center h-[50vh] items-center'>

        <div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 
    
        </div>

        :


  
   
    <div className="min-h-screen bg-blue-900 text-white p-6">
      <div className="max-w-4xl mx-auto bg-blue-800 rounded-lg shadow-lg p-6">
        {/* User Info */}
        <div className="flex items-center gap-4">
          <img
            src={conf.laravelBaseUrl+"/"+verifiedTravelAgentDetails.company?.company_logo}
            alt="Company Logo"
            className="w-24 h-24 rounded-full border border-white"
          />
          <div>
            <h2 className="text-2xl font-bold">{verifiedTravelAgentDetails?.company_name}</h2>
            <p className="text-gray-300">{verifiedTravelAgentDetails?.role}</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold border-b border-gray-400 pb-2">Contact Information</h3>
          <p><strong>Phone:</strong> {verifiedTravelAgentDetails?.phone}</p>
          <p><strong>Email:</strong> {verifiedTravelAgentDetails?.email}</p>
          <p><strong>WhatsApp:</strong> {verifiedTravelAgentDetails?.whatsapp}</p>
          <p><strong>Website:</strong> <a href={verifiedTravelAgentDetails?.company?.company_website} className="text-yellow-300 underline">{verifiedTravelAgentDetails?.company?.company_website}</a></p>
        </div>

        {/* Social Media Links */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold border-b border-gray-400 pb-2">Social Media</h3>
          <div className="flex gap-4 mt-2">
            <a href={verifiedTravelAgentDetails?.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">Facebook</a>
            <a href={verifiedTravelAgentDetails?.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white">Instagram</a>
            <a href={verifiedTravelAgentDetails?.youtube} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-white">YouTube</a>
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold border-b border-gray-400 pb-2">Company Information</h3>
          <p><strong>Company:</strong> {verifiedTravelAgentDetails.company?.company_name}</p>
          <p><strong>Address:</strong> {verifiedTravelAgentDetails.company?.company_address}</p>
          <p><strong>City:</strong> {verifiedTravelAgentDetails.company?.company_city}</p>
          <p><strong>Pin Code:</strong> {verifiedTravelAgentDetails.company?.pin_code}</p>
        </div>
      </div>
    </div>


}


<Footer />
    </>
  );
};

export default ParticularVerifiedTravelAgentDetailsPage;
