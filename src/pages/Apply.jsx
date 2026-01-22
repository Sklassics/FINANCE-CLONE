import React, { useState } from "react";
import Select from "react-select";
import CareerLevels from "./CareerLevels";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Executive from "./Executive";

const jobOptions = [
  { value: "ACA Mover", label: "ACA Mover" },
  { value: "Accountant", label: "Accountant" },
  { value: "Accountants Assistant", label: "Accountants Assistant" },
  { value: "Accounts and Office Manager", label: "Accounts and Office Manager" },
  { value: "Financial Analyst", label: "Financial Analyst" },
  { value: "Auditor", label: "Auditor" },
  { value: "Investment Banker", label: "Investment Banker" },
  { value: "Finance Manager", label: "Finance Manager" },
  // ...add more as needed
];

const locationOptions = [
  { value: "New York", label: "New York" },
  { value: "London", label: "London" },
  { value: "Singapore", label: "Singapore" },
  { value: "Dubai", label: "Dubai" },
  { value: "Remote", label: "Remote" },
  // ...add more as needed
];

const steps = [
  {
    number: 1,
    title: "Review Your Options",
    desc: "Have a look through our current jobs",
  },
  {
    number: 2,
    title: "Make Your Application",
    desc: "Interested in a role?  Upload your CV and any supporting documentation.",
  },
  {
    number: 3,
    title: "Give Us a Call",
    desc: "If you can’t find what you are looking for, please give us a call for a confidential conversation about your career.",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 80 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.8, delay: i * 0.18 },
  }),
};

