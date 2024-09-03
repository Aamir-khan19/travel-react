import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";

const DomesticTopTourPackage = () => {
  const internationalTopTourPackageData = [
    {
      imageUrl: `https://cdn.pixabay.com/photo/2017/02/16/11/33/klong-prao-beach-2071238_640.jpg`,
      title: "Andaman",
      description:
        "Explore the pristine beaches and crystal-clear waters of Andaman.",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2022/09/19/20/17/pony-7466390_640.jpg`,
      title: "Kashmir",
      description:
        "Experience the breathtaking beauty and serenity of Kashmir.",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2018/04/22/18/19/caravan-3341872_640.jpg`,
      title: "Rajasthan",
      description:
        "Discover the rich cultural heritage and majestic palaces of Rajasthan.",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2017/05/30/05/46/goa-2355883_640.jpg`,
      title: "Goa",
      description: "Enjoy the vibrant nightlife and stunning beaches of Goa.",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2021/09/13/08/59/lake-6620689_640.jpg`,
      title: "Himachal",
      description:
        "Immerse yourself in the natural beauty and adventure activities in Himachal.",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/08/16/07/59/uttarakhand-5492099_640.jpg`,
      title: "Uttarakhand",
      description:
        "Explore the scenic landscapes and spiritual retreats in Uttarakhand.",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2016/03/27/17/26/water-1283199_640.jpg`,
      title: "Kerala",
      description:
        "Experience the tranquil backwaters and lush greenery of Kerala.",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2017/06/13/07/22/gate-of-india-2397838_640.jpg`,
      title: "Mumbai",
      description:
        "Discover the bustling city life and iconic landmarks of Mumbai.",
    },
  ];

  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 768px)": {
            slides: {
              origin: "auto",
              perView: 2,
              spacing: 16,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 3,
              spacing: 16,
            },
          },
        },
      });
    }
  }, []);

  const handlePrevSlide = () => {
    if (keenSlider.current) {
      keenSlider.current.prev();
    }
  };

  const handleNextSlide = () => {
    if (keenSlider.current) {
      keenSlider.current.next();
    }
  };

  return (
    <section className="py-10 md:py-20">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-16" id="domestic">
          <h2 className="text-center text-[#01055b] md:text-5xl text-3xl font-bold mb-4 sm:mb-0 flex-grow">
            Highlight Domestic Packages 
          </h2>
          <div className="hidden sm:flex gap-4">
            <button
              aria-label="Previous slide"
              onClick={handlePrevSlide}
              className="rounded-full bg-[#01055b] p-4 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="w-6 h-6"
              >
                <path
                  fill="currentColor"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              onClick={handleNextSlide}
              className="rounded-full bg-[#01055b] p-4 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="w-6 h-6"
              >
                <path
                  fill="currentColor"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div ref={sliderContainer} className="keen-slider">
          {internationalTopTourPackageData.map((item, i) => (
            <div key={i} className="keen-slider__slide">
              <div className="relative w-full  h-96 rounded-xl overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute flex flex-col gap-3 bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm leading-6">
                    {item.description}
                  </p>
                  <Link to ="/contact">
                  <button className="bg-white rounded-lg py-2 px-4 text-[#01055b] font-semibold w-full">
                    Contact
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex sm:hidden justify-center gap-4 mt-8">
          <button
            aria-label="Previous slide"
            onClick={handlePrevSlide}
            className="rounded-full bg-[#01055b] p-4 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-6 h-6"
            >
              <path
                fill="currentColor"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
          <button
            aria-label="Next slide"
            onClick={handleNextSlide}
            className="rounded-full bg-[#01055b] p-4 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-6 h-6"
            >
              <path
                fill="currentColor"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DomesticTopTourPackage;
