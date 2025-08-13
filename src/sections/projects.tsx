import React from "react";

const projects = [
  {
    title: "Factura (Web Application)",
    tech: ["NextJS", "NestJS", "PostgreSQL"],
    image:
      "https://w8psdz103p.ufs.sh/f/hdGRfDWTOhVSBsv6BIWHUjDKPCqQOynf2xRX8T5ZgL4w07Wu",
    highlights: [
      "Enabled real-time customer engagement with automated WhatsApp and email updates.",
      "Ensured consistent uptime and deployment stability with automated CI/CD pipelines and containerized architecture.",
      "Developed a Next.js frontend (App Router, file-based routing, image optimization) for high-performance user experiences.",
      "Built a scalable NestJS + PostgreSQL backend with modular architecture and JWT-based role-based authentication.",
      "Implemented core B2B modules: Enquiries, Orders, and Production workflows with role-based access control.",
      "Delivered advanced features like a dynamic quote calculator, sharable enquiry forms, and real-time WhatsApp Cloud API + Amazon SES integration.",
    ],
    description:
      "A scalable B2B platform with Next.js and NestJS, featuring JWT auth, PostgreSQL, and AWS S3 for file uploads. Core modules include Enquiries, Orders, and Production, with real-time notifications via WhatsApp Cloud API and Amazon SES. Deployed using Docker on AWS EC2 with a CI/CD pipeline for seamless production-ready deployments.",
  },
  {
    title: "Chessmate.Club: Multiplayer",
    tech: ["React-Native", "NestJS", "MongoDB"],
    image:
      "https://w8psdz103p.ufs.sh/f/hdGRfDWTOhVSnj1zXIrfpDrG6RUhnXQ2a4C8Hqgzdx0t5cvO",
    highlights: [
      "Delivered a smooth, low-latency multiplayer chess experience across Android and iOS.",
      "Built a Flutter frontend using the Repository pattern for maintainable, scalable state management.",
      "Dockerized a Node.js backend and deployed on AWS ECS to handle scalable multiplayer sessions.",
      "Integrated the Stockfish AI engine via FFI for offline gameplay, and implemented chess logic libraries for legal moves, timers, and matchmaking.",
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
      "Enabled seamless real-time chat and AI-assisted matchmaking with responsive performance.",
      "Improved user engagement through interactive media features and personalized matching suggestions.",
      "Developed a Flutter frontend using the Repository pattern for scalable state management.",
      "Built an Express.js + MongoDB backend with JWT-authenticated REST APIs.",
      "Integrated OpenAPI-powered Wingman/Wingwoman assistants for contextual AI matchmaking support.",
    ],
    description:
      "A dating app built with flutter with a real-time chat system (Firebase) and push notifications (FCM). Integrated JWT-auth REST APIs with an Express + MongoDB backend. Added AI-driven matchmaking via OpenAPI, media features like image capture, cropping, and compression, and applied BLoC + Repository patterns for clean, maintainable architecture.",
  },
  {
    title: "Anony: Anonymous Q&A System",
    tech: ["React-Native", "Firebase", "Apple Push Notification Service"],
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
              className="text-left text-xs space-y-1 opacity-70 flex-1 font-semibold"
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
              <li key={i} className="text-xs font-semibold opacity-70 mb-1">
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
