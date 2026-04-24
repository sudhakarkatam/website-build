"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProductPageTemplateProps {
  title: string;
  category?: string; // e.g., "Pharma"
  children: React.ReactNode;
}

export default function ProductPageTemplate({ title, category = "Pharma", children }: ProductPageTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1c2c52] overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                 <pattern id="hexagons-hero" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                    <path fill="none" stroke="#ffffff" strokeWidth="1" d="M25 0l25 14.4v28.9l-25 14.5L0 43.3V14.5z"/>
                 </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons-hero)" />
           </svg>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-6 leading-tight">{title}</h1>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-300 font-medium tracking-wide">
             <Link href="/" className="hover:text-white transition-colors">Home</Link>
             <span>/</span>
             <span className="text-[#F58220]">{category}</span>
             <span>/</span>
             <span className="text-white">{title}</span>
          </div>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Column: Image & Contact Teaser */}
            <div className="w-full lg:w-[40%] flex-shrink-0">
               {/* Empty Image Placeholder for later */}
               <div className="w-full aspect-[4/3] bg-slate-100 rounded-sm relative overflow-hidden mb-8 border border-gray-100 shadow-sm flex items-center justify-center group">
                  <div className="w-24 h-24 rounded-full border-4 border-slate-200 border-t-[#F58220] animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-slate-400 font-medium text-sm bg-slate-100/80 px-4 py-1 rounded-full">Image Slot (Pending)</span>
                  </div>
               </div>
               
               {/* Contact Box */}
               <div className="bg-[#f4f7fc] p-8 border-l-4 border-[#F58220]">
                  <h3 className="text-xl font-bold text-[#1c2c52] mb-3">Require Assistance?</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    Our team of experts is ready to assist you with any inquiries regarding our {title} products. Let us help you find the right therapeutic solutions.
                  </p>
                  <Link href="/contact-us" className="inline-block bg-[#F58220] text-white font-bold text-[13px] tracking-wider py-3.5 px-6 hover:bg-[#e0751b] transition-colors shadow-sm">
                    CONTACT US &raquo;
                  </Link>
               </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="w-full lg:w-[60%] prose prose-lg prose-blue max-w-none text-gray-600">
               <h2 className="text-3xl font-medium text-[#1c2c52] mb-6 border-b border-gray-100 pb-4">Overview</h2>
               {children}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Global Banner Strip */}
      <section className="py-12 bg-[#F58220]">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">Partner with Rheo Pharma for Better Patient Outcomes</h2>
            <Link href="/contact-us" className="inline-block bg-white text-[#F58220] font-bold text-[13px] tracking-wider py-4 px-8 hover:bg-gray-50 transition-colors shadow-md">
               EXPLORE PARTNERSHIP &raquo;
            </Link>
         </div>
      </section>
    </div>
  );
}
