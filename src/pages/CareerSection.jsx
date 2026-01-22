import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CareerSection = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 sm:px-10 py-20">
      <div className="bg-yellow-400 w-full max-w-6xl rounded-3xl px-6 sm:px-16 py-20 relative overflow-hidden shadow-xl text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-black leading-snug">
          Pursue a career with <br />
          <span className="text-black">Mitchell Adam</span>
          <span className="text-white">.</span>
        </h2>
        <p className="text-black text-base sm:text-lg mt-6 max-w-xl mx-auto">
          Get in touch with us to find out about the latest job vacancies.
        </p>
        <button className="mt-8 inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
          CONTACT <FaArrowRight className="text-xs" />
        </button>

        {/* Shapes in bottom right corner */}
        <div className="absolute bottom-6 right-6 flex items-end gap-4">
          <div className="w-16 h-16 bg-white rounded-full"></div>
          <div className="w-24 h-24 bg-yellow-300 rounded-bl-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
