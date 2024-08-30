import React from "react";

const testimonials = [
  {
    text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
    name: "Jane D",
    position: "CEO",
    img: "https://pagedone.io/asset/uploads/1696229969.png",
  },
  {
    text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
    name: "Jane D",
    position: "CEO",
    img: "https://pagedone.io/asset/uploads/1696229969.png",
  },
  {
    text: "Thanks to Pagedone, I feel more informed and confident about my investment decisions than ever before.",
    name: "Harsh P.",
    position: "Product Designer",
    img: "https://pagedone.io/asset/uploads/1696229994.png",
  },
];

const OurClients = () => {
  return (
    <section className="py-10 px-5 md:py-20 w-full">
      <div className="max-w-7xl mx-auto ">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Happy Users Say!
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-300 rounded-xl p-6 transition-all duration-500 hover:border-orange-500 "
            >
              <div className="flex items-center mb-7 gap-3 text-amber-500"></div>
              <p className="text-base text-gray-600 leading-6 pb-8 group-hover:text-gray-800">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-8 border-t border-gray-200 pt-5">
                <img
                  className="rounded-full h-10 w-10"
                  src={testimonial.img}
                  alt="avatar"
                />
                <div>
                  <h5 className="text-gray-900 font-medium mb-1">
                    {testimonial.name}
                  </h5>
                  <span className="text-sm text-gray-500">
                    {testimonial.position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
