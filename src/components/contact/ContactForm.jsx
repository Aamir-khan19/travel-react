import axios from "axios";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!firstName.trim()) errors.firstName = "First name is required";
    if (!lastName.trim()) errors.lastName = "Last name is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!phone.trim()) errors.phone = "Phone number is required";
    if (!message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrors({});

      axios
        .post("https://travel-backend-seven.vercel.app/data", {
          firstName,
          lastName,
          email,
          phone,
          description: message,
        })
        .then((data) => console.log("data success", data))
        .catch((error) => console.log("error", error));
    } else {
      setErrors(errors);
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-white mb-10">
          Let's discuss your project
        </h1>
        <p className="text-center text-lg text-gray-200 mb-14">
          Fill out the form below and our team will get back to you soon.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white shadow-2xl rounded-xl p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <FaUser className="absolute top-4 left-4 text-gray-500" />
              <input
                type="text"
                id="first-name"
                className={`pl-12 bg-gray-50 border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-lg rounded-lg block w-full p-4 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all`}
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div className="relative">
              <FaUser className="absolute top-4 left-4 text-gray-500" />
              <input
                type="text"
                id="last-name"
                className={`pl-12 bg-gray-50 border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-lg rounded-lg block w-full p-4 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all`}
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <FaEnvelope className="absolute top-4 left-4 text-gray-500" />
              <input
                type="email"
                id="email"
                className={`pl-12 bg-gray-50 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-lg rounded-lg block w-full p-4 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all`}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="relative">
              <FaPhone className="absolute top-4 left-4 text-gray-500" />
              <input
                type="text"
                id="phone"
                className={`pl-12 bg-gray-50 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-lg rounded-lg block w-full p-4 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all`}
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>
          <div className="relative">
            <FaCommentDots className="absolute top-4 left-4 text-gray-500" />
            <textarea
              id="message"
              rows="5"
              className={`pl-12 bg-gray-50 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-lg rounded-lg block w-full p-4 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all`}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;