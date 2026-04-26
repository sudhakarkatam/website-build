import Image from 'next/image';

export default function CareersPage() {
   return (
      <div className="flex flex-col w-full min-h-screen bg-white text-[#121f45]">

         {/* 1. HERO BANNER */}
         <section className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
               <Image
                  src="/career.jpeg"
                  alt="Careers Banner"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
               />
            </div>
            <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-wide">Careers</h1>
            </div>
         </section>

         {/* 2. CAREERS CONTENT SECTION */}
         <section className="py-20 lg:py-28 bg-white">
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
               <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                  {/* Left: Custom Organic Blob Image */}
                  <div className="relative flex justify-center lg:justify-start">
                     <div
                        className="relative w-full max-w-[520px] h-[650px] shadow-2xl overflow-hidden"
                        style={{
                           borderRadius: '42% 58% 70% 30% / 45% 45% 55% 55%',
                           boxShadow: '0 25px 50px -12px rgba(18, 31, 69, 0.15)'
                        }}
                     >
                        <Image
                           src="/careers-2-e1723012161799.jpeg"
                           alt="Professional at work"
                           fill
                           sizes="(max-width: 1024px) 100vw, 50vw"
                           className="object-cover scale-110"
                           style={{ objectPosition: 'center 20%' }}
                        />
                        {/* Logo overlay inside the blob */}
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center p-6 transition-transform hover:scale-110 cursor-pointer">
                           <div className="relative w-full h-full">
                              <Image src="/rheo-logo-1.png" alt="Logo Icon" fill className="object-contain" sizes="128px" />
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Right: Text Content */}
                  <div className="max-w-2xl">
                     <div className="mb-4">
                        <span className="text-[#f39c12] font-bold tracking-widest uppercase text-[15px] underline underline-offset-8 decoration-2">- RHEO PHARMA -</span>
                     </div>
                     <h2 className="text-4xl md:text-5xl lg:text-[60px] font-medium text-[#121f45] mb-8 leading-tight">
                        Careers
                     </h2>

                     <div className="space-y-6 text-[#6c757d] text-[17.5px] leading-[1.8] mb-10">
                        <p>
                           At Rheo, people are the most valuable assets. The company boasts of having one of the most charismatic pools of employees with incredible orientation for achievement. The human resource development strategies at Rheo Pharma invariably focus on incessant improvement of professional and interpersonal skills and abilities, fostering team spirit and enhancing the knowledge base of its employees.
                        </p>
                        <p>
                           Through numerous training and development programs, Rheo Pharma continuously invests to bring out the best out of its human assets. Rheo believes in the spirit of "growing together". Through excellent career development opportunities, it provides a platform for carving a high trajectory of accomplishments to all people. Work-life balance is its winning formula, ensuring effectiveness across all spheres of life. As a fast paced & committed pharma company, we are growing at a tremendous pace.
                        </p>
                        <p className="font-medium text-[#121f45]">
                           Young and dynamic professionals with a "CAN DO" attitude are welcome to become 'Rheo Pharma 's "Partners in Success". If you are confident and have the "CAN DO" attitude, drop us your profile and we might have a dream job for you!
                        </p>
                     </div>

                     {/* HR Email */}
                     <div className="flex items-center space-x-3 text-[#f39c12] font-semibold text-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:hr@rheopharma.com" className="hover:underline">hr@rheopharma.com</a>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* 3. APPLY NOW FORM SECTION */}
         <section className="py-24 bg-[#F2F7FF]">
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
               <div className="max-w-6xl mx-auto bg-white rounded-[10px] shadow-sm p-12 md:p-20 relative overflow-hidden">

                  {/* Background watermark icon */}
                  <div className="absolute right-0 bottom-0 opacity-[0.05] pointer-events-none translate-x-10 translate-y-10">
                     <svg className="w-[500px] h-[500px]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 14h-2v-4h2v4zm0 4h-2v-2h2v2zm-12-7v10h22v-10h-22zm20 8h-18v-6h18v6zm-11-15c-3.866 0-7 3.134-7 7 0 1.298.351 2.507.961 3.543l1.523-1.523c-.313-.623-.484-1.323-.484-2.02 0-2.757 2.243-5 5-5s5 2.243 5 5c0 .7-.172 1.4-.485 2.02l1.524 1.523c.61-1.036.961-2.245.961-3.543 0-3.866-3.134-7-7-7z" />
                     </svg>
                  </div>

                  <div className="relative z-10">
                     <div className="mb-14 text-center lg:text-left">
                        <div className="mb-4">
                           <span className="text-[#f39c12] font-bold tracking-widest uppercase text-[15px] underline underline-offset-8 decoration-2">- FILL YOUR DETAILS -</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-medium text-[#121f45]">Apply Now</h2>
                     </div>

                     <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                           <input type="text" placeholder="Name*" className="w-full bg-white border border-gray-200 rounded-md p-4 outline-none focus:ring-1 focus:ring-[#f39c12] transition-all" required />
                           <input type="email" placeholder="Email*" className="w-full bg-white border border-gray-200 rounded-md p-4 outline-none focus:ring-1 focus:ring-[#f39c12] transition-all" required />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                           <input type="tel" placeholder="Phone*" className="w-full bg-white border border-gray-200 rounded-md p-4 outline-none focus:ring-1 focus:ring-[#f39c12] transition-all" required />
                           <div className="flex w-full items-center">
                              <label className="flex w-full border border-gray-200 rounded-md overflow-hidden cursor-pointer">
                                 <span className="bg-[#EFEFEF] text-gray-700 px-4 py-4 border-r border-gray-200 font-medium text-sm">Choose File</span>
                                 <span className="flex-1 px-4 py-4 text-gray-400 text-sm bg-white">No file chosen</span>
                                 <input type="file" className="hidden" />
                              </label>
                           </div>
                        </div>
                        <div>
                           <textarea rows={5} placeholder="Message" className="w-full bg-white border border-gray-200 rounded-md p-4 outline-none focus:ring-1 focus:ring-[#f39c12] transition-all resize-none"></textarea>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                           <button type="submit" className="px-12 py-4 bg-[#f39c12] text-white font-bold rounded-md uppercase tracking-wider hover:bg-[#d38b10] transition-colors flex items-center space-x-2 shadow-lg">
                              <span>SEND NOW</span>
                              <span className="text-xl">&raquo;</span>
                           </button>
                        </div>
                     </form>
                  </div>

               </div>
            </div>
         </section>

      </div>
   );
}
