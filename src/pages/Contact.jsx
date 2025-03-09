import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import ContactForm from "../components/contact/ContactForm";
import ContactPageVideoSection from "../components/contact/ContactPageVideoSection";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactPageVideoSection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
