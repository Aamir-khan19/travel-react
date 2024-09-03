import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const BlogSection = () => {
  const BlogData = [
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/06/11/15/23/phuket-1450270_640.jpg",
      title: "Exploring the Andaman Islands",
      description:
        "Discover pristine beaches and vibrant marine life in this tropical paradise.",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/08/22/14/40/sweet-wooden-home-2669177_640.jpg",
      title: "The Magic of Kashmir Valley",
      description:
        "Experience the beauty of snow-capped mountains and serene lakes.",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_640.jpg",
      title: "Majestic Forts of Rajasthan",
      description:
        "Step back in time and explore the grandeur of Rajasthan's royal heritage.",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/04/18/16/20/zzz-5059826_640.jpg",
      title: "Sun, Sand, and Sea in Goa",
      description:
        "Relax on golden beaches and enjoy the vibrant nightlife of India's party capital.",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/09/13/08/59/lake-6620689_640.jpg",
      title: "Adventure in Himachal Pradesh",
      description:
        "Embark on thrilling treks and witness breathtaking Himalayan landscapes.",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/09/14/15/27/scenery-7454623_640.jpg",
      title: "Spiritual Journey in Uttarakhand",
      description: "Find inner peace amidst ancient temples and sacred rivers.",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/01/22/11/18/train-tracks-5939824_640.jpg",
      title: "Cruising Kerala's Backwaters",
      description:
        "Glide through tranquil waterways and experience Kerala's unique culture.",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/06/13/07/22/gate-of-india-2397838_640.jpg",
      title: "Mumbai: City of Dreams",
      description:
        "Explore the bustling metropolis where tradition meets modernity.",
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

    return () => {
      if (keenSlider.current) {
        keenSlider.current.destroy();
        keenSlider.current = null;
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
    <section className="py-10 md:py-20 ">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-16">
          <h2 className="text-center text-[#01055b] md:text-5xl text-3xl font-bold mb-4 sm:mb-0 flex-grow">
            Discover India's Hidden Gems
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

        <div ref={sliderContainer} className="keen-slider">
          {BlogData.map((item, i) => (
            <div key={i} className="keen-slider__slide">
              <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover object-center w-full h-[280px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute flex flex-col gap-3 top-0 h-[210px] justify-end left-0 right-0 p-4">
                  <h3 className="text-white text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm leading-6">
                    {item.description}
                  </p>
                  <button className="bg-white rounded-lg py-2 px-4 text-[#01055b] font-semibold ">
                    Read More
                  </button>
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
