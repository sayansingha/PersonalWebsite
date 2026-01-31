import { PERSONAL_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          {/* Greeting */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-6">
            {PERSONAL_INFO.title}
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[200px]"
            >
              Get in Touch
            </a>
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-slate-700 font-medium rounded-lg border-2 border-slate-300 hover:border-blue-500 hover:text-blue-600 transform hover:scale-105 transition-all duration-300 min-w-[200px]"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
