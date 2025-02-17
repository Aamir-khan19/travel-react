import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { useDispatch, useSelector } from "react-redux";
import { publicGetRandomItinerariesAsync2, setParticularItineraryId } from "../../features/public/publicSlice";
import conf from "../../../conf/conf";
import ContactAgentAndEnquiryNowModal from "../packages/Allpackages/ContactAgentAndEnquiryNowModal";
import PhoneNumberModal from "../packages/Allpackages/PhoneNumberModal";
import EmailModal from "../packages/Allpackages/EmailModal";
import EnquiryModal from "../packages/Allpackages/EnquiryModal";

const TrendingPackage = () => {
  const dispatch = useDispatch();
  const randomItineraries = useSelector((state) => state.public.randomItineraries2);
  const isLoading = useSelector((state) => state.public.isLoading);

  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
  const autoSlideInterval = useRef(null);

  const [isContactAgentEnqNowModal, setIsContactAgentEnqNowModal] = useState(false);
  const [isPhoneNumberModal, setIsPhoneNumberModal] = useState(false);
  const [isEmailModal, setIsEmailModal] = useState(false);
  const [isEnquiryModal, setIsEnquiryModal] = useState(false);

  const [mobileNumber, setMobileNumber] = useState("");

  useEffect(() => {
    if (randomItineraries?.length === 0) {
      dispatch(publicGetRandomItinerariesAsync2());
    }
  }, []);

  // Initialize KeenSlider
  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer?.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 288px)": {
            slides: {
              perView: 1,
            },
          },
          "(min-width: 768px)": {
            slides: {
              perView: 2,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              perView: 3,
            },
          },
        },
      });

      // Auto slide every 10 seconds
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
  }, [randomItineraries]);


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

  const handlePackageDetails = (id) => {
    dispatch(setParticularItineraryId(id));
    setIsContactAgentEnqNowModal(true);
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center h-[50vh] items-center">
          <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600"></div>
        </div>
      ) : (
        <section id="trending_package" className=" mb-10 bg-yellow-100 py-10">
        <div className="mx-auto relative max-w-[1340px] px-4 sm:px-6 lg:ps-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mx-auto mb-4">
            <h2 className="text-center text-[#01055b] md:text-5xl text-3xl font-bold sm:mb-0 flex-grow">
              Trending Package
            </h2>
  
          </div>
  
          {/* Slider Section */}
          <div className="relative lg:col-span-2 lg:mx-0">
            <div ref={sliderContainer} className="keen-slider">
              {(randomItineraries?.length > 0) && (
                randomItineraries?.map((itinerary, i) => (
                  <div className="keen-slider__slide" key={i}>
                    <div className="max-w-sm rounded-lg shadow-lg border border-gray-200 bg-gray-50 p-2 flex items-cente min-h-[220px]">
        {/* Left Side */}
        <div className="flex-1 pr-4 relative">
          <h2 className="text-lg font-bold text-gray-800">{itinerary?.selected_destination?.label}</h2>
          <p className="text-sm text-gray-600">
            {itinerary?.title}
          </p>
          <p className="text-xl font-semibold text-orange-600 mt-2">
          From ₹ 
            {itinerary?.pricing}</p>
          <button onClick={()=>handlePackageDetails(itinerary?.id)} className="mt-4 px-4 md:px-8 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 bottom-0 absolute">
            Know More
          </button>
        </div>
        {/* Right Side */}
        <div className=" w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-lg">
          <img
            src={conf.laravelBaseUrl + "/" + itinerary?.destination_thumbnail}
            alt={itinerary?.selected_destination?.label}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
                  </div>
                ))
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
      )}
      {/* Modals */}
      {isContactAgentEnqNowModal && (
        <ContactAgentAndEnquiryNowModal
          onClose={() => setIsContactAgentEnqNowModal(false)}
          setIsPhoneNumberModal={setIsPhoneNumberModal}
          setIsEnquiryModal={setIsEnquiryModal}
        />
      )}
      {isPhoneNumberModal && (
        <PhoneNumberModal
          mobileNumber={mobileNumber}
          setMobileNumber={setMobileNumber}
          onClose={() => setIsPhoneNumberModal(false)}
          setIsEmailModal={setIsEmailModal}
        />
      )}
      {isEmailModal && <EmailModal mobileNumber={mobileNumber} onClose={() => setIsEmailModal(false)} />}
      {isEnquiryModal && <EnquiryModal onClose={() => setIsEnquiryModal(false)} />}
    </>
  );
};

export default TrendingPackage;
