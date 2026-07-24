export type Project = {
  title: string;
  blurb: string;
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  featured?: boolean;
  status?: string;
  image?: string;
  categories: string[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  url?: string;
};

export type Post = {
  title: string;
  summary: string;
  date: string;
  url: string;
  readingTime?: string;
};

export const site = {
  name: "Parth Bhuptani",
  url: "https://parthbhuptani.vercel.app",
  profileImages: [
    "/profile.jpg",
  ],
  initials: "PB",
  role: "Full Stack Developer",
  location: "Ahmedabad, India",
  timezone: "Asia/Kolkata",
  email: "parthbhuptani10@gmail.com",
  greeting: "Hey, I'm Parth",
  tagline: "I build clean, modern websites and web apps where design, functionality, and even the smallest details matter.",
  about: [
    "Hey, I'm Parth, a final-year Information and Communication Technology student who enjoys building modern web applications with a focus on clean design, functionality, and thoughtful user experiences.",
    "I enjoy turning ideas into real projects, whether it's through hackathons, personal work, or open source. Building products, solving problems, and learning along the way are what keep me motivated.",
    "I'm currently expanding my skills in full stack development while strengthening my understanding of DSA and system design. My goal is to build software that is reliable, practical, and enjoyable to use.",
  ],
  tldr: [
    "Building full stack applications.",
    "Learning DSA and System design.",
    "Contributing to open source.",
    "Focus on writing clean code.",
  ],
  status: {
    available: true,
    availableText: "open to opportunities",
    nowLearning: " Python Fundamentals • System Design • DSA ",
    nowBuilding: "FitTrack",
    nowListening: "coding playlists",
  },
  socials: {
    github: "https://github.com/ParthBhuptani",
    linkedin: "https://linkedin.com/in/parth-bhuptani",
    twitter: "https://x.com/ParthBhuptani10",
    email: "mailto:parthbhuptani10@gmail.com",
    resume: "",
    // discord: "https://discord.gg/parthbhuptani",
    medium: "https://medium.com/@parthbhuptani",
  },
  experience: [
    {
      company: "Independent Developer",
      role: "Frontend Developer",
      period: "2025 — Present",
      blurb:
        "Built and deployed multiple SPAs & web applications. Engaged in competitive coding events like the Smart India Hackathon and HT codeathon.",
      url: "",
    },
  ] as Job[],
  projects: [
    {
      title: "FitTrack",
      blurb: "An AI-powered fitness platform that generates personalized 7-day workout and meal plans based on each user's goals, lifestyle, injuries, dietary preferences, and available equipment.",
      story: "Built with React, TypeScript, and Google Gemini, FitTrack creates tailored fitness and nutrition plans in real time while providing an AI coach for follow-up guidance. It also includes workout timers, progress tracking, hydration monitoring, interactive charts, and secure serverless AI integration with automatic API key fallback.\n\n*Designed for personalization • Built for real-world fitness planning.*",
      stack: [
        "React",
        "TypeScript",
        "Google Gemini API",
        "Recharts",
        "Vite",
        "Tailwind CSS",
      ],
      year: "2026",
      links: {
        live: "https://fittrack-planner.vercel.app/",
        source: "https://github.com/ParthBhuptani/fittrack",
      },
      featured: true,
      status: "In Progress",
      image: "/projects/fittrack.png",
      categories: ["AI", "Frontend"],
    },
    {
      title: "SplitSmart",
      blurb: "An AI-powered expense splitting application that simplifies shared bills with intelligent bill parsing, multiple split methods, and optimized settlement calculations for groups.",
      story: "Built with React, TypeScript, Tailwind CSS, and Google Gemini, SplitSmart supports equal, item-based, and percentage-based bill splitting while automatically extracting bill items from text or images using AI. It features smart settlement optimization, persistent group management, expense history, and serverless AI integration for a seamless bill-sharing experience.\n\n*Designed for effortless group payments • Built for intelligent expense management.*",
      stack: [
        "React",
        "TypeScript",
        "Google Gemini API",
        "Tailwind CSS",
        "Vite",
        "Framer Motion",
      ],
      year: "2026",
      links: {
        live: "https://splitsmart-expense.vercel.app",
        source: "https://github.com/ParthBhuptani/splitsmart",
      },
      featured: true,
      status: "Completed",
      image: "/projects/splitsmart.png",
      categories: ["AI", "Frontend"],
    },
    {
      title: "AI Travel Planner",
      blurb: "An AI-powered travel planning application that generates optimized multi-city itineraries, travel routes, budget allocation, and personalized activity recommendations in seconds.",
      story: "Built with Python, Streamlit, and Scikit-learn, the application combines machine learning with geospatial visualization to recommend destinations, optimize travel routes, distribute budgets across cities, and generate complete day-wise itineraries. Interactive maps and curated travel insights provide users with an end-to-end trip planning experience.\n\n*Designed for smarter travel • Built with AI-driven recommendations.*",
      stack: [
        "Python",
        "Streamlit",
        "Scikit-learn",
        "Pandas",
        "PyDeck",
      ],
      year: "2026",
      links: {
        live: "https://ai-travel-planner1.streamlit.app/",
        source: "https://github.com/ParthBhuptani/ai-travel-planner",
      },
      featured: true,
      status: "Completed",
      image: "/projects/aitravelplanner.png",
      categories: ["AI", "Machine Learning"],
    },
    {
      title: "FitMart (Open Source)",
      blurb: "Contributed to a community-driven MERN fitness e-commerce platform by resolving issues, improving features, and collaborating through pull requests.",
      story: "Worked on a production-scale React and Node.js application, contributing bug fixes and enhancements while following GitHub workflows, code reviews, and collaborative development practices.\n\n*Open source contribution • Production-scale collaboration.*",
      stack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "Tailwind CSS",
      ],
      year: "2026",
      links: {
        live: "https://fitmart-omega.vercel.app/",
        source: "https://github.com/parthbuilds-community/FitMart",
      },
      featured: false,
      status: "Contributor",
      image: "/projects/fitmart.png",
      categories: ["Open Source"],
    },
    // {
    //   title: "Nexus",
    //   blurb:
    //     "A workspace-based project management app featuring kanban boards, real-time activity tracking, nodemailer notifications, and robust team collaboration.",
    //   story:
    //     "Built to mimic enterprise collaboration canvases. Employs Next-Auth for role-based authentication, TanStack Query for caching and server synchronization, Recharts for team productivity insights, and @dnd-kit for seamless drag-and-drop workflow task transitions. Backed by a clean PostgreSQL database schema via Prisma.",
    //   stack: ["Next.js", "Prisma", "PostgreSQL", "React Query", "@dnd-kit", "Next-Auth"],
    //   year: "2026",
    //   links: {
    //     source: "https://github.com/ParthBhuptani/nexus",
    //   },
    //   featured: false,
    //   status: "In Progress",
    //   image: "/projects/nexus.png",
    //   categories: ["Fullstack", "Backend"],
    // },
  ] as Project[],
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    // "Shadcn UI",
    "PostgreSQL",
    "MongoDB",
    // "Prisma",
    "Supabase",
    "Firebase",
    "REST APIs",
    // "JWT",
    "Git",
    "GitHub",
    // "Postman",
    "Vercel",
    // "Figma",
    "C++",
    "Python",
  ],
  writing: [] as Post[],
  github: {
    username: "ParthBhuptani",
    contributionsLastYear: "500+",
  },
  footerNote: "Built with ❤️ and hardwork "
} as const;

export type Site = typeof site;
