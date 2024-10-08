


import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaSearch } from "react-icons/fa";

const OurTravelAgents = () => {
  const ourTravelAgents = [
    {
      imageUrl: "/Images/travelAgenciesLogo/travelYug.jpg",
      name: "Travels Yug",
      phone: "9625624780",
      contact: "https://travelyuga.com/",
      Address: " N-2, 24th Main, LIC Row Houses, Bengaluru, Karnataka 560078",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/kamakshiHolidays.png",
      name: "Kamakshi Holidays",
      phone: "9881290229",
      contact: "https://kamakshiholidays.com/",
      Address: "Lane no 30, Ubale Nagar, Wagholi, Pune 412207",
    },

    {
      imageUrl: "/Images/travelAgenciesLogo/southIndianHolidays.jpeg",
      name: "South Indian Holidays",
      phone: "7567891018",
      contact: "http://www.southindianholidays.in/",
      Address:
        "Anna Nagar, Moonjikal, Pambarpuram, Kodaikanal, Tamil Nadu - 624101.",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/richieRichTravels.png",
      name: "Riche Rich Holidays",
      phone: "9632417602",
      contact: "https://www.richierichholidays.in/",
      Address:
        " N-2, 24th Main, LIC Row Houses, J.P. Nagar, Bengaluru, Ka-560078.",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/perfectPlanners.png",
      name: "Perfect Planners",
      phone: "9596863183",
      contact: "https://perfectplannerco.com/",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/sathyaTravels.png",
      name: "Sathya Travels",
      phone: "9965539599",
      contact: "https://satyatravelsindia.com/",
      Address:
        "B-28, DDA Complex Market, New Rajinder Nagar, New Delhi, Delhi-110060,",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/justkeeptravel.png",
      name: "Just Keep Travels",
      phone: "9965539599",
      contact: "https://justkeeptravel.com/",
      Address: "198/1896 Basement, Ganesh Pura, Tri Nagar Delhi-110035 ",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/TOURZPLANNER.png",
      name: "Tourz Planner",
      phone: "9965539599",
      contact: "/https://tourzplanner.in/",
      Address:
        "5/59, Netaji Nagar, Kolkata 7000 40, Landmark- Sub post office. ",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/himalayancircle.png",
      name: "Himalayan Circle",
      phone: "9965539599",
      contact: "https://himalayancircle.com/",
      Address: "vill-Nauni,PO-Darlaghat,teh-Arki, Distt-Solon HP -171102",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/abv.jpeg",
      name: "Rathore Travels ",
      phone: "9988325982",
      // contact: "https://himalayancircle.com/",
      Address: "Housing board near cival hospital ferozpur city ,Pin-152002",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/kancharla.jpeg",
      name: "Kancharla Tour's and Travels",
      phone: "7095974001",
      // contact: "https://himalayancircle.com/",
      Address: " Plot No.48 Venk. Colony ,Hyderabad -501501",
    },
  ];

  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
  const autoSlideInterval = useRef(null);

  const [searchTerm, setSearchTerm] = useState('');

  // Handle input change for search
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter the agents based on the search term
  const filteredAgents = ourTravelAgents.filter((agent) =>
    agent.name.toLowerCase().includes(searchTerm)
  );

  // Initialize KeenSlider
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

      // Set up auto slide every 3 seconds
      autoSlideInterval.current = setInterval(() => {
        if (keenSlider.current) {
          keenSlider.current.next();
        }
      }, 10000);
    }

    return () => {
      if (keenSlider.current) {
        keenSlider.current.destroy();
        keenSlider.current = null;
      }
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current); // Clear auto-slide interval on unmount
      }
    };
  }, [searchTerm]);

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
    <section>
      <div className="mx-auto relative max-w-[1340px] px-4 sm:px-6 lg:ps-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mx-auto mb-8 sm:mb-16">
          <h2 className="text-center text-[#01055b] md:text-5xl text-3xl font-bold mb-4 sm:mb-0 flex-grow">
            Verified Travel Agents
          </h2>

          {/* Search Bar */}
          <div className="relative w-full sm:w-auto flex items-center max-w-sm">
            <span className="absolute left-3 text-gray-500">
              <FaSearch className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search here..."
              value={searchTerm}
              onChange={handleInputChange}
              className="pl-10 pr-4 py-2 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01055b] transition duration-300 ease-in-out shadow-md"
            />
          </div>
        </div>

        {/* Slider Section */}
        <div className="sm:mt-16 relative mt-8 lg:col-span-2 lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {filteredAgents.length > 0 ? (
              filteredAgents.map((agent, i) => (
                <div className="keen-slider__slide" key={i}>
                  <div className="flex border-[1px] p-5 border-gray-600 rounded-lg relative w-full min-h-[380px] max-[600px]:min-h-[400px]">
                    <div className="bg-[url('/Images/travelAgenciesLogo/verifiedimg.jpeg')] bg-cover bg-center w-[145px] h-[110px] mx-2 -ml-[15px] -mt-[16px]"></div>
                
                    <div className="flex justify-between w-full">
                      <div className="flex w-full flex-col justify-center items-center">
                        <img src={agent.imageUrl} alt={agent.name} className="w-auto h-32" />
                        <div className="flex gap-4 justify-center items-center flex-col">
                          <h1 className="text-xl font-bold">{agent.name}</h1>
                          <p>
                            <span className="font-semibold text-xl">
                              {agent?.Address && <span>Address:- </span>}
                            </span>
                            {agent?.Address}
                          </p>

                          <a
                            href={agent?.contact}
                            target="_blank"
                            className="w-40 p-2 flex items-center justify-center text-white rounded-lg bg-[#01055b]"
                          >
                            View More
                          </a>
                        </div>
                      </div>

                      {/* Icons */}
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
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-xl">No agents found.</p>
            )}
          </div>
        </div>

        {/* Mobile Slide Controls */}
        <div className="flex sm:hidden justify-center gap-4 mt-8">
          <button
          
            aria-label="Previous slide"
            onClick={handlePrevSlide}
            className="rounded-full bg-[#01055b] p-4 text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6">
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6">
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

