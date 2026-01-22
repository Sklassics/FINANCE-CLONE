import React from 'react';
import { motion } from 'framer-motion';

export default function Executive() {
  return (
    <section className="w-full px-2 py-12 md:px-8 lg:px-20 bg-white relative overflow-hidden">
      {/* Decorative yellow dot */}
     
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section with upward animation */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0C121C] mb-8 flex items-center">
            MA Executive
            <span className="inline-block w-4 h-4 bg-pink-600 rounded-full ml-2 align-middle"></span>
          </h2>
          <p className="text-lg md:text-2xl text-[#0C121C] mb-10 leading-relaxed">
            MA Executive Search is a boutique, Executive Level, recruitment
            specialist for high growth businesses wishing to expand their D &amp;
            C-Suite. Within our established client base, we work with clients of
            global status and candidates who are experts in their chosen fields.
          </p>
          {/* Button with side arrow animation */}
          <motion.div
            className="mt-4 flex items-center gap-4"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <span className="text-base md:text-lg font-semibold tracking-wider text-[#0C121C] uppercase">
              Find Out More
            </span>
            <button className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700 transition duration-300 text-2xl shadow-lg">
              <span className="sr-only">Next</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="shadow-xl rounded-2xl overflow-hidden p-4 bg-white flex justify-center items-center w-full">
            <img
              src="https://mitchelladam.co.uk/wp-content/uploads/2021/12/MA-Exec-Logo-Desktop.jpg"
              alt="MA Executive"
              className="w-56 md:w-72 lg:w-80 max-w-full object-contain rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
