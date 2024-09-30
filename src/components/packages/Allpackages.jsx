


import React from "react";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import  packagedata  from "./Allpackages/packagedata";

const Allpackages = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-[#01055b]">
          Explore Our Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagedata.map((elem, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={elem?.image}
                className="h-60 w-full object-cover"
                alt="Package"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                  ₹{elem?.price} / Per Person
                  </h3>
                  <div className="flex items-center">
                    <FaRegStar className="text-yellow-400 text-xl" />
                    <span className="text-sm text-gray-600 ml-1">4.9 (1.2k Reviews)</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {elem?.category}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {elem?.title}
                </p>
                <Link
                  to={`/package-details/${elem?.id}`}
                  className="block bg-blue-500 text-white py-2 px-4 rounded-lg text-center shadow-md hover:bg-blue-600 hover:shadow-lg transition-all"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allpackages;
