import React from "react";

const AboutUsSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center h-auto max-w-7xl py-10 md:py-10 px-4 mx-auto bg-white gap-10">
      <div className="flex flex-col lg:flex-row justify-between lg:justify-between w-full gap-5">
        <div className="relative w-full lg:w-1/2 h-70 lg:h-[80vh] gap-4">
          <img
            src="/Images/aboutPageImages/about.jpg"
            className="w-full h-full object-cover rounded-lg hover:shadow-lg"
            alt="About us"
          />
        </div>
        <div className="lg:w-1/2 w-full text-center lg:text-left pt-5 lg:ml-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            Explore the World with TravelnWorld
          </h1>
          <p className="text-gray-400 text-base lg:text-lg mb-6">
            Welcome to Travelnworld! We empower travel industry businesses
            through digital services such as social media management, website
            development, digital marketing, and targeted advertising on
            Instagram and Facebook. Our tailored solutions boost online presence
            and drive growth. We offer three service packages: Basic (social
            media links, dashboard access, unlimited inquiries, templates,
            verified leads, 24/7 support), Standard (includes Basic features
            plus a domain, website, and banner listing), and Premium (includes
            Standard features plus additional templates and leads). Our
            dedicated team provides the tools and strategies needed to thrive
          </p>

          <div className="mt-12 w-full sm:gap-0 gap-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col gap-3 justify-center items-center text-center">
              <h2 className="text-xl font-bold text-orange-500">Projects</h2>
              <p className="text-2xl lg:text-4xl font-bold">200+</p>
            </div>
            <div className="flex gap-3 flex-col items-center text-center">
              <h3 className="text-xl font-bold text-orange-500">
                Happy Clients
              </h3>
              <p className="text-2xl lg:text-4xl font-bold">1000+</p>
            </div>
            <div className="flex gap-3 flex-col items-center text-center">
              <h3 className="text-xl font-bold text-orange-500">
                Work Experience
              </h3>
              <p className="text-2xl lg:text-4xl font-bold">12+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
