import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import { useDispatch, useSelector } from "react-redux";
import { publicGetAllDomesticItinerariesAsync2, setParticularItineraryId } from "../features/public/publicSlice";
import conf from "../../conf/conf";
import ContactAgentAndEnquiryNowModal from "../components/packages/Allpackages/ContactAgentAndEnquiryNowModal";
import PhoneNumberModal from "../components/packages/Allpackages/PhoneNumberModal";
import EmailModal from "../components/packages/Allpackages/EmailModal";
import EnquiryModal from "../components/packages/Allpackages/EnquiryModal";


function AllPlacesToVisit(){
    const dispatch = useDispatch();
  
    // Select the itineraries and loading state from redux store.
    const itineraries = useSelector(state => state.public.allDomesticItineraries2);
    const isLoading = useSelector(state => state.public.isLoading);

      const [isContactAgentEnqNowModal, setIsContactAgentEnqNowModal] = useState(false);
      const [isPhoneNumberModal, setIsPhoneNumberModal] = useState(false);
      const [isEmailModal, setIsEmailModal] = useState(false);
      const [isEnquiryModal, setIsEnquiryModal] = useState(false);
    
      const [mobileNumber, setMobileNumber] = useState('');
  
    // Dispatch the async thunk to load all itineraries when the component mounts.
    useEffect(() => {
      if (!itineraries || itineraries.length === 0) {
        dispatch(publicGetAllDomesticItinerariesAsync2());
      }
    }, [dispatch, itineraries]);


       const handlePackageDetails = function(id){
        
          dispatch(setParticularItineraryId(id));
          
          setIsContactAgentEnqNowModal(true);
          }

  
    return (
        <>
        <Navbar />
        
       
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-blue-900 text-5xl font-bold mb-4 text-center">Top places to visit</h1>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {itineraries && itineraries?.length > 0 ? (
                itineraries?.map((itinerary, index) => (
                    <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl transition duration-300 border-blue-500"
                    onClick={() => handlePackageDetails(itinerary?.id)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      {/* Image with a smooth zoom effect on hover */}
                      <img
                        src={conf.laravelBaseUrl + "/" + itinerary?.destination_thumbnail}
                        alt={itinerary?.selected_destination?.label || "Itinerary Image"}
                        className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                      />
                      {/* Optional gradient overlay for added depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4 bg-gray-50">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{itinerary?.title}</h3>
                      <div
                        className="text-gray-600 text-sm line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: itinerary?.destination_detail }}
                      />
                    </div>
                  </div>
                  
                ))
              ) : (
                <p>No itineraries found.</p>
              )}
            </div>
          )}
        </div>
      </section>




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



<Footer />

      </>
    );
}

export default AllPlacesToVisit;
