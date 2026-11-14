import type { Project } from "@/types";

// Har project ke saath repoUrl / liveUrl add kar sakte hain, jaise:
// repoUrl: "https://github.com/hmzahasan/your-repo"
// Buttons sirf tab dikhte hain jab link set ho.

export const projects: Project[] = [
  {
    title: "AI Resume & Job Match Analyzer",
    kind: "MERN + Gemini AI",
    summary:
      "Users resume aur target job description submit karte hain, aur Gemini AI compatibility verdict deta hai.",
    points: [
      "Complete JWT authentication ke saath full-stack MERN app.",
      "Skill-gap analysis, personalized skill preparation plan aur interview questions un users ke liye jo match nahi karte.",
      "AI-powered resume generation jo resume ko given job description ke mutabiq tailor karti hai.",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Gemini API", "JWT"],
    featured: true,
  },
  {
    title: "Restaurant Menu Assistant",
    kind: "LLM Application",
    // TODO: apne asal features aur tech stack yahan update karein.
    summary:
      "LLM-powered assistant jo customers ko natural language mein menu ke baare mein sawal poochne aur sahi dish chunne mein madad karta hai.",
    points: [
      "Menu data par based conversational answers: ingredients, options aur recommendations.",
      "LLM integration ke zariye customer queries ko samajhna aur relevant jawab dena.",
    ],
    stack: ["LLM", "AI Integration", "Conversational UI"],
    featured: true,
  },
  {
    title: "SkillForge AI",
    kind: "Final Year Project",
    summary:
      "AI-powered personalized learning web app jo har learner ke liye roadmap banati hai aur uska progress track karti hai.",
    points: [
      "Personalized learning roadmaps aur YouTube Data API v3 se curated content.",
      "AI chatbot aur auto-generated quizzes (Google Gemini API).",
      "Progress tracking aur digital certificates; JWT auth aur Firebase ke saath.",
    ],
    stack: [
      "Next.js",
      "Django REST Framework",
      "MongoDB",
      "Firebase",
      "Gemini API",
      "YouTube Data API",
    ],
    featured: true,
  },
  {
    title: "Banking Transaction System",
    kind: "Backend",
    summary:
      "Secure money transfer ke liye backend banking system, jo har transaction ko accurately record karta hai.",
    points: [
      "JWT-based authentication aur accounts ke darmiyan secure transfers.",
      "Ledger-based system jo har transaction ko record aur track karta hai.",
      "Idempotency keys jo transfer fail ya interrupt hone par duplicate transactions rokti hain.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
  },
  {
    title: "Employee Management System",
    kind: "Frontend",
    summary:
      "Admin tasks create aur assign karta hai, aur har employee ka apna dashboard hota hai.",
    points: [
      "Employees apne tasks ka status update karte hain: pending, completed ya failed.",
      "React Hooks aur component-based architecture; data local storage mein persist hota hai.",
    ],
    stack: ["React.js", "React Hooks", "Local Storage"],
  },
  {
    title: "Movie Database App",
    kind: "Frontend",
    summary:
      "Public movie API se live data fetch karne wali movie browsing app, dashboard-style UI ke saath.",
    points: [
      "Search aur category-based browsing.",
      "Reusable components aur React Hooks.",
    ],
    stack: ["React.js", "REST API", "React Hooks"],
  },
];
