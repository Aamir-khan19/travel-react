import React from "react";
import { Link } from 'react-router-dom';
const Aboutherosection = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center h-fit max-w-7xl md:py-20 py-10  px-5  mx-auto bg-white">
        <div className="flex flex-col-reverse lg:flex-row  items-center  xl:justify-between lg:justify-between w-full gap-8">
          <div className=" lg:w-1/2 w-full text-center lg:text-left pt-5">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
              Explore the World with TravelnWorld
            </h1>
            <p className="text-gray-400 text-base lg:text-lg  mb-6">
            Welcome to Travelnworld! We empower travel industry businesses through digital services such as social media management, website development, digital marketing, and targeted advertising on Instagram and Facebook. Our tailored solutions boost online presence and drive growth. We offer three service packages: Basic (social media links, dashboard access, unlimited inquiries, templates, verified leads, 24/7 support), Standard (includes Basic features plus a domain, website, and banner listing), and Premium (includes Standard features plus additional templates and leads). Our dedicated team provides the tools and strategies needed to thrive
            </p>
            <div className="flex flex-col sm:flex-row lg:justify-start  md:justify-center sm:justify-center gap-3">
            <Link to="/contact"> <button className="bg-black text-white px-5 py-2 hover:bg-[#142035]">
                Start Your Journey
              </button></Link>
              <Link to="/packages"> <button className="bg-transparent text-black border border-black px-5 py-2 hover:bg-gray-200">
                How It Works
              </button></Link>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2 h-auto">
            <img
                     src="/Images/aboutPageImages/abouthero.png"
              className=" lg:w-full lg:sm:h-full  sm:h-full   lg:h-[100%] rounded-lg  hover:shadow-lg "
              alt="About us"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutherosection;
