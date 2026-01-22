import React from "react";

const cards = [
  {
    title: "Transactional Finance",
    desc: "Entry level, graduate, experienced professional",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 32 32">
        <rect x="6" y="10" width="20" height="14" rx="2" fill="#FFD54F" stroke="#222" strokeWidth="2"/>
        <rect x="10" y="14" width="12" height="2" rx="1" fill="#fff"/>
        <rect x="10" y="18" width="6" height="2" rx="1" fill="#fff"/>
        <rect x="18" y="18" width="4" height="2" rx="1" fill="#fff"/>
        <rect x="10" y="22" width="12" height="2" rx="1" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "Part Qualified Finance",
    desc: "Studying ACA, ACCA, CIMA, Supervisory/Management or qualified by experience",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 32 32">
        <rect x="4" y="6" width="24" height="20" rx="2" fill="#FFD54F" stroke="#222" strokeWidth="2"/>
        <rect x="8" y="10" width="16" height="2" rx="1" fill="#222"/>
        <rect x="8" y="14" width="10" height="2" rx="1" fill="#222"/>
        <rect x="8" y="18" width="8" height="2" rx="1" fill="#222"/>
        <rect x="20" y="18" width="4" height="4" rx="1" fill="#fff" stroke="#222" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    title: "Qualified Finance",
    desc: "Newly qualified/post-qualified ACA, ACCA, CIMA, Senior Management or qualified by experience",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 32 32">
        <rect x="4" y="6" width="24" height="20" rx="2" fill="#FFD54F" stroke="#222" strokeWidth="2"/>
        <rect x="8" y="10" width="16" height="2" rx="1" fill="#222"/>
        <rect x="8" y="14" width="10" height="2" rx="1" fill="#222"/>
        <rect x="8" y="18" width="8" height="2" rx="1" fill="#222"/>
        <rect x="20" y="18" width="4" height="4" rx="1" fill="#fff" stroke="#222" strokeWidth="1"/>
        <circle cx="24" cy="28" r="4" fill="#FFD54F" stroke="#FFD54F" strokeWidth="1"/>
      </svg>
    ),
  },
];

export default function CareerLevels() {
  return (
    <section className="relative py-16 px-2 md:px-0 bg-transparent flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-start gap-12 mb-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-6 leading-tight">
              Recruiting <br />
              Across All <br />
              Career <br />
              Levels
              <span className="inline-block w-4 h-4 bg-[#FFD54F] rounded-full ml-2 align-middle"></span>
            </h2>
          </div>
          {/* Large Card */}
          <div className="flex-1 flex flex-col items-stretch">
            <div
              className="relative bg-white border-2 border-black rounded-2xl p-12 flex flex-col justify-between min-h-[320px] md:min-h-[380px] transition-all duration-300
    hover:-translate-y-3 hover:shadow-[8px_8px_0_0_#0C121C] hover:border-b-[10px] hover:border-r-[10px] hover:border-t-2 hover:border-l-2 hover:border-black"
              style={{ fontSize: "1.25rem" }}
            >
              <div>
                <h3 className="text-3xl font-bold text-black mb-4">{cards[0].title}</h3>
                <p className="text-xl text-black mb-8">{cards[0].desc}</p>
              </div>
              <div className="flex items-end justify-between">
                <button className="flex items-center gap-2 bg-[#FFD54F] px-8 py-3 rounded-full font-semibold text-black text-lg shadow hover:bg-yellow-300 transition">
                  SEARCH <span>→</span>
                </button>
                <span>{cards[0].icon}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Paragraph */}
        <p className="text-xl text-black mt-8 mb-12 max-w-3xl">
          For permanent, Fixed Term Contract <br className="hidden md:block" />
          and Interim Appointments
        </p>
        {/* Two Cards Row */}
        <div className="grid md:grid-cols-2 gap-12">
          {[cards[1], cards[2]].map((card) => (
            <div
              key={card.title}
              className="relative bg-white border-2 border-black rounded-2xl p-12 flex flex-col justify-between min-h-[320px] md:min-h-[380px] transition-all duration-300
              hover:-translate-y-3 hover:shadow-[8px_8px_0_0_#0C121C] hover:border-b-[10px] hover:border-r-[10px] hover:border-t-2 hover:border-l-2 hover:border-black"
              style={{ fontSize: "1.25rem" }}
            >
              <div>
                <h3 className="text-3xl font-bold text-black mb-4">{card.title}</h3>
                <p className="text-xl text-black mb-8">{card.desc}</p>
              </div>
              <div className="flex items-end justify-between">
                <button className="flex items-center gap-2 bg-[#FFD54F] px-8 py-3 rounded-full font-semibold text-black text-lg shadow hover:bg-yellow-300 transition">
                  SEARCH <span>→</span>
                </button>
                <span>{card.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Decorative yellow shape (optional) */}
      <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-[#FFD54F] rounded-full opacity-80 -z-10"></div>
    </section>
  );
}