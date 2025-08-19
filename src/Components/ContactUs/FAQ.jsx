import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import faqImage from '../../assets/Contact/Contact.png'; // 🖼️ Your image path

const faqs = [
  {
    question: 'Do you provide stitching services for all products?',
    answer: 'Yes, we provide stitching services for most of our products. You can select stitching during checkout.',
  },
  {
    question: 'What is Aari work, and can I customize it?',
    answer: 'Aari work is a traditional hand embroidery. Yes, we accept customization based on your design or pattern.',
  },
  {
    question: 'How long does it take for stitching and delivery?',
    answer: 'Stitching usually takes 5–7 working days. Delivery time depends on your location.',
  },
  {
    question: 'Do you accept returns or exchanges?',
    answer: 'Yes, we accept returns and exchanges within 7 days of delivery under certain conditions.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-6 py-12 font-family overflow-hidden">
      {/* Centered Title and Description */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h1 className="text-2xl md:text-3xl text-green-800 font-bold mb-4">
          Frequently Asked by Our Shoppers
        </h1>
        <p className="text-sm text-gray-600 leading-loose">
          We’ve compiled answers to the most common questions about our women’s and kids’ clothing collections,
          custom stitching, Aari embroidery, delivery, and returns. If you still need help, feel free to contact
          our support team — we’re happy to assist.
        </p>
      </div>

      {/* FAQ and Image Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-10">
        {/* Left: Accordion */}
        <div className="space-y-8 md:mt-15">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-sm font-medium text-gray-800 hover:bg-gray-100"
              >
                {item.question}
                <span className="text-xl">
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src={faqImage}
            alt="FAQ Illustration"
            className="max-w-lg w-full md:max-w-3xl "
          />
        </div>
      </div>

      {/*Map */}
      <div className="mt-10 h-[60vh] rounded-2xl md:px-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.640447749886!2d78.68236971526349!3d10.801411192304402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50059c72bd1%3A0x3d202864f253393a!2sSHRI%20SHANMUGA%20TEXTILES!5e0!3m2!1sen!2sin!4v1721189560123!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
        className='rounded-2xl shadow-lg'
      ></iframe>
    </div>
    </div>
  );
};

export default FAQSection;
