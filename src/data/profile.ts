import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Hamza Hassan",
  role: "Full-Stack Developer",
  location: "Rawalpindi, Pakistan",
  email: "hamzahassanhh2608@gmail.com",
  // phone: "+92-317-5446684", // uncomment only if you want it public
  github: "hmzahasan",
  githubUrl: "https://github.com/hmzahasan",
  headline:
    "Main responsive web apps, secure REST APIs aur LLM-powered features banata hoon.",
  availability: "Open to full-stack roles",
  about: [
    "Main Iqra University, Islamabad se BS Computer Science kar raha hoon (expected January 2027). Mera focus modern web development par hai: component-based frontends, backend REST APIs, aur secure, database-driven systems.",
    "Mera kaam React/Next.js aur Node.js/Express ke around hai, aur main apne projects mein LLMs (Gemini API) bhi integrate karta hoon, jaise resume analysis aur ek restaurant menu assistant.",
    "NESCOM mein internship ke dauran maine ek Azure DevOps extension banayi jo real project-management workflows mein use hui. Main team environment mein kaam karna aur nayi tools jaldi seekhna pasand karta hoon.",
  ],
  stats: [
    { value: "3.48", label: "CGPA / 4.0" },
    { value: "NESCOM", label: "Software dev intern, 2025" },
    { value: "6", label: "Projects built" },
  ],
};
