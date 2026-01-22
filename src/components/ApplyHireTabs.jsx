import React, { useState } from "react";

const APPLY_STEPS = [
  {
    number: 1,
    title: "Search Jobs",
    desc: "Browse our open finance positions and find roles that match your skills, experience, and aspirations.",
  },
  {
    number: 2,
    title: "Apply Online",
    desc: "Submit your CV and cover letter directly through our platform. Our team will review your application promptly.",
  },
  {
    number: 3,
    title: "Interview & Progress",
    desc: "Prepare with our resources and attend interviews. Get guidance at every stage until you secure your next role.",
  },
];

const HIRE_STEPS = [
  {
    number: 1,
    title: "Contact us",
    desc: "Give us a call or use our contact form to tell us about your hiring requirements. We listen well and get to know your business so that we can recruit the best fit for each vacancy.",
  },
  {
    number: 2,
    title: "Arrange a Meeting",
    desc: "We want to meet you and get a deeper understanding of your business and requirements. Our expert Consultants will work in partnership with you to create a recruitment plan that delivers results.",
  },
  {
    number: 3,
    title: "Process Management & Aftercare",
    desc: "Utilising our many years of experience to ensure we manage the process effectively. We identify the right talent, engage them throughout and guarantee transparent, professional offer management.",
  },
];

export default function ApplyHireTabs() {
  const [tab, setTab] = useState("applying");

  const steps = tab === "applying" ? APPLY_STEPS : HIRE_STEPS;

  return (
    <section className="relative bg-[#0C121C] rounded-3xl p-6 md:p-14 max-w-4xl w-full mx-auto my-20 shadow-2xl min-h-[480px] flex flex-col">
      {/* Decorative yellow shape */}
      <div className="absolute -top-28 -right-32 w-64 h-64 bg-[#FFD54F] rounded-full opacity-80 -z-10 hidden md:block"></div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 space-y-6">
          <h2 className="text-white font-extrabold text-4xl md:text-5xl leading-tight mb-2">
            I Want To <br className="md:hidden" />
            {tab === "applying" ? "Apply." : "Hire."}
            <span className="inline-block w-4 h-4 bg-[#FFD54F] rounded-full ml-2 align-middle"></span>
          </h2>
          {/* Tab Switcher */}
          <div className="flex gap-2 mb-6">
            <button
              className={`px-4 py-1 rounded-full text-xs font-semibold ${
                tab === "applying"
                  ? "bg-white text-[#181C25]"
                  : "bg-transparent text-white border border-white"
              }`}
              onClick={() => setTab("applying")}
            >
              APPLYING
            </button>
            <button
              className={`px-4 py-1 rounded-full text-xs font-semibold ${
                tab === "hiring"
                  ? "bg-[#FFD54F] text-[#181C25]"
                  : "bg-transparent text-white border border-[#FFD54F]"
              }`}
              onClick={() => setTab("hiring")}
            >
              HIRING
            </button>
          </div>
          {/* Middle Card (Step 2 for both tabs) */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-3">
            <div className="flex items-center mb-2">
              <span className="bg-[#FFD54F] text-[#181C25] font-bold w-7 h-7 flex items-center justify-center rounded-full text-base mr-3">
                {steps[1].number}
              </span>
              <span className="text-[#181C25] font-extrabold text-xl">{steps[1].title}</span>
            </div>
            <p className="text-[#181C25] text-base">{steps[1].desc}</p>
          </div>
        </div>
        {/* Right Grid: Step 1 and Step 3 */}
        <div className="flex-1 grid grid-cols-1 gap-4">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-3">
            <div className="flex items-center mb-2">
              <span className="bg-[#FFD54F] text-[#181C25] font-bold w-7 h-7 flex items-center justify-center rounded-full text-base mr-3">
                {steps[0].number}
              </span>
              <span className="text-[#181C25] font-extrabold text-xl">{steps[0].title}</span>
            </div>
            <p className="text-[#181C25] text-base">{steps[0].desc}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex items-center mb-2">
              <span className="bg-[#FFD54F] text-[#181C25] font-bold w-7 h-7 flex items-center justify-center rounded-full text-base mr-3">
                {steps[2].number}
              </span>
              <span className="text-[#181C25] font-extrabold text-xl">{steps[2].title}</span>
            </div>
            <p className="text-[#181C25] text-base">{steps[2].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}