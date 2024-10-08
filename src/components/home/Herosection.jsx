import React, { useEffect, useState } from "react";
import api from "../../api";

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [flashMessage, setFlashMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const slides = [
    { image: "/Images/Homepageimages/goa.jpg" },
    { image: "/Images/Homepageimages/boat_heroImage.png" },
    { image: "/Images/Homepageimages/winter_heroImage.png" },
    { image: "/Images/Homepageimages/mountain_heroImage.png" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide >= slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000);

    setTimeout(() => {
      setIsFormVisible(true);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleFormData = (e) => {
    e.preventDefault();

    console.log("handleFormdata", e);

    const registerBody = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    setIsLoading(true);

    api
      .postReq("register", registerBody)
      .then((data) => {
        setIsLoading(false);
        setFlashMessage(
          "Form submitted successfully you will be contacted soon"
        );
        console.log("successfully refgsitered eith us", data);

        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("something went wrong ", error);
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
    <div className="relative w-full h-[65vh] max-[600px]:h-[60vh] overflow-hidden">
      <button
        className={`absolute z-30 ${
          isFormVisible ? "md:right-1/3 right-[78%]" : "right-0"
        } top-1/2 transform -translate-y-1/2 bg-blue-500 text-white  px-4 py-2 rotate-90 origin-bottom transition-all duration-700 whitespace-nowrap`}
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        Register with us
      </button>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? "translate-y-0" : "translate-y-full"
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            zIndex: index === currentSlide ? 1 : 0,
          }}
        />
      ))}

      <div className=" h-full flex flex-col items-end justify-center">
        <div
          className={`absolute z-40 right-0 w-[80%] md:w-1/3 bg-indigo-300 shadow-lg transition-transform duration-700 ease-in-out ${
            isFormVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className=" px-6 py-2">
            <h2 className="text-2xl font-bold mb-2">Register with us</h2>

            <div
              className={`bg-white rounded ${
                flashMessage ? "block" : "hidden"
              }`}
            >
              <h1 className=" text-center text-green-500 font-bold text-lg">
                {flashMessage}
              </h1>
            </div>

            <form onSubmit={(e) => handleFormData(e)}>
              <div className="mb-2">
                <label className="block text-gray-700 font-bold" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-gray-700 font-bold"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-gray-700 font-bold"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-2">
                <label
                  className="block text-gray-700 font-bold"
                  htmlFor="message"
                >
                  Message
                </label>

                <textarea
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                  id="message"
                  placeholder="message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>

              {/* <div className="mb-2">
              <label
                className="block text-gray-700 font-bold"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
              />
            </div> */}
              <div className="flex items-center justify-between">
                <button
                 disabled={isLoading}                

                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* form ends here  */}
        </div>
      </div>
      {/* form div parent div ends here  */}
    </div>
  );
};

export default Herosection;
