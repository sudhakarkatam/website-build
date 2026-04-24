import Link from "next/link";
import Image from "next/image";

export default function CvsDiabetesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-[84px] bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[350px] flex flex-col justify-end overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600"></div>
         {/* Placeholder for real hero image */}
         <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <span className="text-white text-3xl font-bold">Image: Diet scale, tape measure, healthy food</span>
         </div>
         <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide">CVS & Diabetes</h1>
         </div>
      </div>
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center text-[13px] font-bold text-[#1c2c52]">
             <Link href="/" className="hover:text-[var(--color-primary)]">Home</Link>
             <span className="mx-3 text-orange-400">&rsaquo;</span>
             <Link href="/products/pharma" className="hover:text-[var(--color-primary)]">Pharma</Link>
             <span className="mx-3 text-orange-400">&rsaquo;</span>
             <span className="text-gray-500">CVS & Diabetes</span>
           </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image Graphic - Half Oval */}
            <div className="relative flex justify-center lg:justify-start w-full">
               <div className="w-full max-w-[450px] aspect-[3/4] bg-slate-100 [border-radius:225px_225px_40px_40px] shadow-2xl overflow-hidden relative">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-slate-400 border-[10px] border-white [border-radius:225px_225px_40px_40px]">
                     <span>Image Placeholder</span>
                     <span className="text-xs mt-2">(Glucometer and healthy food collage)</span>
                  </div>
                  {/* Floating orange pie chart loader accent */}
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-[6px] border-orange-400 border-r-transparent bg-white shadow-xl flex items-center justify-center transform -rotate-45"></div>
               </div>
            </div>

            {/* Right Text Content */}
            <div className="flex flex-col">
               <p className="text-[17px] text-gray-500 leading-relaxed mb-6 font-medium">
                 Cardiovascular & Diabetes care managed till date through diabetic medications, diet control and increasing the physical activity. We at Rheo along with the conventional treatment options have come up with more comprehensive option by deploying latest technological advancements in Artificial Intelligence(Ai) for detection of various Cardiovascular diseases like
               </p>

               <ul className="space-y-4 mb-8 pl-2">
                 {[
                   "Atrial Fibrillation,",
                   "Bradycardia,",
                   "Bundle branch blocks,",
                   "Ischemia &",
                   "Diabetes"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center text-[16px] font-bold text-[#1c2c52]">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                   </li>
                 ))}
               </ul>

               <p className="text-[17px] text-gray-500 leading-relaxed font-medium">
                 So, we not only focus on treatment but also the early detection so that many healthy persons are protected/ alerted well in advance which in turn will also help in reducing the healthcare burden.
               </p>
            </div>
         </div>
      </div>

      {/* Footer Orange Banner Call to Action */}
      <div className="bg-[var(--color-primary)] py-16 w-full mt-auto relative overflow-hidden">
         {/* Background subtle pattern placeholder (lines/mazes) */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)' }}></div>
         
         <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-12 items-center text-white w-full">
               
               <div>
                  <h2 className="text-4xl font-semibold mb-3">Please Reach Us</h2>
                  <p className="text-[15px] font-semibold text-white/90">To know more about our treatment options and solutions</p>
               </div>

               <div className="flex items-center border-l border-white/20 pl-0 lg:pl-12">
                  <div className="w-14 h-14 border border-white flex items-center justify-center mr-5 shrink-0">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.036 11.036 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                     </svg>
                  </div>
                  <div>
                     <p className="text-[17px] font-bold mb-1">Call US:</p>
                     <p className="text-[14px] opacity-90">+91 40 4506 5704</p>
                  </div>
               </div>

               <div className="flex items-center border-l border-white/20 pl-0 lg:pl-12">
                  <div className="w-14 h-14 border border-white flex items-center justify-center mr-5 shrink-0">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                  </div>
                  <div>
                     <p className="text-[17px] font-bold mb-1">Email Us:</p>
                     <p className="text-[14px] opacity-90 mb-0.5">info@rheopharma.com</p>
                     <p className="text-[14px] opacity-90 mb-0.5">sales@rheopharma.com</p>
                     <p className="text-[14px] opacity-90">bd@rheopharma.com</p>
                  </div>
               </div>

            </div>
         </div>
         {/* Scroll up absolute arrow */}
         <div className="absolute right-8 bottom-8 text-white opacity-50 hover:opacity-100 cursor-pointer">
            <svg className="w-6 h-6 border border-white p-1 rounded-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
         </div>
      </div>
    </div>
  );
}
