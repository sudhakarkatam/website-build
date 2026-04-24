import Link from "next/link";

export default function BusinessPartnersPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-[84px] bg-white">
      {/* HERO SECTION */}
      <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-[var(--color-blue-dark)]"></div>
         <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <span className="text-white text-xl">Partners Banner Image</span>
         </div>
         <div className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide">Business Partners</h1>
           <div className="flex items-center text-sm font-medium text-white/80 mt-4">
             <Link href="/">Home</Link>
             <span className="mx-2">&rsaquo;</span>
             <span>Business Partners</span>
           </div>
         </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="w-full bg-slate-100 h-[450px] flex items-center justify-center rounded-lg">
               <span className="text-slate-400 font-semibold p-4 text-center">Global Factory/Supply Chain Placeholder</span>
            </div>
            <div>
               <h2 className="text-3xl font-bold text-[#1c2c52] mb-6">Business Partners</h2>
               <div className="text-[16px] text-gray-600 leading-relaxed font-medium space-y-6">
                 <p>
                   Majority of the products that we market today are either patented or first time generics in their respective countries and are exclusively licensed by the innovators/innovative manufacturers across the globe. These facilities and products are approved by highly regulated markets like USFDA, EUGMP, TGA, MHRA, KFDA, NMDA. Approved by stringent global regulatory authorities, these facilities have integrated quality systems and processes to ensure adherence to cGMP (current Good Manufacturing practices).
                 </p>
                 <p>
                   We make continuous investments in upgradation of manufacturing facilities with special emphasis on deploying advanced machinery and adopting latest technologies to comply every changing global regulatory requirements. Besides enabling us consistently produce high quality medicines at an affordable cost, it also helps us in passing through regulatory audits with relative ease. These advantages that make us the partner of choice for major global pharmaceutical companies.
                 </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
