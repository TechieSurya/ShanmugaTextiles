import React from 'react'
import BgImg from "../../assets/HomeImg/Aariwork.jpg";

const TailoringAari = () => {
  return (
     <div className="relative w-full h-[520px] rounded-[24px] overflow-hidden">
      {/* Background Image */}
      <img
        src={BgImg}
        alt="Offer Background"
        className="absolute inset-0 w-full h-full object-cover object-[50%_19%]"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Section */}
      {/* Overlay Text Content */}
      <div className="relative z-40 flex flex-col items-center justify-center h-full text-center text-white px-4 translate-y-30 ">
        <h2 className="text-5xl font-semibold mb-5 tracking-wider">Custom Tailoring & Aari Embroidery </h2>
        <p className="text-xl mb-4 max-w-[500px]">
         Perfect fit guaranteed—submit your measurements or visit our store. 
        </p>
        

        <button className="mt-6 bg-green-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-700 transition">
         Enquiry Now
        </button>
      </div>
    </div>
  )
}

export default TailoringAari