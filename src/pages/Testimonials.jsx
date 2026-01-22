import React, { useState } from "react";

const testimonials = [
  {
    text: `Can I say how pleased we have been with the service during our recent recruitment. They have been really hands-on and offered us some excellent quality candidates. We have now chosen the successful one but it was very close, which is something that doesn’t usually happen! I wouldn’t hesitate to recommend Mitchell Adam to all of my business contacts in the future.`,
    author: "Director - Contractor Firm",
  },
  {
    text: `What a great recruitment consultant! I had a job advertised with another company for three months with no joy, after 72 hours Mitchell Adam found the perfect candidate, interviewed and accepted the position within that timescale. Could not be happier with the service that was offered.`,
    author: "Director – Estates Agency",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const handlePrev = () => setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () => setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative py-12 px-2 md:px-0 flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto bg-[#e5ecf6] rounded-2xl md:rounded-[2rem] px-2 md:px-8 py-10 md:py-16 relative overflow-hidden">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0C121C] mb-10 px-2 md:px-0">
          A Few Words <br className="md:hidden" /> On Us
          <span className="inline-block w-4 h-4 bg-[#FFD54F] rounded-full ml-2 align-middle"></span>
        </h2>
        {/* Testimonial Cards */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-stretch">
          {/* Left Card */}
          <div className="relative flex-1 bg-white rounded-2xl shadow-lg p-8 md:p-10 min-h-[260px] flex flex-col justify-between">
            {/* Left Arrow */}
            <button
              className="absolute -left-7 top-1/2 -translate-y-1/2 z-10"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <span className="w-12 h-12 bg-[#FFD54F] rounded-full flex items-center justify-center text-2xl shadow hover:bg-yellow-300 transition">
                &#8592;
              </span>
            </button>
            <p className="text-lg md:text-xl text-[#0C121C] mb-8">{testimonials[active].text}</p>
            <span className="font-bold text-[#0C121C]">{testimonials[active].author}</span>
          </div>
          {/* Right Card */}
          <div className="relative flex-1 bg-white rounded-2xl shadow-lg p-8 md:p-10 min-h-[260px] flex flex-col justify-between">
            {/* Right Arrow */}
            <button
              className="absolute -right-7 top-1/2 -translate-y-1/2 z-10"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <span className="w-12 h-12 bg-[#FFD54F] rounded-full flex items-center justify-center text-2xl shadow hover:bg-yellow-300 transition">
                &#8594;
              </span>
            </button>
            <p className="text-lg md:text-xl text-[#0C121C] mb-8">{testimonials[(active + 1) % testimonials.length].text}</p>
            <span className="font-bold text-[#0C121C]">{testimonials[(active + 1) % testimonials.length].author}</span>
          </div>
        </div>
      </div>
    </section>
  );
}