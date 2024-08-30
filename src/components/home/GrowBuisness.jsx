import React from "react";

const GrowBuisness = () => {
  return (
    <div
      className="  w-full h-fit bg-cover  bg-transparent bg-center  relative "
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2020/04/01/12/46/city-4991094_640.jpg')",
      }}
    >
      <div className=" px-5 md:py-20 py-10 my-10 md:my-20 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-start items-center">
            <div className="md:w-1/2 lg:w-2/3">
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                Grow your <br className="hidden md:block" />
                <span className="text-white"> Buisness</span> with Us
              </h1>

              <button
                type="button"
                className="bg-white text-[#142035] font-medium px-9 py-2 rounded-full "
              >
                Contact Us
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowBuisness;
