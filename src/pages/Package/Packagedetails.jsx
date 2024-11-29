import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import KeenSliderCarousel from "../../components/package_details/KeenSliderCarousel";
import EnquiryForm from "../../components/package_details/EnquiryForm";
import HotelDetails from "../../components/package_details/HotelDetails";
import InclusionExclusion from "../../components/package_details/InclusionExclusion";
import CancellationPolicy from "../../components/package_details/CancellationPolicy";
import { useParams } from "react-router-dom";
import { publicGetParticularItineraryAsync, setParticularItinerary } from "../../features/public/publicSlice";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";

const PackageDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const selectedDestinationItineraries = useSelector((state) => state.public.selectedDestinationItineraries);
  const particularItinerary = useSelector((state) => state.public.particularItinerary);
  const isLoading = useSelector((state) => state.public.isLoading);

  useEffect(() => {
    if (selectedDestinationItineraries.length > 0) {
      dispatch(setParticularItinerary({ id }));
    } else {
      dispatch(publicGetParticularItineraryAsync(id));
    }
  }, [id]);

  return (
    <>
    <Navbar />
      {isLoading ? (
        <div className="flex justify-center h-[50vh] items-center">
          <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        </div>
      ) : (
        <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Carousel */}
            <KeenSliderCarousel />

            {/* Title */}
            <h1 className="text-4xl font-extrabold mt-4 text-center text-gray-800">{particularItinerary?.title}</h1>

            {/* Destination Details */}
            <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Destination Details</h3>
              <div
                className="prose max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: particularItinerary?.destination_detail }}
              />
            </div>

            {/* Hotel Details */}
            <HotelDetails />

            {/* Inclusion/Exclusion */}
            <InclusionExclusion />
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Enquiry Form */}
            <EnquiryForm />

            {/* Cancellation Policy */}
            <div className="p-6 bg-red-50 border border-red-200 rounded-lg shadow-lg">
              <CancellationPolicy />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default PackageDetails;
