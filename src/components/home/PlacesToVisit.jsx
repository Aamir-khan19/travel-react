import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { useDispatch, useSelector } from "react-redux";
import { publicGetFiveDomesticItinerariesAsync2, setParticularItineraryId } from "../../features/public/publicSlice";
import conf from "../../../conf/conf";
import ContactAgentAndEnquiryNowModal from "../packages/Allpackages/ContactAgentAndEnquiryNowModal";
import PhoneNumberModal from "../packages/Allpackages/PhoneNumberModal";
import EmailModal from "../packages/Allpackages/EmailModal";
import EnquiryModal from "../packages/Allpackages/EnquiryModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlacesToVisit = () => {
  const dispatch = useDispatch();
  const fiveDomesticItineraries2 = useSelector(state => state.public.fiveDomesticItineraries2);
  const isLoading = useSelector(state => state.public.isLoading);

  const navigate = useNavigate();

  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
  const autoSlideInterval = useRef(null);

  const [isContactAgentEnqNowModal, setIsContactAgentEnqNowModal] = useState(false);
  const [isPhoneNumberModal, setIsPhoneNumberModal] = useState(false);
  const [isEmailModal, setIsEmailModal] = useState(false);
  const [isEnquiryModal, setIsEnquiryModal] = useState(false);

  const [mobileNumber, setMobileNumber] = useState('');

  useEffect(()=>{
    if(fiveDomesticItineraries2?.length == 0){
      dispatch(publicGetFiveDomesticItinerariesAsync2())
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
          keenSlider?.current?.next();
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

  }, [fiveDomesticItineraries2]);



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
  
  
    const handlePackageDetails = function(id){
  
    dispatch(setParticularItineraryId(id));
    
    setIsContactAgentEnqNowModal(true);
    }


    const handleExploreAll = function(){
      navigate("/all-places-to-visit");
    }

  return (
    <>
    {
       isLoading?  <div className='flex justify-center h-[50vh] items-center'>

       <div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 
   
       </div>

       :

       <section className="py-2" id="international">

    

       <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
 
         <div>
           <div
             className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-16"
             id="international"
           ></div>
 
           <div className="justify-between flex mb-2">
             <h1 className=" text-blue-900 text-3xl font-bold">Places to visit</h1>
             <button onClick={handleExploreAll} className="text-sm px-5 py-2 rounded-md bg-blue-950 text-white">
               Explore All
             </button>
           </div>
 
         </div>
 
         <div ref={sliderContainer} className="keen-slider">
         {fiveDomesticItineraries2?.map((itinerary, i) => (
              <div key={i} className="keen-slider__slide">
              <div onClick={()=>handlePackageDetails(itinerary?.id)} className="relative h-[350px] overflow-hidden rounded-2xl">
                <img
                 src={conf.laravelBaseUrl + "/" + itinerary?.destination_thumbnail}
                 alt={itinerary?.selected_destination?.label}
                  className="object-cover object-center w-full h-full min-h-[340px] rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col gap-3 justify-end rounded-2xl">
                  <h3 className="text-xl text-white font-semibold">{itinerary?.title}</h3>
  
                  <div
  className="prose max-w-none line-clamp-3 text-white text-sm"
  dangerouslySetInnerHTML={{ __html: itinerary?.destination_detail }}
  />
                </div>
              </div>
            </div>
          
           ))}
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
    }
    
    





    {
        isContactAgentEnqNowModal && (
        <ContactAgentAndEnquiryNowModal
        onClose={() => setIsContactAgentEnqNowModal(false)}
        setIsPhoneNumberModal={setIsPhoneNumberModal}
        setIsEnquiryModal={setIsEnquiryModal}
        />
        )
        }


        {
          isPhoneNumberModal && (
            <PhoneNumberModal mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} onClose={()=>setIsPhoneNumberModal(false)} setIsEmailModal={setIsEmailModal} />
          )
        }


        {
          isEmailModal && (
            <EmailModal mobileNumber={mobileNumber} onClose={()=>setIsEmailModal(false)} />
          )
        }

        {
          isEnquiryModal && ( <EnquiryModal
            onClose={()=>setIsEnquiryModal(false)} />
          )
        }
    
   
   


    </>
  );
};

export default PlacesToVisit;
