import { useRef, useEffect, useState } from "react";
import "./App.css";
import About from "./sections/about";
import ContactSection from "./sections/contact";
import Experience from "./sections/experience";
import Projects from "./sections/projects";

// const SECTION_IDS = ["about", "experience", "projects"];

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sectionRefs = [
      { id: "about", ref: aboutRef },
      { id: "experience", ref: experienceRef },
      { id: "projects", ref: projectsRef },
    ];

    const handleScroll = () => {
      const scrollPositions = sectionRefs.map(({ id, ref }) => {
        if (!ref.current) return { id, top: Infinity };
        const rect = ref.current.getBoundingClientRect();
        return { id, top: Math.abs(rect.top) };
      });
      scrollPositions.sort((a, b) => a.top - b.top);
      setActiveSection(scrollPositions[0].id);
    };

    const scrollContainer = document.getElementById("scroll-sections");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    // Initial highlight
    handleScroll();

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row p-8">
      <div className="md:w-2/5 flex flex-col justify-between items-start md:p-28">
        <div className="flex flex-col justify-items-start items-start space-y-2">
          <p className="font-black text-4xl">Rahul Nema</p>
          <p className="text-xl font-semibold">SOFTWARE ENGINEER</p>
          <p className="text-left text-xs opacity-70 py-2">
            I build accessible, pixel-perfect digital experiences for the web,
            mobile and I build games as well.
          </p>
        </div>
        <ol className="hidden md:block list-disc list-inside text-left space-y-1">
          <li
            className={activeSection === "about" ? "font-bold" : "opacity-70"}
          >
            About
          </li>
          <li
            className={
              activeSection === "experience" ? "font-bold" : "opacity-70"
            }
          >
            Experience
          </li>
          <li
            className={
              activeSection === "projects" ? "font-bold" : "opacity-70"
            }
          >
            Projects
          </li>
        </ol>
        <ContactSection />
      </div>
      <div
        id="scroll-sections"
        className="md:w-3/5 md:p-16 flex flex-col space-y-16 md:overflow-y-auto h-full scroll-smooth"
      >
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
