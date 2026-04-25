import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image 
              src="/about-banner-blue.jpeg" 
              alt="About Us Banner" 
              fill 
              sizes="100vw"
              className="object-cover" 
              priority 
           />
        </div>
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-wide">About Us</h1>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Image (Pill shaped arch) */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-[320px] md:w-[400px] lg:w-[480px] aspect-[4/5] rounded-[200px] md:rounded-[250px] overflow-hidden shadow-sm">
                <Image 
                   src="/about-us-2.jpeg" 
                   alt="About Rheo Pharma" 
                   fill 
                   sizes="(max-width: 768px) 100vw, 50vw"
                   className="object-cover object-center" 
                />
              </div>
            </div>
            
            {/* Right Content */}
            <div className="max-w-2xl">
              <div className="mb-4">
                <span className="text-[#f39c12] font-bold tracking-widest uppercase text-[15px] underline underline-offset-8 decoration-2">- ABOUT -</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[#121f45] mb-8">
                Rheo Pharma
              </h2>
              
              <div className="space-y-6 text-[#6c757d] text-[16px] leading-[1.8]">
                <p>
                  Rheo is a young pharmaceutical company of Americas, founded in 2019 by ably experienced pharmaceutical professionals and is steadily establishing itself as a path-breaking Global Pharmaceutical Company. Having access to various innovative therapeutics, Rheo is bringing about a paradigm shift in positive health outcomes by bringing innovative and high-quality medicines including Biosimilars, gene therapies.
                </p>
                <p>
                  By leveraging the power of AI, we <strong className="text-[#121f45] font-bold">make impossible possible</strong> by getting the latest products addressing various unmet therapeutic needs be it in diagnostics or treatment options. With our innovative, patented therapeutic options, that are <strong className="text-[#121f45] font-bold">Accessible</strong>, <strong className="text-[#121f45] font-bold">Affordable</strong> and <strong className="text-[#121f45] font-bold">Available</strong> to every needy, we <strong className="text-[#121f45] font-bold">instill Life in Living</strong>.
                </p>
                <p>
                  Having access to various patented products, Rheo actively operates in USA, Europe, LATAM region through its own subsidiaries (Rheo Pharma INC USA, Rheo Pharma Peru, Rheo Pharma Colombia, Rheo Pharma Ecuador, Rheo pharma Chile), Rheo pharma Guatemala, Rheo Pharma Argentina, Rheo Pharma Mexico soon, with own field force.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. BRAND INSIGNIA & MEANING */}
      <section className="py-24 bg-[#232323] relative border-b-8 border-white">
        
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             
             {/* Left: Logo and Insignia Header */}
             <div className="flex flex-col items-center lg:items-center">
                <div className="mb-12 text-center">
                  <span className="text-white font-bold tracking-widest uppercase text-[15px] underline underline-offset-8 decoration-2">- THE INSIGNIA -</span>
                </div>
                {/* Logo container */}
                <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] bg-transparent">
                   <Image 
                      src="/rheo-pharma-logo-1.png" 
                      alt="Rheo Pharma Logo" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain" 
                   />
                </div>
             </div>

             {/* Right: Text Description */}
             <div className="max-w-xl text-white space-y-8">
                <p className="text-[17px] leading-[1.8] font-light">
                  The word <strong className="font-bold text-white">‘RHEO’</strong> represents our intent to offer High Quality Affordable medicines, of global standards to emerging economics with <strong className="font-bold text-white">Seamless Supplies</strong>, which further <strong className="font-bold text-white">Underlines Our Mission Too</strong>
                </p>
                <p className="text-[17px] leading-[1.8] font-bold text-white">
                  Orange is a representation of day-break symbolizing hope and well-being
                </p>
                <p className="text-[17px] leading-[1.8] font-light">
                  Grey color represents our intent to apply intelligence in bringing the innovative treatment options
                </p>
                <div className="pt-6">
                   <h3 className="text-3xl md:text-[32px] font-bold text-white tracking-wide">
                     Rheo = Flow (GreeK)
                   </h3>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* 4. MISSION, VISION & VALUES */}
      <section className="py-24 bg-white relative">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
           
           {/* Mission & Vision Cards Row */}
           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
              
              {/* Mission Card */}
              <div className="bg-white p-12 md:p-16 rounded-[12px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] border border-[#f39c12] text-center">
                 <div className="mb-6">
                    <span className="text-[#f39c12] font-bold tracking-widest uppercase text-[15px] underline underline-offset-8 decoration-2">- OUR -</span>
                 </div>
                 <h3 className="text-4xl md:text-[50px] font-medium text-[#121f45] mb-8">Mission</h3>
                 <p className="text-[16px] text-[#6c757d] leading-[1.8] max-w-lg mx-auto">
                    Rheo focusses on unlocking the market potential of new therapeutics, concepts and brands by ethical promotion to the clinicians and other stake holders in the global markets.
                 </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white p-12 md:p-16 rounded-[12px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] border border-[#f39c12] text-center">
                 <div className="mb-6">
                    <span className="text-[#f39c12] font-bold tracking-widest uppercase text-[15px] underline underline-offset-8 decoration-2">- OUR -</span>
                 </div>
                 <h3 className="text-4xl md:text-[50px] font-medium text-[#121f45] mb-8">Vision</h3>
                 <p className="text-[16px] text-[#6c757d] leading-[1.8] max-w-lg mx-auto">
                    To become a leading edge pharmaceutical marketing company by connecting the innovation, technology and people for better health outcomes in the global markets
                 </p>
              </div>

           </div>

           {/* Values Card (Full Width) */}
           <div className="bg-white p-12 md:p-16 rounded-[12px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] border border-[#f39c12]">
              <div className="text-center mb-16">
                 <div className="mb-6">
                    <span className="text-[#f39c12] font-bold tracking-widest uppercase text-[15px] underline underline-offset-8 decoration-2">- OUR -</span>
                 </div>
                 <h3 className="text-4xl md:text-[50px] font-medium text-[#121f45]">Values</h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                 {/* Left: 3i Image */}
                 <div className="flex justify-center lg:justify-end">
                    <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
                       <Image 
                          src="/Rheo-3i.jpeg" 
                          alt="Rheo 3i Values" 
                          fill 
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain" 
                       />
                    </div>
                 </div>

                 {/* Right: Text */}
                 <div className="space-y-6 max-w-xl">
                    <p className="text-[16px] text-[#6c757d] leading-[1.8] mb-8">
                       3"Is" define our core values that we maintain at every step
                    </p>
                    
                    <p className="text-[16px] text-[#6c757d] leading-[1.8]">
                       <strong className="text-[#121f45] font-bold">Integrity:</strong> Maintains the highest ethical standards and acts for regulations and procedures required to deliver quality medicines. This is our non-negotiable values.
                    </p>
                    
                    <p className="text-[16px] text-[#6c757d] leading-[1.8]">
                       <strong className="text-[#121f45] font-bold">Innovation:</strong> "We Can Do" attitude turns our problems into the solution. At every level of the organization, you found this at Rheo
                    </p>
                    
                    <p className="text-[16px] text-[#6c757d] leading-[1.8]">
                       <strong className="text-[#121f45] font-bold">Improvement:</strong> Improvement in each and everything we do is continuous process at Rheo. Be it our product quality, supply chain process or our marketing approaches we strive for improvements.
                    </p>
                 </div>
              </div>
           </div>

        </div>
      </section>

    </div>
  );
}
