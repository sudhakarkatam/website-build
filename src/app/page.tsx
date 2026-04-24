"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import banner1 from "../../public/banner-1 .jpeg";
import banner2 from "../../public/banner-2.jpeg";
import banner3 from "../../public/banner-3.jpeg";
import banner4 from "../../public/banner-4.jpeg";

const slides = [
  {
    subtitle: "- WE INSTILL -",
    title: "Life In Living",
    desc: "Be it a diagnostic or therapeutic product, our products are Accessible, Affordable & Available to every needy person",
    img: banner1
  },
  {
    subtitle: "- PUSHING -",
    title: "The Boundaries",
    desc: "With the innovative patented products, we have an offering for many unmet medical needs",
    img: banner2
  },
  {
    subtitle: "- RANGE -",
    title: "From Base To The Top",
    desc: "From simple chemical generics to complex monoclonal antibodies, we have an offering to suit your therapy needs across age groups",
    img: banner3
  },
  {
    subtitle: "- INNOVATION -",
    title: "Latest Technologies",
    desc: "By leveraging the power of AI, we make Impossible Possible",
    img: banner4
  }
];

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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const productsScrollRef = useRef<HTMLDivElement>(null);

  const scrollProducts = (direction: 'left' | 'right') => {
    if (productsScrollRef.current) {
      const scrollAmount = productsScrollRef.current.clientWidth / 2;
      productsScrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Hide preloader after a short delay
    const loaderTimer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(loaderTimer);
  }, []);

  useEffect(() => {
    // Only schedule auto-advance once the animation has settled
    if (isAnimating) return;
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 1000);
    }, 6000);
    
    return () => clearTimeout(timer);
  }, [currentSlide, isAnimating]);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const jumpToSlide = (index: number) => {
    if (isAnimating || currentSlide === index) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* PRELOADER */}
      <div className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
         <Image src="/Animated-RHEO-Logo.gif" alt="Loading" width={250} height={250} priority className="object-contain" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[90vh] min-h-[600px] bg-gradient-to-b from-[#F26E23] to-[#FABC23] pt-[92px] flex items-center overflow-hidden">
        
        {/* Background Images Sliding Wrapper - Bounded Container */}
        <div className="absolute top-[92px] bottom-0 left-[60px] md:left-[100px] lg:left-[120px] right-[20px] md:right-[40px] lg:right-[60px] z-0 bg-[#031d38] overflow-hidden shadow-2xl">
            <div 
              className="absolute inset-0 flex transition-transform duration-[1000ms] ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, idx) => (
                <div key={idx} className="w-full h-full flex-shrink-0 relative">
                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#031d38]/90 via-[#031d38]/50 to-transparent z-10"></div>
                   <div className="w-full h-full relative z-0">
                       <Image src={slide.img} alt={slide.title} fill className="object-cover" priority sizes="100vw" />
                   </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows (Right inside bounded frame) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex-col z-30 hidden md:flex rounded-l-[4px] overflow-hidden bg-black/40 backdrop-blur-sm shadow-xl">
               <button 
                 onClick={goToPrev}
                 className="w-12 h-12 flex items-center justify-center border-b border-white/10 hover:bg-[#F58220] transition-colors cursor-pointer outline-none text-white text-3xl font-light pb-1"
               >
                  &laquo;
               </button>
               <button 
                 onClick={goToNext}
                 className="w-12 h-12 flex items-center justify-center hover:bg-[#F58220] transition-colors cursor-pointer outline-none text-white text-3xl font-light pb-1"
               >
                  &raquo;
               </button>
            </div>
            
            {/* Slide Content positioned absolute inside the bounded frame */}
            <div className="absolute inset-0 pointer-events-none z-20">
               <div className="w-full h-full max-w-[1400px] mx-auto px-4 relative">
                 {slides.map((slide, idx) => {
                   const isActive = currentSlide === idx;
                   
                   return (
                     <div 
                       key={idx} 
                       className={`absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 max-w-3xl ${isActive ? 'pointer-events-auto z-10' : 'pointer-events-none z-0'}`}
                     >
                        <p className={`text-[var(--color-primary)] font-bold tracking-widest text-[13px] md:text-sm uppercase mb-4 drop-shadow-md transition-all ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'opacity-100 translate-y-0 duration-[800ms] delay-100' : 'opacity-0 translate-y-8 duration-0 delay-0'}`}>
                          {slide.subtitle}
                        </p>
                        <h1 className={`text-5xl md:text-6xl lg:text-[72px] font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-xl transition-all ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'opacity-100 translate-y-0 duration-[800ms] delay-300' : 'opacity-0 translate-y-8 duration-0 delay-0'}`}>
                          {slide.title}
                        </h1>
                        <p className={`text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-2xl drop-shadow-md transition-all ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'opacity-100 translate-y-0 duration-[800ms] delay-500' : 'opacity-0 translate-y-8 duration-0 delay-0'}`}>
                          {slide.desc}
                        </p>
                     </div>
                   );
                 })}
               </div>
            </div>
        </div>

        {/* Vertical Pagination (Left column resting over orange gradient frame) */}
        <div className="absolute left-2 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center w-[40px]">
           {slides.map((_, i) => {
             const num = `0${i + i + 1 === 1 ? '1' : i + 1}`; // e.g. 01, 02.. wait: `0${i+1}`
             const isActive = currentSlide === i;
             return (
               <div key={num} className="flex flex-col items-center">
                 <button 
                   onClick={() => jumpToSlide(i)}
                   className={`font-bold font-sans transition-all duration-300 ease-out select-none py-1.5 px-1 ${
                     isActive 
                       ? 'text-white scale-[1.15] opacity-100 tracking-wider drop-shadow-md' 
                       : 'text-[#1c2c52] opacity-50 hover:opacity-100 scale-100'
                   }`}
                 >
                   {`0${i + 1}`}
                 </button>
                 {i !== slides.length - 1 && (
                   <div className="w-[28px] h-[2px] bg-[#1c2c52]/30 my-1"></div>
                 )}
               </div>
             );
           })}
        </div>
      </section>

      {/* 2. VALUE STATEMENT & TECHNOLOGIES */}
      <section className="bg-[var(--color-primary)] w-full py-16 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="max-w-lg">
             <h2 className="text-4xl md:text-5xl font-light leading-tight mb-2">The partner of choice</h2>
             <p className="text-xl font-medium">for major global pharmaceutical companies</p>
           </div>
           
           <div className="flex space-x-8 md:space-x-12">
             <div className="w-24 h-24 rounded-full border-2 border-white/80 border-dashed flex items-center justify-center">
               <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
             </div>
             <div className="w-24 h-24 rounded-full border-2 border-white/80 border-dashed flex items-center justify-center">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
             </div>
             <div className="w-24 h-24 rounded-full border-2 border-white/80 border-dashed flex items-center justify-center">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             </div>
           </div>
        </div>
      </section>

      {/* 3. ABOUT SUMMARY & STATS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Images */}
          <div className="relative h-[500px] lg:h-[600px] w-full order-2 lg:order-1 flex items-center mb-16 lg:mb-0">
            {/* Main Background Shape */}
            <div className="absolute top-0 bottom-0 left-0 right-10 lg:right-20 rounded-r-[250px] overflow-hidden shadow-sm border border-gray-100 bg-slate-100">
               <Image src="/about-rheo.jpeg" alt="About Rheo" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            
            {/* Top Left Floating Bubble */}
            <div className="absolute top-[20%] left-[-10%] md:left-[-15%] w-[260px] md:w-[320px] h-[160px] md:h-[200px] rounded-[100px] border-[8px] border-white overflow-hidden shadow-xl z-10 bg-slate-100">
               <Image src="/home-about.jpeg" alt="Rheo Lab" fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
            </div>
            
            {/* Bottom Floating Bubble (CSS Ring mimicking the 3D element) */}
            <div className="absolute -bottom-10 left-[60%] w-[140px] h-[140px] rounded-full border-[8px] border-white bg-white shadow-xl overflow-hidden flex items-center justify-center z-10">
               <div className="w-[80px] h-[80px] rounded-full border-[12px] border-[#F4F5F7] border-r-[#F58220] border-b-[#F58220] transform rotate-[-45deg] shadow-inner"></div>
            </div>
          </div>
          
          {/* Right Column: Text */}
          <div className="order-1 lg:order-2 lg:pl-16">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[var(--color-primary)] font-bold tracking-widest text-sm uppercase">- ABOUT -</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[var(--color-blue-deep)] mb-6 leading-tight">Rheo Pharma</h2>
            <p className="text-gray-500 mb-10 leading-[1.8] text-[15px]">
              Rheo is a young pharmaceutical company of Americas, founded in 2019 by ably experienced pharmaceutical professionals and is steadily establishing itself as a path-breaking Global Pharmaceutical Company. Having access to various innovative therapeutics, Rheo is bringing about a paradigm shift in positive health outcomes by bringing innovative and high-quality medicines including Biosimilars, gene therapies.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <p className="text-[40px] lg:text-[48px] font-bold text-[#1c2c52] leading-none mb-2">
                  <AnimatedCounter end={100} suffix="+" />
                </p>
                <p className="text-[13px] text-gray-500 font-medium mt-1">Countries Mapped</p>
              </div>
              <div>
                <p className="text-[40px] lg:text-[48px] font-bold text-[#1c2c52] leading-none mb-2">
                  <AnimatedCounter end={27} suffix="+" />
                </p>
                <p className="text-[13px] text-gray-500 font-medium mt-1">Operational Countries</p>
              </div>
              <div>
                <p className="text-[40px] lg:text-[48px] font-bold text-[#1c2c52] leading-none mb-2">
                  <AnimatedCounter end={36} suffix="+" />
                </p>
                <p className="text-[13px] text-gray-500 font-medium mt-1">Patented Products/<br/>first time generics</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. OUR BUSINESS MODELS */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-2">
               <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">- RHEO PHARMA -</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-[var(--color-blue-deep)] mb-6">Our Business Models</h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-base leading-relaxed">
              with our global commitment to offer high quality, affordable pharmaceuticals to patients, we use our expertise & adopt the best business models.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Green Field Operations",
                desc: "With dedicated marketing teams we undertake the product promotion for maximum profitability and better brand equity.",
                icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                img: "/marketing-team.jpeg"
              },
              {
                title: "Joint Ventures & Partnerships",
                desc: "We collaborate with best business partners to form successful partnerships and joint-ventures for marketing niche molecules.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                img: "/Partnership.jpeg"
              },
              {
                title: "Licensing",
                desc: "Ensure our reach to various markets in shortest possible time with the new age products.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                img: "/licensing.jpeg"
              },
              {
                title: "Tech-Transfer",
                desc: "We facilitate the access to technology to manufacture latest molecules in the emerging markets.",
                icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
                img: "/latest-tech.jpeg"
              }
            ].map((model, i) => (
              <div key={i} className="flex flex-col bg-white shadow-sm hover:shadow-xl transition-all rounded-sm group cursor-pointer border border-gray-100">
                <div className="relative">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image src={model.img} alt={model.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 25vw" />
                  </div>
                  {/* The overlapping orange box */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#F58220] flex items-center justify-center z-10 transition-transform group-hover:-translate-y-1">
                     <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                       <path strokeLinecap="round" strokeLinejoin="round" d={model.icon} />
                     </svg>
                  </div>
                </div>
                <div className="px-6 pt-14 pb-12 text-center flex-grow">
                  <h3 className="text-xl font-medium text-[#1c2c52] mb-4">{model.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{model.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP TEAM */}
      <section className="py-24 bg-white border-y border-gray-100 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-[var(--color-blue-deep)]">Leadership Team</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Dr. Y. Ramesh Reddy", role: "CMD", bio: "A pharmacist with a vision of connecting every needy patient with innovative treatment options by making them Accessible, Affordable and Available (3A) across the globe.", img: "/Ramesh-Reddy.jpeg" },
              { name: "Mrs. Lakshmi Yarramreddy", role: "Director & Founder", bio: "A post-graduate in finance, manages the financials of the company including financial statements, banking and Statuary compliance.", img: "/Lakshmi.jpeg" },
              { name: "Mr. Krishna Kishore .A", role: "Director", bio: "A seasoned marketing professional with 25+ year of experiences across domains from a Medical representative to top positions in various companies.", img: "/Krishna-Kishore.jpeg" },
              { name: "Mr. P. Venkateswara Reddy", role: "Director", bio: "Mr. Venkateswara Reddy holds master's in pharmacy. Having worked in various MNCs at leadership positions.", img: "/Venkateswara-Reddy.jpeg" },
              { name: "Mr. B. Sivarami Reddy", role: "Director API business", bio: "Mr. Siva Reddy having enriching experience in various Multinational pharmaceutical companies in R&D of API, leads the operations.", img: "/Siva-Rami-Reddy.jpeg" }
            ].map((leader, i) => (
              <div key={i} className="bg-white rounded-sm shadow-md hover:shadow-xl transition-all border border-gray-50 flex flex-col items-center group cursor-pointer">
                <div className="w-full h-64 bg-slate-100 relative overflow-hidden">
                   <Image src={leader.img} alt={leader.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 20vw" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-[17px] font-bold text-[#1c2c52] mb-1 leading-tight">{leader.name}</h4>
                  <p className="text-sm font-bold text-[#F58220] mb-3">{leader.role}</p>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-medium">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR PRODUCTS TEASER */}
      <section className="py-24 bg-[#F8F9FC] relative border-t border-gray-100 overflow-hidden">
        {/* Molecule Background Image */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] opacity-30 pointer-events-none z-0">
          <Image src="/products/Molecule.png" alt="Molecule pattern" fill className="object-contain object-top right-0" />
        </div>
        
        <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                 <pattern id="diamonds" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                    <path fill="none" stroke="#d1d5db" strokeWidth="0.5" d="M20 0L40 20L20 40L0 20Z"/>
                 </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diamonds)" />
           </svg>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <div className="flex items-center mb-2">
                 <span className="text-[#F58220] font-bold tracking-wider uppercase text-[13px]">- RHEO PHARMA -</span>
              </div>
              <h2 className="text-4xl md:text-[42px] font-medium text-[#1c2c52]">Our Products</h2>
            </div>
          </div>
          
          <div className="relative group/slider">
            {/* Absolute positioning for arrows */}
            <button onClick={() => scrollProducts('left')} className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#F58220] items-center justify-center hover:bg-[#e0751b] transition-colors group shadow-lg hidden md:flex opacity-0 group-hover/slider:opacity-100 duration-300">
               <svg className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
               </svg>
            </button>
            
            <button onClick={() => scrollProducts('right')} className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#F58220] items-center justify-center hover:bg-[#e0751b] transition-colors group shadow-lg hidden md:flex opacity-0 group-hover/slider:opacity-100 duration-300">
               <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
               </svg>
            </button>

            <div ref={productsScrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
               {[
                 { title: "Diagnostic Products Powered by AI", img: "/products/Diagnostic-products.jpeg", link: "/products/diagnostic-products-powered-by-ai" },
                 { title: "Digital Transformation for Stroke Pathways", img: "/products/Digital-transformation-for-stroke-pathways.jpeg", link: "/products/digital-transformation-for-stroke-pathways" },
                 { title: "Nutraceuticals & Supplements", img: "/products/Nutraceuticals.jpeg", link: "/products/nutraceutical-supplements" },
                 { title: "CVS-Diabetes", img: "/products/CVS-Diabetes.jpeg", link: "/products/cvs-diabetes" },
                 { title: "CNS", img: "/products/CNS.jpeg", link: "/products/cns" },
                 { title: "Oncology", img: "/products/oncology-1.jpeg", link: "/products/oncology" },
                 { title: "Biosimilars & Vaccines", img: "/products/Biosimilars.jpeg", link: "/products/biosimilars-vaccines" },
               ].map((prod, i) => (
                 <div key={i} className="relative w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] h-[420px] flex-shrink-0 snap-start group overflow-hidden bg-slate-100 shadow-sm border border-gray-100">
                    <Image src={prod.img} alt={prod.title} fill className="object-cover group-hover:scale-105 transition-transform duration-[800ms]" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw" />
                    
                    {/* Subtle Dark Overlay on hover for better text contrast */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Animated Bottom Left Box */}
                    <div className="absolute bottom-0 left-0 flex items-stretch transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10 w-[90%] md:w-auto min-w-[220px]">
                       <div className="bg-[#F58220] py-4 px-5 flex-grow flex items-center">
                          <span className="text-white font-medium text-[15px] leading-tight break-words">{prod.title}</span>
                       </div>
                       <Link href={prod.link} className="w-[56px] bg-white border-l border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0 group/btn">
                          <svg className="w-5 h-5 text-[#1c2c52] group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                       </Link>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-20 bg-blue-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">What Our Partners Say About Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "HealthTechAI is a remarkably agile pharmaceutical company with clear vision and immense commitment to quality patient outcomes. Their robust AI diagnostic pipelines are game-changers.",
                author: "Dr. L. Balaji",
                title: "Chief Medical Officer, Asian Health Network"
              },
              {
                text: "A truly reliable partner for the latest advanced treatment options. They seamlessly merge traditional biosimilars with cutting-edge digital tracking infrastructure.",
                author: "Parimal Chandra",
                title: "Director of Procurements, EU MediCorp"
              },
              {
                text: "An ambitious company with an excellent product portfolio. They are growing phenomenally fast and remain our top option for bringing new therapeutic areas to the public market.",
                author: "Julian Caesar",
                title: "Head of Operations, LATAM Pharma Distributors"
              }
            ].map((test, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <svg className="absolute top-6 left-6 text-blue-100 w-10 h-10 -ml-2 -mt-2 z-0" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path></svg>
                <div className="relative z-10">
                  <p className="text-gray-600 italic mb-6 leading-relaxed">"{test.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-sm">{test.author}</h5>
                      <span className="text-xs text-gray-500">{test.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ENQUIRY / CONTACT FORM */}
      <section className="py-24 bg-[#F58220] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                 <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                    <path fill="none" stroke="#ffffff" strokeWidth="1" d="M25 0l25 14.4v28.9l-25 14.5L0 43.3V14.5z"/>
                 </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
           </svg>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-0 lg:gap-0 items-stretch shadow-xl">
             {/* Left side Image */}
             <div className="relative h-[400px] lg:h-auto w-full hidden md:block">
                <Image src="/contact-us.jpeg" alt="Contact Us" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw" />
             </div>
             {/* Right side Form */}
             <div className="bg-[#f4f7fc] p-8 md:p-14 flex flex-col justify-center">
                <div className="mb-8">
                   <span className="text-[#F58220] font-bold tracking-widest uppercase text-[13px] mb-2 block">- GET IN TOUCH -</span>
                   <h2 className="text-4xl md:text-[42px] font-medium text-[#1c2c52]">Enquiry</h2>
                </div>
                <form className="space-y-4">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="Name*" className="w-full bg-white border border-gray-100 rounded-sm px-4 py-3.5 outline-none focus:ring-1 focus:ring-[#F58220] placeholder-gray-500 text-[15px]" required />
                      <input type="email" placeholder="Email*" className="w-full bg-white border border-gray-100 rounded-sm px-4 py-3.5 outline-none focus:ring-1 focus:ring-[#F58220] placeholder-gray-500 text-[15px]" required />
                   </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="Country*" className="w-full bg-white border border-gray-100 rounded-sm px-4 py-3.5 outline-none focus:ring-1 focus:ring-[#F58220] placeholder-gray-500 text-[15px]" required />
                      <input type="text" placeholder="dd-mm-yyyy" className="w-full bg-white border border-gray-100 rounded-sm px-4 py-3.5 outline-none focus:ring-1 focus:ring-[#F58220] placeholder-gray-500 text-[15px]" />
                   </div>
                   <select className="w-full bg-white border border-gray-100 rounded-sm px-4 py-3.5 outline-none focus:ring-1 focus:ring-[#F58220] text-gray-500 text-[15px]">
                      <option value="">-Select-</option>
                      <option value="product">Product Enquiry</option>
                      <option value="business">Business Collaboration</option>
                   </select>
                   <textarea rows={4} placeholder="Message" className="w-full bg-white border border-gray-100 rounded-sm px-4 py-3.5 outline-none focus:ring-1 focus:ring-[#F58220] resize-none placeholder-gray-500 text-[15px]"></textarea>
                   <button type="submit" className="bg-[#F58220] text-white font-bold text-sm tracking-wider py-4 px-8 hover:bg-[#e0751b] transition-colors mt-2 inline-flex items-center group shadow-sm rounded-sm">
                      SEND NOW <span className="ml-2 font-black group-hover:translate-x-1 transition-transform">&raquo;</span>
                   </button>
                </form>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
