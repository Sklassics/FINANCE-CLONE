import React from "react";
import { motion } from "framer-motion";

const headingVariant = {
  hidden: { y: -80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const rightVariant = {
  hidden: { x: 80, opacity: 0 },
  visible: (i = 1) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

const bottomVariant = {
  hidden: { y: 80, opacity: 0 },
  visible: (i = 1) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.2, ease: "easeOut" },
  }),
};

const jobPosts = [
  "Treasury Analyst, Birmingham, West Midlands",
  "Assistant Management Accountant, Birmingham, West Midlands",
  "Management Accountant, Solihull, West Midlands",
  "Financial Controller, Birmingham, West Midlands",
  "Immediate Start Accounts Assistant, Birmingham, West Midlands",
  "Accounts Payable Clerk, Worcestershire",
];

const links = [
  "Home",
  "About",
  "Case Studies",
  "Work for Us",
  "News",
  "MA Executive",
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0C121C] pt-16 pb-8 px-4 md:px-12 overflow-hidden">
      {/* Decorative yellow circle */}
      <div className="absolute -top-16 right-0 w-32 h-32 bg-[#FFD54F] rounded-full opacity-90 z-0"></div>
      {/* Decorative dark circle */}
      <div className="absolute top-24 right-16 w-40 h-40 bg-[#181C25] rounded-full opacity-40 z-0 hidden md:block"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-10"
        >
          Where talent meets <br />
          opportunity.
          <span className="inline-block w-4 h-4 bg-[#FFD54F] rounded-full ml-2 align-middle"></span>
        </motion.h2>
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Latest Job Post */}
          <motion.div
            custom={1}
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div>
              <div className="text-[#FFD54F] font-semibold text-xs mb-3 tracking-wider">
                LATEST JOB POST
              </div>
              <ul className="space-y-1 text-white text-sm">
                {jobPosts.map((job, idx) => (
                  <li key={idx}>{job}</li>
                ))}
              </ul>
            </div>
          </motion.div>
          {/* Discover */}
          <motion.div
            custom={2}
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div>
              <div className="text-[#FFD54F] font-semibold text-xs mb-3 tracking-wider">
                DISCOVER
              </div>
              <ul className="space-y-1 text-white text-sm">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-[#FFD54F] transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          {/* Get in Touch + Buttons */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Get in Touch */}
            <motion.div
              custom={3}
              variants={rightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="flex-1"
            >
              <div>
                <div className="text-[#FFD54F] font-semibold text-xs mb-3 tracking-wider">
                  GET IN TOUCH
                </div>
                <div className="text-white text-sm space-y-1">
                  <div>+919392732341</div>
                  <div>
                    <a href="mailto:apply@sklassics.com" className="hover:text-[#FFD54F]">apply@sklassics.com</a>
                  </div>
                  <div>
                    <a href="mailto:hire@sklassics.com" className="hover:text-[#FFD54F]">hire@sklassics.com</a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-[#FFD54F]">LinkedIn</a>
                  </div>
                  <div className="mt-2">
                    Vampuguda<br />
                    Ecil<br />
                    Hyd,India.
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Apply/Hire Buttons */}
            <div className="flex flex-col gap-4 justify-center">
              <motion.div
                custom={1}
                variants={bottomVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <button className="w-full md:w-56 bg-transparent border border-white text-white rounded-xl px-6 py-4 text-left flex flex-col hover:bg-[#FFD54F] hover:text-[#181C25] transition">
                  <span className="font-bold text-lg">I want to apply</span>
                  <span className="text-sm mt-1">Find your next finance role</span>
                </button>
              </motion.div>
              <motion.div
                custom={2}
                variants={bottomVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <button className="w-full md:w-56 bg-transparent border border-white text-white rounded-xl px-6 py-4 text-left flex flex-col hover:bg-[#FFD54F] hover:text-[#181C25] transition">
                  <span className="font-bold text-lg">I want to hire</span>
                  <span className="text-sm mt-1">Find your perfect candidate</span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 border-t border-[#222] pt-6 text-xs text-white/80">
          <div className="mb-2 md:mb-0">&copy; 2026 Sklassics</div>
          <div className="mb-2 md:mb-0">
            <a href="#" className="hover:text-[#FFD54F]">Privacy Policy</a>
          </div>
          <div className="flex items-center gap-4">
            <motion.div
              variants={bottomVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={3}
              className="flex items-center bg-white text-black rounded-full px-4 py-2 shadow text-base font-medium"
            >
              <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.75C3 4.784 3.784 4 4.75 4h2.5A1.75 1.75 0 019 5.75v1.5A1.75 1.75 0 017.25 9H6.5a11.5 11.5 0 005.5 5.5v-.75A1.75 1.75 0 0113.75 12h1.5A1.75 1.75 0 0117 13.75v2.5A1.75 1.75 0 0115.25 18h-2.5A1.75 1.75 0 0111 16.25v-1.5A1.75 1.75 0 0112.75 13H13.5a13.5 13.5 0 01-10.5-10.5V5.75z" />
              </svg>
              +91 9392732341
            </motion.div>
            <span className="hidden md:inline">Design by Sklassics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}