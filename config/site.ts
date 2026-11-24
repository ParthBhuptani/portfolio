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
  url: "https://parthbhuptani.me",
  profileImages: [
    "/profile.jpg",
  ],
  initials: "PB",
  role: "Full Stack Developer",
  location: "Ahmedabad, India",
  timezone: "Asia/Kolkata",
  email: "parthbhuptani10@gmail.com",
  // greeting: "Hey, I'm Parth",
  tagline: "I build clean, modern websites and web apps where design, functionality, and even the smallest details matter.",
  about: [
    "Hey, I'm Parth, a final-year Information and Communication Technology student passionate about building modern web applications with clean design, functionality, and thoughtful user experiences.",
    "I enjoy turning ideas into real projects, whether it's through hackathons, personal work, or open source. Building products, solving problems, and continuously learning are what keep me motivated.",
    "I'm currently expanding my skills in full stack development while strengthening my understanding of DSA and system design. My goal is to build software that is reliable, practical, and enjoyable to use.",
  ],
  tldr: [
    "Building full-stack applications.",
    "Learning DSA and System Design.",
    "Contributing to open source.",
    "Writing clean, maintainable code",
  ],
  status: {
    available: true,
    availableText: "Open to opportunities",
    nowLearning: " Python Fundamentals • System Design • DSA ",
    nowBuilding: "FitTrack",
    nowListening: "coding playlists",
  },
  socials: {
    github: "https://github.com/ParthBhuptani",
    linkedin: "https://linkedin.com/in/parthbhuptani",
    twitter: "https://x.com/ParthBhuptani10",
    email: "mailto:parthbhuptani10@gmail.com",
    resume: "/resume",
    // discord: "https://discord.gg/parthbhuptani",
    medium: "https://medium.com/@parthbhuptani",
  },
  experience: [
    {
      company: "FlyRank AI",
      role: "Backend AI Engineer - Intern",
      period: "Sep 2026 — Present",
      blurb:
        "Working on backend development for AI-powered applications, focusing on API design, database integration, and reliable server-side workflows. Exploring retrieval-augmented generation (RAG), structured outputs, AI agents, and tool-calling workflows, with an emphasis on data grounding, output validation, evaluation, and error handling.",
      url: "https://internship.flyrank.ai/intern",
    },
    // {
    //   company: "Independent Developer",
    //   role: "Full Stack Developer",
    //   period: "2025 — Present",
    //   blurb:
    //     "Built and deployed AI-powered full-stack applications including FitTrack, SplitSmart, and AI Travel Planner while strengthening full-stack development through real-world projects.",
    // },
  ] as Job[],
  projects: [
    {
      title: "FitTrack",
      blurb: "AI-powered fitness platform that generates personalized workout and diet plans using Google Gemini AI.",
      story: "Built with React, TypeScript, Tailwind CSS, and Google Gemini AI. FitTrack generates personalized workout and nutrition plans, includes progress tracking, hydration monitoring, interactive charts, and an AI coach for real-time guidance.\n\n*Designed for personalized fitness • Built with AI.*",
      stack: [
        "React",
        "TypeScript",
        "Google Gemini API",
        "Supabase",
        "Recharts",
        "Vite",
        "Tailwind CSS",
      ],
      year: "2026",
      links: {
        live: "https://fittrack.parthbhuptani.me/",
        source: "https://github.com/ParthBhuptani/fittrack",
      },
      featured: true,
      status: "In Progress",
      image: "/projects/fittrack.png",
      categories: ["AI", "Frontend"],
    },

    {
      title: "PaperPilot",
      blurb:
        "AI-powered research companion that helps students discover papers, understand research, explore project ideas, and find related open-source repositories.",
      story:
        "Built with Python, Streamlit, Gemma 4, and the arXiv and GitHub APIs. PaperPilot searches research papers, generates beginner, student, and expert-level summaries, answers follow-up questions using paper abstracts and metadata, suggests weekend-sized project ideas, and discovers related repositories with good first issues.\n\n*From research paper to open-source contribution.*",
      stack: [
        "Python",
        "Streamlit",
        "Gemma 4",
        "Gemini API",
        "arXiv API",
        "GitHub API",
      ],
      year: "2026",
      links: {
        live: "https://paperpilot-resarch-paper.streamlit.app",
        source: "https://github.com/ParthBhuptani/paperpilot",
      },
      featured: false,
      status: "In progress",
      categories: ["AI", "Research", "Hackathon"],
    },
    {
      title: "Dukaan Saathi",
      blurb:
        "Multilingual AI-powered WhatsApp reply assistant designed to help Indian small business owners respond to customers naturally.",
      story:
        "Built using Python, Gradio, Hugging Face Spaces, and Qwen2.5-7B-Instruct for the Build Small Hackathon. Shop owners can configure their business profile and generate short, friendly, professional customer replies in Hindi, Gujarati, English, and Hinglish. Generated responses can be copied and sent through WhatsApp.\n\n*Making AI useful for everyday local businesses.*",
      stack: [
        "Python",
        "Gradio",
        "Hugging Face Spaces",
        "Qwen2.5-7B-Instruct",
        "Prompt Engineering",
      ],
      year: "2026",
      links: {
        live: "https://huggingface.co/spaces/ParthBhuptani/build-small-hackathon",
      },
      featured: true,
      status: "Completed",
      image: "/projects/dukaan_saathi.png",
      categories: ["AI", "Hackathon"],
    },
    {
      title: "PrepMate AI",
      blurb:
        "Multilingual AI voice companion that helps students prepare for placements through interactive learning and interview practice.",
      story:
        "Customized a real-time voice AI application into a learning companion for college students and fresh graduates. Uses Deepgram for speech recognition, Gemini for AI responses, Murf Falcon for natural text-to-speech, and LiveKit for real-time voice conversations. Designed to support English, Hindi, and Gujarati across DSA, aptitude, programming, and interview preparation.\n\n*Learn, practise, and prepare through voice conversations.*",
      stack: [
        "Python",
        "TypeScript",
        "Next.js",
        "LiveKit",
        "Deepgram",
        "Gemini API",
        "Murf Falcon",
      ],
      year: "2026",
      links: {
        source: "https://github.com/ParthBhuptani/prepmate-ai",
      },
      featured: false,
      status: "In Progress",
      categories: ["AI", "Voice AI"],
    },
    {
      title: "LeadOrbit (Open Source)",
      blurb:
        "Multi-tenant outbound sales automation platform for managing leads, building campaigns, and tracking outreach engagement.",
      story:
        "Built an outbound outreach MVP using Django REST Framework and a JavaScript-based dashboard. Includes organization-based authentication, CSV lead importing, campaign sequences, sender account connections, AI-assisted email drafting, and engagement analytics. Integrates Gmail API for email sending and Twilio for SMS and call workflows when configured.\n\n*Streamlining lead management and campaign outreach.*",
      stack: [
        "Python",
        "Django",
        "Django REST Framework",
        "Celery",
        "JavaScript",
        "Bootstrap 5",
        "Chart.js",
        "SQLite",
        "Gmail API",
        "Twilio",
        "OpenRouter",
        "Gemini API",
      ],
      year: "2026",
      links: {
        source: "https://github.com/ParthBhuptani/LeadOrbit",
      },
      featured: false,
      status: "Contibutor",
      categories: ["Open Source"],
    },

    {
      title: "SplitSmart",
      blurb: "AI-powered expense splitting app with bill parsing, smart settlement, and group expense management.",
      story: "Built with React, TypeScript, Tailwind CSS, and Google Gemini AI. SplitSmart extracts bill items from text or images, supports multiple split methods, optimizes settlements, and manages shared expenses with persistent group history.\n\n*Designed for effortless bill sharing • Built with AI.*",
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
      blurb: "AI-powered travel planner that creates personalized itineraries, optimizes routes, and estimates travel budgets.",
      story: "Built with Python, Streamlit, Scikit-learn, and Pandas. The application generates personalized travel itineraries, recommends destinations, optimizes routes, and visualizes trips with interactive maps.\n\n*Designed for smarter travel planning • Powered by AI.*",
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
      featured: false,
      status: "Completed",
      image: "/projects/aitravelplanner.png",
      categories: ["AI", "Machine Learning"],
    },
    {
      title: "FitMart (Open Source)",
      blurb: "Contributed three merged pull requests to a production-scale open-source MERN fitness e-commerce platform.",
      story: "Contributed bug fixes and feature improvements to a production-scale MERN application while collaborating through GitHub pull requests, code reviews, and open-source development workflows.\n\n*3 merged pull requests • Open-source collaboration.*",
      stack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "Tailwind CSS",
        "Git",
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
    {
      title: "PromptGenius",
      blurb:
        "AI-powered Chrome extension that rewrites, enhances, and optimizes prompts directly inside your browser.",
      story:
        "PromptGenius is a Chrome Extension designed to improve prompt writing without leaving your current webpage. It integrates Google Gemini to rewrite, enhance, summarize, and optimize prompts for different AI platforms. The extension focuses on speed, productivity, and a seamless browser experience while providing instant AI assistance across websites.\n\n*Built to make prompt engineering faster and more accessible inside the browser.*",
      stack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Chrome Extension API",
        "Google Gemini",
        "Vite",
      ],
      year: "2026",
      links: {
        source: "https://github.com/ParthBhuptani/promptgenius-chrome-extension",
      },
      featured: true,
      status: "Completed",
      image: "/projects/promptgenius.png",
      categories: ["Extension"],
    }
  ] as Project[],

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Firebase",
    "REST APIs",
    "Git",
    "GitHub",
    "Vercel",
    "Python",
    "C++",
  ],
  writing: [] as Post[],
  github: {
    username: "ParthBhuptani",
    contributionsLastYear: "250+",
  },
  footerNote: "Built with ❤️ and hard work "
} as const;

export type Site = typeof site;
