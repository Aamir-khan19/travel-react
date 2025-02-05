import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";

const BlogSection = () => {
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




          <div className="justify-between flex mb-2">
          <h1 className=" text-blue-900 text-3xl font-bold mb-2">Places to visit</h1>
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

export default BlogSection;
