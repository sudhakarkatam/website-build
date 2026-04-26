"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ContactBanner from "./ContactBanner";

interface SidebarLink {
  name: string;
  href: string;
}

interface ProductPageTemplateProps {
  title: string;
  category?: "Pharma" | "Diagnostics";
  sidebarLinks: SidebarLink[];
  mainImage?: string;
  bannerImage?: string;
  children: React.ReactNode;
}

export default function ProductPageTemplate({ 
  title, 
  category = "Pharma", 
  sidebarLinks,
  mainImage,
  bannerImage,
  children 
}: ProductPageTemplateProps) {

  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section - Left Aligned with Image & Overlay */}
      <section className="relative h-[300px] md:h-[350px] flex items-center overflow-hidden">
        {/* Banner Image */}
        <div className="absolute inset-0 z-0">
          {bannerImage ? (
            <Image 
              src={bannerImage} 
              alt={`${title} Banner`} 
              fill 
              className="object-cover"
              priority
            />
          ) : (
            /* Fallback to category banner if specific banner not provided */
            <div className="w-full h-full bg-[#121f45]"></div>
          )}
          
          {/* Brand Overlay (Orange for Pharma, Blue for Diagnostics) */}
          <div className={`absolute inset-0 ${category === "Pharma" ? "bg-orange-500/60" : "bg-blue-600/60"}`}></div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-24 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-4 tracking-tight drop-shadow-md">
            {title}
          </h1>
          <div className="flex items-center space-x-2 text-[13px] text-white font-bold uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors opacity-80 hover:opacity-100">Home</Link>
            <span className="font-black text-[#f39c12]">&gt;</span>
            <Link href={`/products/${category.toLowerCase()}`} className="hover:text-white transition-colors opacity-80 hover:opacity-100">{category}</Link>
            <span className="font-black text-[#f39c12]">&gt;</span>
            <span className="text-white">{title}</span>
          </div>

        </div>
      </section>

      {/* 2. Main Content & Sidebar */}
      <section className="py-24 bg-[#f8f9fc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left Column: Main Content */}
            <div className="w-full lg:w-[70%] bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-sm">
              <div className="mb-10">
                <div className="w-full aspect-[16/9] bg-slate-100 relative overflow-hidden mb-10 border border-gray-100 rounded-sm group">
                  {mainImage ? (
                    <Image 
                      src={mainImage} 
                      alt={title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    /* Organic mask shape placeholder (Oval effect) */
                    <div className="absolute inset-4 border-2 border-dashed border-slate-200 rounded-[40%_60%_70%_30%/40%_50%_60%_40%] flex items-center justify-center">
                      <span className="text-slate-400 font-medium text-sm">Product Detail Image Placeholder</span>
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-[#121f45] mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-[#f39c12]">
                  Overview
                </h2>
                
                <div className="prose prose-lg prose-slate max-w-none text-[#5e6271] leading-relaxed">
                  {children}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="w-full lg:w-[30%] space-y-8">
              
              {/* Quick Links */}
              <div className="bg-white shadow-sm border border-gray-100 rounded-sm overflow-hidden">
                <div className="bg-[#121f45] px-6 py-4">
                  <h3 className="text-white font-bold text-lg">Quick Links</h3>
                </div>
                <div className="py-2">
                  {sidebarLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className={`block px-6 py-3.5 text-[15px] font-bold border-b border-gray-50 last:border-none transition-all ${
                        pathname === link.href 
                          ? "text-[#f39c12] bg-orange-50 pl-8" 
                          : "text-[#121f45] hover:text-[#f39c12] hover:bg-gray-50 hover:pl-8"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Box */}
              <div className="bg-[#f39c12] p-8 rounded-sm text-white relative overflow-hidden group">
                {/* Decorative Pattern */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-6">Need Assistance?</h3>
                <p className="text-white/90 text-[15px] mb-8 leading-relaxed">
                  Our team is ready to help you with any inquiries regarding our therapeutic solutions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <span className="text-sm font-medium">B-501, The Platina, Gachibowli, Hyderabad - 500032</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <span className="text-sm font-medium">+91-40-2345 6789</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <span className="text-sm font-medium">info@rheopharma.com</span>
                  </div>
                </div>
                
                <Link href="/contact-us" className="mt-8 inline-block bg-[#121f45] text-white font-bold text-[13px] tracking-wider py-4 px-8 hover:bg-slate-800 transition-colors rounded-sm shadow-md">
                  CONTACT US &raquo;
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Contact Banner */}
      <ContactBanner />
    </div>
  );
}

