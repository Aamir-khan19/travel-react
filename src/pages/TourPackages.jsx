import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Allpackages from "../components/packages/Allpackages";
import Packagesbanner from "../components/packages/Packagesbanner";
const TourPackages = () => {
  return (
    <>
      <Navbar />
      <Allpackages/>
      <Packagesbanner/>
      <Footer />
    </>
  )
}

export default TourPackages