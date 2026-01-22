import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export default function Hero() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-[70vh] bg-[#FFD54F] overflow-hidden flex flex-col">
      {/* Top nav */}
      <div className="flex items-center justify-between px-8 pt-8">
        {/* Logo */}
        <div className="w-20 h-20 rounded-full bg-[#181C25] flex items-center justify-center">
          <span className="text-4xl italic font-bold text-[#FFD54F] font-serif">MA</span>
        </div>
        {/* Buttons & menu */}
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

      {/* Headline */}
      <div className="flex-1 flex flex-col justify-center px-8 pb-8 md:pb-0 z-10">
        <h1 className="text-[#181C25] font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight max-w-5xl mt-12 md:mt-24">
          Find Your Next Finance<br />
          Professional
          <span className="inline-block w-6 h-6 bg-white rounded-full ml-2 align-middle"></span>
        </h1>
      </div>
      {/* Decorative shapes */}
      <div className="absolute right-0 top-32 w-[340px] h-[340px] bg-[#FDC54E] rounded-bl-[180px] rounded-tl-none rounded-br-none rounded-tr-none opacity-90 z-0 hidden md:block"></div>
      <div className="absolute left-1/2 bottom-0 translate-x-[-50%] md:translate-x-0 md:left-auto md:right-60 md:bottom-[-60px] w-64 h-64 bg-white rounded-full z-0"></div>
      {/* Floating Phone */}
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
      
    </section>
  );
}