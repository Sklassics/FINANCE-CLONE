import React from "react";
import { motion } from "framer-motion";

export default function Expert() {
  return (
    <section className="relative py-12 px-2 md:px-0 bg-transparent flex justify-center items-center min-h-[60vh]">
      <div className="max-w-6xl w-full mx-auto bg-[#0C121C] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-xl relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 p-8 md:p-16 flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
            Experts in <br />
            Financial <br />
            Recruitment
            <span className="inline-block w-4 h-4 bg-[#FFD54F] rounded-full ml-2 align-middle"></span>
          </h2>
          <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
            Mitchell Adam are experts in Financial Recruitment offering honest, transparent advice, helping candidates into their next role and clients find valued finance professionals. Operating for over a decade in this market, we know our industry inside and out.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 font-bold text-white tracking-wide"
          >
            FIND OUT MORE
            <span className="w-10 h-10 bg-[#FFD54F] rounded-full flex items-center justify-center text-black text-xl">
              →
            </span>
          </a>
        </motion.div>
        {/* Image */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 min-h-[300px] max-h-[500px] relative"
        >
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
            alt="Professional at work"
            className="object-cover w-full h-full md:rounded-tl-none md:rounded-tr-[2.5rem] md:rounded-br-[2.5rem] md:rounded-bl-none rounded-b-[2.5rem] md:rounded-b-none"
          />
          {/* Yellow dot */}
          <span className="absolute top-4 right-8 w-3 h-3 bg-[#FFD54F] rounded-full"></span>
        </motion.div>
      </div>
      {/* Decorative yellow shape (optional) */}
      <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-[#FFD54F] rounded-full opacity-80 -z-10"></div>
    </section>
  );
}