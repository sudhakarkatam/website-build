import Image from 'next/image';
import Link from 'next/link';

export default function CareersPage() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Careers</h1>
          <div className="flex items-center justify-center space-x-2 text-sm md:text-base font-medium">
            <Link href="/" className="text-white hover:text-[#F58220] transition-colors">Home</Link>
            <span className="text-white/50">/</span>
            <span className="text-[#F58220]">Careers</span>
          </div>
        </div>
      </section>

      {/* 2. CAREERS CONTENT */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16">
             
             {/* Left Column: Text */}
             <div>
                <div className="mb-6 flex items-center">
                   <span className="text-[#F58220] font-bold tracking-wider uppercase text-sm underline underline-offset-8 decoration-2">- JOIN OUR TEAM -</span>
                </div>
                <h2 className="text-3xl md:text-[42px] font-medium text-[#1c2c52] mb-8 leading-tight">
                   Build Your Career With Rheo
                </h2>
                
                <div className="space-y-6 text-[#6c757d] text-lg leading-relaxed mb-10">
                   <p>
                      At Rheo, people are the most valuable assets. The company boasts of having one of the most charismatic pools of employees with incredible orientation for achievement. The human resource development strategies at Rheo Pharma invariably focus on incessant improvement of professional and interpersonal skills and abilities, fostering team spirit and enhancing the knowledge base of its employees. 
                   </p>
                   <p>
                      Through numerous training and development programs, Rheo Pharma continuously invests to bring out the best out of its human assets. Rheo believes in the spirit of "growing together". Through excellent career development opportunities, it provides a platform for carving a high trajectory of accomplishments to all people. Work-life balance is its winning formula, ensuring effectiveness across all spheres of life. As a fast paced & committed pharma company, we are growing at a tremendous pace.
                   </p>
                   <p className="font-medium text-[#1c2c52] p-6 bg-[#f4f7fc] border-l-4 border-[#F58220] rounded-r-lg">
                      Young and dynamic professionals with a "CAN DO" attitude are welcome to become ‘Rheo Pharma’s "Partners in Success". If you are confident and have the "CAN DO" attitude, drop us your profile and we might have a dream job for you!
                   </p>
                </div>

                <div className="flex items-center p-6 bg-[#1c2c52] text-white rounded-lg shadow-lg">
                   <div className="w-14 h-14 bg-[#F58220] rounded-full flex items-center justify-center mr-6">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   </div>
                   <div>
                      <span className="block text-white/60 text-sm uppercase tracking-wider mb-1">Send your resume to</span>
                      <a href="mailto:hr@rheopharma.com" className="text-xl md:text-2xl font-bold hover:text-[#F58220] transition-colors">
                         hr@rheopharma.com
                      </a>
                   </div>
                </div>
             </div>

             {/* Right Column: Application Form */}
             <div className="bg-[#f8f9fc] p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-3xl font-bold text-[#1c2c52] mb-8 pb-4 border-b border-gray-200">
                   Apply Now
                </h3>
                
                <form className="space-y-6">
                   <div className="grid grid-cols-1 gap-6">
                      <div>
                         <label htmlFor="name" className="block text-sm font-medium text-[#1c2c52] mb-2">Full Name *</label>
                         <input type="text" id="name" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F58220]/50 focus:border-[#F58220] transition-colors" placeholder="John Doe" required />
                      </div>
                      
                      <div>
                         <label htmlFor="email" className="block text-sm font-medium text-[#1c2c52] mb-2">Email Address *</label>
                         <input type="email" id="email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F58220]/50 focus:border-[#F58220] transition-colors" placeholder="john@example.com" required />
                      </div>

                      <div>
                         <label htmlFor="phone" className="block text-sm font-medium text-[#1c2c52] mb-2">Phone Number</label>
                         <input type="tel" id="phone" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F58220]/50 focus:border-[#F58220] transition-colors" placeholder="+1 (555) 000-0000" />
                      </div>
                      
                      <div>
                         <label htmlFor="position" className="block text-sm font-medium text-[#1c2c52] mb-2">Position Applied For *</label>
                         <input type="text" id="position" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F58220]/50 focus:border-[#F58220] transition-colors" placeholder="e.g. Area Sales Manager" required />
                      </div>

                      <div>
                         <label htmlFor="resume" className="block text-sm font-medium text-[#1c2c52] mb-2">Upload Resume / CV (PDF/Word) *</label>
                         <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
                           <div className="space-y-1 text-center">
                             <svg className="mx-auto h-12 w-12 text-gray-400 group-hover:text-[#F58220] transition-colors" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                               <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                             </svg>
                             <div className="flex text-sm text-gray-600 justify-center">
                               <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-[#F58220] hover:text-[#d36b15] focus-within:outline-none">
                                 <span>Upload a file</span>
                                 <input id="file-upload" name="file-upload" type="file" className="sr-only" required />
                               </label>
                             </div>
                             <p className="text-xs text-gray-500">DOC, DOCX, PDF up to 5MB</p>
                           </div>
                         </div>
                      </div>

                      <div>
                         <label htmlFor="message" className="block text-sm font-medium text-[#1c2c52] mb-2">Cover Letter / Message</label>
                         <textarea id="message" rows={4} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F58220]/50 focus:border-[#F58220] transition-colors resize-none" placeholder="Briefly tell us why you are a good fit..."></textarea>
                      </div>
                   </div>

                   <button type="submit" className="w-full inline-flex justify-center items-center px-6 py-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-[#F58220] hover:bg-[#1c2c52] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F58220] transition-colors duration-300 uppercase tracking-wider">
                      Send Now
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                   </button>
                </form>
             </div>

          </div>
        </div>
      </section>

    </div>
  );
}
