"use client";
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function RouteLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader on route change
    setLoading(true);
    
    // Simulate a minimum loading time for the animation to be seen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second duration

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-white transition-opacity duration-300">
      <div className="relative w-64 h-64">
        <Image 
          src="/Animated-RHEO-Logo.gif" 
          alt="Loading..." 
          fill 
          unoptimized 
          className="object-contain"
        />
      </div>
    </div>
  );
}
