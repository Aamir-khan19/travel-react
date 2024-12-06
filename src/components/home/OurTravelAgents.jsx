import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaSearch,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { publicGetCompaniesAsync } from "../../features/public/publicSlice";

const OurTravelAgents = () => {
  const dispatch = useDispatch();
  const companies = useSelector(state => state.public.companies);
  const isLoading = useSelector(state => state.public.isLoading);


  useEffect(()=>{
    if(companies?.length == 0){
      dispatch(publicGetCompaniesAsync())
    }
    }, [])


    console.log("OurTravelAgents.jsx companies public", companies);


  const ourTravelAgents = [
    {
      imageUrl: "/Images/travelAgenciesLogo/travelYug.jpg",
      name: "Travels Yug",
      city: "Bengaluru",
      phone: "9625624780",
      whatsapp: "9625624780",
      facebook: "",
      instagram:
        "https://www.instagram.com/travelsyug_/profilecard/?igsh=aTNudnpyYzltbjhw",
      youtube: "",
      contact: "https://travelyuga.com/",
      Address: " N-2, 24th Main, LIC Row Houses, Bengaluru, Karnataka 560078",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/kamakshiHolidays.png",
      name: "Kamakshi Holidays",
      city: "Pune",
      phone: "9881290229",
      whatsapp: "9881290229",
      facebook: "https://www.facebook.com/kamakshi.holidays",
      instagram: "",
      youtube: "",
      contact: "https://kamakshiholidays.com/",
      Address: "Lane no 30, Ubale Nagar, Wagholi, Pune 412207",
    },

    {
      imageUrl: "/Images/travelAgenciesLogo/southIndianHolidays.jpeg",
      name: "South Indian Holidays",
      city: "Tamil Nadu",
      phone: "7567891018",
      whatsapp: "7567891018",
      facebook: "https://www.facebook.com/southindiaholiday",
      instagram: "https://www.instagram.com/kodaitipsndtrips/",
      youtube: "https://www.youtube.com/channel/UCcVxN7dwx49anVmspOUrHLg",
      contact: "http://www.southindianholidays.in/",
      Address:
        "Anna Nagar, Moonjikal, Pambarpuram, Kodaikanal, Tamil Nadu - 624101.",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/richieRichTravels.png",
      name: "Riche Rich Holidays",
      city: "Bengaluru",
      phone: "9632417602",
      whatsapp: "9632417602",
      facebook: "",
      instagram: "",
      youtube: "",
      contact: "https://www.richierichholidays.in/",
      Address:
        " N-2, 24th Main, LIC Row Houses, J.P. Nagar, Bengaluru, Ka-560078.",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/perfectPlanners.png",
      name: "Perfect Planners",
      city: "",
      phone: "9596863183",
      whatsapp: "9596863183",
      facebook: "https://www.facebook.com/perfectplannerco",
      instagram: "https://www.instagram.com/perfectplanner.company/",
      youtube: "",
      contact: "https://perfectplannerco.com/",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/sathyaTravels.png",
      name: "Sathya Travels",
      city: "New Delhi",
      phone: "9965539599",
      whatsapp: "9965539599",
      facebook: "",
      instagram: "",
      youtube: "",
      contact: "https://satyatravelsindia.com/",
      Address:
        "B-28, DDA Complex Market, New Rajinder Nagar, New Delhi, Delhi-110060,",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/justkeeptravel.png",
      name: "Just Keep Travels",
      city: "Delhi",
      phone: "9965539599",
      whatsapp: "9965539599",
      facebook:
        "https://www.facebook.com/profile.php?id=100095314801749&mibextid=JRoKGi",
      instagram: "https://www.instagram.com/justkeeptravel_official/",
      youtube: "https://www.youtube.com/@alokdiwan6122",
      contact: "https://justkeeptravel.com/",
      Address: "198/1896 Basement, Ganesh Pura, Tri Nagar Delhi-110035 ",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/TOURZPLANNER.png",
      name: "Tourz Planner",
      city: "Kolkata",
      phone: "9965539599",
      whatsapp: "9965539599",
      facebook: "",
      instagram: "",
      youtube: "",
      contact: "/https://tourzplanner.in/",
      Address:
        "5/59, Netaji Nagar, Kolkata 7000 40, Landmark- Sub post office. ",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/himalayancircle.png",
      name: "Himalayan Circle",
      city: "Solon",
      phone: " 7018419161",
      whatsapp: "9965539599",
      facebook: "https://www.facebook.com/himalayancircle",
      instagram: "https://www.instagram.com/himalayancircle",
      youtube: "",
      contact: "https://himalayancircle.com/",
      Address: "vill-Nauni,PO-Darlaghat,teh-Arki, Distt-Solon HP -171102",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/abv.jpeg",
      name: "Rathore Travels ",
      city: "ferozpur",
      phone: "9988325982",
      whatsapp: "9988325982",
      facebook: "",
      instagram: "",
      youtube: "",
      // contact: "",
      Address: "Housing board near cival hospital ferozpur city ,Pin-152002",
    },
    {
      imageUrl: "/Images/travelAgenciesLogo/kancharla.jpeg",
      name: "Kancharla Tour's and Travels",
      city: "Hyderabad",
      phone: "7095974001",
      whatsapp: "7095974001",
      facebook: "",
      instagram: "",
      youtube: "",
      // contact: "https://himalayancircle.com/",
      Address: " Plot No.48 Venk. Colony ,Hyderabad -501501",
    },
  ];

  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
  const autoSlideInterval = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [currentPhoneModal, setCurrentPhoneModal] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredAgents = ourTravelAgents.filter((agent) =>
    agent.name.toLowerCase().includes(searchTerm)
  || agent.city.toLowerCase().includes(searchTerm)
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
        clearInterval(autoSlideInterval.current);
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

  const handlePhoneModalOpen = function (i) {
    setIsPhoneModalOpen(true);
    setCurrentPhoneModal(i);
  };

  const handlePhoneModalClose = function () {
    setCurrentPhoneModal(null);
    setIsPhoneModalOpen(false);
  };





  return (
    <>
  {
    false?  <div className=' flex justify-center h-[50vh] items-center'>

    <div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 

    </div>


:



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
                        <img
                          src={agent.imageUrl}
                          alt={agent.name}
                          className="w-auto h-32"
                        />
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
                        <a
                          href={`https://api.whatsapp.com/send/?phone=${agent?.whatsapp}&text&type=phone_number&app_absent=0`}
                          target="_blank"
                          className="text-[#2fb347]"
                        >
                          <FaWhatsapp className="h-6 w-6" />
                        </a>

                        <div className=" relative">
                          {/* phone modal starts here */}
                          {isPhoneModalOpen && currentPhoneModal == i && (
                            <div className=" absolute right-[50px] bottom-[-10px] px-4 py-2 bg-[#4267B2] text-white rounded cursor-pointer">
                              <p className=" pr-4">{agent?.phone}</p>

                              <button
                                className="absolute top-[0px] right-[5px] text-white text-3xl"
                                onClick={handlePhoneModalClose}
                              >
                                &times;
                              </button>
                            </div>
                          )}
                          {/* phone modal ends here  */}

                          <FaPhone
                            onClick={() => handlePhoneModalOpen(i)}
                            className="h-6 w-6 text-[#4267B2] cursor-pointer"
                          />
                        </div>

                        <a
                          href={`${agent?.facebook}`}
                          target="_blank"
                          className="text-[#4267B2]"
                        >
                          <FaFacebookF className="h-6 w-6" />
                        </a>

                        <a
                          href={`${agent?.instagram}`}
                          target="_blank"
                          className="text-[#E1306C]"
                        >
                          <FaInstagram className="h-6 w-6" />
                        </a>

                        <a
                          href={`${agent?.youtube}`}
                          target="_blank"
                          className="text-[#E1306C]"
                        >
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
    </section>


}


</>
  );
};

export default OurTravelAgents;
