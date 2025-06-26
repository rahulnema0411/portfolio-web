import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

const contacts = [
    {
        href: "https://github.com/rahulnema0411",
        label: "GitHub",
        icon: <Github size={18} />,
    },
    {
        href: "mailto:rahulnema6362@gmail.com",
        label: "Email",
        icon: <Mail size={18} />,
    },
    {
        href: "https://linkedin.com/in/rahulnema0411",
        label: "LinkedIn",
        icon: <Linkedin size={18} />,
    },
];

const ContactSection: React.FC = () => (
  <section id="contacts" className="flex justify-center items-center gap-2 py-12">
    {contacts.map(({ href, label, icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100 transition-colors shadow"
      >
        {icon}
      </a>
    ))}
  </section>
);

export default ContactSection;
