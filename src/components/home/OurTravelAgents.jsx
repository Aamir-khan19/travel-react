import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";

const OurTravelAgents = () => {
  const ourTravelAgents = [
    {
      imageUrl: "/Images/travelAgenciesLogo/richieRichTravels.png",
      name: "RICHE RICH HOLIDAYS",
      phone: "9632417602",
      contact: "https://www.richierichholidays.in/",
      Address:
        " N-2, 24th Main, LIC Row Houses,  1st Phase, J. P. Nagar, Bengaluru, Karnataka 560078",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/travelYug.jpg",
      name: "Travels YUG",
      phone: "9625624780",
      contact: "https://travelyuga.com/",
      Address: " N-2, 24th Main, LIC Row Houses, Bengaluru, Karnataka 560078",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/kamakshiHolidays.png",
      name: "KAMAKSHI HOLIDAYS",
      phone: "9881290229",
      contact: "https://kamakshiholidays.com/",
      Address: "Lane no 30, Ubale Nagar, Wagholi, Pune 412207",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/southIndianHolidays.jpeg",
      name: "SOUTH INDIAN HOLIDAYS",
      phone: "7567891018",
      contact: "http://www.southindianholidays.in/",
      Address:
        "Anna Nagar, Moonjikal, Pambarpuram, Kodaikanal, Tamil Nadu - 624101, India",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/perfectPlanners.png",
      name: "PERFECT PLANNERS",
      phone: "9596863183",
      contact: "https://perfectplannerco.com/"
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/sathyaTravels.png",
      name: "SATHYA TRAVELS",
      phone: "9965539599",
      contact: "https://satyatravelsindia.com/",
      Address:
        "B-28, DDA Complex Market, New Rajinder Nagar, New Delhi,Delhi-110060, India",
    },
  ];

  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1,
          spacing: 8,
        },
        breakpoints: {
          "(min-width: 288px)": {
            slides: {
              origin: "auto",
              perView: 1,
              spacing: 8,
            },
          },
          "(min-width: 768px)": {
            slides: {
              origin: "auto",
              perView: 2,
              spacing: 8,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 3,
              spacing: 12,
            },
          },
        },
      });
    }
  }, []);

  const handlePrevSlide = () => {
    if (keenSlider.current) {
      keenSlider.current.prev();
    }
  };

  const handleNextSlide = () => {
    if (keenSlider.current) {
      keenSlider.current.next();
    }
  };
  return (
    <section className="">
      <div className="mx-auto relative max-w-[1340px] px-4 sm:px-6 lg:ps-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mx-auto mb-8 sm:mb-16">
          <h2 className="text-center text-[#01055b] md:text-5xl text-3xl font-bold mb-4 sm:mb-0 flex-grow">
            Verified Travel Agents
          </h2>
          <div className="hidden sm:flex gap-4">
            <button
              aria-label="Previous slide"
              onClick={handlePrevSlide}
              className="rounded-full bg-[#01055b] p-4 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="w-6 h-6"
              >
                <path
                  fill="currentColor"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              onClick={handleNextSlide}
              className="rounded-full bg-[#01055b] p-4 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="w-6 h-6"
              >
                <path
                  fill="currentColor"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="sm:mt-16 relative mt-8 lg:col-span-2 lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {ourTravelAgents.map((item, i) => (
              <div key={i}>
                <div className="keen-slider__slide" key={i}>
                  <div className="flex border-[1px] p-5 border-gray-600 rounded-lg relative w-full min-h-[350px] max-[600px]:min-h-[400px]">
                    <FaCheckCircle
                      className="h-8 w-7"
                      style={{ color: "#2fb347" }}
                    />
                    <div className="flex justify-between w-full">
                      <div className="flex w-full flex-col justify-center items-center">
                        <img
                          src={item.imageUrl}
                          alt=""
                          className="w-auto h-32"
                        />
                        <div className="flex gap-4 justify-center items-center flex-col">
                          <h1 className="text-xl font-bold">{item.name}</h1>
                          <p>
                            <span className="font-semibold text-xl">
                            {item?.Address &&  <span>Address:- </span>  }
                            </span>
                            {item?.Address}
                          </p>
                         
                            <a href={item?.contact} target="_blank" className="w-40 p-2 flex items-center justify-center text-white rounded-lg bg-[#01055b]">
                              view more
                            </a>
                         
                        </div>
                      </div>

                      {/* Icons div starts here */}
                      <div className="p-2 bg-white rounded-full flex flex-col items-center justify-around">
                        <a href="#!" className="text-[#2fb347]">
                          <FaWhatsapp className="h-6 w-6" />
                        </a>

                        <a href="#!" className="text-[#4267B2]">
                          <FaPhone className="h-6 w-6" />
                        </a>

                        <a href="#!" className="text-[#4267B2]">
                          <FaFacebookF className="h-6 w-6" />
                        </a>

                        <a href="#!" className="text-[#E1306C]">
                          <FaInstagram className="h-6 w-6" />
                        </a>

                        <a href="#!" className="text-[#E1306C]">
                          <FaYoutube className="h-6 w-6" />
                        </a>
                      </div>
                      {/* Icons div ends here */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex sm:hidden justify-center gap-4 mt-8">
          <button
            aria-label="Previous slide"
            onClick={handlePrevSlide}
            className="rounded-full bg-[#01055b] p-4 text-white "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-6 h-6"
            >
              <path
                fill="currentColor"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
          <button
            aria-label="Next slide"
            onClick={handleNextSlide}
            className="rounded-full bg-[#01055b] p-4 text-white "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-6 h-6"
            >
              <path
                fill="currentColor"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTravelAgents;