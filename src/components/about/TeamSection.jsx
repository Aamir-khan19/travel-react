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
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 ">
          {/* Member #1 */}
          <div className="w-full ">
            <div className="flex flex-col items-center">
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-200"
                  src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
                  alt="Tranter Jaskulski"
                />
              </a>
              <div className="text-center mt-6">
                <h1 className="text-gray-900 text-xl font-bold mb-1">
                  Tranter Jaskulski
                </h1>
                <div className="text-gray-700 font-light mb-2">
                  Founder & Specialist
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

          {/* Member #2 */}
          <div className="w-full  ">
            <div className="flex flex-col items-center">
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-200"
                  src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80"
                  alt="Denice Jagna"
                />
              </a>
              <div className="text-center mt-6">
                <h1 className="text-gray-900 text-xl font-bold mb-1">
                  Denice Jagna
                </h1>
                <div className="text-gray-700 font-light mb-2">
                  Tired & M. Specialist
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

          {/* Member #3 */}
          <div className="w-full ">
            <div className="flex flex-col items-center">
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-200"
                  src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"
                  alt="Kenji Milton"
                />
              </a>
              <div className="text-center mt-6">
                <h1 className="text-gray-900 text-xl font-bold mb-1">
                  Kenji Milton
                </h1>
                <div className="text-gray-700 font-light mb-2">Team Member</div>
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

          {/* Member #4 */}
          <div className="w-full">
            <div className="flex flex-col items-center">
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-200"
                  src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"
                  alt="Doesn't matter"
                />
              </a>
              <div className="text-center mt-6">
                <h1 className="text-gray-900 text-xl font-bold mb-1">
                  Doesn't matter
                </h1>
                <div className="text-gray-700 font-light mb-2">
                  Will be fired
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
