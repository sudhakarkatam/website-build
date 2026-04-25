import Image from 'next/image';
import Link from 'next/link';

export default function BusinessPartnersPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-[#031d38] flex flex-col items-center justify-center overflow-hidden">
        {/* Placeholder for background image */}
        <div className="absolute inset-0 bg-[#031d38] z-0">
           {/* Add your actual banner image here */}
           {/* <Image src="/business-partners-banner.jpg" alt="Business Partners" fill className="object-cover opacity-30" /> */}
           <div className="absolute inset-0 bg-gradient-to-r from-[#F58220]/20 to-transparent mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Business Partners</h1>
          <div className="flex items-center justify-center space-x-2 text-sm md:text-base font-medium">
            <Link href="/" className="text-white hover:text-[#F58220] transition-colors">Home</Link>
            <span className="text-white/50">/</span>
            <span className="text-[#F58220]">Business Partners</span>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex justify-center mb-4">
               <span className="text-[#F58220] font-bold tracking-wider uppercase text-sm underline underline-offset-8 decoration-2">- GLOBAL PARTNERSHIPS -</span>
            </div>
            <h2 className="text-3xl md:text-[42px] font-medium text-[#1c2c52] leading-tight mb-8">
              Partner of Choice for Major Global Pharmaceutical Companies
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
             
             {/* Text Content */}
             <div className="space-y-6 text-[#6c757d] text-lg leading-relaxed">
                <p>
                  Majority of the products that we market today are either patented or first time generics in their respective countries and are exclusively licensed by the innovators/innovative manufacturers across the globe. These facilities and products are approved by highly regulated markets like <strong className="text-[#1c2c52] font-semibold">USFDA, EUGMP, TGA, MHRA, KFDA, NMDA</strong>.
                </p>
                <p>
                  Approved by stringent global regulatory authorities, these facilities have integrated quality systems and processes to ensure adherence to cGMP (current Good Manufacturing practices).
                </p>
                <div className="p-6 bg-[#f4f7fc] border-l-4 border-[#F58220] rounded-r-lg mt-8">
                   <p className="italic font-medium text-[#1c2c52]">
                     "We make continuous investments in upgradation of manufacturing facilities with special emphasis on deploying advanced machinery and adopting latest technologies to comply every changing global regulatory requirements."
                   </p>
                </div>
                <p>
                  Besides enabling us consistently produce high quality medicines at an affordable cost, it also helps us in passing through regulatory audits with relative ease. These advantages make us the partner of choice for major global pharmaceutical companies.
                </p>
             </div>

             {/* Image Placeholder */}
             <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl bg-gray-100 border-4 border-white group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c2c52]/80 to-transparent z-10"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 bg-slate-50 z-0 group-hover:scale-105 transition-transform duration-700">
                   <svg className="w-20 h-20 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                   </svg>
                   <span className="font-medium text-xl">Manufacturing Facility Image</span>
                   <span className="text-sm mt-2">Replace with actual facility/partner image</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                   <h3 className="text-2xl font-bold mb-2">Global Standards</h3>
                   <p className="text-white/80 text-sm">Adhering to cGMP and top regulatory requirements.</p>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* 3. LOGO GRID PLACEHOLDER */}
      <section className="py-20 bg-[#f8f9fc] border-t border-gray-100">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h3 className="text-2xl font-bold text-[#1c2c52]">Our Esteemed Partners</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* 5 placeholder logos */}
               {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                     <svg className="w-24 h-12 text-gray-300" viewBox="0 0 100 40" fill="currentColor">
                        <rect width="100" height="40" rx="4" fill="#e2e8f0" />
                        <text x="50" y="24" fontSize="12" textAnchor="middle" fill="#94a3b8" fontFamily="sans-serif" fontWeight="bold">LOGO {item}</text>
                     </svg>
                  </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
}
