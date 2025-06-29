import React from "react";

const projects = [
  {
    title: "Factura (Web Application)",
    tech: ["NextJS", "NestJS", "PostgreSQL"],
    description: [
      "Architected and developed a full-stack, role-based CRM platform for the packaging industry using Next.js (App Router) for the frontend and NestJS (modular monolith architecture) for the backend.",
      "Engineered core modules including Enquiry Management, Order Processing, and Production Tracking, featuring dynamic tools like a real-time Quote Calculator and a secure, shareable enquiry form with role-based access control.",
      "Designed, implemented, and maintained a CI/CD pipeline leveraging GitHub Actions and Docker to automate build, testing, and multi-environment deployment workflows.",
      "Integrated external services including the WhatsApp Cloud API for real-time customer notifications and Amazon SES for transactional email delivery, streamlining communication across enquiry, order, and production events.",
    ],
  },
  {
    title: "Chessmate.Club: Multiplayer",
    tech: ["Flutter", "NestJS", "MongoDB"],
    description: [
      "Built a cross-platform chess app in Flutter with real-time multiplayer with Socket.io for low-latency communication.",
      "Integrated Firebase Auth with Google and Apple sign-in for secure, seamless authentication and session handling.",
      "Applied BLoC and Repository pattern for scalable state management and real-time game state synchronization.",
      "Integrated chess libraries (squares, square_bishop) for legal move validation, timers and player matchmaking.",
    ],
  },
  {
    title: "Cudddle: A Dating App",
    tech: ["Flutter", "NodeJS", "MongoDB"],
    description: [
      "Ideated and developed a solution to mindless swiping by building a 5-match slot system; users strategically manage a queue of additional matches.",
      "Incorporated an experience feature, encouraging users to go on experiential dates for memorable encounters.",
      "Built chat system, notification systems, and other engagement tools into the app.",
    ],
  },
  {
    title: "Anony: Anonymous Q&A System",
    tech: ["Flutter", "Firebase", "Apple Push Notification Service"],
    description: [
      "Developed an anonymous Q&A system for the app, implementing unique link generation for users to share on Instagram or with friends for anonymous questions.",
      "Ensured privacy by delivering questions directly to users.",
      "Integrated Google login for Android (Firebase) and Apple ID login for iOS.",
      "Implemented Apple Push Notification Service for iOS and Firebase Notification Service for Android to notify users of new questions.",
    ],
  },
  {
    title: "Ludo Master: Multiplayer Game",
    tech: ["Unity", "Photon Engine"],
    description: [
      "Created 'Ludo Master,' a game faithful to traditional Ludo rules and regulations, providing a classic Ludo experience.",
      "Integrated the Photon Engine to enable real-time multiplayer gameplay with friends online.",
      "Designed a user-friendly interface allowing players to choose between offline and online modes.",
      "Implemented a lobby system with unique room IDs for online matches, allowing players to join specific rooms for interactive gameplay.",
    ],
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="text-left">
    <h2 className="text-xl font-bold mb-8 text-left">Projects</h2>
    <div className="space-y-10">
      {projects.map((project, idx) => (
        <div key={idx} className="text-left space-y-4">
          <div className="flex flex-col">
            <h3 className="font-black text-left">{project.title}</h3>
          </div>
          <ul className="list-disc list-inside text-left text-xs space-y-1 opacity-70">
            {project.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-white text-black rounded-full px-3 py-1 text-xs font-medium shadow border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
