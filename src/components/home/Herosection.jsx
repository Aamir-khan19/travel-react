import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signupAsync } from "../../features/signup/signupSlice";

const Herosection = () => {
  const dispatch = useDispatch();
  const [flashMessage, setFlashMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    email: "",
    phone: "",
    location: "",
    your_requirements: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleFormData = (e) => {
    e.preventDefault();
    setIsLoading(true);

    dispatch(signupAsync(formData))
      .then(() => {
        setIsLoading(false);
        setFlashMessage("Form submitted successfully! You will be contacted soon.");
        setFormData({ name: "", company_name: "", email: "", phone: "", location: "", your_requirements: "" });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    if (flashMessage) {
      setTimeout(() => {
        setFlashMessage("");
      }, 5000);
    }
  }, [flashMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="relative h-[80vh] w-full flex items-center px-10">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/Videos/tnw_welcome.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Heading */}
      {/* <h1 className="absolute top-10 left-10 text-5xl font-bold text-blue-900 drop-shadow-lg">
        Let’s Explore Goa
      </h1> */}

      {/* Right-Aligned Transparent Form */}
      <div className="relative z-10 ml-auto w-full max-w-[320px] p-4 bg-white bg-opacity-70 text-gray-800 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-blue-800">Tell us what you're looking for!</h2>

        {flashMessage && (
          <div className="bg-white text-green-500 opacity-75 text-center font-bold p-2 rounded mb-3">
            {flashMessage}
          </div>
        )}

        <form onSubmit={handleFormData} className="space-y-2">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
          />

          <input
            id="company_name"
            type="text"
            name="company_name"
            placeholder="Your Business Name"
            value={formData.company_name}
            onChange={handleChange}
            required
            className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
          />

          <input
            id="phone"
            type="number"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
          />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
          />

          <input
            id="location"
            type="text"
            name="location"
            placeholder="Your Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
          />

          <textarea
            value={formData.your_requirements}
            onChange={handleChange}
            name="your_requirements"
            id="your_requirements"
            placeholder="Your Requirements"
            className="w-full px-1 border-[1.5px] border-gray-400 rounded bg-transparent text-gray-800"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-1 rounded hover:bg-blue-800 transition"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>

          <div className="flex items-center">
            <input type="checkbox" name="agree" className="mr-2" />
            <label className="text-sm text-gray-800">I agree to get all Email/SMS from you.</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Herosection;






















