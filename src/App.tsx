import "./App.css";
import About from "./sections/about";
import ContactSection from "./sections/contact";
import Experience from "./sections/experience";
import Projects from "./sections/projects";

function App() {
  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="w-2/5 flex flex-col justify-between items-start p-28">
        <div className="flex flex-col justify-items-start items-start space-y-2">
          <h1 className="font-black text-4xl">Rahul Nema</h1>
          <h2 className="text-xl">Software Engineer</h2>
          <p className="text-left">I build accessible, pixel-perfect digital experiences for the web, mobile and I build games as well.</p>
        </div>
        <ol className="flex flex-col justify-items-start items-start list-disc list-inside space-y-1">
          <li className="font-bold">About</li>
          <li>Experience</li>
          <li>Projects</li>
        </ol>
        <ContactSection />
      </div>
      <div className="w-3/5 p-16 flex flex-col space-y-32 overflow-y-auto h-full">
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
