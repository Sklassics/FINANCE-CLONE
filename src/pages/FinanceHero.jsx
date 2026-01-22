import React from "react";

export default function FinanceHero() {
  return (
    <section className="relative bg-white min-h-[600px] flex justify-center items-center py-8 px-2 md:px-0 overflow-x-hidden">
      {/* Decorative yellow circle bottom left */}
      <div className="absolute -left-40 -bottom-40 w-[400px] h-[400px] bg-[#FFD54F] rounded-full z-0"></div>
      {/* Main container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row bg-transparent md:bg-white rounded-[2.5rem] overflow-hidden">
        {/* Left: Text */}
        <div className="flex-1 bg-[#101726] rounded-t-[2.5rem] md:rounded-l-[2.5rem] md:rounded-tr-none px-6 md:px-16 py-10 flex flex-col justify-center relative">
          <h1 className="text-white font-extrabold text-[2.5rem] md:text-[4rem] leading-[1.05] mb-8 tracking-tight">
            True Financial
            <br />
            Recruitment
            <br />
            Specialists.
            <span className="inline-block w-4 h-4 md:w-6 md:h-6 bg-[#FFD54F] rounded-full ml-2 align-middle"></span>
          </h1>
          <p className="text-white text-lg md:text-2xl mb-8 font-normal">
            We aren’t interested in the ‘numbers game’. At Mitchell Adam, we value people for what they add to a team. Our method starts with getting to know your culture, requirements and finance recruitment goals.
          </p>
          {/* Decorative yellow dot */}
          <span className="absolute left-1/2 bottom-6 md:bottom-10 transform -translate-x-1/2 w-3 h-3 bg-[#FFD54F] rounded-full"></span>
        </div>
        {/* Right: Image */}
        <div className="flex-1 min-h-[320px] max-h-[500px] flex items-center justify-center bg-white rounded-b-[2.5rem] md:rounded-r-[2.5rem] md:rounded-bl-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
            alt="Team at table"
            className="object-cover w-full h-full min-h-[320px] max-h-[500px]"
          />
        </div>
      </div>
    
      
    </section>
  );
}