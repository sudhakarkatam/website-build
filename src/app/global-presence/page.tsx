import Link from "next/link";

export default function GlobalPresencePage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-[84px] bg-slate-50">
      {/* HERO SECTION */}
      <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-[var(--color-blue-dark)]"></div>
         <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <span className="text-white text-xl">Global Banner Image</span>
         </div>
         <div className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide">Global Presence</h1>
           <div className="flex items-center text-sm font-medium text-white/80 mt-4">
             <Link href="/">Home</Link>
             <span className="mx-2">&rsaquo;</span>
             <span>Global Presence</span>
           </div>
         </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
         <h2 className="text-3xl font-bold text-[#1c2c52] mb-8">Global Presence</h2>
         <p className="text-[16px] text-gray-600 leading-relaxed font-medium max-w-4xl mx-auto mb-6">
           With immense amount of cumulative experience of more than 100 years, the team of Rheo Pharma is improving health of patients in more than 100 countries.
         </p>
         <p className="text-[16px] text-gray-600 leading-relaxed font-medium max-w-4xl mx-auto mb-16">
           Headquartered in India, Rheo operates from more than 9 strategic locations globally, providing better healthcare products to different corners of world. Active at every stage of medicine distribution we ensure delivering quality medicines at right price.
         </p>
         
         <div className="w-full h-[600px] bg-slate-200 border border-slate-300 rounded-xl overflow-hidden relative shadow-lg flex items-center justify-center group cursor-pointer hover:bg-slate-300 transition-colors">
            {/* An abstract Map Placeholder block */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-cover"></div>
            <div className="relative z-10 flex flex-col items-center">
               <svg className="w-16 h-16 text-[var(--color-primary)] mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
               </svg>
               <span className="text-slate-500 font-bold text-lg px-6 py-2 bg-white rounded-lg shadow-md group-hover:scale-105 transition-transform">World Map Illustration Placeholder</span>
            </div>
         </div>
      </div>
    </div>
  );
}
