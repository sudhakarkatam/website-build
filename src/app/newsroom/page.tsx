import Image from 'next/image';
import Link from 'next/link';

export default function NewsroomPage() {
  // Sample Data from extraction
  const newsItems = [
    {
      id: 1,
      date: "Mar 12, 2023", // Updated to current context if needed
      title: "Incorporation of Rheo Pharma Peru S.A.C a fully owned subsidiary of Rheo Pharma India",
      category: "Development",
      link: "#"
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-[#031d38] flex flex-col items-center justify-center overflow-hidden">
        {/* Placeholder for background image */}
        <div className="absolute inset-0 bg-[#031d38] z-0">
           {/* Add your actual banner image here */}
           <div className="absolute inset-0 bg-gradient-to-r from-[#F58220]/20 to-transparent mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Newsroom</h1>
          <div className="flex items-center justify-center space-x-2 text-sm md:text-base font-medium">
            <Link href="/" className="text-white hover:text-[#F58220] transition-colors">Home</Link>
            <span className="text-white/50">/</span>
            <span className="text-[#F58220]">Newsroom</span>
          </div>
        </div>
      </section>

      {/* 2. NEWS LISTING */}
      <section className="py-20 lg:py-28 bg-[#f8f9fc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-3 gap-12">
             
             {/* Left Column: Main News Grid */}
             <div className="lg:col-span-2 space-y-12">
                {newsItems.map((news) => (
                  <article key={news.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col md:flex-row">
                     {/* Image Placeholder */}
                     <div className="w-full md:w-2/5 h-[250px] md:h-auto relative bg-gray-200 flex-shrink-0 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                           <svg className="w-12 h-12 text-gray-400 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                           </svg>
                        </div>
                        {/* Date Badge over image */}
                        <div className="absolute top-4 left-4 bg-[#F58220] text-white py-2 px-4 rounded font-bold text-center leading-tight shadow-md">
                           <span className="block text-xl">12</span>
                           <span className="block text-xs uppercase tracking-wider">Mar</span>
                        </div>
                     </div>

                     {/* Content */}
                     <div className="p-8 md:w-3/5 flex flex-col justify-center">
                        <div className="flex items-center space-x-2 text-sm text-[#F58220] font-semibold uppercase tracking-wider mb-3">
                           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                           <span>{news.category}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-[#1c2c52] mb-4 group-hover:text-[#F58220] transition-colors leading-snug">
                           <Link href={news.link}>{news.title}</Link>
                        </h2>
                        <p className="text-[#6c757d] mb-6 line-clamp-3">
                           Rheo Pharma expands its global footprint by incorporating a fully owned subsidiary in Peru, further cementing its commitment to providing high-quality pharmaceutical products to the LATAM region...
                        </p>
                        <Link href={news.link} className="inline-flex items-center text-[#1c2c52] font-bold hover:text-[#F58220] transition-colors">
                           Read More 
                           <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                     </div>
                  </article>
                ))}
             </div>

             {/* Right Column: Sidebar */}
             <div className="lg:col-span-1 space-y-10">
                
                {/* Categories Widget */}
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                   <h3 className="text-xl font-bold text-[#1c2c52] mb-6 pb-4 border-b border-gray-100 relative">
                     Categories
                     <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#F58220]"></span>
                   </h3>
                   <ul className="space-y-3">
                      <li>
                         <Link href="#" className="flex items-center justify-between text-[#6c757d] hover:text-[#F58220] transition-colors group">
                            <span className="flex items-center">
                               <svg className="w-4 h-4 mr-2 text-gray-300 group-hover:text-[#F58220]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                               Development
                            </span>
                            <span className="bg-gray-100 px-2 py-1 rounded text-xs">1</span>
                         </Link>
                      </li>
                   </ul>
                </div>

                {/* Recent Posts Widget */}
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                   <h3 className="text-xl font-bold text-[#1c2c52] mb-6 pb-4 border-b border-gray-100 relative">
                     Recent Posts
                     <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#F58220]"></span>
                   </h3>
                   <ul className="space-y-6">
                      {newsItems.map((news) => (
                         <li key={`recent-${news.id}`} className="flex items-start group">
                            <div className="w-16 h-16 rounded bg-gray-100 flex-shrink-0 mr-4 overflow-hidden relative">
                               <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                               </div>
                            </div>
                            <div>
                               <Link href={news.link} className="text-sm font-bold text-[#1c2c52] group-hover:text-[#F58220] transition-colors line-clamp-2 leading-snug mb-1">
                                  {news.title}
                               </Link>
                               <span className="text-xs text-gray-400">{news.date}</span>
                            </div>
                         </li>
                      ))}
                   </ul>
                </div>

             </div>

          </div>
        </div>
      </section>

    </div>
  );
}
