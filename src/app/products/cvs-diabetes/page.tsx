"use client";
import Link from "next/link";
import Image from "next/image";
import ContactBanner from "@/components/ContactBanner";

export default function CVSDiabetesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* 1. Hero Banner - Match Screenshot */}
      <section className="relative h-[300px] md:h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/products/pharma/CVS-Diabetes-1.jpeg" 
            alt="CVS & Diabetes Banner" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white mb-4 tracking-tight drop-shadow-md">
            CVS & Diabetes
          </h1>
        </div>
      </section>

      {/* 2. Breadcrumbs */}
      <div className="bg-[#f8f9fc] py-6 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex items-center space-x-3 text-[15px] font-medium text-[#121f45]">
          <Link href="/" className="hover:text-[#f39c12] transition-colors">Home</Link>
          <span className="text-[#f39c12] font-bold">&gt;</span>
          <Link href="/products/pharma" className="hover:text-[#f39c12] transition-colors">Pharma</Link>
          <span className="text-[#f39c12] font-bold">&gt;</span>
          <span className="text-gray-500">CVS & Diabetes</span>
        </div>
      </div>

      {/* 3. Main Content - 2 Column Circular Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Column: Circular Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-8 border-gray-50 shadow-2xl">
                <Image 
                  src="/products/pharma/CVS-Diabetes.jpeg" 
                  alt="CVS & Diabetes Solution" 
                  fill 
                  className="object-cover"
                />
                {/* Small indicator dot at bottom center */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                   <div className="w-10 h-10 border-4 border-[#f39c12] border-t-transparent rounded-full animate-spin-slow"></div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="w-full lg:w-1/2 space-y-8 text-[#5e6271] text-lg leading-relaxed">
              <p>
                Cardiovascular & Diabetes care managed till date through diabetic medications, diet control and increasing the physical activity. We at Rheo along with the conventional treatment options have come up with more comprehensive option by deploying latest technological advancements in Artificial Intelligence(Ai) for detection of various Cardiovascular diseases like
              </p>

              <ul className="space-y-4">
                {[
                  "Atrial Fibrillation,",
                  "Bradycardia,",
                  "Bundle branch blocks,",
                  "Ischemia &",
                  "Diabetes"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#17d1a5] rounded-full flex items-center justify-center text-white text-[10px] flex-shrink-0">
                      ✓
                    </div>
                    <span className="font-bold text-[#121f45]">{item}</span>
                  </li>
                ))}
              </ul>

              <p>
                So, we not only focus on treatment but also the early detection so that many healthy persons are protected/ alerted well in advance which in turn will also help in reducing the healthcare burden.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Contact Banner */}
      <ContactBanner />
      
    </div>
  );
}
