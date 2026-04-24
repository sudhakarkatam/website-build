"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] pt-16 text-gray-300 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About Us */}
          <div className="space-y-4">
            <h3 className="text-[20px] font-medium text-white mb-6">About Us</h3>
            <p className="text-[14px] text-gray-300 leading-[1.8] pr-2">
              Rheo is a young pharmaceutical company of Americas, founded in 2019 by ably experienced pharmaceutical professionals and is steadily establishing itself as a path-breaking Global Pharmaceutical Company.
            </p>
            <div className="pt-2">
              <h4 className="text-white font-bold mb-4 text-[15px]">Find Us On:</h4>
              <div className="flex space-x-2">
                <a href="#" className="w-8 h-8 rounded-full bg-[#F58220] flex items-center justify-center text-white hover:bg-white hover:text-[#F58220] transition-colors">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#F58220] flex items-center justify-center text-white hover:bg-white hover:text-[#F58220] transition-colors">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#F58220] flex items-center justify-center text-white hover:bg-white hover:text-[#F58220] transition-colors">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#F58220] flex items-center justify-center text-white hover:bg-white hover:text-[#F58220] transition-colors text-[16px] font-bold">
                   in
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[20px] font-medium text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                "About Us",
                "Business Partners",
                "Global Presence",
                "Pharma",
                "Diagnostics",
                "Newsroom",
                "Careers",
                "Contact us"
              ].map((link) => (
                <li key={link} className="flex items-center space-x-2">
                  <span className="text-white text-lg font-light leading-none mb-1">-</span>
                  <Link href="#" className="text-[14px] text-gray-300 font-medium hover:text-[#F58220] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Recent Posts */}
          <div>
            <h3 className="text-[20px] font-medium text-white mb-6">Recent Posts</h3>
            <div className="space-y-4">
               <div>
                  <span className="inline-block bg-[#F58220] text-white text-[12px] font-bold px-3 py-1 rounded-sm mb-2">
                    March 12, 2023
                  </span>
                  <p className="text-[14px] text-white font-medium hover:text-[#F58220] transition-colors cursor-pointer leading-tight">
                    Incorporation of Rheo Pharma Peru<br />S.A.C a fully ...
                  </p>
               </div>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-[20px] font-medium text-white mb-6">Contact Info</h3>
            <ul className="space-y-5 mb-8">
              <li className="flex items-start text-[14px] text-white font-medium">
                <svg className="h-5 w-5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                <span>+91 40 4506 5704</span>
              </li>
              <li className="flex items-start text-[14px] text-white font-medium">
                <svg className="h-5 w-5 mr-3 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                <div className="flex flex-col space-y-3">
                  <a href="mailto:info@rheopharma.com" className="hover:text-[#F58220] transition-colors">info@rheopharma.com</a>
                  <a href="mailto:sales@rheopharma.com" className="hover:text-[#F58220] transition-colors">sales@rheopharma.com</a>
                  <a href="mailto:bd@rheopharma.com" className="hover:text-[#F58220] transition-colors">bd@rheopharma.com</a>
                </div>
              </li>
            </ul>

            <h3 className="text-[16px] font-bold text-white mb-4">Subscribe Now</h3>
            <div className="relative w-full max-w-sm">
               <input type="email" placeholder="Enter Your Email" className="w-full bg-transparent border border-gray-600 text-white px-4 py-2.5 rounded-sm outline-none focus:border-[#F58220] text-sm" />
               <button className="absolute right-0 top-0 bottom-0 px-4 text-white hover:text-[#F58220] transition-colors flex items-center justify-center">
                  <svg className="h-4 w-4 -rotate-45" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-[13px] text-white font-medium">
            Rheo Pharma Pvt. Ltd.
          </p>
          <div className="text-[13px] text-white font-medium mt-2 md:mt-0">
             <span className="font-bold">Copyright &copy; 2025</span> | All Right Reserved
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
         className="absolute bottom-[60px] right-6 md:right-12 w-10 h-10 bg-[#F58220] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-white hover:text-[#F58220] transition-colors z-50 focus:outline-none"
      >
         <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
      </button>
    </footer>
  );
}
