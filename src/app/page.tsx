import ThreeSceneWrapper from "./components/ThreeSceneWrapper";
import SectionWrapper from "./components/SectionWrapper";
import ProjectCards from "./components/ProjectCards";
import SkillCloudWrapper from "./components/SkillCloudWrapper";

export default function Home() {
  return (
    <main className="relative">
      <ThreeSceneWrapper />

      {/* Hero Section */}
      <SectionWrapper id="hero">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-cyan bg-clip-text text-transparent">
            Harsh Dhoriyani
          </h1>
          <p className="text-xl md:text-2xl text-grayText mt-4 border-l-4 border-cyan pl-4 inline-block">
            Full Stack & Software Developer · AI/ML Engineer
          </p>
          <p className="max-w-2xl mx-auto mt-6 text-gray-300">
            Building immersive digital experiences with clean architecture & cutting-edge AI.
          </p>
        </div>
      </SectionWrapper>

      {/* Work Section */}
      <SectionWrapper id="work">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-cyan mb-2">✦ Featured Projects</h2>
          <ProjectCards />
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper id="skills">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-cyan mb-2">✦ Technical Universe</h2>
          <SkillCloudWrapper />
          <p className="text-center text-sm text-gray-500 mt-4">✨ Drag to rotate · Click any skill for details</p>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan mb-6">✦ Connect</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.linkedin.com/in/harshdhoriyani/" target="_blank" className="bg-slate/80 px-6 py-3 rounded-full border border-cyan/40 text-cyan font-medium hover:bg-cyan hover:text-charcoal transition-all">
              LinkedIn
            </a>
            <a href="https://github.com/HarshDhoriyani" target="_blank" className="bg-slate/80 px-6 py-3 rounded-full border border-cyan/40 text-cyan font-medium hover:bg-cyan hover:text-charcoal transition-all">
              GitHub
            </a>
            <a href="mailto:harshdhoriyani03@gmail.com" className="bg-slate/80 px-6 py-3 rounded-full border border-cyan/40 text-cyan font-medium hover:bg-cyan hover:text-charcoal transition-all">
              harshdhoriyani03@gmail.com
            </a>
          </div>
          <p className="mt-12 text-gray-500 text-sm">© 2025 — Cyber-Minimalist portfolio</p>
        </div>
      </SectionWrapper>
    </main>
  );
}