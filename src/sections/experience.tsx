import React from "react";

const experiences = [
  {
    company: "PayCrunch",
    location: "Bengaluru",
    title: "FRONT END DEVELOPER",
    period: "March 2024 - Present",
    highlights: [
      "Refactored the entire client application architecture for scalability and maintainability by implementing the BLoC (Business Logic Component) pattern, ensuring clear separation of concerns and streamlined state management.",
      "Led app release management, including build configuration and successful submissions to the App Store and Google Play.",
      "Integrated credit card payment functionality, handling secure payment flows, tokenization, and transaction validation.",
      "Built social engagement features like Hives (community groups) and Spill (Splitwise-style shared expenses)",
    ],
  },
  {
    company: "Skillwin",
    location: "Noida",
    title: "MEMBER OF TECHNICAL STAFF",
    period: "Dec 2022 - Feb 2024",
    highlights: [
      "Implemented multi-table functionality by architecting isolated game instances within a shared runtime, enabling players to concurrently manage up to 3 active tables with independent game states, UI layers, and network sessions.",
      "Reduced game start-up time (-4s) by strategically implementing parallel asset-bundle downloads.",
      "Re-architected the store module using Zenject for Dependency Injection, improving scalability, runtime configurability, and code maintainability through decoupled, modular services.",
      "Worked on retention mechanic features such as Free Roll tournaments, Daily Login, User Reporting and more.",
    ],
  },
  {
    company: "Hitwicket",
    location: "Hyderabad",
    title: "GAME DEVELOPER",
    period: "Jun 2021 - Nov 2022",
    highlights: [
      "Built online PvP mode for an existing cricket game using WebSockets for real-time, low-latency multiplayer.",
      "Applied State, Command, and Observer patterns for game state management, networked player actions, and reactive UI/analytics systems.",
      "Ran 30+ A/B tests on tutorials and onboarding, improving D1 (71%), D3 (52%), and D7 (38%) retention rates.",
      "Enhanced engagement systems like training centers, daily goals, and beginner quest flows to extend player lifetime value.",
      "Worked on LiveOps events including Hitwicket Champions League, Alliance Quest, and Battle Arenas to sustain player engagement.",
    ],
  },
];

const Experience: React.FC = () => (
  <section id="experience" className="text-left py-8">
    <h2 className="text-xl font-bold mb-8">Work Experience</h2>
    {experiences.map((exp, idx) => (
      <div key={idx} className="mb-8">
        <span className="font-black">{exp.title}</span>
        <h3 className="font-black text-sm">
          {exp.company}, {exp.location}
        </h3>
        <p className="text-xs font-semibold my-1 opacity-50">{exp.period}</p>
        <ul className="list-disc pl-5 py-2">
          {exp.highlights.map((highlight, i) => (
            <li key={i} className="text-xs opacity-70 mb-1">{highlight}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default Experience;
