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
  description: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    title: "Neo-CNS",
    description: [
      "Developed a full-stack Courier Network System for order management, shipment tracking, and courier assignment.",
      "Features role-based dashboards, real-time status updates, email notifications, and admin user management.",
      "Integrated AI/ML models for accurate ETA prediction, payment fraud detection, and intelligent customer chatbot support.",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Python (ML)"],
    githubUrl: "https://github.com/saurabhgupta3", // Update with actual repo URL
    liveUrl: "#", // Update with actual live URL
  },
  {
    title: "StayEase-bnb",
    description: [
      "A full-stack web application for property rentals, allowing users to easily list, browse, and book stays online.",
      "Followed MVC pattern with Joi validation, ownership authorization, and Mongoose hooks for cascading deletes.",
      "Integrated Passport.js for authentication, Cloudinary for image uploads, and Leaflet.js with OpenStreetMap API for maps.",
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "React"],
    githubUrl: "https://github.com/saurabhgupta3", // Update with actual repo URL
    liveUrl: "#", // Update with actual live URL
  },
  {
    title: "FlexHub",
    description: [
      "A full-stack fitness web app with workout sessions, membership plans, BMI calculator, and community contact form.",
      "Built an Express.js REST API with CORS, dotenv credentials, input validation, and error handling with HTTP status codes.",
      "Integrated Nodemailer with Gmail SMTP for email, Axios for API communication, and React Toastify for notifications.",
    ],
    techStack: ["React", "Node.js", "Express.js", "Axios"],
    githubUrl: "https://github.com/saurabhgupta3", // Update with actual repo URL
    liveUrl: "#", // Update with actual live URL
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
