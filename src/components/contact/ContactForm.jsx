"use client";
import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAddIcCall, MdOutlineMessage } from "react-icons/md";
import api from "../../api.js";

const Contact = () => {
  const [result, setResult] = useState("Submit");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [flashMessage, setFlashMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const contactSubmit = async (e) => {
    e.preventDefault();

    const registerBody = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    setIsLoading(true);

    api.postReq("contact-us", registerBody)
    .then((data)=>{
     console.log("contact-us", data)
     setIsLoading(false);

     setFlashMessage("Form submitted successfully you will be contacted soon");
     console.log("successfully refgsitered eith us", data);
 
     setFormData({ name: "", email: "", phone: "", message: "" });
    })
    .catch((error)=>{
      setIsLoading(false);
      console.log("oopps seomtjing went wrong", error)
    })
  };


  useEffect(()=>{
    if(flashMessage){
      setTimeout(()=>{
      setFlashMessage("");
      }, 5000)
    }
    }, [flashMessage]);
  
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

  return (
    <section className="bg-gradient-to-r from-white-100 to white-300 py-20">
      <div className="px-4">
        <section className="max-w-7xl mx-auto flex flex-col gap-10 px-4 md:px-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col gap-8 md:w-1/2">
              <div className="flex gap-6 items-start">
                <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4">
                  <IoLocationOutline color="#01055b" size={40} />
                  <p className="text-base text-gray-800">
                    34, Sewak Park (1st floor), Dwarka More Metro, Near Metro <br />
                    Pillar No-772, New Delhi-110059
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4">
                  <MdOutlineAddIcCall color="#01055b" size={40} />
                  <div className="flex flex-col">
                    <p className="text-base font-medium">Phone Number</p>
                    <p className="text-base text-gray-800">1800-121-4252</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4">
                  <MdOutlineMessage color="#01055b" size={40} />
                  <div className="flex flex-col">
                    <p className="text-base font-medium">Email Us</p>
                    <p className="text-base text-gray-800">info@travelnworld.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 md:w-1/2">
              <h2 className="text-xl font-semibold text-center">Leave a Reply</h2>

              <div className={ `bg-white rounded ${flashMessage? "block" : "hidden"}`}>
         <h1 className=" text-center text-green-500 font-bold text-lg">{flashMessage}</h1>
         </div>

              <form onSubmit={contactSubmit} className="flex flex-col gap-5 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex gap-5">
                  <div className="relative w-1/2">
                    <input
                      type="text"
                      placeholder="Name*"
                      name="name"
                      className="border border-gray-300 rounded-lg py-3 px-4 w-full pl-12"
                      required

                      value={formData.name}
                      onChange={handleChange}
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      {/* <IoLocationOutline color="#01055b" size={20} /> */}
                    </div>
                  </div>
                  <div className="relative w-1/2">
                    <input
                      type="email"
                      placeholder="Email*"
                      name="email"
                      className="border border-gray-300 rounded-lg py-3 px-4 w-full pl-12"
                      required

                      value={formData.email}
                      onChange={handleChange}
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      {/* <MdOutlineMessage color="#01055b" size={20} /> */}
                    </div>
                  </div>
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  className="border border-gray-300 rounded-lg py-3 px-4"
                  required

                  value={formData.phone}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Message*"
                  cols="30"
                  rows="6"
                  className="border border-gray-300 rounded-lg py-3 px-4"
                  required

                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button
                disabled={isLoading}
                className="text-white bg-[#01055b] rounded-lg w-full px-5 py-3 flex justify-center items-center transition-transform transform hover:scale-105">
                  {isSubmitting ? "Sending..." : result}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;