import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import packageData from "../../components/packages/Allpackages/packagedata";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import Footer from "../../components/global/Footer";
import Navbar from "../../components/global/Navbar";
import StatsSection from "./StatsSection";

const Packagedetails = () => {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState(() => {
    const pack = packageData.find((obj) => obj.id == id);
    return pack?.content || [];
  });

  const totalImages = images.length;
  const [pack, setPackage] = useState({});

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const pack = packageData.find((obj) => obj.id == id);

     
    setImages(pack?.content || []);
    setPackage(pack);
    window.scrollTo(0, 0);
  }, [id]);

  const [activeIndex, setActiveIndex] = useState(null);
  const questions = [
    {
      question: "What types of travel packages do you offer?",
      answer:
        "We offer adventure tours, cultural experiences, beach vacations, and customized travel packages.",
    },
    {
      question: "What is the cancellation policy for your travel bookings?",
      answer:
        "We have a flexible cancellation policy, allowing cancellations up to 48 hours before departure for a full refund.",
    },
    {
      question: "Do you provide assistance with visa applications?",
      answer:
        "Yes, we offer guidance and assistance with visa applications for various destinations.",
    },
    {
      question: "What safety measures do you have in place for travelers?",
      answer:
        "We prioritize traveler safety with measures including 24/7 support, travel insurance options, and partnerships with trusted local guides.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50">
      <Navbar />

      <div
        className="relative w-full overflow-hidden h-96"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            {"Explore the World"}
          </h1>
        </div>
      </div>

      <div className="container mx-auto p-8 md:p-12">
        <h2 className="text-4xl  text-blue-900 font-bold text-center mb-8 capitalize">
          {"Discover " + (pack?.category || "Dubai")}
        </h2>

        <div className="relative w-full overflow-hidden rounded-lg shadow-xl mb-10">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-96 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-800 text-white opacity-70 hover:opacity-100 transition"
          >
            &gt;
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-xl">
          <div>
            <h3 className="text-3xl font-semibold mb-4">
              About {pack?.category || "this destination"}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              {pack?.title2 ||
                "This is a detailed description about the package..."}
            </p>
            <div className="flex items-center justify-center">
              <button className="flex items-center px-8 py-3 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-900 transition duration-300">
                <FaEnvelope className="mr-2" /> ENQUIRE NOW
              </button>
            </div>
          </div>
          <div>
            {pack?.image && (
              <img
                src={pack?.image}
                alt={pack?.title}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            )}
          </div>
        </div>

        <div className="flex justify-between mt-8 text-lg">
          <div className="flex items-center gap-3">
            <FaClock className="text-blue-900 text-2xl" />
            <div>
              <h4 className="text-xl font-bold mb-2">Ideal Days</h4>
              <p>{pack?.Idealdays || "7-10 Days"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-blue-900 text-2xl" />{" "}
            <div>
              <h4 className="text-xl font-bold mb-2">Best Time to Visit</h4>
              <p>{pack?.Besttime || "Winter months"}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-10">
          <h3 className="text-3xl font-semibold text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="max-w-4xl mx-auto">
            {questions.map((item, index) => (
              <div key={index} className="border-b border-gray-300 mb-4">
                <button
                  className="flex justify-between w-full p-4 text-lg font-medium text-gray-800 hover:bg-gray-200 transition"
                  onClick={() => toggleAnswer(index)}
                >
                  {item.question}
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414l5.707-5.707z"></path>
                  </svg>
                </button>
                {activeIndex === index && (
                  <div className="p-4 text-gray-600">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl bg-white p-4 rounded-lg shadow-lg flex justify-center gap-4">
        <button className="flex items-center px-8 py-3 bg-blue-900 text-white rounded-lg shadow hover:bg-indigo-900 transition duration-300">
          <FaPhone className="mr-2" /> CONTACT AGENT
        </button>
        <button className="flex items-center px-8 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition duration-300">
          <FaEnvelope className="mr-2" /> ENQUIRE NOW
        </button>
      </div>
      <StatsSection />

      <Footer />
    </div>
  );
};

export default Packagedetails;
