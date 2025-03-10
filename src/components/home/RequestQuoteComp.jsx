import React, { useState, useEffect } from "react";
import { FaMessage } from "react-icons/fa6";

function RequestQuoteComp({ handleRequestQuoteOpenModal }) {
  const [isAboveFooter, setIsAboveFooter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboveFooter(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    const footerElement = document.getElementById("global_footer"); // Make sure the footer has this ID
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <div
      className={`fixed z-50 right-4 transition-all duration-300 ease-in-out ${
        isAboveFooter ? "md:bottom-[200px] bottom-[820px]" : "bottom-[16px]"
      }`}
    >
      <button
        onClick={handleRequestQuoteOpenModal}
        className="text-white px-2 py-2 flex flex-col justify-center items-center bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 overflow-hidden"
      >
        <FaMessage className="text-3xl" />
      </button>
    </div>
  );
}

export default RequestQuoteComp;
