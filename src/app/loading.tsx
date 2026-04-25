"use client";
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative w-64 h-64">
        <Image 
          src="/Animated-RHEO-Logo.gif" 
          alt="Rheo Pharma Loading..." 
          fill 
          unoptimized 
          className="object-contain"
        />
      </div>
    </div>
  );
}
