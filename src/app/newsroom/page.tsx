import Link from "next/link";

export default function Newsroom() {
  const posts = [
    {
      date: "October 12, 2026",
      title: "Launch of Advanced AI Diagnostic Platform for Neurology",
      summary: "HealthTechAI announces the deployment of its newest proprietary machine-learning algorithm capable of identifying early-stage ischemic events with 98% accuracy.",
      link: "#"
    },
    {
      date: "September 28, 2026",
      title: "Expansion of R&D Facilities in the European Market",
      summary: "In a strategic move to bolster clinical pipelines, we have inaugurated a state-of-the-art $50M research center in Berlin to accelerate biosimilar validation.",
      link: "#"
    },
    {
      date: "August 15, 2026",
      title: "Stringent Regulatory Approvals Received Across 15 New LATAM Markets",
      summary: "Our flagship cardiometabolic therapy line has successfully passed rigorous audits and received full commercial authorization in key growing markets.",
      link: "#"
    },
    {
      date: "July 05, 2026",
      title: "Incorporation of a New Subsidiary in Southeast Asia",
      summary: "To better serve the vast APAC region, HealthTechAI has officially launched a new wholly-owned subsidiary headquartered in Singapore to orchestrate tech transfers.",
      link: "#"
    },
    {
      date: "June 20, 2026",
      title: "Keynote Participation at the Global MedTech Innovation Summit",
      summary: "Our CMD, Dr. Arthur V., delivered a compelling keynote on the ethical intersections of artificial intelligence and pharmaceutical distribution networks.",
      link: "#"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="bg-gray-100 py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Newsroom</h1>
          <p className="text-xl text-gray-600 font-light">
            Latest updates, announcements, and insights from HealthTechAI.
          </p>
        </div>
      </section>

      {/* POSTS LIST */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {posts.map((post, i) => (
              <article key={i} className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
                  <time className="text-[var(--color-primary)] font-bold text-sm uppercase tracking-wider md:w-32 flex-shrink-0">
                    {post.date}
                  </time>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                    {post.title}
                  </h2>
                </div>
                <div className="md:pl-36">
                  <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                    {post.summary}
                  </p>
                  <Link href={post.link} className="inline-flex items-center text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]">
                    Read More
                    <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-sm">
              Load More News
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
