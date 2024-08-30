import React from "react";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const Allpackages = () => {
  return (
    <>
      <div className="flex justify-center items-center py-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto px-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex flex-col gap-5 border p-4 rounded-md">
           <img
            src="/Images/aboutPageImages/about.jpg"
            className="h-35 w-[570px] object-cover rounded-2xl"
            alt="Package Image"
          />
            <div className="flex flex-col justify-between">
              <div className="flex flex-row justify-between items-center">
                <h1 className="text-lg   md:text-lg sm:text-[12px] font-bold">$300 / Per Person</h1>
                <div className="flex flex-row items-center gap-1">
                  <FaRegStar className="text-yellow-400 text-2xl" />
                  <h1 className="text-xs md:text-lg sm:text-[12px] text-gray-600">4.9 (1.2k Reviews)</h1>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <h1 className="text-xl    md:text-lg sm:text-md font-semibold">Maafushi, Maldives</h1>
                <h1 className="text-xs   md:text-lg sm:text-md text-gray-600">
                  Maafushi is a small island located in the Maldives known for its
                  beautiful beaches and clear waters, and is a popular destination for
                  tourists looking for a tropical getaway.
                </h1>
              </div>
              <button className="p-3 mt-4 w-fit bg-blue-500 text-white rounded-md shadow-md flex items-center justify-center gap-2 transform transition-transform hover:scale-105">
                See Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>

      
    </>
  );
};

export default Allpackages;


