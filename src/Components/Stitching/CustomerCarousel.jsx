import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Divya R",
    stars: 4,
    text: "Shree Shanmuga Textiles stitched my wedding lehenga exactly how I imagined. Their Aari work is top-notch. Highly recommended!",
  },
  {
    name: "Priya M",
    stars: 5,
    text: "Loved the mom and daughter combo dress I ordered! The stitching was perfect and the fabric quality exceeded my expectations.",
  },
  {
    name: "Lavanya S",
    stars: 4,
    text: "Got my blouse stitched with Aari embroidery – the detailing is beautiful and delivery was right on time. Very professional service.",
  },
  {
    name: "Anusha K",
    stars: 5,
    text: "I ordered a kids’ birthday frock and it was adorable! Great fit, vibrant color, and the custom measurements were spot on.",
  },
];
const CustomerCarousel = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        What Our Happy Customers Say
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Pagination, Autoplay]}
        className="w-full"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border rounded-lg shadow-md p-4 h-full">
              <div className="flex text-green-700 mb-2">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < item.stars ? (
                    <FaStar key={i} className="mr-1" />
                  ) : (
                    <FaRegStar key={i} className="mr-1" />
                  )
                )}
              </div>
              <p className="text-sm text-gray-700 mb-3">{item.text}</p>
              <p className="text-sm font-semibold">– {item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper pagination dots styling */}
      <style jsx>{`
        .swiper-pagination {
          display: flex !important;
          justify-content: center;
          margin-top: 20px;
          gap: 8px;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #333;
          opacity: 0.3;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background-color: #333;
        }
      `}</style>
    </section>
  );
};

export default CustomerCarousel;
