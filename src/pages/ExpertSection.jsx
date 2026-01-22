import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    title: "We Know Our Market",
    text: "Our experienced consultants draw on a wealth of knowledge to guide clients and candidates through recruitment in a constructive way. We don’t waste time with one-size-fits-all platitudes, we do our best to really solve the problem in front of us.",
  },
  {
    title: "We Deliver Quality",
    text: "We ensure each candidate and client gets a tailored experience with a dedicated team of professionals who know what works.",
  },
  {
    title: "We Build Relationships",
    text: "Long-term relationships are key to our success. We aim to truly understand your needs before offering solutions.",
  },
];

const ExpertSection = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="bg-white w-full px-6 sm:px-12 py-20 flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
            We Are <br />
            Experts in <br />
            Financial <br />
            <span className="inline-block">
              Recruitment<span className="text-yellow-400">.</span>
            </span>
          </h2>
          <p className="text-gray-800 mt-6 text-base sm:text-lg max-w-xl">
            We use our extensive expertise to offer a transparent, honest,
            comprehensive and bespoke service tailored to every individual
            client and candidate. With many years experience between our team
            members, we can provide the knowledge and support required.
          </p>
        </div>

        {/* Right Card Section */}
        <div className="flex-1 max-w-[400px] h-[420px] bg-white border border-gray-300 rounded-2xl p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] relative transition-all duration-300">
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            {cards[index].title}
          </h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {cards[index].text}
          </p>

          {/* Arrows */}
          <div className="absolute bottom-6 left-8 flex gap-3">
            <button
              onClick={handlePrev}
              className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition"
            >
              <FaArrowLeft className="text-black text-sm" />
            </button>
            <button
              onClick={handleNext}
              className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition"
            >
              <FaArrowRight className="text-black text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSection;
