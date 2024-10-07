import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const TeamSection = () => {
  return (
    <div className="flex items-center justify-center mx-auto bg-white  max-w-7xl py-10 md:py-20 px-5">
      <div className="flex flex-col">
        {/* Notes */}

        {/* Meet the Team Section */}

        {/* Section Header */}
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full lg:w-6/12 px-5">
            <h1 className="text-gray-900 text-4xl font-bold md:pb-20 pb-10">
              Our Team
            </h1>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5  ">
          {/* Member #1 */}
          <div className="w-full ">
            <div className="flex flex-col items-center border-solid border-2 border-black-400 min-h-[460px]">
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-200"
                  src="Images/aboutPageImages/new.jpeg"
                  alt="Tranter Jaskulski"
                />
              </a>
              <div className="text-center mt-6">
                <h1 className="text-gray-900 text-xl font-bold mb-1  ">
                  Mulayam Singh 
                </h1>
                <div className="text-gray-900 font-light mb-2">
                  Tech Support
                </div>
                <div className="flex space-x-2">
                  <div className="p-2 bg-white rounded-full flex items-center justify-center ">
                    <a href="#!" className="text-[#4267B2]">
                      <FaFacebookF className="h-6 w-6" />
                    </a>
                  </div>

                  <div className="p-2 bg-white rounded-full flex items-center justify-center">
                    <a href="#!" className="text-[#E1306C]">
                      <FaInstagram className="h-6 w-6" />
                    </a>
                  </div>
                  <div className="p-2 bg-white rounded-full flex items-center justify-center">
                    <a href="#!" className="text-[#E1306C]">
                      <FaYoutube className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Member #3 */}
          <div className="w-full ">
            <div className="flex flex-col items-center border-solid border-2 border-black-400 min-h-[460px]">
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-200"
                   src="Images/aboutPageImages/new3.jpeg"
                  alt="Kenji Milton"
                />
              </a>
              <div className="text-center mt-6">
                <h1 className="text-gray-900 text-xl font-bold mb-1">
                  Nitesh Pandey
                </h1>
                <div className="text-gray-700 font-light mb-2">Buisness Manager</div>
                <div className="flex space-x-2">
                  <div className="p-2 bg-white rounded-full flex items-center justify-center">
                    <a href="#!" className="text-[#4267B2]">
                      <FaFacebookF className="h-6 w-6" />
                    </a>
                  </div>

                  <div className="p-2 bg-white rounded-full flex items-center justify-center">
                    <a href="#!" className="text-[#E1306C]">
                      <FaInstagram className="h-6 w-6" />
                    </a>
                  </div>
                  <div className="p-2 bg-white rounded-full flex items-center justify-center">
                    <a href="#!" className="text-[#E1306C]">
                      <FaYoutube className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Member #2 */}
          <div className="w-full  ">
            <div className="flex flex-col items- border-solid border-2 border-black-400 min-h-[460px]">
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-200"
                  src="Images/aboutPageImages/new2.jpeg"
                  alt="Denice Jagna"
                />
              </a>
              <div className="text-center mt-6">
                <h1 className="text-gray-900 text-xl font-bold mb-1">
                  Vikas  Singh
                </h1>
                <div className="text-gray-900 font-light mb-2">
                 Sales Head
                </div>
                <div className="flex space-x-2 w-full justify-center ">
                  <div className="p-2 bg-white rounded-full flex items-center justify-center">
                    <a href="#!" className="text-[#4267B2]">
                      <FaFacebookF className="h-6 w-6" />
                    </a>
                  </div>

                  <div className="p-2 bg-white rounded-full flex items-center justify-center">
                    <a href="#!" className="text-[#E1306C]">
                      <FaInstagram className="h-6 w-6" />
                    </a>
                  </div>
                  <div className="p-2 bg-white rounded-full flex items-center justify-center">
                    <a href="#!" className="text-[#E1306C]">
                      <FaYoutube className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          {/* Member #4 */}
          <div className="w-full">
            <div className="flex flex-col items-center  border-solid border-2 border-black-400 min-h-[460px]">
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-200"
                  src="Images/aboutPageImages/ok.jpeg"
                  alt="Doesn't matter"
                />
              </a>
              <div className="text-center mt-6">
                <h1 className="text-gray-900 text-xl font-bold mb-1">
                  Renu Rana
                </h1>
                <div className="text-gray-700 font-light mb-2">
                  Hr/Admin
                </div>
                <div className="flex space-x-2">
                  <div className="p-2 bg-white rounded-full flex items-center justify-center">
                    <a href="#!" className="text-[#4267B2]">
                      <FaFacebookF className="h-6 w-6" />
                    </a>
                  </div>

                  <div className="p-2 bg-white rounded-full flex items-center justify-center">
                    <a href="#!" className="text-[#E1306C]">
                      <FaInstagram className="h-6 w-6" />
                    </a>
                  </div>
                  <div className="p-2 bg-white rounded-full flex items-center justify-center">
                    <a href="#!" className="text-[#E1306C]">
                      <FaYoutube className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
