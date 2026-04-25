import Image from 'next/image';
import Link from 'next/link';

export default function SingleNewsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-[#121f45]">
      
      {/* 1. DARK BLUE TITLE SECTION */}
      <section className="bg-[#121f45] py-20 lg:py-28 px-6 md:px-12 lg:px-24">
         <div className="w-full max-w-[1920px] mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight max-w-6xl">
               Incorporation of Rheo Pharma Peru S.A.C a fully owned subsidiary of Rheo Pharma India
            </h1>
         </div>
      </section>

      {/* 2. CONTENT SECTION */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
           <div className="grid lg:grid-cols-3 gap-16">
              
              {/* Left: Article Body */}
              <div className="lg:col-span-2 space-y-10">
                 
                 {/* Main Image */}
                 <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
                    <Image 
                       src="/blog-7.jpeg" 
                       alt="Incorporation News" 
                       fill 
                       className="object-cover"
                    />
                 </div>

                 {/* Meta Info */}
                 <div className="flex flex-wrap items-center gap-6 text-[15px] font-bold text-[#121f45] uppercase tracking-wider">
                    <div className="flex items-center space-x-2">
                       <span className="text-[#f39c12] text-xl">👤</span>
                       <span>RHEO_ADMIN</span>
                    </div>
                    <div className="flex items-center space-x-2">
                       <span className="text-[#f39c12] text-xl">📅</span>
                       <span>MARCH 12, 2023</span>
                    </div>
                    <div className="flex items-center space-x-2">
                       <span className="text-[#f39c12] text-xl">📂</span>
                       <span>DEVELOPMENT</span>
                    </div>
                 </div>

                 <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                    <p>
                       Rheo Pharma Private Limited is pleased to announce the successful incorporation of its new wholly-owned subsidiary, <strong>Rheo Pharma Peru S.A.C</strong>, based in Lima, Peru. This strategic move marks a significant milestone in our global expansion strategy, specifically focusing on the Latin American (LATAM) pharmaceutical market.
                    </p>
                    <p>
                       The establishment of this subsidiary will enable Rheo Pharma to directly serve the healthcare needs of the Peruvian market while leveraging local expertise to distribute our innovative healthtech solutions and pharmaceutical products.
                    </p>
                 </div>

                 {/* Share Section */}
                 <div className="bg-[#F2F7FF] p-10 rounded-lg mt-16">
                    <h3 className="text-2xl font-medium mb-6">You can share this post!</h3>
                    <div className="flex flex-wrap gap-4">
                       <button className="flex items-center space-x-3 bg-[#3b5998] text-white px-6 py-2.5 rounded text-sm font-bold">
                          <span>Facebook</span>
                       </button>
                       <button className="flex items-center space-x-3 bg-[#00acee] text-white px-6 py-2.5 rounded text-sm font-bold">
                          <span>Twitter</span>
                       </button>
                       <button className="flex items-center space-x-3 bg-[#0077b5] text-white px-6 py-2.5 rounded text-sm font-bold">
                          <span>Linkedin</span>
                       </button>
                       <button className="bg-[#bd081c] text-white p-2.5 rounded">P</button>
                       <button className="bg-[#ff4500] text-white p-2.5 rounded">@</button>
                       <button className="bg-[#555555] text-white p-2.5 rounded">⎙</button>
                    </div>
                 </div>

                 {/* Comment Form */}
                 <div className="mt-16">
                    <h3 className="text-3xl font-medium mb-2">Leave A Comment</h3>
                    <p className="text-gray-500 mb-10 text-sm">All fields marked with an asterisk (*) are required</p>
                    
                    <form className="space-y-6">
                       <div className="grid md:grid-cols-2 gap-6">
                          <div className="relative">
                             <input type="text" placeholder="Name*" className="w-full bg-white border border-gray-200 rounded p-4 outline-none focus:ring-1 focus:ring-[#f39c12]" required />
                             <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">👤</span>
                          </div>
                          <div className="relative">
                             <input type="email" placeholder="Email*" className="w-full bg-white border border-gray-200 rounded p-4 outline-none focus:ring-1 focus:ring-[#f39c12]" required />
                             <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">✉️</span>
                          </div>
                       </div>
                       <div className="relative">
                          <input type="text" placeholder="Website" className="w-full bg-white border border-gray-200 rounded p-4 outline-none focus:ring-1 focus:ring-[#f39c12]" />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🌐</span>
                       </div>
                       <div className="flex items-center space-x-2">
                          <input type="checkbox" id="save-info" className="w-4 h-4" />
                          <label htmlFor="save-info" className="text-gray-500 text-sm">Save my name, email, and website in this browser for the next time I comment.</label>
                       </div>
                       <div className="relative">
                          <textarea rows={8} placeholder="Your Comment*" className="w-full bg-white border border-gray-200 rounded p-4 outline-none focus:ring-1 focus:ring-[#f39c12] resize-none" required></textarea>
                          <span className="absolute right-4 top-4 text-gray-400">✏️</span>
                       </div>
                       <button type="submit" className="bg-[#f39c12] text-white font-bold py-4 px-10 rounded uppercase tracking-wider hover:bg-[#d38b10] transition-colors">
                          POST COMMENT &raquo;
                       </button>
                    </form>
                 </div>

              </div>

              {/* Right: Sidebar */}
              <div className="space-y-12">
                 
                 {/* Categories */}
                 <div className="bg-[#F2F7FF] p-10 rounded-lg">
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
                 <div className="bg-[#F2F7FF] p-10 rounded-lg">
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
