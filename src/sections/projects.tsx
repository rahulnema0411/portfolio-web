import React from "react";

const projects = [
  {
    title: "Factura (Web Application)",
    tech: ["NextJS", "NestJS", "PostgreSQL"],
    image:
      "https://w8psdz103p.ufs.sh/f/hdGRfDWTOhVSBsv6BIWHUjDKPCqQOynf2xRX8T5ZgL4w07Wu",
    highlights: [
      "Built a NextJS front end with File-Based routing and image compression for optimized performance.",
      "Developed a scalable NestJS + PostgreSQL backend with JWT authentication and AWS S3 for secure PDF and image uploads.",
      "Built core modules including Enquiry, Orders, and Production, featuring a dynamic Quote Calculator and sharable enquiry forms with role-based permissions.",
      "Integrated WhatsApp Cloud API and Amazon SES for automated real-time customer notifications.",
      "Implemented a CI/CD pipeline for seamless build, test, and deployment workflows.",
      "Containerized services with Docker and deployed on AWS EC2, with a live production environment.",
      "The system delivers a reliable, scalable infrastructure supporting B2B workflows.",
    ],
    description:
      "A scalable B2B platform with Next.js and NestJS, featuring JWT auth, PostgreSQL, and AWS S3 for file uploads. Core modules include Enquiries, Orders, and Production, with real-time notifications via WhatsApp Cloud API and Amazon SES. Deployed using Docker on AWS EC2 with a CI/CD pipeline for seamless production-ready deployments.",
  },
  {
    title: "Chessmate.Club: Multiplayer",
    tech: ["Flutter", "NestJS", "MongoDB"],
    image:
      "https://w8psdz103p.ufs.sh/f/hdGRfDWTOhVSnj1zXIrfpDrG6RUhnXQ2a4C8Hqgzdx0t5cvO",
    highlights: [
      "Built a cross-platform real-time multiplayer chess app in Flutter using Socket.io for low-latency communication.",
      "Integrated Firebase Auth with Google and Apple sign-in for secure, seamless authentication.",
      "Applied BLoC and Repository pattern for scalable state management and live game synchronization.",
      "Used Stockfish via FFI for offline AI, and integrated chess libraries for legal moves, timers, and matchmaking.",
      "Containerized the backend with Docker and deployed on AWS EC2 for scalable, production-ready hosting.",
    ],
    description:
      "A cross-platform real-time multiplayer chess app using Flutter and Socket.io for low-latency gameplay. Integrated Firebase Auth, Google/Apple sign-in, and offline Stockfish support via FFI. Applied BLoC and Repository patterns for scalable state management. Backend containerized with Docker and hosted on AWS EC2 for a reliable, concurrent multiplayer experience.",
  },
  {
    title: "Cudddle: A Dating App",
    tech: ["Flutter", "NodeJS", "MongoDB"],
    image:
      "https://w8psdz103p.ufs.sh/f/hdGRfDWTOhVSAeq3mwX1kpT6ePmZ5J029BVLgEjnQfadbCIr",
    highlights: [
      "Built a scalable Flutter app using BLoC and Repository Pattern.",
      "Developed a scalable Express + MongoDB backend with JWT-authenticated REST APIs.",
      "Implemented real-time chat using Firebase and push notifications via Firebase Cloud Messaging.",
      "Integrated OpenAPI-powered Wingman/Wingwoman helpers for AI-driven matchmaking assistance.",
      "Implemented media rich features including image capture, cropping and compression for profile building.",
    ],
    description:
      "A dating app built with flutter with a real-time chat system (Firebase) and push notifications (FCM). Integrated JWT-auth REST APIs with an Express + MongoDB backend. Added AI-driven matchmaking via OpenAPI, media features like image capture, cropping, and compression, and applied BLoC + Repository patterns for clean, maintainable architecture.",
  },
  {
    title: "Anony: Anonymous Q&A System",
    tech: ["Flutter", "Firebase", "Apple Push Notification Service"],
    image:
      "https://w8psdz103p.ufs.sh/f/hdGRfDWTOhVSbAh5HpKOXdAZfF04JtGK7H25rsNWoCjkP1L9",
    highlights: [
      "Anonymous Q&A system built within a Flutter app.",
      "Unique link generation for sharing on Instagram or with friends.",
      "Privacy ensured by delivering questions directly to recipients.",
      "Authentication via Google Sign-In (Firebase) for Android and Apple ID for iOS.",
      "Push notifications using Apple Push Notification Service and Firebase Notification Service.",
    ],
    description:
      "An anonymous Q&A feature in a Flutter app with unique sharable links for Instagram and private message delivery. Integrated Google Sign-In (Android) and Apple ID login (iOS). Push notifications powered by Apple Push Notification Service and Firebase notify users instantly of new anonymous questions for continuous engagement.",
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

const Projects: React.FC = () => (
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
              className="text-left text-xs space-y-1 opacity-70 flex-1"
              id={`desc-${idx}`}
            >
              {project.description}
            </div>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="mt-2 mb-2 rounded md:w-36 object-cover"
                style={{
                  height: "auto",
                  maxHeight: "none",
                  alignSelf: "stretch",
                }}
              />
            )}
          </div>
          <div>
            {project.highlights.map((highlight, i) => (
              <li key={i} className="text-xs opacity-70 mb-1">
                {highlight}
              </li>
            ))}
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

export default Projects;
