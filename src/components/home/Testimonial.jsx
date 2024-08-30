import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { FaQuoteRight, FaUserAlt } from "react-icons/fa";

const Testimonial = () => {
  const testimonialData = [
    {
      review: "Fantastic service! Highly recommend to everyone.",
      name: "Ravi Kumar",
    },
    {
      review: "A wonderful experience from start to finish.",
      name: "Priya Sharma",
    },
    {
      review: "Professional and friendly staff. Great trip",
      name: "Anita Mehta",
    },
    {
      review: "Exceeded all my expectations. Will book again!",
      name: "Rajesh Gupta",
    },
  ];

  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(
        sliderContainer.current,
        {
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
          autoplay: {
            delay: 3000,
            pauseOnHover: true,
          },
        },
        [
          (slider) => {
            let timeout;
            let mouseOver = false;
            function clearNextTimeout() {
              clearTimeout(timeout);
            }
            function nextTimeout() {
              clearTimeout(timeout);
              if (mouseOver) return;
              timeout = setTimeout(() => {
                slider.next();
              }, 3000);
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true;
                clearNextTimeout();
              });
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false;
                nextTimeout();
              });
              nextTimeout();
            });
            slider.on("dragStarted", clearNextTimeout);
            slider.on("animationEnded", nextTimeout);
            slider.on("updated", nextTimeout);
          },
        ]
      );
    }

    return () => {
      if (keenSlider.current) {
        keenSlider.current.destroy();
        keenSlider.current = null;
      }
    };
  }, []);

  return (
    <div className="py-20 bg-yellow-50 flex flex-col gap-20">
      <h1 className="text-center text-[#01055b] md:text-5xl text-3xl font-bold mb-4 sm:mb-0">
        Testimonials
      </h1>
      <div ref={sliderContainer} className="keen-slider max-w-7xl mx-auto">
        {testimonialData.map((item, i) => (
          <div key={i} className="keen-slider__slide">
            <div className=" mx-5">
              <div className="relative max-w-md mx-auto  bg-gray-100 p-6 rounded-xl">
                {/* Top left quote mark */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-blue-400 rounded-br-full flex items-center justify-center ">
                  <span className="text-white rotate-180 text-4xl font-serif">
                    <FaQuoteRight color="white" size={20} />
                  </span>
                </div>

                {/* Testimonial text */}
                <p className="text-gray-600 text-center mb-6 mt-4 p-2">
                  {item.review}
                </p>

                {/* Profile image */}
                <div className="flex justify-center mb-4">
                  <FaUserAlt size={40} />
                </div>

                {/* Name */}
                <h3 className="text-center text-lg font-semibold mb-2">
                  {item.name}
                </h3>

                {/* Star rating */}
                <div className="flex justify-center">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Bottom right quote mark */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-400 rounded-tl-full flex items-center justify-center p-2">
                  <span className="text-white text-7xl font-serif ">
                    <FaQuoteRight color="white" size={20} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .keen-slider .keen-slider__slide {
          transition: opacity 0.5s ease-in-out;
          opacity: 1;
        }
        .keen-slider .keen-slider__slide.active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
