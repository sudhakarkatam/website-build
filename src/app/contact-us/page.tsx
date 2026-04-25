import Image from 'next/image';

export default function ContactUs() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image 
              src="/contact-us-banner.jpeg" 
              alt="Contact Us Banner" 
              fill 
              sizes="100vw"
              className="object-cover" 
              priority 
           />
        </div>
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-wide">Contact Us</h1>
        </div>
      </section>

      {/* 2. ORANGE INFO BAR */}
      <section className="relative z-20 py-12 px-6 md:px-12 lg:px-24 bg-white">
         <div className="w-full max-w-[1920px] mx-auto bg-[#F58220] rounded-[20px] shadow-2xl p-8 md:p-14">
            <div className="grid md:grid-cols-3 gap-12 items-center">
               
               {/* Call Us */}
               <div className="flex items-center space-x-6 text-white border-b md:border-b-0 md:border-r border-white/20 pb-8 md:pb-0">
                  <div className="w-20 h-20 bg-[#3B82F6] rounded-xl flex items-center justify-center border-2 border-dashed border-white/60 shadow-lg">
                     <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                     </svg>
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold mb-1">Call US:</h3>
                     <a href="tel:+914045065704" className="text-white/90 text-lg font-medium hover:underline transition-all">+91 40 4506 5704</a>
                  </div>
               </div>

               {/* Email Us */}
               <div className="flex items-center space-x-6 text-white border-b md:border-b-0 md:border-r border-white/20 pb-8 md:pb-0">
                  <div className="w-20 h-20 bg-[#3B82F6] rounded-xl flex items-center justify-center border-2 border-dashed border-white/60 shadow-lg">
                     <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold mb-1">Email Us:</h3>
                     <div className="text-white/90 text-base space-y-0.5">
                        <a href="mailto:info@rheopharma.com" className="block hover:underline transition-all">info@rheopharma.com</a>
                        <a href="mailto:sales@rheopharma.com" className="block hover:underline transition-all">sales@rheopharma.com</a>
                        <a href="mailto:bd@rheopharma.com" className="block hover:underline transition-all">bd@rheopharma.com</a>
                     </div>
                  </div>
               </div>

               {/* Website */}
               <div className="flex items-center space-x-6 text-white pb-4 md:pb-0">
                  <div className="w-20 h-20 bg-[#3B82F6] rounded-xl flex items-center justify-center border-2 border-dashed border-white/60 shadow-lg">
                     <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                     </svg>
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold mb-1">Website:</h3>
                     <a href="https://www.rheopharma.com" target="_blank" rel="noopener noreferrer" className="text-white/90 text-lg font-medium hover:underline transition-all">www.rheopharma.com</a>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 3. SEND AN EMAIL SECTION */}
      <section className="py-24 bg-white">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
             
             {/* Left: Form */}
             <div className="max-w-2xl">
                <div className="mb-6">
                  <span className="text-[#f39c12] font-bold tracking-widest uppercase text-[15px] underline underline-offset-8 decoration-2">- GET IN TOUCH -</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-[60px] font-medium text-[#121f45] mb-12 leading-tight">
                  Send An Email:
                </h2>
                
                <form className="space-y-6">
                   <div className="grid grid-cols-2 gap-6">
                      <input type="text" placeholder="Name*" className="w-full bg-[#f8f9fc] border border-gray-100 rounded-lg p-5 outline-none focus:ring-1 focus:ring-[#f39c12] transition-all" required />
                      <input type="email" placeholder="Email*" className="w-full bg-[#f8f9fc] border border-gray-100 rounded-lg p-5 outline-none focus:ring-1 focus:ring-[#f39c12] transition-all" required />
                   </div>
                   <div className="grid grid-cols-2 gap-6">
                      <input type="text" placeholder="Country*" className="w-full bg-[#f8f9fc] border border-gray-100 rounded-lg p-5 outline-none focus:ring-1 focus:ring-[#f39c12] transition-all" required />
                      <input type="text" placeholder="dd-mm-yyyy" className="w-full bg-[#f8f9fc] border border-gray-100 rounded-lg p-5 outline-none focus:ring-1 focus:ring-[#f39c12] transition-all text-gray-400" />
                   </div>
                   <div>
                      <select className="w-full bg-[#f8f9fc] border border-gray-100 rounded-lg p-5 outline-none focus:ring-1 focus:ring-[#f39c12] transition-all text-gray-400 appearance-none">
                         <option>-Select-</option>
                         <option>General Inquiry</option>
                         <option>Sales</option>
                         <option>Business Partnership</option>
                      </select>
                   </div>
                   <div>
                      <textarea rows={6} placeholder="Message" className="w-full bg-[#f8f9fc] border border-gray-100 rounded-lg p-5 outline-none focus:ring-1 focus:ring-[#f39c12] transition-all resize-none"></textarea>
                   </div>
                   <button type="submit" className="px-10 py-4 bg-[#f39c12] text-white font-bold rounded-lg uppercase tracking-wider hover:bg-[#d38b10] transition-colors flex items-center space-x-2 shadow-lg">
                      <span>SEND NOW</span>
                      <span className="text-xl">&raquo;</span>
                   </button>
                </form>
             </div>

             {/* Right: Map */}
             <div className="flex flex-col">
                <div className="bg-[#f8f9fc] p-8 rounded-t-[20px] border border-gray-100 border-b-0">
                   <h3 className="text-xl font-bold text-[#121f45] mb-2">Rheo Pharma Private Limited</h3>
                   <p className="text-gray-500 leading-relaxed">
                      Office No: 501 & 502, 5th Floor, Aditya Trade Center, Kumar Basti, Ameerpet, Hyderabad, Telangana 500038
                   </p>
                </div>
                <div className="w-full h-full min-h-[450px] rounded-b-[20px] overflow-hidden shadow-lg border border-gray-100 relative">
                   <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3677.6192335820933!2d78.445066!3d17.436505!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91006c958b3b%3A0xf33c3ee04687ac32!2sRheo%20Pharma%20Private%20Limited!5e1!3m2!1sen!2sin!4v1777105054270!5m2!1sen!2sin" 
                      className="absolute inset-0 w-full h-full border-0" 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                   ></iframe>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* 4. REPEAT GLOBAL PRESENCE MAP */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
           <div className="text-center mb-16">
              <div className="mb-4">
                 <span className="text-[#f39c12] font-bold tracking-widest uppercase text-[15px] underline underline-offset-8 decoration-2">- RHEO PHARMA -</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#121f45]">Our Global Presence</h2>
           </div>

           <div className="relative w-full max-w-[1400px] mx-auto min-h-[400px] md:min-h-[600px] lg:min-h-[750px]">
              <Image 
                 src="/a95ce995-5cb1-45e3-be8b-93cd9f6e2c64.svg" 
                 alt="World Map Distribution" 
                 fill 
                 sizes="100vw"
                 className="object-contain"
              />
           </div>
        </div>
      </section>

    </div>
  );
}
