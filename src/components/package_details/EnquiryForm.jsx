import React from "react";
import { useSelector } from "react-redux";

const EnquiryForm = () => {
  const userCompanyName = useSelector(
    (state) => state.public.particularItinerary?.user_company_name
  );

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Enquiry Form
      </h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="number"
          placeholder="Phone"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          Why Book {userCompanyName}?
        </h3>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li>• Wide range of exclusive deals with resorts.</li>
          <li>• 24/7 help line.</li>
          <li>• Clear and detailed package information.</li>
          <li>• Local support.</li>
          <li>• Deals on flight bookings.</li>
          <li>• Quick and easy booking.</li>
        </ul>
      </div>
    </div>
  );
};

export default EnquiryForm;
