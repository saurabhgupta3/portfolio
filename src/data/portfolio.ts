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
    url: "https://www.linkedin.com/in/saurabh-gupta-1b689226b/", // Update with your actual LinkedIn URL
    icon: "linkedin",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/saurabhgupta3", // Update with your actual LeetCode URL
    icon: "leetcode",
  },
  {
    name: "Email",
    url: "mailto:sggupta548@gmail.com", // Update with your actual email
    icon: "email",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" }, 
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
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
    imagePrimary: "/images/projects/stayease-bnb-11.png",
    imageSecondary: "/images/projects/stayease-bnb-22.png",
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
    title: "Memory-cards-game",
    slug: "memory-cards-game",
    description:
      "Interactive React memory card game with animated card flips and pair-matching gameplay.",
    techStack: ["React","HTML","CSS"],
    githubUrl: "https://github.com/saurabhgupta3/memory-cards-game",
    liveUrl: "https://saurabhgupta3.github.io/memory-cards-game/",
    imagePrimary: "/images/projects/memory-cards-game-1.png",
    imageSecondary: "/images/projects/memory-cards-game-2.png",
  },
  {
    title: "ShoppingCart",
    slug: "shoppingcart",
    description:
      "React-based e-commerce application with product browsing, cart management, and dynamic shopping interactions.",
    techStack: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/saurabhgupta3/shopping-cart",
    liveUrl: "https://my-shop3-opal.vercel.app/",
    imagePrimary: "/images/projects/shoppingcart-1.png",
    imageSecondary: "/images/projects/shoppingcart-2.png",
  },
  {
    title: "Weather App",
    slug: "weather-app",
    description:
      "City-based weather app using the OpenWeather API to display temperature, humidity, and conditions.",
    techStack: ["React", "JavaScript", "OpenWeather API"],
    githubUrl: "https://github.com/saurabhgupta3/weather-app-react",
    liveUrl: "https://saurabhgupta3.github.io/weather-app-react/",
    imagePrimary: "/images/projects/weather-app-1.png",
    imageSecondary: "/images/projects/weather-app-2.png",
  },
  {
    title: "Resume Generator",
    slug: "resume-generator",
    description:
      "Interactive resume generator that lets users enter personal, education, and experience details and instantly build a resume.",
    techStack: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/saurabhgupta3/resume-generator",
    liveUrl: "https://resume-generator-taupe-six.vercel.app/",
    imagePrimary: "/images/projects/resume-generator-1.png",
    imageSecondary: "/images/projects/resume-generator-2.png",
  },
  {
    title: "Shayari Duniya",
    slug: "shayariduniya",
    description:
      "A Hindi Shayari platform for writing, discovering, searching, and managing personal Shayari.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Web Storage API"],
    githubUrl: "https://github.com/saurabhgupta3/shayari",
    liveUrl: "https://saurabhgupta3.github.io/shayari/  ",
    imagePrimary: "/images/projects/shayari-1.png",
    imageSecondary: "/images/projects/shayari-2.png",
  },
  {
    title: "Tic Tac Toe",
    slug: "tictactoe",
    description:
      "Interactive Tic-Tac-Toe game with turn-based gameplay, win detection, and a responsive interface.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/saurabhgupta3/tic-tac-toe",
    liveUrl: "https://saurabhgupta3.github.io/tic-tac-toe/",
    imagePrimary: "/images/projects/tictactoe-1.png",
    imageSecondary: "/images/projects/tictactoe-2.png",
  },
  {
    title: "Simon Say Game",
    slug: "simonsaygame",
    description:
      "Memory game that challenges players to repeat the increasingly complex color sequences.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/saurabhgupta3/simon-say-game",
    liveUrl: "https://saurabhgupta3.github.io/simon-say-game/",
    imagePrimary: "/images/projects/simonsaygame-1.png",
    imageSecondary: "/images/projects/simonsaygame-2.png",
  },
  {
    title: "My Portfolio",
    slug: "myportfolio",
    description:
      "Personal developer portfolio showcasing projects, technical skills, experience, and interactive UI animations.",
    techStack: ["Next.js", "React", "TypeScript", "CSS"],
    githubUrl: "https://github.com/saurabhgupta3/portfolio",
    liveUrl: "",
    imagePrimary: "/images/projects/myportfolio-1.png",
    imageSecondary: "/images/projects/myportfolio-2.png",
  },
  {
    title: "Maiyu",
    slug: "maiyu",
    description:
      "AI-powered career platform that tailors resumes to job descriptions and conducts personalized mock interviews.",
    techStack: ["MERN", "Python", "AI/ML"],
    githubUrl: "https://github.com/saurabhgupta3/maiyu",
    liveUrl: "https://maiyu.vercel.app/",
    imagePrimary: "/images/projects/maiyu-1.png",
    imageSecondary: "/images/projects/maiyu-2.png",
  },
  {
    title: "Calculator",
    slug: "calculator",
    description:
      "Interactive calculator for performing basic arithmetic operations with a custom responsive interface.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/saurabhgupta3/calculator",
    liveUrl: "https://saurabhgupta3.github.io/calculator/",
    imagePrimary: "/images/projects/calculator-1.png",
    imageSecondary: "/images/projects/calculator-2.png",
  },
  {
    title: "Admin Dashboard",
    slug: "admindashboard",
    description:
      "Responsive admin dashboard interface with project cards, announcements, navigation, and trending sections.",
    techStack: ["HTML5", "CSS3"],
    githubUrl: "https://github.com/saurabhgupta3/admin-dashboard",
    liveUrl: "https://saurabhgupta3.github.io/admin-dashboard/",
    imagePrimary: "/images/projects/admin-dash-1.png",
    imageSecondary: "/images/projects/admin-dash-2.png",
  },
  {
    title: "Mood Swing",
    slug: "moodswing",
    description:
      "Platform for managing and discovering motivational Suvichars based on different moods.",
    techStack: ["Angular", "TypeScript", "Spring Boot", "Java", "MySQL"],
    githubUrl: "https://github.com/saurabhgupta3/mood-swing",
    liveUrl: "https://mood-swing-inky.vercel.app/",
    imagePrimary: "/images/projects/mood-swing-1.png",
    imageSecondary: "/images/projects/mood-swing-2.png",
  }
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
  {
    degree: "Class XII",
    specialization: "Science",
    institution: "S.P.D.S Intermediate College",
    location: "MadarDeeh Jaunpur",
    duration: "2020 — 2021",
    grade: "Percentage: 72.2%",
  },
  {
    degree: "Class X",
    specialization: "UP Board",
    institution: "S.P.D.S Intermediate College",
    location: "MadarDeeh Jaunpur",
    duration: "2018 — 2019",
    grade: "Percentage: 82.83%",
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
