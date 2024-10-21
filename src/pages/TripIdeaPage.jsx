
import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import tripIdeas from "../components/packages/Allpackages/tripIdeas";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import api from "../api";

function TripIdeaPage() {
  const { name, id } = useParams(); // Extract name and id from URL params
  const [tripData, setTripData] = useState(null); // State to hold the trip data
  const [flashMessage, setFlashMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const sliderContainerRef = useRef(null); // Reference for the Keen Slider container
  const [sliderInstance, setSliderInstance] = useState(null); // State to hold slider instance

  useEffect(() => {
    // Find the object that matches the id
    const foundTrip = tripIdeas.find((trip) => trip.id.toString() === id);
    setTripData(foundTrip); // Save the found trip data to state

    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registerBody = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    setIsLoading(true);

    api
      .postReq("contact-us", registerBody)
      .then((data) => {
        console.log("contact-us", data);
        setIsLoading(false);

        setFlashMessage(
          "Form submitted successfully you will be contacted soon"
        );
        console.log("successfully refgsitered eith us", data);

        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("oopps seomtjing went wrong", error);
      });
  };

  useEffect(() => {
    if (flashMessage) {
      setTimeout(() => {
        setFlashMessage("");
      }, 5000);
    }
  }, [flashMessage]);

  useEffect(() => {
    // Initialize the Keen Slider when component mounts
    const slider = new KeenSlider(sliderContainerRef.current, {
      loop: true, // Enable infinite loop
      duration: 3000, // Transition duration in ms

      slides: {
        origin: "center",
        perView: 1,
        spacing: 8,
      },
      breakpoints: {
        "(min-width: 288px)": {
          slides: {
            origin: "center",
            perView: 1,
            spacing: 8,
          },
        },
        "(min-width: 768px)": {
          slides: {
            origin: "center",
            perView: 2,
            spacing: 8,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            origin: "center",
            perView: 3,
            spacing: 12,
          },
        },
      },
    });

    setSliderInstance(slider); // Save the slider instance to state

    const autoplay = setInterval(() => {
      slider.next(); // Move to next slide every 3 second
    }, 5000);

    return () => {
      clearInterval(autoplay); // Clean up interval on unmount
      slider.destroy(); // Destroy slider instance when component unmounts
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-5">
        {/* Display the layout text at the top center */}
        <h2 className="text-3xl font-semibold text-indigo-900 text-center mb-4">
          {tripData?.text}
        </h2>

        {/* Create a flex layout for the trip details */}
        {tripData?.content?.map((content) => (
          <div
            key={content.heading}
            className="bg-white border border-gray-200 mb-8 rounded-lg shadow-lg p-6 flex flex-col md:flex-row md:justify-between"
          >
            <div className="md:w-1/2 flex flex-col items-center md:items-start">
              {/* Display the heading above the image */}
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4 text-center md:text-start">
                {content?.heading}
              </h3>

              <img
                src={
                  content?.image ||
                  "https://images.pexels.com/photos/63638/roses-flower-nature-macro-63638.jpeg?cs=srgb&dl=bloom-blossom-flora-63638.jpg&fm=jpg"
                }
                className="w-[80%] object-cover rounded-md mb-4"
                alt={content.heading} // Added alt text for accessibility
              />
            </div>

            <div className="md:w-1/2 flex flex-col justify-between p-4 rounded-md mt-10">
              <p className="text-gray-600 mb-4  text-lg text-semibold flex-1 text-start">
                {content?.information}
              </p>

              {/* Enquiry Button */}
              <a href="#enquiry_form">
                <button className="bg-blue-900 w-full text-white font-semibold py-2 rounded-md hover:bg-blue-800 transition duration-200">
                  Enquire Now
                </button>
              </a>
            </div>
          </div>
        ))}

        {/* Enquiry Form starts here */}
        <div
          id="enquiry_form"
          className="bg-white border border-gray-200 p-8 rounded-lg shadow-2xl mt-10 md:mx-auto md:w-[60%] transition-all duration-300 transform hover:scale-105"
        >
          <div
            className={`bg-white rounded ${flashMessage ? "block" : "hidden"}`}
          >
            <h1 className=" text-center text-green-500 font-bold text-lg">
              {flashMessage}
            </h1>
          </div>

          <h3 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
            Enquire About This Trip
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 p-4 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none transition-shadow duration-300 hover:shadow-md"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border border-gray-300 p-4 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none transition-shadow duration-300 hover:shadow-md"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="border border-gray-300 p-4 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none transition-shadow duration-300 hover:shadow-md"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="border border-gray-300 p-4 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none transition-shadow duration-300 hover:shadow-md"
              rows="5"
              required
            />
            <button
              disabled={isLoading}
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-transform duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
        {/* Enquiry form ends here  */}

        {/* Recommended Posts */}
        <div className="mt-8">
          <h3 className="text-3xl font-semibold text-indigo-900 p-4 mb-3 text-center">
            Recommended Trips
          </h3>

          <div ref={sliderContainerRef} className="keen-slider">
            {tripIdeas?.map((trip, i) => (
              <div
                key={i}
                className="keen-slider__slide bg-white border border-gray-200 rounded-lg shadow-lg p-4"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {trip?.mainHeading}
                </h4>
                <img
                  src={trip?.mainImage}
                  alt={`Slide ${i + 1}`}
                  className="w-full object-cover"
                />
                <p className="text-gray-600 mb-4 text-center mt-2">
                  {trip?.text}
                </p>

                <Link
                  to={`/trip-ideas/${trip?.to}/${trip?.id}`}
                  className="text-blue-900 mt-5 hover:underline"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TripIdeaPage;
