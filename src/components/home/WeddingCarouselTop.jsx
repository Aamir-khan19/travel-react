import React, { useState, useEffect } from "react";

const WeddingCarouselTop = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1519379169146-d4b170447caa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
      companyName: "Company Name 1",
      title: "Wedding Planner 1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
      companyName: "Company Name 2",
      title: "Wedding Planner 2",
    },
    {
      image:
        "https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
      companyName: "Company Name 3",
      title: "Wedding Planner 3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519379169146-d4b170447caa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
      companyName: "Company Name 1",
      title: "Wedding Planner 1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
      companyName: "Company Name 2",
      title: "Wedding Planner 2",
    },
    {
      image:
        "https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
      companyName: "Company Name 3",
      title: "Wedding Planner 3",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);
  return (
    <div className="relative overflow-hidden w-full h-28 ">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex h-28 w-full flex-row flex-shrink-0"
          >
            <img
              src={slide.image}
              className="sm:w-full object-cover w-1/2"
              alt=""
            />
            <div
              className="lg:w-[600px] w-[400px] p-5 bg-violet-950 text-white
            flex flex-col lg:gap-5 gap-3 justify-center "
            >
              <p className="lg:text-3xl text-base md:text-xl">{slide.title}</p>
              <p className="p-2 bg-white rounded-xl text-black lg:w-40 w-24 lg:text-base text-sm flex items-center justify-center">
                Know more
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingCarouselTop;
