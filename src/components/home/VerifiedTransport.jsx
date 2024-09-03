import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { IoIosCall, IoIosMailOpen } from "react-icons/io";
const VerifiedTransport = () => {
  // Destinations Data
  const ourTravelAgents = [
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Bhutan",
      link: "/packages/bhutan",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Bangladesh",
      link: "/product-category/international/bangladesh",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Mauritious",
      link: "/product-category/international/mauritious",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Switzerland",
      link: "/product-category/international/switzerland",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Dubai",
      link: "/packages/dubai",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Nepal",
      link: "/packages/nepal",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Singapore",
      link: "/packages/singapore",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Thailand",
      link: "/packages/thailand",
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
          perView: 1, // Default to 1 review visible
          spacing: 8,
        },
        breakpoints: {
          "(min-width: 288px)": {
            slides: {
              origin: "auto",
              perView: 1, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 768px)": {
            slides: {
              origin: "auto",
              perView: 2, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 3, // Show 3 reviews on screens >= 1024px
              spacing: 12,
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
    <section className="">
      <div className="mx-auto relative max-w-[1340px] px-4 md:py-20 py-10 sm:px-6    lg:ps-8 ">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-16">
          <h2 className="text-center text-[#01055b] md:text-5xl text-3xl font-bold mb-4 sm:mb-0 flex-grow">
            Verified Transports
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

        <div className=" sm:mt-16 relative mt-8 lg:col-span-2  lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {ourTravelAgents.map((item, i) => (
              <div key={i}>
                <div className="keen-slider__slide" key={i}>
                  <div className="flex  relative w-full sm:w-auto">
                    <div className="flex flex-col gap-5  sm:justify-start justify-center sm:items-start items-center">
                      <img
                        src="https://cdn.pixabay.com/photo/2017/06/15/09/50/dominican-2404638_640.jpg"
                        alt=""
                        className="rounded-xl"
                      />
                      <div className="flex px-4 flex-col w-full gap-2">
                        <h1 className="font-medium text-xl">
                          Star Link Holidays
                        </h1>
                        <p className="text-[#fb3203]">Yatin Mehta</p>
                        <div className="flex w-full  justify-between items-center">
                          <div className="flex sm:text-base text-xs items-center gap-1">
                            <IoIosCall size={20} />
                            9857748399
                          </div>
                          <div className="flex sm:text-base text-xs items-center gap-1">
                            <IoIosMailOpen size={20} />
                            example@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex sm:hidden justify-center gap-4 mt-8">
          <button
            aria-label="Previous slide"
            onClick={handlePrevSlide}
            className="rounded-full bg-[#01055b] p-4 text-white "
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
            className="rounded-full bg-[#01055b] p-4 text-white "
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

export default VerifiedTransport;
