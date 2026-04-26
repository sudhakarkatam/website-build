"use client";
import Link from "next/link";
import Image from "next/image";
import ContactBanner from "@/components/ContactBanner";

export default function ConnectedHealthcarePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* 1. Hero Banner - Match Screenshot */}
      <section className="relative h-[300px] md:h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/products/diagnostics/connected-healthcare (1).jpeg"
            alt="Connected Healthcare Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white mb-4 tracking-tight drop-shadow-md">
            Connected Healthcare
          </h1>
        </div>
      </section>

      {/* 2. Breadcrumbs */}
      <div className="bg-[#f8f9fc] py-6 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex items-center space-x-3 text-[15px] font-medium text-[#121f45]">
          <Link href="/" className="hover:text-[#f39c12] transition-colors">Home</Link>
          <span className="text-[#f39c12] font-bold">&gt;</span>
          <Link href="/products/diagnostics" className="hover:text-[#f39c12] transition-colors">Diagnostics</Link>
          <span className="text-[#f39c12] font-bold">&gt;</span>
          <span className="text-gray-500">Connected Healthcare</span>
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
                  src="/products/diagnostics/connected-healthcare.jpeg"
                  alt="Connected Healthcare Solution"
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
                Rheo Pharma with its innovative video collaboration platform and a suite of solutions addressing unique challenges in the medical field, providing seamless experience for professionals and patients alike.
              </p>

              <ul className="space-y-4">
                {[
                  "Remote specialist connection",
                  "Accelerated Diagnosis",
                  "Streamlined Hospitals handover",
                  "Pre-arrival Patient Visualization"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#28a745] rounded-full flex items-center justify-center text-white text-[10px] flex-shrink-0">
                      ✓
                    </div>
                    <span className="font-bold text-[#121f45]">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Feature Table from Screenshot */}
              <div className="mt-12 overflow-hidden border border-gray-200 rounded-sm">
                <h3 className="bg-white px-6 py-4 text-[#121f45] font-bold text-xl border-b border-gray-200">
                  Connected Specialists: Immediate Expertise
                </h3>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f8f9fc] border-b border-gray-200">
                      <th className="px-6 py-4 font-bold text-[#121f45] w-1/3 text-center">Feature</th>
                      <th className="px-6 py-4 font-bold text-[#121f45] text-center">Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-[#5e6271] text-center border-r border-gray-200 font-medium">360° Patient View</td>
                      <td className="px-6 py-4 text-[#5e6271] text-center">Access to diagnostics, video feeds, and vital stats</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-[#5e6271] text-center border-r border-gray-200 font-medium">Secure Data Transmission</td>
                      <td className="px-6 py-4 text-[#5e6271] text-center">Encrypted transfer of sensitive information</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-[#5e6271] text-center border-r border-gray-200 font-medium">Global Accessibility</td>
                      <td className="px-6 py-4 text-[#5e6271] text-center">Connect with specialists anywhere in the world</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Contact Banner */}
      <ContactBanner />

    </div>
  );
}
