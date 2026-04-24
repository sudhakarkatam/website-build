import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-[84px] bg-slate-50">
      {/* HERO SECTION */}
      <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-[var(--color-blue-dark)]"></div>
         <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <span className="text-white text-xl">About Us Banner Image</span>
         </div>
         <div className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide">About Us</h1>
           <div className="flex items-center text-sm font-medium text-white/80 mt-4">
             <Link href="/">Home</Link>
             <span className="mx-2">&rsaquo;</span>
             <span>About Us</span>
           </div>
         </div>
      </div>

      {/* MAIN ABOUT BLOCK */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-4xl font-bold text-[#1c2c52] mb-6">Rheo Pharma</h2>
                <div className="space-y-6 text-[15px] text-gray-600 leading-relaxed text-left">
                  <p>
                    Rheo is a young pharmaceutical company of Americas, founded in 2019 by ably experienced pharmaceutical professionals and is steadily establishing itself as a path-breaking Global Pharmaceutical Company. Having access to various innovative therapeutics, Rheo is bringing about a paradigm shift in positive health outcomes by bringing innovative and high-quality medicines including Biosimilars, gene therapies.
                  </p>
                  <p>
                    By leveraging the power of AI, we make impossible possible by getting the latest products addressing various unmet therapeutic needs be it in diagnostics or treatment options. With our innovative, patented therapeutic options, that are Accessible, Affordable and Available to every needy, we instill Life in Living.
                  </p>
                  <p>
                    Having access to various patented products, Rheo actively operates in USA, Europe, LATAM region through its own subsidiaries (Rheo Pharma INC USA, Rheo Pharma Peru, Rheo Pharma Colombia, Rheo Pharma Ecuador, Rheo pharma Chile), Rheo pharma Guatemala, Rheo Pharma Argentina, Rheo Pharma Mexico soon, with own field force.
                  </p>
                  <p>
                    The word ‘RHEO’ represents our intent to offer High Quality Affordable medicines, of global standards to emerging economics with Seamless Supplies, which further Underlines Our Mission Too.
                  </p>
                  <ul className="space-y-3 pt-4 font-semibold text-[#1c2c52]">
                    <li className="flex items-center"><span className="w-3 h-3 bg-[var(--color-primary)] rounded-full mr-3"></span> Orange is a representation of day-break symbolizing hope and well-being</li>
                    <li className="flex items-center"><span className="w-3 h-3 bg-gray-400 rounded-full mr-3"></span> Grey color represents our intent to apply intelligence in bringing the innovative treatment options</li>
                  </ul>
                </div>
             </div>
             <div className="bg-slate-200 h-[500px] rounded-lg flex items-center justify-center p-8">
                <span className="text-slate-400 font-medium">Rheo Corporate / Lab Image placeholder</span>
             </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION, VALUES */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-[var(--color-primary)]">
              <h3 className="text-2xl font-bold text-[#1c2c52] mb-4 flex items-center">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Rheo focusses on unlocking the market potential of new therapeutics, concepts and brands by ethical promotion to the clinicians and other stake holders in the global markets.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-[var(--color-blue-deep)]">
              <h3 className="text-2xl font-bold text-[#1c2c52] mb-4 flex items-center">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                To become a leading-edge pharmaceutical marketing company by connecting the innovation, technology and people for better health outcomes in the global markets.
              </p>
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto pt-8">
            <h2 className="text-4xl font-bold text-[#1c2c52] mb-4 text-center">Values</h2>
            <h3 className="text-[17px] font-medium text-gray-500 mb-12 text-center">3 “Is” define our core values that we maintain at every step</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-lg hover:shadow-xl transition-shadow text-center group">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                  <span className="text-3xl font-bold text-[var(--color-primary)] group-hover:text-white transition-colors">I</span>
                </div>
                <h4 className="text-xl font-bold text-[#1c2c52] mb-4">Integrity</h4>
                <p className="text-gray-600 text-[14px] leading-relaxed">Maintains the highest ethical standards and acts for regulations and procedures required to deliver quality medicines. This is our non-negotiable values.</p>
              </div>
              <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-lg hover:shadow-xl transition-shadow text-center group">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--color-blue-deep)] transition-colors">
                  <span className="text-3xl font-bold text-[var(--color-primary)] group-hover:text-white transition-colors">I</span>
                </div>
                <h4 className="text-xl font-bold text-[#1c2c52] mb-4">Innovation</h4>
                <p className="text-gray-600 text-[14px] leading-relaxed">“We Can Do” attitude turns our problems into the solution. At every level of the organization, you found this at Rheo.</p>
              </div>
              <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-lg hover:shadow-xl transition-shadow text-center group">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors">
                  <span className="text-3xl font-bold text-[var(--color-primary)] group-hover:text-white transition-colors">I</span>
                </div>
                <h4 className="text-xl font-bold text-[#1c2c52] mb-4">Improvement</h4>
                <p className="text-gray-600 text-[14px] leading-relaxed">Improvement in each and everything we do is continuous process at Rheo. Be it our product quality, supply chain process or our marketing approaches we strive for improvements.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
