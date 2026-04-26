"use client";
import Link from "next/link";
import Image from "next/image";

export default function DiagnosticsPage() {
  const cards = [
    {
      title: "Diagnostic Products Powered by AI",
      desc: "Revolutionizing diagnostics with AI-powered electrocardiograms (ECGs) for automated heart disease prediction and analysis.",
      href: "/products/diagnostic-products-powered-by-ai",
      img: "/products/Diagnostic-products.jpeg"
    },
    {
      title: "Digital Transformation for Stroke Pathways",
      desc: "Advanced digital solutions for rapid stroke diagnosis and management, significantly reducing response times and improving outcomes.",
      href: "/products/digital-transformation-for-stroke-pathways",
      img: "/products/Digital-transformation-for-stroke-pathways.jpeg"
    },
    {
      title: "Connected Healthcare",
      desc: "Innovative video collaboration platforms and remote monitoring solutions addressing unique challenges in the medical field.",
      href: "/products/connected-healthcare",
      img: "/products/diagnostics/connected-healthcare.jpeg"
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* 1. Hero Section - Left Aligned to match reference */}
      <section className="relative h-[350px] md:h-[450px] flex items-center overflow-hidden">
        {/* Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/products/diagnostics/diagostics-banner.jpeg" 
            alt="Diagnostics Banner" 
            fill 
            className="object-cover"
            priority
          />
          {/* Subtle overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-24 relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            Diagnostics
          </h1>
          <div className="flex items-center space-x-2 text-[14px] text-white font-bold uppercase tracking-wider">
            <Link href="/" className="hover:text-[#f39c12] transition-colors">Home</Link>
            <span className="text-[#f39c12] font-black">&raquo;&raquo;</span>
            <span className="text-white">Diagnostics</span>
          </div>
        </div>
      </section>

      {/* 2. Product Grid */}
      <section className="py-24 bg-[#f8f9fc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <div key={idx} className="group relative h-[420px] bg-white shadow-sm overflow-hidden rounded-sm cursor-pointer">
                
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                   <Image 
                    src={card.img} 
                    alt={card.title} 
                    fill 
                    className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
                   />
                </div>

                {/* Idle State: Bottom Corner Indicator */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-[#f39c12] z-10 group-hover:opacity-0 transition-opacity duration-300 shadow-md">
                   <svg className="w-5 h-5 rotate-45 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
                   </svg>
                </div>

                {/* Hover Overlay - Slides up from the bottom */}
                <div className="absolute inset-0 bg-[#121f45]/90 z-20 flex flex-col items-center justify-center p-8 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <h3 className="text-white text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {card.title}
                  </h3>
                  <div className="w-12 h-1 bg-[#f39c12] mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
                  <p className="text-white/80 text-[14px] leading-relaxed mb-8 line-clamp-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400">
                    {card.desc}
                  </p>
                  <Link href={card.href} className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500">
                    <button className="bg-[#f39c12] text-white font-bold text-[12px] tracking-widest px-8 py-3.5 hover:bg-orange-600 transition-colors uppercase rounded-sm shadow-lg">
                      READ MORE &raquo;
                    </button>
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
