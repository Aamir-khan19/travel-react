import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Packagesbanner from "../components/packages/Packagesbanner";
import Allpackages from "../components/packages/Allpackages";

const Packages = () => {
  return (
    <>
      <Navbar />
      <Allpackages />
      <Packagesbanner />
      <Footer />
    </>
  );
};

export default Packages;
