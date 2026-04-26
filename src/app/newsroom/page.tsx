import Image from 'next/image';
import Link from 'next/link';

export default function Newsroom() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-[#121f45]">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image 
              src="/News-Room.jpeg" 
              alt="Newsroom Banner" 
              fill 
              sizes="100vw"
              className="object-cover" 
              priority 
           />
        </div>
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-wide">Newsroom</h1>
        </div>
      </section>

      {/* 2. LATEST NEWS HEADER */}
      <section className="pt-24 pb-16 bg-white text-center">
         <div className="w-full max-w-[1920px] mx-auto px-6">
            <div className="mb-4">
               <span className="text-[#f39c12] font-bold tracking-widest uppercase text-[15px] underline underline-offset-8 decoration-2">- LATEST NEWS -</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[60px] font-medium text-[#121f45] leading-tight">
               Latest News & Article<br />From Rheo Pharma.
            </h2>
         </div>
      </section>

      {/* 3. NEWS FEED SECTION */}
      <section className="pb-24 bg-white">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
           <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Left: News Cards */}
              <div className="lg:col-span-2 space-y-12">
                 
                 {/* News Card 1 */}
                 <div className="bg-white border border-gray-100 rounded-[10px] overflow-hidden shadow-sm flex flex-col md:flex-row group hover:shadow-md transition-shadow">
                    <div className="relative w-full md:w-[350px] h-[300px] flex-shrink-0">
                       <Image 
                          src="/blog-7.jpeg" 
                          alt="News Image" 
                          fill 
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover"
                       />
                       {/* Date Badge */}
                       <div className="absolute top-0 right-0 bg-[#f39c12] text-white p-4 text-center min-w-[70px]">
                          <span className="block text-2xl font-bold leading-none">12</span>
                          <span className="text-sm font-medium uppercase tracking-wider">MAR</span>
                       </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                       <h3 className="text-2xl md:text-[28px] font-medium text-[#121f45] mb-8 leading-tight group-hover:text-[#f39c12] transition-colors">
                          Incorporation of Rheo Pharma Peru S.A.C a fully owned subsidiary of Rheo Pharma India
                       </h3>
                       <Link 
                          href="/newsroom/peru-subsidiary"
                          className="bg-[#F2F7FF] text-[#f39c12] font-bold py-3 px-8 rounded-md w-fit flex items-center space-x-2 hover:bg-[#f39c12] hover:text-white transition-all uppercase tracking-wider text-sm"
                       >
                          <span>READ MORE</span>
                          <span className="text-lg">&raquo;</span>
                       </Link>
                    </div>
                 </div>

              </div>

              {/* Right: Sidebar */}
              <div className="space-y-10">
                 
                 {/* Categories */}
                 <div className="bg-[#F2F7FF] p-10 rounded-[10px]">
                    <h4 className="text-2xl font-medium mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#f39c12]">Categories</h4>
                    <ul className="space-y-4">
                       <li>
                          <Link href="#" className="flex items-center space-x-2 text-gray-600 hover:text-[#f39c12] transition-colors group">
                             <span className="text-[#f39c12]">&raquo;</span>
                             <span>Development</span>
                          </Link>
                       </li>
                    </ul>
                 </div>

                 {/* Recent Posts */}
                 <div className="bg-[#F2F7FF] p-10 rounded-[10px]">
                    <h4 className="text-2xl font-medium mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#f39c12]">Recent Post</h4>
                    <ul className="space-y-6">
                       <li>
                          <Link href="/newsroom/peru-subsidiary" className="text-gray-700 hover:text-[#f39c12] transition-colors leading-relaxed block group">
                             <span className="text-[#f39c12] mr-2 transition-transform group-hover:translate-x-1 inline-block">&raquo;</span>
                             Incorporation of Rheo Pharma Peru S.A.C a fully owned subsidiary of Rheo Pharma India
                          </Link>
                       </li>
                    </ul>
                 </div>

              </div>

           </div>
        </div>
      </section>

    </div>
  );
}
