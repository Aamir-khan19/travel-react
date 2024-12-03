import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import conf from "../../../conf/conf";
import { useParams } from "react-router-dom";

const KeenSliderCarousel = () => {
  const { id } = useParams();

  const images = useSelector((state) => state.public.particularItinerary?.destination_images);
  const isLoading = useSelector((state) => state.public.isLoading);

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
          "(min-width: 288px)": {
            slides: {
              origin: "auto",
              perView: 1,
              spacing: 16,
            },
          },
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
          keenSlider?.current.next();
        }
      }, 3000);
    }

    return () => {
      if (keenSlider.current) {
        keenSlider.current.destroy();
        keenSlider.current = null;
      }
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [id, images]);

  return (
    <div className="relative">
      {isLoading && <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">Loading...</div>}

      <div ref={sliderContainer} className="keen-slider w-full bg-blue-100 rounded-lg shadow-lg overflow-hidden">
        {images?.length > 0 ? (
          images.map((img, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="p-2">
                <img
                  src={`${conf.laravelBaseUrl}/${img}`}
                  alt={`Slide ${index}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-gray-600 p-4">No package found</p>
        )}
      </div>
    </div>
  );
};

export default KeenSliderCarousel;
