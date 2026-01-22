import React from "react";

export default function ContactSection() {
  return (
    <section className="relative bg-white min-h-screen py-0 px-0 flex justify-center items-start overflow-x-hidden">
      {/* Main container */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 pt-12 pb-24">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-[#0C121C] font-extrabold text-[56px] md:text-[72px] leading-[1.05] tracking-tight flex items-center">
            Contact Us
            <span className="inline-block w-6 h-6 md:w-7 md:h-7 bg-[#FFD54F] rounded-full ml-3 align-middle"></span>
          </h1>
        </div>
        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <div>
              <label className="block text-xl font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border-b border-[#e5eaf1] focus:outline-none py-2 text-lg bg-transparent"
              />
            </div>
            <div>
              <label className="block text-xl font-semibold mb-2">What's your email address?</label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full border-b border-[#e5eaf1] focus:outline-none py-2 text-lg bg-transparent"
              />
            </div>
            <div>
              <label className="block text-xl font-semibold mb-2">Job Title</label>
              <input
                type="text"
                placeholder="Job Title"
                className="w-full border-b border-[#e5eaf1] focus:outline-none py-2 text-lg bg-transparent"
              />
            </div>
            <div>
              <label className="block text-xl font-semibold mb-2">How can we help</label>
              <textarea
                rows={4}
                placeholder="Type your message"
                className="w-full border-b border-[#e5eaf1] focus:outline-none py-2 text-lg bg-transparent resize-none"
              />
            </div>
            <div>
              <label className="block text-xl font-semibold mb-2">How did you hear about us?</label>
              <input
                type="text"
                placeholder="Let us know"
                className="w-full border-b border-[#e5eaf1] focus:outline-none py-2 text-lg bg-transparent"
              />
            </div>
            {/* reCAPTCHA placeholder */}
            <div className="mt-4">
              <div className="w-[300px] h-[78px] bg-[#f5f5f5] border border-[#e5eaf1] rounded flex items-center justify-center text-gray-400 text-sm">
                [reCAPTCHA]
              </div>
            </div>
            {/* Checkbox */}
            <div className="flex items-start mt-4">
              <input
                type="checkbox"
                className="form-checkbox rounded-full border-2 border-[#FFD54F] text-[#FFD54F] w-6 h-6 mt-1"
                id="privacy"
              />
              <label htmlFor="privacy" className="ml-3 text-lg">
                By clicking this checkbox you confirm that you have read and agree to the{" "}
                <a href="#" className="underline font-semibold">
                  privacy policy
                </a>
                .<span className="text-[#e57373] ml-1">(Required)</span>
              </label>
            </div>
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-8">
            <div>
              <label className="block text-xl font-semibold mb-2">Surname</label>
              <input
                type="text"
                placeholder="Surname"
                className="w-full border-b border-[#e5eaf1] focus:outline-none py-2 text-lg bg-transparent"
              />
            </div>
            <div>
              <label className="block text-xl font-semibold mb-2">Your company name</label>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full border-b border-[#e5eaf1] focus:outline-none py-2 text-lg bg-transparent"
              />
            </div>
            <div>
              <label className="block text-xl font-semibold mb-2">Location</label>
              <input
                type="text"
                placeholder="Location"
                className="w-full border-b border-[#e5eaf1] focus:outline-none py-2 text-lg bg-transparent"
              />
            </div>
            {/* Upload box */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#e5eaf1] rounded-xl min-h-[220px] mt-2 mb-8">
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12 text-[#FFD54F] mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="7" y="9" width="10" height="12" rx="2" fill="#fff" stroke="#181C25" />
                  <path d="M9 13h6M9 17h6" stroke="#181C25" strokeWidth={2} strokeLinecap="round" />
                  <path d="M13 9V5h-2v4" stroke="#FFD54F" strokeWidth={2} strokeLinecap="round" />
                </svg>
                <p className="text-lg text-[#181C25] mb-4">Upload or drag and drop your file.</p>
                <button
                  type="button"
                  className="bg-[#FFD54F] hover:bg-[#ffe082] text-[#181C25] font-bold py-2 px-8 rounded-full text-lg flex items-center transition"
                >
                  UPLOAD
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
        {/* Submit button */}
        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="flex items-center gap-3 text-[#181C25] font-semibold text-lg"
          >
            SUBMIT
            <span className="inline-flex items-center justify-center w-12 h-12 bg-[#FFD54F] rounded-full ml-2">
              <svg className="w-6 h-6 text-[#181C25]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      {/* Floating Phone */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <div className="flex items-center bg-white text-black rounded-full px-6 py-3 shadow-lg text-lg font-medium">
          <svg className="w-6 h-6 mr-2 text-black" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.75C3 4.784 3.784 4 4.75 4h2.5A1.75 1.75 0 019 5.75v1.5A1.75 1.75 0 017.25 9H6.5a11.5 11.5 0 005.5 5.5v-.75A1.75 1.75 0 0113.75 12h1.5A1.75 1.75 0 0117 13.75v2.5A1.75 1.75 0 0115.25 18h-2.5A1.75 1.75 0 0111 16.25v-1.5A1.75 1.75 0 0112.75 13H13.5a13.5 13.5 0 01-10.5-10.5V5.75z" />
          </svg>
          0121 651 1235
        </div> */}
      
    </section>
  );
}