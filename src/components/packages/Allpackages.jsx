import React, { useEffect, useState } from "react";import { Link, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import packagedata from "./Allpackages/packagedata";
import { useDispatch, useSelector } from "react-redux";
import { publicGetItinerariesAsync, setParticularItineraryId } from "../../features/public/publicSlice";
import conf from "../../../conf/conf";
import ContactAgentAndEnquiryNowModal from "./Allpackages/ContactAgentAndEnquiryNowModal";
import PhoneNumberModal from "./Allpackages/PhoneNumberModal";
import EmailModal from "./Allpackages/EmailModal";
import EnquiryModal from "./Allpackages/EnquiryModal";

const Allpackages = () => {
  const dispatch = useDispatch();

  const selectedDestinationItineraries = useSelector(state => state.public.selectedDestinationItineraries);

  const isLoading = useSelector(state => state.public.isLoading);

  const {name} = useParams();

  const [isContactAgentEnqNowModal, setIsContactAgentEnqNowModal] = useState(false);
  const [isPhoneNumberModal, setIsPhoneNumberModal] = useState(false);
  const [isEmailModal, setIsEmailModal] = useState(false);
  const [isEnquiryModal, setIsEnquiryModal] = useState(false);

  const [mobileNumber, setMobileNumber] = useState('');


  useEffect(()=>{
  dispatch(publicGetItinerariesAsync(name));
  }, [name]);


  console.log("Allpackages.jsx SelectedDestinationItineraries", selectedDestinationItineraries);


  const handlePackageDetails = function(id){
  console.log("Allpackages.jsx id", id);

  dispatch(setParticularItineraryId(id));
  
  setIsContactAgentEnqNowModal(true);
  }


  useEffect(() => {

    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [name]);


  return (
    <>

    {

    isLoading? <div className=' flex justify-center h-[50vh] items-center'>

      <div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 
      
      </div>

      :

      <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-[#01055b]">
          Explore Our Packages
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedDestinationItineraries?.length > 0 ? (
            selectedDestinationItineraries?.map((itinerary, index) => (
              <div
                key={itinerary?.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <div className=" relative">
                <img
                  src={`${conf?.laravelBaseUrl}/${itinerary?.destination_thumbnail}`}
                  className="h-60 w-full object-cover"
                  alt="Package"
                />

<span className="absolute bottom-4 right-4 bg-blue-900 text-white text-xs sm:text-sm font-medium px-3 py-1 rounded">
                {itinerary?.duration?.label}
              </span>
                </div>
               
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">

<div className="flex justify-between items-center w-full">
<p className=" text-blue-900 text-lg font-semibold">From ₹ {itinerary?.pricing? itinerary?.pricing : <span>****</span> }</p>


<div className=" flex justify-center items-center">
<FaRegStar className="text-yellow-400 text-xl" />
<span className="text-sm text-blue-900 ml-1">
4.9 (1.2k Reviews)
</span>
</div>

</div>


                  </div>
                  
                  <p className="text-blue-900 mb-4 font-semibold capitalize">{itinerary?.title}</p>

                  <div
                   className="block bg-blue-900 cursor-pointer text-white py-2 px-4 rounded-lg text-center shadow-md hover:bg-blue-900 hover:shadow-lg transition-all"
                   onClick={()=>handlePackageDetails(itinerary?.id)}>See Details</div>


                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-3">
              No packages found.
            </p>
          )}
        </div>
      </div>

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

    </div>

    }
    </>
  );
};

export default Allpackages;
