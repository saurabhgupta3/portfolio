// ─── Portfolio Data ─────────────────────────────────────────────────────────
// Centralized data file — edit this to update your portfolio content.

export const personalInfo = {
  name: "Saurabh Gupta",
  title: "Software Developer",
  tagline: "Building robust, scalable web applications with modern technologies.",
  bio: `I'm a passionate Software Developer and Computer Science student specializing in Artificial Intelligence. I love building full-stack web applications that solve real-world problems — from intelligent courier systems to fitness platforms. With a strong foundation in Data Structures, Algorithms, and modern web technologies, I bring ideas to life through clean, efficient code.`,
  resumeUrl:
    "https://drive.google.com/file/d/1QoOoCV_eXB2-gPhLU9Gi6SLFbL332UAa/view?usp=sharing",
  profileImage: "/images/profile-alt.png",
  profileImageAlt: "/images/profile.png",
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/saurabhgupta3",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/saurabhgupta", // Update with your actual LinkedIn URL
    icon: "linkedin",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/saurabhgupta", // Update with your actual LeetCode URL
    icon: "leetcode",
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com", // Update with your actual email
    icon: "email",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "C++" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "TypeScript" },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Bootstrap" },
      { name: "Tailwind CSS" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Angular" },
      { name: "Redux" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Spring Boot" },
      { name: "JWT" },
      { name: "Mongoose" },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: [{ name: "MongoDB" }, { name: "MySQL" }],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Docker" },
    ],
  },
  {
    category: "CS Fundamentals",
    icon: "📚",
    skills: [
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "OOP" },
      { name: "DBMS" },
      { name: "OS" },
      { name: "CN" },
      { name: "Software Engineering" },
      { name: "System Design" },
    ],
  },
];

export interface Project {
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imagePrimary: string;
  imageSecondary: string;
}

export const INITIAL_PROJECT_COUNT = 3;

// Live Demo: set liveUrl to your deployed URL (Vercel, Netlify, etc.).
// Leave as "" to show a disabled Live Demo button until you deploy.
// Screenshots: place two PNGs per project in public/images/projects/
//   e.g. neo-cns-1.png (default) and neo-cns-2.png (flip on hover).

