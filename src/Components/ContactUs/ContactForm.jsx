import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className='py-10 px-10 font-family'>
        <div className='text-center space-y-4'>
            <h1 className='text-3xl text-green-800 font-bold '>
                We’d love to hear from you!
            </h1>
            <p className='leading-loose max-w-2xl mx-auto text-sm text-gray-600'>
                At Sree Shanmuga Textiles, customer satisfaction is at the heart of everything we do. Whether you need help placing an order, have questions about our stitching services, or want assistance choosing the perfect outfit — we’re just a call or message away.
            </p>
            <p className='font-semibold mx-auto text-sm'>Our support team is here to make your shopping and stitching experience smooth, personalized, and memorable. Feel free to get in touch</p>
        </div>
        <div className="px-6 py-12 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      
      {/* Left: Contact Form */}
      <div className="bg-[#2f6f3e] p-6 md:p-10 rounded-xl w-full text-white space-y-4">
      {/* Row 1: Name + Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-md text-black bg-white"
          />
        </div>
        <div>
          <label className="block mb-1">Mobile Number</label>
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full p-3 rounded-md text-black bg-white"
          />
        </div>
      </div>

      {/* Email Address */}
      <div>
        <label className="block mb-1">Email Address</label>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 rounded-md text-black bg-white"
        />
      </div>

      {/* Service */}
      <div>
        <label className="block mb-1">Service</label>
        <input
          type="text"
          placeholder="Select Service"
          className="w-full p-3 rounded-md text-black bg-white"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block mb-1">Message</label>
        <textarea
          placeholder="Your Message"
          className="w-full p-3 h-28 rounded-md text-black resize-none bg-white"
        />
      </div>

      {/* Submit Button */}
      <button className="w-full bg-[#c4953d] hover:bg-[#b6852f] text-white font-semibold py-3 rounded-md">
        Submit
      </button>
    </div>

      {/* Right: Contact Details */}
      <div className="w-full mt-0 md:mt-30">
      <h2 className="text-2xl font-bold text-black mb-10">Contact Details</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-800">
        {/* Address */}
        <div className="flex items-start space-x-3">
          <div className="bg-[#2f6f3e] text-white p-2 rounded">
            <FaMapMarkerAlt />
          </div>
          <p>
            Williams Road, <br />
            The Backside Of The Eye Foundation, <br />
            Cantonment, <br />
            Trichy-1.
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-3">
          <div className="bg-[#2f6f3e] text-white p-2 rounded">
            <FaPhoneAlt />
          </div>
          <p>7200235555, 9042156789</p>
        </div>

        {/* Timing */}
        <div className="flex items-start space-x-3">
          <div className="bg-[#2f6f3e] text-white p-2 rounded">
            <FaClock />
          </div>
          <p>Monday to Sunday 10am–8pm</p>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-3">
          <div className="bg-[#2f6f3e] text-white p-2 rounded">
            <FaEnvelope />
          </div>
          <p>contact@shreeshanmugatextiles.com</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default ContactForm