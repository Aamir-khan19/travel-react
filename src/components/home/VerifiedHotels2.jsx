import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const VerifiedHotel2 = () => {
  const hotelsData = [
    {
      id: 1,
      imageUrl: "/Images/hotelsLogo/royalHeritageLogo.png",
      website: "https://www.royalheritagehaveli.com/"
    },
    {
      id: 2,
      imageUrl: "/Images/hotelsLogo/pineViewLogo.png",
      website: "https://www.pineviewhotels.com/"
    },
    {
      id: 3,
      imageUrl: "/Images/hotelsLogo/pillicanLogo.png",
      website: "https://hotelpelican.co.in/"
    },
    {
      id: 4,
      imageUrl: "/Images/hotelsLogo/reefValley.png",
      website: "https://www.reefvalleyresort.com/"
    },
    {
      id: 5,
      imageUrl: "/Images/hotelsLogo/sangrilla.png",
      website: "https://www.shangri-la.com/"
    },
    {
      id: 6,
      imageUrl: "/Images/hotelsLogo/casaMontana.png",
      website: "https://casamontanamunnar.com/"
    },
    {
      id: 7,
      imageUrl: "/Images/hotelsLogo/munnarCastle.png",
      website: "https://www.munnarcastle.co.in"
    },
    {
      id: 8,
      imageUrl: "/Images/hotelsLogo/pineViewLogo.png",
      website: "https://www.pineviewhotels.com/"
    },
    {
      id: 9,
      imageUrl: "/Images/hotelsLogo/periyarNest.png",
      website: "https://periyarnestresort.com/"
    },
    {
      id: 10,
      imageUrl: "/Images/hotelsLogo/grandThekaddy.png",
      website: "https://grandthekkady.in/"
    },
    {
      id: 11,
      imageUrl: "/Images/hotelsLogo/sangrilla.png",
      website: "https://www.shangri-la.com/"
    },
  ];

  const animation = { duration: 18000, easing: (t) => t };

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 288px)": {
        slides: {
          origin: "auto",
          perView: 2,
          spacing: 32,
        },
      },
      "(min-width: 768px)": {
        slides: {
          origin: "auto",
          perView: 3,
          spacing: 32,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          origin: "auto",
          perView: 5,
          spacing: 32,
        },
      },
    },
    created(s) {
      s.moveToIdx(s.track.details.abs - 5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs - 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs - 5, true, animation);
    },
  });

  return (
    <section>
      <div className="mx-auto max-w-7xl md:pb-20 pb-10 px-5">
        <div className="sm:mt-16 mt-4 lg:col-span-2  lg:mx-0">
          <div ref={sliderRef} className="keen-slider">
            {hotelsData.map((item) => (
              <div
                className="keen-slider__slide h-20 sm:h-28 w-24 flex items-center"
                key={item.id}
              >

                <a href={item?.website} target="_blank">
                <img
                  className="mx-auto  w-full max-h-full max-w-full dark:shadow-black/20"
                  src={item.imageUrl}
                  alt="avatar"
                />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifiedHotel2;
