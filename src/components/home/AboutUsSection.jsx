import React from 'react';
import Goa from "/Images/Homepageimages/goa2.webp";
import Rishikesh from "/Images/Homepageimages/rishikesh.webp"
import { useNavigate } from 'react-router-dom';

const AboutUsSection = () => {
    const navigate = useNavigate();

    const handleNavigate = function(){
    navigate("/about");
    }

  return (
    <div className="flex flex-wrap justify-center items-center p-6 bg-white">
      {/* Left Section - Images */}
      <div className="relative w-full lg:w-[40%] flex justify-center md:justify-start items-center">
        <div className="relative">
          <img
            src={Goa}
            alt="Beach"
            className="rounded-full w-[250px] h-[300px] md:w-[320px] md:h-[400px] object-cover border-4 border-white shadow-lg"
          />
          <img
            src={Rishikesh}
            alt="Mountain"
            className="absolute bottom-4 md:right-[-50px] right-[-20px] rounded-full w-[100px] h-[125px] md:w-[130px] md:h-[180px] object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>
      
      {/* Right Section - Text */}
      <div className="w-full lg:w-[60%] text-center lg:text-left mt-6 lg:mt-0">
        <h3 className="text-orange-500 text-3xl font-bold uppercase">About Us</h3>
        <h2 className="text-gray-900 text-2xl font-bold mt-2">
          We are professional planners for your trip
        </h2>
        <p className="text-gray-600 mt-4">
        Welcome to Travelnworld! B2B travel services for agents We empower travel industry businesses through digital services such as Travel agent supplier India, DMC travel partnership India, Wholesale hotel booking platform, Best hotel deals for travel agents, travel agent in dehi, social media management, website development, digital marketing, and targeted advertising on Instagram and Facebook. Our tailored solutions boost online presence and drive growth. We offer three service packages: Basic (social media links, dashboard access, unlimited inquiries, templates, verified leads, 24/7 support), Standard (includes Basic features plus a domain, website, and banner listing), and Premium (includes Standard features plus additional templates and leads). Our dedicated team provides the tools and strategies needed to thrive
        </p>

        <button onClick={handleNavigate} className='mt-6 px-6 py-3 bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-800 transition'>
        Know more
        </button>

      </div>
    </div>
  );
};

export default AboutUsSection;
