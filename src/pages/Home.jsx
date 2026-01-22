import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CareerLevels from "./CareerLevels";
import Testimonials from "./Testimonials";
import Executive from "./Executive";
import Footer from "./Footer";
import Expert from "./Expert";

export default function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu state

  return (
    <>
      <div className="relative min-h-screen bg-[#FFD54F] overflow-hidden font-sans">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none">
          <div className="absolute rounded-full bg-[#FFB300] opacity-60 w-72 h-72 right-0 top-10"></div>
          <div className="absolute rounded-[40%] bg-[#FFB300] opacity-40 w-96 h-96 right-0 top-40"></div>
          <div className="absolute rounded-full bg-white opacity-100 w-32 h-32 left-[-4rem] top-40"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none">
          <div className="absolute rounded-[40%] bg-[#FFB300] opacity-60 w-96 h-96 right-0 bottom-[-6rem]"></div>
        </div>
        <div className="absolute bottom-32 left-1/3 w-8 h-8 bg-white rounded-full opacity-100"></div>
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-6 md:px-12">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-[#FFD54F] font-cursive">MA</span>
            </div>
          </div>
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
              className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center ml-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FFD54F] transition"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="text-3xl text-black">≡</span>
            </button>
          </div>
        </header>

        {/* Hamburger Overlay Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-[#0B101A] text-white flex flex-col md:flex-row">
            <div className="flex-1 flex flex-col justify-center pl-12">
              <div className="w-16 h-16 bg-[#FFD54F] rounded-full flex items-center justify-center mb-8">
                <span className="text-3xl font-bold text-black font-cursive">MA</span>
              </div>
              <nav className="flex flex-col gap-6 text-4xl font-extrabold">
                <button className="text-left hover:text-[#FFD54F] transition" onClick={() => { setMenuOpen(false); navigate("/about"); }}>About</button>
                <button className="text-left hover:text-[#FFD54F] transition" onClick={() => { setMenuOpen(false); navigate("/case-studies"); }}>Case Studies</button>
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

        {/* Hero Section */}
        <main className="px-6 md:px-12 pt-8 md:pt-20 pb-12 md:pb-24 max-w-5xl mx-auto relative z-10">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-black leading-tight mb-6"
          >
            Where talent<br className="hidden md:block" />
            meets <span className="relative">opportunity<span className="inline-block w-4 h-4 bg-white rounded-full absolute -right-6 top-6 md:top-10"></span></span>
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-2xl text-black mb-12 max-w-2xl"
          >
            Specialists in financial recruitment, connecting businesses<br className="hidden md:block" />
            with exceptional people
          </motion.p>
          {/* Cards */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Apply Card */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-lg p-8 flex-1 flex flex-col justify-between min-w-[260px]"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">I want to apply</h2>
                <p className="text-black mb-6">Find your next finance role</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl">→</span>
                {/* Placeholder for icon */}
                <span className="inline-block w-12 h-12 bg-yellow-200 rounded-lg flex items-center justify-center">
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                    <rect x="4" y="6" width="24" height="20" rx="2" fill="#FFD54F" stroke="#222" strokeWidth="2"/>
                    <rect x="8" y="10" width="16" height="2" rx="1" fill="#222"/>
                    <rect x="8" y="14" width="10" height="2" rx="1" fill="#222"/>
                    <rect x="8" y="18" width="8" height="2" rx="1" fill="#222"/>
                    <rect x="20" y="18" width="4" height="4" rx="1" fill="#fff" stroke="#222" strokeWidth="1"/>
                  </svg>
                </span>
              </div>
            </motion.div>
            {/* Hire Card */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-lg p-8 flex-1 flex flex-col justify-between min-w-[260px] relative"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">I want to hire</h2>
                <p className="text-black mb-6">Find your perfect candidate</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl">→</span>
                {/* Placeholder for icon */}
                <span className="inline-block w-12 h-12 bg-yellow-200 rounded-lg flex items-center justify-center">
                  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="10" fill="#FFD54F" stroke="#222" strokeWidth="2"/>
                    <rect x="12" y="12" width="8" height="2" rx="1" fill="#222"/>
                    <rect x="12" y="16" width="8" height="2" rx="1" fill="#222"/>
                    <rect x="12" y="20" width="5" height="2" rx="1" fill="#222"/>
                    <line x1="22" y1="22" x2="28" y2="28" stroke="#222" strokeWidth="2"/>
                  </svg>
                </span>
              </div>
              {/* Shadow effect */}
              <div className="absolute left-2 top-2 w-full h-full bg-black opacity-10 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </main>
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
      </div>
      <Expert />
      <CareerLevels />
      <Testimonials />
      <Executive />
      <Footer />
    </>
  );
}