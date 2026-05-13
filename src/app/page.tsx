import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectCards from "./components/ProjectCards";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import SectionWrapper from "./components/SectionWrapper";
import ThreeSceneWrapper from "./components/ThreeSceneWrapper";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <ThreeSceneWrapper />
        
      <Hero />

      <SectionWrapper id="about">
        <About />
      </SectionWrapper>

      <SectionWrapper id="work">
        <div>
          <p className="font-mono text-cyan text-xs trackin-[0.3em] mb-2 opacity-70">
            {"// 02. FEATURED WORK"}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Selected Projects</h2>
          <div className="section-divider" />
          <ProjectCards />
        </div>
      </SectionWrapper>

      <SectionWrapper id="skills">
        <Skills />
      </SectionWrapper>

      <SectionWrapper id="education">
        <Education />
      </SectionWrapper>

      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
    </main>
  );
}