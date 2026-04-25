import Image from 'next/image';

export default function BusinessPartnersPage() {
   return (
      <div className="flex flex-col w-full min-h-screen bg-white">

         {/* 1. HERO BANNER */}
         <section className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
               <Image
                  src="/Business-Partners-1.jpeg"
                  alt="Business Partners Banner"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
               />
            </div>
            <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-wide">Business Partners</h1>
            </div>
         </section>

         {/* 2. CONTENT SECTION */}
         <section className="py-20 lg:py-28 bg-white">
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
               <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                  {/* Left Column: Text */}
                  <div className="max-w-2xl">
                     <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[#121f45] mb-12">
                        Business Partners
                     </h2>

                     <div className="space-y-8 text-[#6c757d] text-[16px] md:text-[17px] leading-[1.8]">
                        <p>
                           Majority of the products that we market today are either patented or first time generics in their respective countries and are exclusively licensed by the innovators/innovative manufacturers across the globe. These facilities and products are approved by highly regulated markets like USFDA, EUGMP, TGA, MHRA, KFDA, NMDA. Approved by stringent global regulatory authorities, these facilities have integrated quality systems and processes to ensure adherence to cGMP (current Good Manufacturing practices).
                        </p>
                        <p>
                           We make continuous investments in upgradation of manufacturing facilities with special emphasis on deploying advanced machinery and adopting latest technologies to comply every changing global regulatory requirements. Besides enabling us consistently produce high quality medicines at an affordable cost, it also helps us in passing through regulatory audits with relative ease. These advantages that make us the partner of choice for major global pharmaceutical companies.
                        </p>
                     </div>
                  </div>

                  {/* Right Column: Image Cluster */}
                  <div className="relative pt-12">
                     <div className="grid grid-cols-12 gap-4 items-center">

                        {/* Left side: two small images */}
                        <div className="col-span-4 space-y-4">
                           <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                              <Image
                                 src="/business-partner-2.jpeg"
                                 alt="Business Partner Detail 1"
                                 fill
                                 sizes="(max-width: 768px) 30vw, 15vw"
                                 className="object-cover"
                              />
                           </div>
                           <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                              <Image
                                 src="/business-partner-3.jpeg"
                                 alt="Business Partner Detail 2"
                                 fill
                                 sizes="(max-width: 768px) 30vw, 15vw"
                                 className="object-cover"
                              />
                           </div>
                        </div>

                        {/* Right side: large tall image */}
                        <div className="col-span-8">
                           <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg border border-gray-100">
                              <Image
                                 src="/business-partner-1.jpeg"
                                 alt="Major Partner Facility"
                                 fill
                                 sizes="(max-width: 768px) 60vw, 35vw"
                                 className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                              />
                           </div>
                        </div>

                     </div>

                     {/* Center Overlay: White Square with Logo Circle */}
                     <div className="absolute top-1/2 left-[33%] -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] bg-white rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center justify-center p-4">
                           <div className="relative w-full h-full">
                              <Image
                                 src="/rheo-logo-1.png"
                                 alt="Rheo Logo Icon"
                                 fill
                                 sizes="140px"
                                 className="object-contain"
                              />
                           </div>
                        </div>
                     </div>

                  </div>

               </div>
            </div>
         </section>

      </div>
   );
}
