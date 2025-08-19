import React from "react";
import { useNavigate } from "react-router-dom";
import Blouse from "../../assets/StitchingService/blouse.jpg";
import Skirt from "../../assets/StitchingService/skirt.jpg";

const services = [
  {
    title: "Aari Work Embroidery",
    desc: "Perfect fit, every time – Get free stitching on all outfits.",
    img: Blouse,
    link: "/aari-work",
  },
  {
    title: "Lehenga Stitching",
    desc: "No matter how modern we get, the charm of a Lehenga never fades.",
    img: "/images/lehenga.jpg",
    link: "/lehenga-stitching",
  },
  {
    title: "Chudi Stitching",
    desc: "A well-stitched chudi isn’t just an outfit – it’s confidence wrapped in comfort.",
    img: "/images/chudi.jpg",
    link: "/chudi-stitching",
  },
  {
    title: "Umbrella Frock Stitching",
    desc: "Elegance stitched into every flare – perfect for your little princess.",
    img: "/images/frock.jpg",
    link: "/umbrella-frock",
  },
  {
    title: "Choli Stitching",
    desc: "Every pleat, every thread – our choli stitching tells your story with elegance.",
    img: "/images/choli.jpg",
    link: "/choli-stitching",
  },
  {
    title: "Skirt & Top Stitching",
    desc: "Where modern cuts meet traditional charm — perfectly stitched.",
    img: Skirt,
    link: "/skirt-and-top",
  },
];

const StitchingExperience = () => {
  const navigate = useNavigate();

  return (
    <div className="py-10 px-6 md:px-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        The Sree Shanmuga Experience
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white w-full max-w-[390px] h-[320px] rounded-[8px] shadow-md p-6 text-center hover:shadow-xl transition duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-[120px] h-[120px] rounded-full mx-auto object-cover mb-4 border"
            />
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
            <button
              onClick={() => navigate(item.link)}
              className="mt-4 px-4 py-2 border border-green-800 text-green-800 rounded-full hover:bg-green-800 hover:text-white transition"
            >
              View Design Here
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StitchingExperience;
