import Link from "next/link";
import Image from "next/image";

export default function Products() {
  const categories = [
    {
      title: "AI-Powered Diagnostics",
      icon: "https://images.unsplash.com/photo-1576086208572-cb26871a7337?auto=format&fit=crop&q=80&w=600",
      desc: "Our diagnostic division utilizes proprietary machine-learning algorithms to detect anomalies in radiology and pathology with unprecedented accuracy, leading to significantly faster patient triaging.",
      link: "#"
    },
    {
      title: "Digital Stroke & Neurology Solutions",
      icon: "https://images.unsplash.com/photo-1559757175-9b2d3fd8087d?auto=format&fit=crop&q=80&w=600",
      desc: "An integrated suite of digital health tools that synchronize EMS, emergency rooms, and neurologists to streamline stroke pathways and minimize door-to-needle times drastically.",
      link: "#"
    },
    {
      title: "Nutraceutical & Wellness Supplements",
      icon: "https://images.unsplash.com/photo-1550572017-edb9911e03a9?auto=format&fit=crop&q=80&w=600",
      desc: "Scientifically backed, highly bioavailable nutraceuticals formulated to enhance cognitive function, immune resilience, and overall prophylactic wellbeing.",
      link: "#"
    },
    {
      title: "Cardiometabolic & Diabetes Therapies",
      icon: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=600",
      desc: "A premier line of first-in-market generics and advanced biosimilars addressing critical chronic conditions like type 2 diabetes, hypertension, and advanced heart failure.",
      link: "#"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-[var(--color-primary)] py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Our Products</h1>
          <p className="text-xl text-blue-100 font-light leading-relaxed">
            Offering innovative, high-quality, and AI-enabled healthcare solutions to combat the most pressing medical challenges of our time.
          </p>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow flex flex-col">
                <div className="h-64 relative overflow-hidden bg-gray-200">
                  <div className="w-full h-full bg-slate-200 animate-pulse flex items-center justify-center border-b border-slate-300">
                    <span className="text-slate-400 text-sm font-medium">Product Image Placeholder</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{cat.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{cat.desc}</p>
                  </div>
                  <Link href={cat.link} className="inline-flex items-center text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-dark)] transition-colors">
                    Learn More 
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center text-sm text-gray-500 italic bg-white p-6 rounded-xl border border-gray-200">
            Note: All product demonstrations, imagery, and brand nomenclatures are purely representative to showcase domain expertise. For detailed regulatory pipeline access, please contact our BD team.
          </div>
        </div>
      </section>
    </div>
  );
}
