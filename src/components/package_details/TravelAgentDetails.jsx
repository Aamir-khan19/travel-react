import React from 'react';
import { useSelector } from 'react-redux';
import conf from '../../../conf/conf';

const TravelAgentsDetails = () => {
     const particularItinerary = useSelector((state) => state.public.particularItinerary);

  return (
    <div className=" mt-10 bg-gradient-to-br from-light-blue-100 to-blue-300 dark:from-blue-700 dark:to-blue-900 shadow-lg rounded-lg p-6 max-w-md mx-auto hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center">
        {/* Company Logo */}
        <img
          src={conf?.laravelBaseUrl + "/" + particularItinerary?.user_company_logo}
          alt="Company Logo"
          className="w-auto h-32 object-contain border-4 rounded-sm shadow-md"
        />

        {/* Company Name */}
        <h2 className="text-2xl font-semibold text-blue-800 dark:text-white mt-4">
          {particularItinerary?.user_company_name}
        </h2>

        {/* Contact Information */}
        <div className="mt-4 space-y-2 text-center">
          <p className="text-blue-600 dark:text-blue-200">
            <span className="font-medium">Contact:</span> {particularItinerary?.user_phone}
          </p>
          <p className="text-blue-600 dark:text-blue-200">
            <span className="font-medium">WhatsApp:</span> {particularItinerary?.user_whatsapp}
          </p>
          <p className="text-blue-600 dark:text-blue-200">
            <span className="font-medium">Email:</span>{' '}
            <a
              href={`mailto:${particularItinerary?.user_email}`}
              className="underline hover:text-blue-400"
            >
              {particularItinerary?.user_email}
            </a>
          </p>
        </div>

    
      </div>
    </div>
  );
};

export default TravelAgentsDetails;
