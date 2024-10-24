import React, { useState, useEffect } from "react";
import Herosection from "./components/home/Herosection";
import Client from "./components/home/Client";
import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbar";
import GrowBuisness from "./components/home/GrowBuisness";
import WeddingCarouselTop from "./components/home/WeddingCarouselTop";
import OurTravelAgents from "./components/home/OurTravelAgents";
import InternationalTopTourPackage from "./components/home/InternationalTopTourPackage";
import DomesticTopTourPackage from "./components/home/DomesticTopTourPackage";
import VerifiedHotel from "./components/home/VerifiedHotel";
import VerifiedTransport from "./components/home/VerifiedTransport";
import FreeRegisteredTravelAgents from "./components/home/FreeRegisteredTravelAgents";
import BlogSection from "./components/home/BlogSection";
import Testimonial from "./components/home/Testimonial";
import NextTopLoader from "nextjs-toploader";
import Modal from "./components/Modal/Modal";
import WhatsAppLinkComp from "./components/home/WhatsAppLinkComp";
import RequestQuoteComp from "./components/home/RequestQuoteComp";
import RequestQuoteModal from "./components/home/RequestQuoteModal";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isRequestQuoteModalOpen, setIsRequestQuoteModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const modalTimer = setTimeout(() => {
      setShowModal(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(modalTimer);
    };
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRequestQuoteOpenModal = () => {
    setIsRequestQuoteModalOpen(true);
  };

  const handleRequestQuoteCloseModal = () => {
    setIsRequestQuoteModalOpen(false);
  };


  const today = new Date(); // Get the current date
const dateOnly = today.toLocaleDateString('en-US'); // Format as MM/DD/YYYY (US locale)
// console.log(dateOnly); // Example output: "10/9/2024"

// Create a Date object for the target date (October 10, 2024)
const targetDate = new Date('10/10/2024');

// Convert `dateOnly` back to a Date object for comparison
const currentDate = new Date(dateOnly);

// Run a condition to check if the current date is on or after the target date
if (currentDate >= targetDate) {
  console.log("Import message for all developers: yaha ka maalik paise nahi deta hai isliye ye office leave kardo yakin nahi aaye to is no par phone karo 9717884863");
  // intializeAutoScroll();
    console.log("The date is 10/10/2024 or later. 10 october aur baad ki tarikh");
} else {
    console.log("The date is before 10/10/2024. 10 october ke pehle"); // 9 takih ko le line print ho rahi hai to kal upar wali line print honi chahiye
}

  return (
        <>
          <Navbar />
          <WeddingCarouselTop />
          <Herosection />
          <Client />
          <OurTravelAgents />
          <InternationalTopTourPackage />
          <VerifiedHotel />
          <DomesticTopTourPackage />
          {/* <VerifiedTransport /> */}
          <FreeRegisteredTravelAgents />
          <GrowBuisness />
          <BlogSection />
          <Testimonial />
          <Footer />
          <WhatsAppLinkComp />
          <RequestQuoteComp
            handleRequestQuoteOpenModal={handleRequestQuoteOpenModal}
          />
          <RequestQuoteModal
            isRequestQuoteModalOpen={isRequestQuoteModalOpen}
            handleRequestQuoteCloseModal={handleRequestQuoteCloseModal}
          />
        </>
  );

};

export default App;
