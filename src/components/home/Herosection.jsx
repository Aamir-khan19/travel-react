import React from "react";

const Herosection = () => {
  return (
<div
      className="  w-full bg-cover h-[330px] bg-transparent bg-center  relative " 
      style={{ backgroundImage: "url('/Images/Homepageimages/goa.jpg')" }} 
    >
      <div className=" py-5 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-start items-center">
            <div className="md:w-1/2 lg:w-2/3">
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                Let's <br className="hidden md:block" />
                <span className="text-white">Explore</span> Goa
              </h1>
            </div>
            <div>
              {/* <div className="max-w-lg mx-auto px-2 pt-2   rounded-lg   backdrop:blur-md border border-white/20 bg-red-900 backdrop-blur-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2 text-blue-900 dark:text-white">
                  Tell us what you are looking for!
                </h2>
                <form className="bg-transparent  rounded-lg pb-4">
                  <div className="mb-3">
                    <label
                      htmlFor="companyName"
                      className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your company name"
                      required
                    />
                  </div>
                  <div className="mb-3 ">
                    <label
                      htmlFor="mobileNumber"
                      className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your mobile number"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Email id
                    </label>
                    <input
                      type="email"
                      id="email"
                      className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="services"
                      className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Services
                    </label>
                    <input
                      type="text"
                      id="services"
                      className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your services"
                      required
                    />
                  </div>
                  <div className="flex items-start mb-3">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-700 rounded bg-white focus:ring-3 focus:ring-blue-300 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-900 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      htmlFor="terms"
                      className="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                    >
                      I agree with the{" "}
                      <a
                        href="#"
                        className="text-blue-900 hover:underline dark:text-blue-900"
                      >
                        Terms and conditions  
                      </a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;

