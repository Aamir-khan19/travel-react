import React, { useState } from "react";

const Modal = ({ onClose }) => {
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
      console.log({ firstName, lastName, email, phone, message });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center  items-center z-50">
      <div className="bg-white px-9 pb-6 rounded-lg shadow-lg max-w-md w-full relative pt-5 mt-[70px]">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h1 className="text-3xl font-bold text-center mb-3">
          Let's talk about your project
        </h1>
        <p className="text-center text-gray-600 mb-3">
          Drop us a line through the form below and we'll get back to you
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                id="first-name"
                className={`shadow-sm bg-gray-50 border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-sm rounded-lg block w-full p-3`}
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                id="last-name"
                className={`shadow-sm bg-gray-50 border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-sm rounded-lg block w-full p-3`}
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                id="email"
                className={`shadow-sm bg-gray-50 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-sm rounded-lg block w-full p-3`}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                id="phone"
                className={`shadow-sm bg-gray-50 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-sm rounded-lg block w-full p-3 `}
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>
          <div>
            <textarea
              id="message"
              rows="4"
              className={`shadow-sm bg-gray-50 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg block w-full p-3`}
              placeholder="Leave a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 px-5 text-sm font-medium text-center text-white  bg-[#01055b]  rounded-lg hover:bg-primary-800 transition duration-300"
          >
            Send message
          </button>

          
        </form>
      </div>
    </div>

    
  );
};

export default Modal;

