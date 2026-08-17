import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Global background orbs — replicate the Hero vibe across all sections */}
      <div className="global-bg-orbs" aria-hidden="true">
        <div className="global-bg-orb global-bg-orb--1" />
        <div className="global-bg-orb global-bg-orb--2" />
        <div className="global-bg-orb global-bg-orb--3" />
        <div className="global-bg-orb global-bg-orb--4" />
      </div>
      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
