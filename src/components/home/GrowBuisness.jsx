import React from "react";
import GrowBuisnessImg from "/Images/Homepageimages/grow_business.jpg";

const GrowBuisness = () => {
  return (
    <div
      className="  w-full h-fit bg-cover  bg-transparent bg-center  relative "
      style={{
        backgroundImage:
          `url(${GrowBuisnessImg})`,
      }}
    >
      <div className=" px-5 md:py-20 py-10 my-10 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-start items-center">
            <div className="md:w-1/2 lg:w-2/3">
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                Grow your <br className="hidden md:block" />
                <span className="text-white"> Business</span> with Us
              </h1>

              <a
                // type="button"
                href="/contact"
                className="bg-white text-[#142035] font-medium px-9 py-2 rounded-full "
              >
                Contact Us
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowBuisness;
