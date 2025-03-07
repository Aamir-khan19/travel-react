import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const TravelNWorld = () => {
  return (
    <div className="bg-gray-100 text-gray-900 p-6 md:p-12">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
          Travel n World – Empowering Travel Businesses Globally
        </h1>
        
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Company Overview</h2>
          <p><strong>Company Name:</strong> Travel n World</p>
          <p><strong>Tagline:</strong> Grow Your Travel Business Digitally!</p>
          <p><strong>Business Type:</strong> B2B Travel Promotion & Networking Platform</p>
          <p><strong>Establishment Year:</strong> 2021</p>
          <p><strong>Headquarters:</strong> Delhi, India</p>
        </section>
        
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">About Travel n World</h2>
          <p className="text-gray-700 leading-relaxed">
            Travel n World is a leading B2B travel platform dedicated to promoting travel agents, hoteliers, and DMCs.
            We provide digital marketing solutions, networking, and business expansion opportunities.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Vision & Mission</h2>
          <h3 className="text-lg font-semibold mt-2">Vision:</h3>
          <p>To be the leading global B2B travel platform connecting service providers with their audience.</p>
          <h3 className="text-lg font-semibold mt-2">Mission:</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Empower travel businesses with digital tools.</li>
            <li>Enhance B2B networking for profitable collaborations.</li>
            <li>Provide cost-effective marketing solutions.</li>
            <li>Simplify business growth with an easy-to-use platform.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "B2B Travel Networking & Lead Generation",
              "Brand Promotion for Travel Agents, Hoteliers & DMCs",
              "Digital Marketing & Social Media Branding",
              "Website & SEO Optimization for Travel Businesses",
              "Exclusive Business Listings for Maximum Exposure",
              "Customized Travel Itineraries & Package Promotions",
              "Travel Industry Events & Webinars",
              "B2B Deal Marketplace for Travel Services",
            ].map((service, index) => (
              <p key={index} className="bg-blue-100 text-blue-800 p-3 rounded-md shadow-md">
                ✅ {service}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Who Can Benefit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Travel Agents & Tour Operators",
              "Hoteliers & Resort Owners",
              "Destination Management Companies (DMCs)",
              "Corporate Travel Planners",
              "MICE & Event Organizers",
            ].map((beneficiary, index) => (
              <p key={index} className="bg-green-100 text-green-800 p-3 rounded-md shadow-md">
                🎯 {beneficiary}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Why Choose Travel n World?</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Dedicated B2B Travel Promotion Platform</li>
            <li>Global Exposure & Business Growth</li>
            <li>Affordable Marketing Solutions</li>
            <li>SEO & Digital Optimization</li>
            <li>Hassle-Free Business Networking</li>
            <li>Real-time Leads & Business Opportunities</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">How It Works?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Register Your Business – Sign up & create a profile.",
              "Showcase Your Services – List your packages & travel solutions.",
              "Connect & Collaborate – Network with professionals.",
              "Boost Your Visibility – Use digital marketing.",
              "Grow Your Business – Gain more leads & revenue.",
            ].map((step, index) => (
              <p key={index} className="bg-yellow-100 text-yellow-800 p-3 rounded-md shadow-md">
                {index + 1}️⃣ {step}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Details</h2>
          <p>📍 Office Address: 34, Sewak Park (1st floor), Dwarka More Metro, Near Metro
          Pillar No-772, New Delhi-110059</p>
          <p>📞 Phone: 1800-121-4252</p>
          <p>📧 Email: info@travelnworld.com</p>
           <div className="flex space-x-6">
                          <div className="p-2 bg-white rounded-full flex items-center justify-center">
                            <a
                              href="https://www.facebook.com/profile.php?id=100091741043983&mibextid=ZbWKwL"
                              className="text-[#4267B2]"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaFacebookF className="h-6 w-6" />
                            </a>
                          </div>
                          <div className="p-2 bg-white rounded-full flex items-center justify-center">
                            <a
                              href="https://www.instagram.com/travelnworld_official/"
                              className="text-[#E1306C]"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaInstagram className="h-6 w-6" />
                            </a>
                          </div>
                          <div className="p-2 bg-red-500 rounded-full flex items-center justify-center">
                            <a
                              href="https://www.youtube.com/@travelnworld_official"
                              className="text-[#E1306C]"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaYoutube className="h-6 w-6 text-white" />
                            </a>
                          </div>
                        </div>
                            
        </section>

        <div className="mt-6 text-center text-xl font-semibold text-blue-700">
          🌍 Travel n World – Your Digital Partner in Travel Business Growth!
        </div>
      </div>
    </div>
  );
};

export default TravelNWorld;
