import React from "react";

const experiences = [
  {
    company: "PAYCRUNCH",
    location: "Bengaluru",
    title: "Front End Developer",
    period: "March 2024 - Present",
    highlights: [
      "Managed app releases, including build preparation, testing coordination, and submission to the App Store and Google Play.",
      "Re-worked the entire client app to make the codebase scalable and clean.",
      "Developed social engagement features such as hives and spill.",
    ],
  },
  {
    company: "SKILLWIN",
    location: "Noida",
    title: "Member of Technical Staff",
    period: "Dec 2022 - Feb 2024",
    highlights: [
      "Implemented multi-table support in Octro Poker, enabling users to play on up to 3 tables concurrently.",
      "Optimized game performance, reducing asset download time (~3s) and minimizing canvas updates.",
      "Refactored the store module for scalability and developed retention features like Free Roll tournaments, daily login, and user reporting.",
    ],
  },
  {
    company: "HITWICKET",
    location: "Hyderabad",
    title: "Software Engineer",
    period: "Jun 2021 - Nov 2022",
    highlights: [
      "Built and launched online PvP mode for Hitwicket Superstars, enhancing competitiveness.",
      "Conducted 30+ A/B tests on game tutorials, using Bayesian inference to improve Day 1, 3, and 7 retention rates.",
      "Enhanced engagement loops with features like training center, daily goals, and a beginner's quest system.",
      "Developed LiveOps events such as Hitwicket Champions League, Alliance Quest, and Battle Arenas.",
    ],
  },
];

const Experience: React.FC = () => (
  <section id="experience" className="text-left py-8">
    <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
    {experiences.map((exp, idx) => (
      <div key={idx} className="mb-8">
        <h3 className="text-xl font-semibold">
          {exp.company}, {exp.location} —{" "}
          <span className="font-normal">{exp.title}</span>
        </h3>
        <p className="italic my-1">{exp.period}</p>
        <ul className="list-disc list-inside space-y-1">
          {exp.highlights.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default Experience;
