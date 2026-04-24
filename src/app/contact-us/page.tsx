export default function ContactUs() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-24 text-center text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Contact Us</h1>
          <p className="text-xl text-gray-300 font-light">
            We'd love to hear from you. Let's start a conversation that matters.
          </p>
        </div>
      </section>

      {/* CONTACT INFO BLOCKS */}
      <section className="py-20 bg-white -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Headquarters</h3>
              <p className="text-gray-600 text-sm">
                100 Innovation Park, Tech Avenue<br />Global City, GC 100010
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Speak to Us</h3>
              <div className="text-gray-600 text-sm space-y-1 mt-1">
                <p>General: <span className="font-semibold text-gray-900">+1 (800) 123-4567</span></p>
                <p>Sales: <span className="font-semibold text-gray-900">+1 (800) 123-4568</span></p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Directory</h3>
              <div className="text-gray-600 text-sm space-y-1 mt-1 flex flex-col">
                <a href="mailto:info@healthtech.ai" className="hover:text-[var(--color-primary)]">info@healthtech.ai</a>
                <a href="mailto:sales@healthtech.ai" className="hover:text-[var(--color-primary)]">sales@healthtech.ai</a>
                <a href="mailto:bd@healthtech.ai" className="hover:text-[var(--color-primary)]">bd@healthtech.ai</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM AND MAP SECTION */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Find Us Placeholder Grid */}
            <div className="w-full h-[600px] bg-gray-200 rounded-3xl overflow-hidden relative border border-gray-300">
               <div className="absolute inset-0 flex items-center justify-center bg-gray-100 flex-col text-gray-400">
                  <svg className="w-16 h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                  <span>Interactive Map Placeholder</span>
               </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 sm:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send an Enquiry</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] bg-gray-50 focus:bg-white transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] bg-gray-50 focus:bg-white transition-colors" required />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                   <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] bg-gray-50 focus:bg-white transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input type="date" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] bg-gray-50 focus:bg-white transition-colors text-gray-600" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Enquiry Type *</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] bg-gray-50 focus:bg-white transition-colors">
                    <option>Product Enquiry</option>
                    <option>Business Collaboration</option>
                    <option>Diagnostics</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] bg-gray-50 focus:bg-white transition-colors resize-none" required placeholder="Type your message here..."></textarea>
                </div>
                
                <button type="submit" className="w-full py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors shadow-md mt-2">
                  Send Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
