import React from "react";

const About: React.FC = () => (
  <section className="flex flex-col justify-items-start items-start space-y-4 text-left text-xs py-8 opacity-70">
    <p>
      I’m a product builder with a hacker’s heart and a designer’s eye. I love
      turning raw ideas into real, working products — fast. From building
      Next.js SaaS platforms to crafting Flutter apps with real-time location
      tracking, I’m always shipping, iterating, and learning.
    </p>
    <p>
      I’m comfortable across stacks:{" "}
      <span className="font-semibold text-white">React</span>,{" "}
      <span className="font-semibold text-white">Firebase</span>,{" "}
      <span className="font-semibold text-white">Flutter</span>,{" "}
      <span className="font-semibold text-white">Prisma</span>,{" "}
      <span className="font-semibold text-white">Drizzle ORM</span>, and
      more. Whether it’s Dockerizing a Node.js server, fixing iOS build configs,
      or spinning up domains for side projects like RoastMyResume, I enjoy
      diving deep into both the technical and product sides of things.
    </p>
    <p>
      Beyond code, I’m creating content for my startup studio’s Instagram,
      experimenting with audio overlays for Reels, and constantly brainstorming
      my next build.
    </p>
    <p>I believe in building fast, learning faster, and having fun doing it.</p>
    <p>Let’s build something together.</p>
  </section>
);

export default About;
