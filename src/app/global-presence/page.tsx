"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let hasAnimated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          hasAnimated = true;
          let startTimestamp: number;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
};

export default function GlobalPresencePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image 
              src="/global-banner.jpeg" 
              alt="Global Presence Banner" 
              fill 
              sizes="100vw"
              className="object-cover" 
              priority 
           />
        </div>
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-wide">Global Presence</h1>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             
             {/* Left: People Graphic */}
             <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[500px] aspect-square">
                   <Image 
                      src="/Global-people.jpeg" 
                      alt="Global Team Representation" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                   />
                </div>
             </div>

             {/* Right: Content & Stats */}
             <div className="max-w-2xl">
                <div className="mb-4">
                  <span className="text-[#f39c12] font-bold tracking-widest uppercase text-[15px] underline underline-offset-8 decoration-2">- RHEO PHARMA -</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[#121f45] mb-8">
                  Global Presence
                </h2>
                
                <div className="space-y-8 text-[#6c757d] text-[17px] leading-[1.8] mb-12">
                   <p>
                     With immense amount of cumulative experience of more than 100 years, the team of Rheo Pharma is improving health of patients in more than 100 countries.
                   </p>
                   <p>
                     Headquartered in India, Rheo operates from more than 9 strategic locations globally, providing better healthcare products to different corners of world. Active at every stage of medicine distribution we ensure delivering quality medicines at right price.
                   </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-y-12 gap-x-8 pt-8 border-t border-gray-100">
                   <div>
                      <div className="text-5xl font-bold text-[#121f45] mb-2">
                        <AnimatedCounter end={100} suffix="+" />
                      </div>
                      <div className="text-[#6c757d] font-medium">Countries Mapped</div>
                   </div>
                   <div>
                      <div className="text-5xl font-bold text-[#121f45] mb-2">
                        <AnimatedCounter end={9} suffix="+" />
                      </div>
                      <div className="text-[#6c757d] font-medium">Strategic Locations</div>
                   </div>
                   <div>
                      <div className="text-5xl font-bold text-[#121f45] mb-2">
                        <AnimatedCounter end={27} suffix="+" />
                      </div>
                      <div className="text-[#6c757d] font-medium">Operational Countries</div>
                   </div>
                   <div>
                      <div className="text-5xl font-bold text-[#121f45] mb-2">
                        <AnimatedCounter end={36} suffix="+" />
                      </div>
                      <div className="text-[#6c757d] font-medium">Patented Products/ first time generics</div>
                   </div>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* 3. WORLD MAP SECTION */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
           <div className="text-center mb-16">
              <div className="mb-4">
                 <span className="text-[#f39c12] font-bold tracking-widest uppercase text-[15px] underline underline-offset-8 decoration-2">- RHEO PHARMA -</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#121f45]">Our Global Presence</h2>
           </div>

           <div className="relative w-full max-w-[1400px] mx-auto min-h-[400px] md:min-h-[600px] lg:min-h-[750px]">
              <Image 
                 src="/a95ce995-5cb1-45e3-be8b-93cd9f6e2c64.svg" 
                 alt="World Map Distribution" 
                 fill 
                 sizes="100vw"
                 className="object-contain"
              />
           </div>
        </div>
      </section>

    </div>
  );
}
