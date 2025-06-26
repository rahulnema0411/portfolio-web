import React from "react";

const projects = [
  {
    title: "Factura (Web Application)",
    tech: ["NextJS", "NestJS", "PostgreSQL"],
    description: [
      "Built a full-stack CRM for the packaging industry, utilizing NextJS and NestJS.",
      "Developed key modules including Enquiry, Orders, and Production, with features such as a Quote Calculator and a sharable enquiry form.",
      "Implemented and managed CI/CD pipeline to automate build, test, and deployment processes.",
      "Integrated WhatsApp Cloud API and Amazon SES for automated customer notifications on enquiry, order, and production status.",
    ],
  },
  {
    title: "Chessmate.Club: Multiplayer",
    tech: ["Flutter", "NestJS", "MongoDB"],
    description: [
      "A classic chess app for the new generation who loves chess but has less time. Quick 7 min matches with a point system.",
      "Built with Flutter for frontend and NestJS for backend.",
      "Play against players in real time (websockets) - ranked matches, or create a private room to play with a friend.",
      "Compete on weekly leaderboards, collect gems, and win Amazon vouchers.",
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
  <section id="projects" className="py-12 text-left">
    <h2 className="text-3xl font-bold mb-8 text-left">Projects</h2>
    <div className="space-y-10">
      {projects.map((project, idx) => (
        <div key={idx} className="text-left">
          <div className="flex flex-col mb-2">
            <h3 className="text-xl font-semibold text-left">{project.title}</h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-left mb-2">
            {project.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-2">
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
