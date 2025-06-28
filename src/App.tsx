import "./App.css";
import About from "./sections/about";
import ContactSection from "./sections/contact";
import Experience from "./sections/experience";
import Projects from "./sections/projects";

function App() {
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
        <ol className="hidden md:block flex-col justify-items-start items-start list-disc list-inside space-y-1">
          <li className="font-bold">About</li>
          <li>Experience</li>
          <li>Projects</li>
        </ol>

        <ContactSection />
      </div>
      <div className="md:w-3/5 md:p-16 flex flex-col space-y-16 md:overflow-y-auto h-full">
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
