import React from 'react'
import BgImg from "../../assets/StitchingService/Stiching.jpg"

const PerfectStitch = () => {
  return (
    <div className="relative w-full h-[620px]  overflow-hidden">
          {/* Background Image */}
          <img
            src={BgImg}
            alt="Offer Background"
            className="absolute inset-0 w-full h-full object-cover object-[50%_20%]"
          />
    
          {/* Text Section */}
          {/* Overlay Text Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 translate-y-13 ">
            <p className="text-xl mb-4 ">Enjoy free stitching, Aari detailing, and personalized designs crafted with care.</p>
            <h2 className="text-5xl font-semibold mb-5 tracking-wider">
             Your Perfect Fit Starts Here
            </h2>
            
          </div>
        </div>
  )
}

export default PerfectStitch