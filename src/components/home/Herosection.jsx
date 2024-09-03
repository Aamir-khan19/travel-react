import React, { useEffect, useState } from "react";

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(true);

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

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[85vh] max-[600px]:h-[60vh] overflow-hidden">
      {/* Button to trigger the form */}
      <button
        className={`absolute z-30 ${
          isFormVisible ? "right-1/3 max-[600px]:right-[78%]" : "right-0"
        } top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rotate-90 origin-bottom transition-all duration-700 whitespace-nowrap`}
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

      {/* Form with smooth transition */}
      {/* form div parent div starts here   */}
       <div className=" h-full flex flex-col items-end justify-center">

       

      <div
        className={`absolute z-50 right-0 w-1/3 max-[600px]:w-[80%] bg-indigo-300 shadow-lg transition-transform duration-700 ease-in-out ${
          isFormVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* form div starts here  */}
        <div className=" px-6 py-2">
          <h2 className="text-2xl font-bold mb-2">Register with us</h2>
          <form>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold" htmlFor="phone">
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Your Phone Number"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
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