export const projects: Project[] = [
  {
    title: "Neo-CNS",
    slug: "neo-cns",
    description:
      "Full-stack courier network system with real-time tracking, role-based dashboards, and ML-powered ETA and fraud detection.",
    techStack: ["React", "Node.js", "MongoDB", "Python"],
    githubUrl: "https://github.com/saurabhgupta3/neo-cns",
    liveUrl: "https://neo-cns.vercel.app/",
    imagePrimary: "/images/projects/neo-cns-1.png",
    imageSecondary: "/images/projects/neo-cns-2.png",
  },
  {
    title: "StayEase-bnb",
    slug: "stayease-bnb",
    description:
      "Property rental platform with map-based listings, Passport.js authentication, and Cloudinary image uploads.",
    techStack: ["React", "Node", "MongoDB", "Express"],
    githubUrl: "https://github.com/saurabhgupta3/stayease-bnb",
    liveUrl: "https://stayease-bnb.onrender.com/",
    imagePrimary: "/images/projects/stayease-bnb-1.png",
    imageSecondary: "/images/projects/stayease-bnb-2.png",
  },
  {
    title: "FlexHub",
    slug: "flexhub",
    description:
      "Fitness web app with workouts, memberships, BMI calculator, and REST API with email notifications.",
    techStack: ["React", "Node.js", "Express.js", "Axios"],
    githubUrl: "https://github.com/saurabhgupta3/flexhub",
    liveUrl: "https://flexhub-rouge.vercel.app/",
    imagePrimary: "/images/projects/flexhub-1.png",
    imageSecondary: "/images/projects/flexhub-2.png",
  },
  {
    title: "CardioAI",
    slug: "cardioai",
    description:
      "AI-driven cardiovascular health analysis tool that uses machine learning models to deliver predictive health insights from user data.",
    techStack: ["Python", "Machine Learning", "React"],
    githubUrl: "https://github.com/saurabhgupta3/CardioAI-main",
    liveUrl: "",
    imagePrimary: "/images/projects/cardioai-1.png",
    imageSecondary: "/images/projects/cardioai-2.png",
  },
  {
    title: "FilmGenie",
    slug: "filmgenie",
    description:
      "Movie discovery and rental platform with search, filtering, and a responsive React frontend for browsing film catalogs.",
    techStack: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/saurabhgupta3/FilmGenie",
    liveUrl: "",
    imagePrimary: "/images/projects/filmgenie-1.png",
    imageSecondary: "/images/projects/filmgenie-2.png",
  },
  {
    title: "Admin Dashboard",
    slug: "admin-dashboard",
    description:
      "Responsive admin panel with data visualization widgets, user management, and a modular layout for monitoring key metrics.",
    techStack: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/saurabhgupta3/admin-dashboard",
    liveUrl: "",
    imagePrimary: "/images/projects/admin-dashboard-1.png",
    imageSecondary: "/images/projects/admin-dashboard-2.png",
  },
  {
    title: "CMS",
    slug: "cms",
    description:
      "Content management system with full CRUD operations, structured content editing, and role-based access control.",
    techStack: ["Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/saurabhgupta3/CMS",
    liveUrl: "",
    imagePrimary: "/images/projects/cms-1.png",
    imageSecondary: "/images/projects/cms-2.png",
  },
  {
    title: "LetsEat",
    slug: "letseat",
    description:
      "Restaurant discovery app for browsing menus, exploring dishes, and managing a food ordering cart with a clean UI.",
    techStack: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/saurabhgupta3/LetsEat",
    liveUrl: "",
    imagePrimary: "/images/projects/letseat-1.png",
    imageSecondary: "/images/projects/letseat-2.png",
  },
  {
    title: "Task Bee",
    slug: "task-bee",
    description:
      "Task management app with priority sorting, deadline tracking, and persistent storage for daily productivity workflows.",
    techStack: ["React", "JavaScript", "Local Storage"],
    githubUrl: "https://github.com/saurabhgupta3/task-bee",
    liveUrl: "",
    imagePrimary: "/images/projects/task-bee-1.png",
    imageSecondary: "/images/projects/task-bee-2.png",
  },
  {
    title: "TalkSmart",
    slug: "talksmart",
    description:
      "Smart conversation assistant that integrates NLP capabilities for intelligent, context-aware chat interactions.",
    techStack: ["Python", "JavaScript", "NLP"],
    githubUrl: "https://github.com/saurabhgupta3/talkSmart",
    liveUrl: "",
    imagePrimary: "/images/projects/talksmart-1.png",
    imageSecondary: "/images/projects/talksmart-2.png",
  },
  {
    title: "Weather App",
    slug: "weather-app",
    description:
      "Real-time weather dashboard built with React, fetching live forecast data from external APIs with location search.",
    techStack: ["React", "API Integration", "CSS"],
    githubUrl: "https://github.com/saurabhgupta3/weather-app-react",
    liveUrl: "",
    imagePrimary: "/images/projects/weather-app-1.png",
    imageSecondary: "/images/projects/weather-app-2.png",
  },
  {
    title: "Digitomize",
    slug: "digitomize",
    description:
      "Digital platform with a modern UI and full-stack architecture for streamlined user workflows and data management.",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/saurabhgupta3/digitomize",
    liveUrl: "",
    imagePrimary: "/images/projects/digitomize-1.png",
    imageSecondary: "/images/projects/digitomize-2.png",
  },
];

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  type: string;
}

export const experiences: Experience[] = [
  {
    role: "Exceller Edge Fellow",
    company: "Capgemini",
    duration: "January 2026 — April 2026",
    description:
      "Successfully completed the Capgemini Exceller Edge Fellowship Program, a competitive program focused on industry-ready engineering skills, professional development, and hands-on project experience.",
    type: "Fellowship",
  },
];

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  specialization: string;
}

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Artificial Intelligence",
    institution: "Galgotias College of Engineering and Technology",
    location: "Greater Noida",
    duration: "2022 — 2026",
    grade: "CGPA: 8.07",
  },
];

export interface Certification {
  title: string;
  issuer: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    title: "Full Stack Web Development",
    issuer: "Apna College",
    icon: "🎓",
  },
];

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    title: "950+ DSA Problems Solved",
    description:
      "Across LeetCode, Codeforces, GeeksforGeeks, and Coding Ninjas",
    icon: "🏆",
  },
];

export const aboutStats = [
  { label: "Projects Built", value: "11+" },
  { label: "DSA Problems", value: "950+" },
  { label: "CGPA", value: "8.07" },
];
