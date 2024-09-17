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
const FreeRegisteredTravelAgents = () => {
  // Destinations Data
  const ourTravelAgents = [
    {
      name: "Wanderlust Travel World",
      phone: "7407300991",
      email: "wanderlusttravelworld@gmail.com",
    },
    {
      name: "RR Tours and Travels",
      phone: "6304234227",
      email: "ravirajendar24@gmail.com",
    },
    {
      name: "Finna Travel",
      phone: "7006457689",
      email: "finnatravels@gmail.com",
    },
    {
      name: "Bharat Ecab",
      phone: "8882906451",
      email: "bharatecab00@gmail.com",
    },
    {
      name: "Trip Bouquet",
      phone: "7303193848",
      email: "support@tripbouquet.com",
    },
    {
      name: "Trawell.in",
      phone: "7799591230",
      email: "trawell.in@gmail.com",
    },
    {
      name: "Qugo",
      phone: "7411940703",
      email: "bhalltravels@gmail.com",
    },
    {
      name: "Bhalla Travels",
      phone: "7678223408",
      email: "bhallatravels@gmail.com",
    },
    {
      name: "Cute Voyages",
      phone: "8121202999",
      email: "sales@cutevoyages.in",
    },
    {
      name: "Holiday Trip Advisor",
      phone: "8197200830",
      email: "info@holidaytripadvisor.in",
    },
    {
      name: "Trip To Sky Pvt Ltd",
      phone: "8374837460",
      email: "care@trip2sky.com",
    },

    {
      name: "Taha International Tours and Travels",
      phone: "8975850699",
      email: "tahatrips@gmail.com",
    },
    {
      name: "Aanantham Resorts",
      phone: "9736200082",
      email: "booking.aanantham@gmail.com",
    },
    {
      name: " Travelbee Holiday's",
      phone: "9152023332",
      email: "holidaystravelbee@gmail.com",
    },
    {
      name: " Global Gateway",
      phone: " 7201017126",
      email: "globalgatewaystv@gmail.com",
    },
    {
      name: " Around Pondy",
      phone: " 8940308019",
      email: "aroundpondy@gmail.com",
    },

    {
      name: " Kesariya Travels ",
      phone: " 7733937777 ",
      email: "kesariyatravels0094@gmail.com",
    },

    {
      name: "Ku Tour Travel",
      phone: "9422267336",
      email: "KUTRAVELS23@GMAIL.COM",
    },

    {
      name: "Siddhesh Tours and Travels",
      phone: "9422267336",
      email: "id-phalak.mahesh@gmail.com",
    },
    {
      name: "Sarvadnya Travels",
      phone: "9822281125",
      email: "pramodnamde@rediffmail.com",
    },
    {
      name: "Travel Triangle Tours",
      phone: "8850049553",
      email: "traveltriangle77@gmail.com"
    },
    {
      name: "Vanshika Caps",
      phone: "888128888",
      email: "vanshikatravelsagra@gmail.com"
    },
    {
      name: "Al Safari Travels",
      phone: "9335515971",
      email: "allsafaritravels@gmail.com"
    },

    {
      name: "Siddhesh Tours and Travels ",
      phone: "9422267336",
      email: "id-phalak.mahesh@gmail.com",
    },
    {
      name: "TTC Tour & Travels",
      phone: "9219329824",
      email: "ashutoshreema0077@gmail.com",
    },
    {
      name: "Anupam Travels",
      phone: "7817083788",
      email: "anupamtravels2024@gmail.com",
    },

    {
      name: "Shivansh Tour and Travels",
      phone: " 9992100588",
      email: "lokeshsingh51098@gmail.com",
    },
    {
      name: "Tattvam Tours",
      phone: " 9758840400",
      email: "tattvamtours@gmail.com",
    },
    {
      name: "GRV Holidays Pvt Ltd",
      phone: "9557471004",
      email: "grvholidayslko@gmail.com",
    },
   
    {
      name: "Chillax Holidays",
      phone: "9968388499",
      email: "sales@chillaxholidays.com",
    }
  ]

  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1, // Default to 1 review visible
          spacing: 8,
        },
        breakpoints: {
          "(min-width: 288px)": {
            slides: {
              origin: "auto",
              perView: 1, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 768px)": {
            slides: {
              origin: "auto",
              perView: 2, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 3, // Show 3 reviews on screens >= 1024px
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
      <div className="mx-auto relative max-w-[1340px] px-4 md:py-20 py-10 sm:px-6    lg:ps-8 ">
        <div className="flex flex-col sm:flex-row items-center justify-between ">
          <h2 className="text-center text-[#01055b] md:text-5xl text-3xl font-bold mb-4 sm:mb-0 flex-grow">
            Registered Travel Agents
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
        <div className="   sm:mt-16 relative mt-8 lg:col-span-2 lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {ourTravelAgents.map((item, i) => (
              <div key={i}>
                <div className="keen-slider__slide" key={i}>
                  <div className="flex border-[1px] p-5 border-gray-600 rounded-lg relative w-full sm:w-auto min-h-[260px]">
                    <div className="flex sm:flex-row flex-col-reverse sm:justify-start justify-center sm:items-start items-center">
                      <div className="flex gap-5 sm:justify-start justify-center sm:items-start items-center flex-col">
                        <h1 className="text-xl font-bold">{item.name}</h1>
                        <p className="">
                          <span className="font-semibold text-xl">
                            Mobile -
                          </span>
                          <span className="absolute h-7 mt-1 w-14 blur-sm backdrop:blur-sm  bg-gray-500 "></span>

                          {item.phone}
                        </p>
                        <p className="flex items-center">
                          <span className="font-semibold text-xl">
                            Email -{" "}
                          </span>
                          <span className="absolute h-7 left-24 mt-1 w-32 blur-sm backdrop:blur-sm  bg-gray-500 "></span>
                          {item.email}
                        </p>
                        <Link to ="/contact">
                        <button className="w-40 p-2 flex items-center justify-center text-white rounded-lg bg-[#01055b]">
                          Contact
                        </button>
                        </Link>
                      </div>
                      
                    </div>
                    <div className="w-1/3 p-2 bg-white rounded-full flex flex-col items-end justify-between">
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

export default FreeRegisteredTravelAgents;