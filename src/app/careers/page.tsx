export default function Careers() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-24 text-center border-b border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Careers</h1>
          <p className="text-2xl font-bold text-[var(--color-primary)] mb-6">Build the future of healthcare with us.</p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            At HealthTechAI, our culture thrives on innovation, unbreakable integrity, continuous learning, and seamless global collaboration. We are a collective of scientists, engineers, and visionaries dedicated to transforming lives.
          </p>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="card-hover p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">Global Exposure</h3>
              <p className="text-gray-600 text-sm">Collaborate with international teams and influence global healthcare pipelines actively.</p>
            </div>
            <div className="card-hover p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">Cutting-Edge AI</h3>
              <p className="text-gray-600 text-sm">Work intimately with next-generation machine learning and advanced biosimilars.</p>
            </div>
            <div className="card-hover p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">Growth Opportunities</h3>
              <p className="text-gray-600 text-sm">We invest heavily in the continuing education and rapid career acceleration of our people.</p>
            </div>
            <div className="card-hover p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">Inclusive Culture</h3>
              <p className="text-gray-600 text-sm">Diversity fuels our innovation. We pride ourselves on cultivating a supportive, respectful workspace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Open Positions</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">
            {[
              { title: "Senior AI Research Scientist", loc: "Berlin, Germany / Hybrid", type: "R&D", desc: "Lead the algorithm design for our next gen pathology diagnostic suite." },
              { title: "Regional BD Manager (LATAM)", loc: "São Paulo, Brazil", type: "Sales & Marketing", desc: "Drive key negotiations for licensing our cardiometabolic portfolio." },
              { title: "Regulatory Affairs Specialist", loc: "New York, USA", type: "Regulatory", desc: "Ensure meticulous FDA compliance for upcoming software-as-a-medical-device launches." },
              { title: "Cloud Infrastructure Architect", loc: "Remote", type: "Digital Health", desc: "Construct highly secure, scalable AWS environments for our telemetry data." }
            ].map((job, i) => (
              <div key={i} className="p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <span className="bg-blue-100 text-[var(--color-primary)] text-xs font-bold px-2 py-1 rounded-md">{job.type}</span>
                  </div>
                  <p className="text-gray-500 text-sm flex items-center mb-2">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {job.loc}
                  </p>
                  <p className="text-gray-600">{job.desc}</p>
                </div>
                <div className="mt-4 md:mt-0 flex-shrink-0">
                  <a href="#apply" className="inline-block px-6 py-2.5 bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-colors">Apply Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBMIT CV FORM */}
      <section id="apply" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl border border-blue-100 p-8 sm:p-12 text-center">
             <h2 className="text-3xl font-bold text-gray-900 mb-2">Submit Your CV</h2>
             <p className="text-gray-600 mb-8">Don't see a perfect fit? Drop us your details and we'll keep you in mind.</p>
             
             <form className="space-y-6 text-left">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--color-primary)] outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--color-primary)] outline-none" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role of Interest *</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--color-primary)] outline-none" placeholder="e.g. Quality Assurance, Supply Chain..." required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Attach CV (Link to PDF/LinkedIn) *</label>
                  <input type="url" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--color-primary)] outline-none" placeholder="https://..." required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cover Message</label>
                  <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--color-primary)] outline-none resize-none" placeholder="Tell us why you belong here..."></textarea>
                </div>
                <div className="text-center pt-4">
                  <button type="submit" className="px-10 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-colors shadow-md w-full md:w-auto">
                    Submit Application
                  </button>
                </div>
             </form>
          </div>
        </div>
      </section>

    </div>
  );
}
