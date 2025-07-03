import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Factura (Web Application)",
    tech: ["NextJS", "NestJS", "PostgreSQL"],
    image:
      "https://w8psdz103p.ufs.sh/f/hdGRfDWTOhVSBsv6BIWHUjDKPCqQOynf2xRX8T5ZgL4w07Wu", // Add your image URL here
    description:
      "A scalable B2B platform built with a Next.js frontend leveraging file-based routing and image compression for optimized performance. The backend was developed using NestJS with PostgreSQL, featuring JWT-based authentication and AWS S3 integration for secure PDF and image uploads. Core modules include Enquiry, Orders, and Production management, along with a dynamic Quote Calculator and sharable enquiry forms with role-based permission controls. The system integrates with WhatsApp Cloud API and Amazon SES to enable real-time, automated customer notifications. A CI/CD pipeline ensures seamless build, test, and deployment workflows, while services are containerized using Docker and hosted on AWS EC2 within a live production environment, delivering a reliable, scalable infrastructure.",
  },
  {
    title: "Chessmate.Club: Multiplayer",
    tech: ["Flutter", "NestJS", "MongoDB"],
    image:
      "https://w8psdz103p.ufs.sh/f/hdGRfDWTOhVSnj1zXIrfpDrG6RUhnXQ2a4C8Hqgzdx0t5cvO",
    description:
      "A cross-platform real-time multiplayer chess application built with Flutter, featuring low-latency communication using Socket.io. The app supports secure authentication via Firebase Auth, with integrated Google and Apple sign-in options. A scalable and maintainable architecture was implemented using the BLoC and Repository patterns for efficient state management and real-time game synchronization. For offline play, Stockfish was integrated via FFI, alongside chess libraries for legal move validation, timers, and player matchmaking. The backend services were containerized with Docker and deployed on AWS EC2, ensuring a scalable, production-ready infrastructure capable of supporting concurrent multiplayer sessions.",
  },
  {
    title: "Cudddle: A Dating App",
    tech: ["Flutter", "NodeJS", "MongoDB"],
    image:
      "https://w8psdz103p.ufs.sh/f/hdGRfDWTOhVSAeq3mwX1kpT6ePmZ5J029BVLgEjnQfadbCIr",
    description:
      "A scalable Flutter application designed with the BLoC and Repository patterns for clean, maintainable, and modular state management. The backend was built using Express and MongoDB, offering JWT-authenticated REST APIs for secure and scalable data handling. The platform features real-time chat powered by Firebase, with push notifications managed via Firebase Cloud Messaging to keep users connected. An AI-driven matchmaking assistant, powered by OpenAPI integrations (Wingman/Wingwoman helpers), enhances the matchmaking experience with intelligent recommendations. Additionally, the app includes media-rich features such as image capture, cropping, and compression for seamless profile building and an engaging user experience.",
  },
  {
    title: "Anony: Anonymous Q&A System",
    tech: ["Flutter", "Firebase", "Apple Push Notification Service"],
    image:
      "https://w8psdz103p.ufs.sh/f/hdGRfDWTOhVSbAh5HpKOXdAZfF04JtGK7H25rsNWoCjkP1L9",
    description:
      "An anonymous Q&A system built within a Flutter app, featuring unique link generation for users to share on Instagram or with friends, enabling them to receive anonymous questions. The system ensures privacy by delivering questions directly to the intended recipients. Authentication is handled via Google Sign-In (Firebase) for Android and Apple ID login for iOS. To keep users engaged, push notifications are integrated using Apple Push Notification Service for iOS and Firebase Notification Service for Android, notifying users instantly when new questions arrive.",
  },
  // {
  //   title: "Ludo Master: Multiplayer Game",
  //   tech: ["Unity", "Photon Engine"],
  //   image:
  //     "https://w8psdz103p.ufs.sh/f/hdGRfDWTOhVSAeq3mwX1kpT6ePmZ5J029BVLgEjnQfadbCIr",
  //   description:
  //     "A multiplayer Ludo game faithful to traditional rules, built in Unity to deliver a classic and accessible Ludo experience. Photon Engine integration powers real-time multiplayer gameplay, allowing users to play with friends online. The game features a user-friendly interface with options for both offline and online modes. A lobby system with unique room IDs enables players to create and join specific rooms, making matches easy to organize and enhancing interactive multiplayer sessions.",
  // },
];

const Projects: React.FC = () => {
  const wordRefs = useRef<(HTMLSpanElement | null)[][]>([]);
  const [activeWords, setActiveWords] = useState<boolean[][]>(
    projects.map((project) => project.description.split(" ").map(() => false))
  );

  useEffect(() => {
    const handleScroll = () => {
      const mid = window.innerHeight / 3;
      setActiveWords(
        wordRefs.current.map((wordRow) =>
          wordRow.map((el) => {
            if (!el) return false;
            const rect = el.getBoundingClientRect();
            return rect.top < mid;
          })
        )
      );
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="text-left">
      <h2 className="text-xl font-bold mb-8 text-left">Projects</h2>
      <div className="space-y-10">
        {projects.map((project, idx) => (
          <div key={idx} className="text-left space-y-4">
            <div className="flex flex-col">
              <h3 className="font-black text-left">{project.title}</h3>
            </div>
            <div className="flex md:flex-row flex-col-reverse gap-4">
              <div
                className="text-left text-xs space-y-1 flex-1 transition-colors duration-300 flex flex-wrap"
                id={`desc-${idx}`}
              >
                {project.description.split(" ").map((word, wIdx) => (
                  <span
                    key={wIdx}
                    ref={(el) => {
                      if (!wordRefs.current[idx]) wordRefs.current[idx] = [];
                      wordRefs.current[idx][wIdx] = el;
                    }}
                    className={`transition-colors duration-300 ${
                      activeWords[idx]?.[wIdx]
                        ? "text-white"
                        : "text-white opacity-50"
                    }`}
                    style={{ marginRight: "0.25em", whiteSpace: "pre" }}
                  >
                    {word}
                  </span>
                ))}
              </div>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="mt-2 mb-2 rounded border-2 border-gray-500 shadow md:w-64 object-cover"
                  style={{
                    height: "auto",
                    maxHeight: "none",
                    alignSelf: "stretch",
                  }}
                />
              )}
            </div>
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
};

export default Projects;
