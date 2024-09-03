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
import NextTopLoader from 'nextjs-toploader';
import Modal from "./components/Modal/Modal";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const modalTimer = setTimeout(() => {
      setShowModal(true);
    }, 4000); // Show modal after 4 seconds

    return () => {
      clearTimeout(timer);
      clearTimeout(modalTimer);
    };
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-white">
          <NextTopLoader
            color="#FD4A4C"
            initialPosition={0.08}
            crawlSpeed={200}
            height={2}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
          />
        </div>
      ) : (
        <>
          {/* {showModal && <Modal onClose={handleCloseModal} />} */}
          <Navbar />
          <WeddingCarouselTop />
          <Herosection />
          <Client />
          <OurTravelAgents />
          <InternationalTopTourPackage />
          <VerifiedHotel />
          <DomesticTopTourPackage />
          <VerifiedTransport />
          <FreeRegisteredTravelAgents />
          <GrowBuisness />
          <BlogSection />
          <Testimonial />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;

