import React, { useEffect, useRef, useState } from "react";

const paragraphs = [
  [
    "I’m a product builder with a hacker’s heart and a designer’s eye. I love turning raw ideas into real, working products — fast. From building Next.js SaaS platforms to crafting Flutter apps with real-time location tracking, I’m always shipping, iterating, and learning.",
  ],
  [
    "I’m comfortable across stacks:",
    <span className="font-semibold text-white"> React</span>,
    ",",
    <span className="font-semibold text-white"> Firebase</span>,
    ",",
    <span className="font-semibold text-white"> Flutter</span>,
    ",",
    <span className="font-semibold text-white"> Prisma</span>,
    ",",
    <span className="font-semibold text-white"> Drizzle ORM</span>,
    " and more. Whether it’s Dockerizing a Node.js server, fixing iOS build configs, or spinning up domains for side projects like RoastMyResume, I enjoy diving deep into both the technical and product sides of things.",
  ],
  [
    "Beyond code, I’m creating content for my startup studio’s Instagram, experimenting with audio overlays for Reels, and constantly brainstorming my next build.",
  ],
  ["I believe in building fast, learning faster, and having fun doing it."],
  ["Let’s build something together."],
];

const About: React.FC = () => {
  // Count total words for refs and state
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [active, setActive] = useState<boolean[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const mid = window.innerHeight / 3;
      setActive(
        wordRefs.current.map((el) => {
          if (!el) return false;
          const rect = el.getBoundingClientRect();
          return rect.top < mid;
        })
      );
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to split string into words and keep punctuation
  const splitWords = (text: string) =>
    text.split(/(\s+)/).filter((w) => w.length > 0);

  let wordIdx = 0;

  return (
    <section className="flex flex-col justify-items-start items-start space-y-4 text-left text-xs py-8">
      {paragraphs.map((para, pi) => (
        <p key={pi}>
          {para.map((line) => {
            if (typeof line === "string") {
              return splitWords(line).map((word, wi) => {
                const idx = wordIdx++;
                return (
                  <span
                    key={wi}
                    ref={(el) => {
                      wordRefs.current[idx] = el;
                    }}
                    className={`transition-colors duration-300 ${
                      active[idx] ? "text-white" : "text-white opacity-50"
                    }`}
                  >
                    {word}
                  </span>
                );
              });
            }
            return line;
          })}
        </p>
      ))}
    </section>
  );
};

export default About;
