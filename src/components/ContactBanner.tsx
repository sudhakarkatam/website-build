import React from "react";

export default function ContactBanner() {
  return (
    <section className="bg-[#f39c12] py-16 relative overflow-hidden">
      {/* Subtle Pattern Background (Optional, matches the screenshot's texture) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="reach-us-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0M-10 10L10 -10M30 50L50 30" stroke="white" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#reach-us-pattern)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side */}
          <div className="text-white text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Please Reach Us</h2>
            <p className="text-lg opacity-90">To know more about our treatment options and solutions</p>
          </div>

          {/* Right Side: Contact Info */}
          <div className="flex flex-col md:flex-row gap-8 w-full lg:w-auto">
            
            {/* Call Us */}
            <div className="flex items-center gap-6 p-6 border-2 border-white/30 rounded-sm flex-1 lg:min-w-[300px]">
              <div className="w-16 h-16 border-2 border-white flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div className="text-white">
                <p className="text-xl font-bold mb-1">Call Us:</p>
                <p className="text-lg">+91 40 4506 5704</p>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-center gap-6 p-6 border-2 border-white/30 rounded-sm flex-1 lg:min-w-[400px]">
              <div className="w-16 h-16 border-2 border-white flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div className="text-white">
                <p className="text-xl font-bold mb-1">Email Us:</p>
                <div className="space-y-0.5 opacity-90">
                  <p>info@rheopharma.com</p>
                  <p>sales@rheopharma.com</p>
                  <p>bd@rheopharma.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