const Apply = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="relative bg-[#FFD54F] min-h-[420px] md:min-h-[500px] flex flex-col pb-16">
        {/* Top nav */}
        <div className="flex items-center justify-between px-6 md:px-16 pt-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <span className="text-3xl font-script text-[#FFD54F] font-bold">MA</span>
            </div>
          </div>
          {/* Nav buttons */}
          <div className="flex items-center gap-4">
            <button
              className="bg-white text-black font-semibold px-6 py-2 rounded-full flex items-center gap-2 shadow hover:bg-neutral-100 transition text-sm md:text-base"
              onClick={() => navigate("/apply")}
            >
              APPLY <span className="ml-1">→</span>
            </button>
            <button
              className="bg-white text-black font-semibold px-6 py-2 rounded-full flex items-center gap-2 shadow hover:bg-neutral-100 transition text-sm md:text-base"
              onClick={() => navigate("/hire")}
            >
              HIRE <span className="ml-1">→</span>
            </button>
            <button
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center ml-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="text-2xl text-white">≡</span>
            </button>
          </div>
        </div>

        {/* Hamburger Overlay Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-[#0B101A] text-white flex flex-col md:flex-row">
            <div className="flex-1 flex flex-col justify-center pl-12">
              <div className="w-16 h-16 bg-[#FFD54F] rounded-full flex items-center justify-center mb-8">
                <span className="text-3xl font-bold text-black font-cursive">MA</span>
              </div>
              <nav className="flex flex-col gap-6 text-4xl font-extrabold">
                <button className="text-left hover:text-[#FFD54F] transition" onClick={() => { setMenuOpen(false); navigate("/about"); }}>About</button>
                <button className="text-left hover:text-[#FFD54F] transition" onClick={() => { setMenuOpen(false); navigate("/cases"); }}>Case Studies</button>
                <button className="text-left hover:text-[#FFD54F] transition" onClick={() => { setMenuOpen(false); navigate("/work-for-us"); }}>Work For Us</button>
                <button className="text-left hover:text-[#FFD54F] transition" onClick={() => { setMenuOpen(false); navigate("/news"); }}>News</button>
                <button className="text-left hover:text-[#FFD54F] transition" onClick={() => { setMenuOpen(false); navigate("/contact"); }}>Contact Us</button>
              </nav>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-8">
              <div className="w-[400px] max-w-full">
                <div className="bg-[#161B22] rounded-2xl border border-[#FFD54F] p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-2">I want to apply</h2>
                  <p className="mb-4">Find your next finance role</p>
                  <div className="flex items-center gap-4">
                    <span className="inline-block w-12 h-12 bg-yellow-200 rounded-lg flex items-center justify-center">
                      {/* ...SVG icon... */}
                      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                        <rect x="4" y="6" width="24" height="20" rx="2" fill="#FFD54F" stroke="#222" strokeWidth="2"/>
                        <rect x="8" y="10" width="16" height="2" rx="1" fill="#222"/>
                        <rect x="8" y="14" width="10" height="2" rx="1" fill="#222"/>
                        <rect x="8" y="18" width="8" height="2" rx="1" fill="#222"/>
                        <rect x="20" y="18" width="4" height="4" rx="1" fill="#fff" stroke="#222" strokeWidth="1"/>
                      </svg>
                    </span>
                    <button
                      className="ml-auto bg-[#FFD54F] text-black font-bold px-4 py-2 rounded-full"
                      onClick={() => { setMenuOpen(false); navigate("/apply"); }}
                    >
                      Apply →
                    </button>
                  </div>
                </div>
                <div className="bg-[#161B22] rounded-2xl border border-[#FFD54F] p-8">
                  <h2 className="text-2xl font-bold mb-2">I want to hire</h2>
                  <p className="mb-4">Find your perfect candidate</p>
                  <div className="flex items-center gap-4">
                    <span className="inline-block w-12 h-12 bg-yellow-200 rounded-lg flex items-center justify-center">
                      {/* ...SVG icon... */}
                      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="10" fill="#FFD54F" stroke="#222" strokeWidth="2"/>
                        <rect x="12" y="12" width="8" height="2" rx="1" fill="#222"/>
                        <rect x="12" y="16" width="8" height="2" rx="1" fill="#222"/>
                        <rect x="12" y="20" width="5" height="2" rx="1" fill="#222"/>
                        <line x1="22" y1="22" x2="28" y2="28" stroke="#222" strokeWidth="2"/>
                      </svg>
                    </span>
                    <button
                      className="ml-auto bg-[#FFD54F] text-black font-bold px-4 py-2 rounded-full"
                      onClick={() => { setMenuOpen(false); navigate("/hire"); }}
                    >
                      Hire →
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Close button */}
            <button
              className="absolute top-8 right-8 w-10 h-10 bg-[#FFD54F] rounded-full flex items-center justify-center text-black text-2xl font-bold"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
        )}

        {/* Decorative shapes */}
        <div className="absolute right-0 top-24 md:top-20 w-64 h-64 bg-[#FFC43D] rounded-bl-[8rem] rounded-tr-none rounded-tl-none rounded-br-none hidden md:block"></div>
        <div className="absolute right-56 bottom-0 w-40 h-40 bg-white rounded-full hidden md:block"></div>
        {/* Heading */}
        <div className="relative z-10 px-6 md:px-16 mt-10 md:mt-16">
          <h1 className="text-3xl md:text-6xl font-extrabold text-black leading-tight mb-4">
            I Want To Apply<br className="hidden md:block" /> for Finance Jobs
            <span className="inline-block w-4 h-4 bg-white rounded-full ml-2 align-middle"></span>
          </h1>
        </div>
        {/* Search bar */}
        <div className="relative z-10 mt-8 px-2 md:px-16">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-full shadow-md py-3 px-4 md:px-8 max-w-5xl mx-auto">
            {/* Job title select */}
            <div className="flex items-center flex-1 w-full">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <div className="w-full">
                <Select
                  options={jobOptions}
                  placeholder="Add a job title"
                  isClearable
                />
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-gray-200 mx-4"></div>
            {/* Location select */}
            <div className="flex items-center flex-1 w-full mt-3 md:mt-0">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4.5 8-10A8 8 0 0 0 4 12c0 5.5 8 10 8 10z" />
              </svg>
              <div className="w-full">
                <Select
                  options={locationOptions}
                  placeholder="Location"
                  isClearable
                />
              </div>
            </div>
            {/* Search button */}
            <button className="ml-0 md:ml-4 mt-3 md:mt-0 bg-[#FFD54F] hover:bg-[#FFC43D] text-black rounded-full w-10 h-10 flex items-center justify-center shadow transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <CareerLevels />

      <section className="relative bg-white min-h-auto py-0 px-0 flex justify-center items-start overflow-x-hidden">
        {/* Decorative yellow circle behind the box */}
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[260px] h-[260px] bg-[#FFD54F] rounded-full z-0"></div>
        {/* Main container */}
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-0 pt-24 pb-24 flex justify-center">
          <div className="relative z-10 bg-[#0C121C] rounded-2xl shadow-2xl p-10 md:p-16 flex flex-col md:flex-row gap-8 md:gap-16 items-stretch max-w-4xl w-full">
            {/* Left: Heading + Card 2 */}
            <div className="flex flex-col md:w-1/2">
              <h2 className="text-white font-extrabold text-4xl md:text-5xl leading-tight mb-8 tracking-tight">
                I Want To<br />Apply
                <span className="inline-block w-5 h-5 bg-[#FFD54F] rounded-full ml-2 align-middle"></span>
              </h2>
              <motion.div
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-start items-start mb-6"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.6 }}
                custom={1}
                variants={cardVariants}
              >
                <div className="flex items-center mb-2">
                  <span className="bg-[#FFD54F] text-[#181C25] font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg mr-3">
                    {steps[1].number}
                  </span>
                  <span className="text-[#181C25] font-extrabold text-2xl">{steps[1].title}</span>
                </div>
                <p className="text-[#181C25] text-base">{steps[1].desc}</p>
              </motion.div>
            </div>
            {/* Right: Card 1 and Card 3 in a grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-1 md:w-1/2">
              <motion.div
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-start items-start mb-6"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.6 }}
                custom={0}
                variants={cardVariants}
              >
                <div className="flex items-center mb-2">
                  <span className="bg-[#FFD54F] text-[#181C25] font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg mr-3">
                    {steps[0].number}
                  </span>
                  <span className="text-[#181C25] font-extrabold text-2xl">{steps[0].title}</span>
                </div>
                <p className="text-[#181C25] text-base">{steps[0].desc}</p>
              </motion.div>
              <motion.div
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-start items-start"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.6 }}
                custom={2}
                variants={cardVariants}
              >
                <div className="flex items-center mb-2">
                  <span className="bg-[#FFD54F] text-[#181C25] font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg mr-3">
                    {steps[2].number}
                  </span>
                  <span className="text-[#181C25] font-extrabold text-2xl">{steps[2].title}</span>
                </div>
                <p className="text-[#181C25] text-base">{steps[2].desc}</p>
              </motion.div>
            </div>
          </div>
        </div>
        
      </section>

       {/* Floating phone button */}
      {/* Phone Button */}
        <div className="fixed bottom-8 right-6 md:right-12 z-20">
          <a
            href="tel:01216511235"
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full shadow-lg font-semibold text-lg hover:bg-neutral-100 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.73 3.05a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.98.36 2 .6 3.05.73A2 2 0 0 1 22 16.92z"/>
            </svg>
            0121 651 1235
          </a>
        </div>
      

      <Executive />
      <Footer />
    </>
  );
};
export default Apply;