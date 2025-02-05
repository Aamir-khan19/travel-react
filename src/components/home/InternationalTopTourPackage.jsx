import React, { Suspense, useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";

const InternationalTopTourPackage = () => {
  const internationalTopTourPackageData = [
    {
      imageUrl: `https://cdn.pixabay.com/photo/2015/02/24/13/23/buildings-647400_640.jpg`,
      title: "Singapore",
      description:
        "Experience the vibrant culture, stunning skyline, and world-class attractions in Singapore. From Gardens by the Bay to Sentosa Island",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/03/19/18/29/camel-4948299_640.jpg`, 
      title: "Dubai",
      description:
        "Discover the luxury and adventure of Dubai. Visit the iconic Burj Khalifa, explore the vast desert, and indulge in shopping at world-renowned malls.",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/09/06/09/05/beach-5548446_640.jpg`,
      title: "Bali",
      description:
        "Relax and rejuvenate in Bali, known for its beautiful beaches, vibrant culture, and serene landscapes. Perfect for a romantic getaway or a family vacation.",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_640.jpg`,
      title: "Switzerland",
      description:
        "Explore the picturesque landscapes and charming cities of Switzerland. From the Swiss Alps to the beautiful lakes.",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2021/02/23/11/06/mountains-6043079_960_720.jpg`,
      title: "Nepal",
      description:
        "Embark on an adventure in Nepal, home to the majestic Himalayas. Trek through stunning landscapes, visit ancient temples.",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2016/09/15/01/57/temple-1670926_640.jpg`,
      title: "Thailand",
      description:
        "Experience the vibrant street life, beautiful beaches, and delicious cuisine of Thailand. From Bangkok's bustling markets to the tranquil islands.",
    },
  ];
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
   const autoSlideInterval = useRef(null);

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




      // Set up auto slide every 3 seconds
      autoSlideInterval.current = setInterval(() => {
        if (keenSlider.current) {
          keenSlider.current.next();
        }
      }, 5000);

    }



    return () => {
      if (keenSlider?.current) {
        keenSlider?.current?.destroy();
        keenSlider.current = null;
      }
      if (autoSlideInterval?.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
    



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
    <section className="py-2" id="international">

    

      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">

        <div>
          <div
            className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-16"
            id="international"
          ></div>

<h1 className=" text-blue-900 text-3xl font-bold mb-2">Top Most Tour Package</h1>

          <div className="justify-between flex mb-2">
            <h3 className="text-[#FB471E]">International</h3>
            <button className="text-sm px-5 py-2 rounded-md bg-blue-950 text-white">
              Explore All
            </button>
          </div>

        </div>

        <div ref={sliderContainer} className="keen-slider">
        {internationalTopTourPackageData.map((item, i) => (
           <div key={i} className="keen-slider__slide">
           <div className="relative h-[350px] overflow-hidden rounded-2xl">
             <img
               src={item.imageUrl}
               alt={item.title}
               className="object-cover object-center w-full h-full min-h-[340px] rounded-2xl"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col gap-3 justify-end rounded-2xl">
               <h3 className="text-xl text-white font-semibold">{item.title}</h3>
               <p className="text-white text-sm leading-6">{item.description}</p>
             </div>
           </div>
         </div>
         
          ))}
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

export default InternationalTopTourPackage;



