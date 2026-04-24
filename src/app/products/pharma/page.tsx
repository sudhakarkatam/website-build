import Link from "next/link";
import Image from "next/image";

export default function PharmaPage() {
  const cards = [
    {
      title: "CVS & Diabetes",
      desc: "Cardiovascular & Diabetes care managed till date through diabetic medications, diet control and increasing the physical activity.",
      href: "/products/pharma/cvs-diabetes",
    },
    {
      title: "Oncology",
      desc: "With great passion and commitment of addressing the fast-rising incidence rates of cancer, we at Rheo are relentlessly...",
      href: "#",
    },
    {
      title: "Biosimilars & Vaccines",
      desc: "Biosimilars are safe and effective treatment options for many illnesses such as chronic skin and bowel diseases...",
      href: "#",
    },
    {
      title: "CNS",
      desc: "At Rheo, we are working to provide a 360º approach in the way various CNS disease ailments are diagnosed and treated...",
      href: "#",
    },
    {
      title: "Dermatology",
      desc: "With our commitment to your healthy skin, we offer the largest range of dermatology products in India, ensuring that you have access to the best care for your skin.",
      href: "#",
    },
    {
      title: "Respiratory",
      desc: "Chronic respiratory diseases (CRDs) affect the airways and other structures of the lungs. Some of the most common are chronic obstructive pulmonary disease (COPD)...",
      href: "#",
    },
    {
      title: "Nutraceutical & Supplements",
      desc: "We offer a comprehensive portfolio of nutritional and supplements portfolio covering wide spectrum of therapy areas...",
      href: "#",
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen pt-[84px] bg-slate-50">
      {/* Hero */}
      <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-[var(--color-blue-dark)]"></div>
         {/* Placeholder for the large header image */}
         <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <span className="text-white text-xl">Banner Image Placeholder</span>
         </div>
         <div className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide">Pharma</h1>
           <div className="flex items-center text-sm font-medium text-white/80 mt-4">
             <Link href="/">Home</Link>
             <span className="mx-2">&rsaquo;</span>
             <span>Pharma</span>
           </div>
         </div>
      </div>

      {/* Grid of Cards */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
               <div key={idx} className="group relative bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col h-[480px]">
                 
                 {/* Top Image (Hover moves it up/darkens) */}
                 <div className="h-[250px] w-full bg-slate-200 relative overflow-hidden transition-all duration-500 ease-in-out group-hover:h-[200px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                       <span className="text-slate-400">Card Image {idx + 1}</span>
                    </div>
                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-[#1a2f60]/90 transition-colors duration-500 flex flex-col items-center justify-center p-6 text-center z-10 opacity-0 group-hover:opacity-100 h-full">
                       <h3 className="text-white text-2xl font-bold mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{card.title}</h3>
                       <p className="text-white/80 text-[14px] leading-relaxed line-clamp-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                          {card.desc}
                       </p>
                       <Link href={card.href} className="mt-6">
                         <button className="bg-[var(--color-primary)] text-white font-bold text-[13px] px-6 py-3 rounded hover:bg-orange-600 transition-colors uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                           Read More &raquo;
                         </button>
                       </Link>
                    </div>
                 </div>

                 {/* Bottom Static Text area when not hovered */}
                 <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white transition-all duration-500 group-hover:bg-[#1a2f60]">
                    <h3 className="text-[#1c2c52] text-[22px] font-bold text-center group-hover:opacity-0 transition-opacity duration-300">
                       {card.title}
                    </h3>
                 </div>
                 
                 {/* Orange Arrow Toggle at the bottom corner */}
                 <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white shadow-lg z-20 group-hover:opacity-0 transition-opacity duration-300">
                    <svg className="w-5 h-5 rotate-45 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                 </div>

               </div>
            ))}
         </div>
      </div>
    </div>
  );
}
