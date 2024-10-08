import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppLinkComp() {
  return (
    <>
      <div className=" fixed z-50 bottom-[10px] left-[10px]">
        <a
          href="https://api.whatsapp.com/send/?phone=7290087051&text&type=phone_number&app_absent=0"
          target="_blank"
          className="text-[#2fb347]"
        >
          <FaWhatsapp className=" h-14 w-14 bg-green-500 rounded-full text-white px-2 py-2 " />
        </a>
      </div>
    </>
  );
}

export default WhatsAppLinkComp;
