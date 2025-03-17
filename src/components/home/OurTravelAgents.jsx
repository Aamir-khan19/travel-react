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
import { publicGetAllVerifiedTravelAgentsAsync } from "../../features/public/publicSlice";
import conf from "../../../conf/conf";
import { Link } from "react-router-dom";

const OurTravelAgents = () => {
  const dispatch = useDispatch();
  const verifiedTravelAgents = useSelector(state => state.public.verifiedTravelAgents);
  const isLoading = useSelector(state => state.public.isLoading);

  const [filteredAgents, setFilteredAgents] = useState([]);

  
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
  const autoSlideInterval = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [currentPhoneModal, setCurrentPhoneModal] = useState(null);

  useEffect(()=>{
    if(verifiedTravelAgents?.length == 0){
      dispatch(publicGetAllVerifiedTravelAgentsAsync())
      .then((data)=>{
        setFilteredAgents(data.payload);  
      })
    }
    }, []);

    useEffect(()=>{
      if(verifiedTravelAgents?.length > 0){
        setFilteredAgents(verifiedTravelAgents);
      }
    }, []);  


  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    if(verifiedTravelAgents?.length > 0){

      let newFilteredAgents = verifiedTravelAgents?.filter((agent) =>
          agent?.company_name?.toLowerCase()?.trim()?.includes(e.target.value.toLowerCase()?.trim())
        || agent?.company_city?.toLowerCase()?.trim()?.includes(e.target.value.toLowerCase()?.trim())
        );
    
        setFilteredAgents(newFilteredAgents);
    }
  };

    

 
  // Initialize KeenSlider
  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer?.current, {
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
      if (keenSlider?.current) {
        keenSlider?.current?.destroy();
        keenSlider.current = null;
      }
      if (autoSlideInterval?.current) {
        clearInterval(autoSlideInterval.current);
      }
    };

  }, [searchTerm, filteredAgents]);



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
    isLoading?  <div className=' flex justify-center h-[50vh] items-center'>

    <div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 

    </div>


:



    <section>
      <div className="mx-auto relative max-w-[1340px] px-4 sm:px-6 lg:ps-8 my-10">
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
            {filteredAgents?.length > 0 ? (
              filteredAgents?.map((agent, i) => (
                <div className="keen-slider__slide" key={i}>
                  <Link to={`/verified-travel-agent/${agent?.id}`}>
                  <div className=" flex border-[1px] p-2 min-h-[220px] border-gray-600 rounded-lg relative w-full">
                    <div className="bg-[url('/Images/travelAgenciesLogo/verifiedimg.jpeg')] bg-cover bg-center w-[100px] h-[100px] top-0 left-0 absolute z-[-10]"></div>

                    <div className="flex justify-between w-full">
                      <div className="flex w-full flex-col justify-center items-center">
                        <img
                          src={conf?.laravelBaseUrl + "/" + agent?.company_logo}
                          alt={agent?.company_name}
                          className="w-auto h-24 object-contain max-w-[250px]"
                        />
                        <div className="flex gap-2 justify-center items-center flex-col">
                          <h1 className="font-bold text-sm">{agent?.company_name}</h1>
                          <p className="line-clamp-2 text-sm text-center w-[80%]">
                            <span className="font-semibold ">
                              {agent?.company_address && <span>Address:- </span>}
                            </span>
                            {agent?.company_address}
                          </p>

                          <a
                            href={agent?.company_website}
                            target="_blank"
                            className="w-40 p-2 flex items-center justify-center text-white rounded-lg bg-[#01055b]"
                          >
                            View More
                          </a>
                        </div>
                      </div>

                      {/* Icons */}
                      <div className=" bg-white rounded-full flex flex-col items-center justify-between">
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

                  </Link>

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
