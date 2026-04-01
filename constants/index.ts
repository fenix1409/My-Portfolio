import { FaFacebook } from "react-icons/fa";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  tools: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "Al-Muamalat",
    description:
      "Al-Muamalat is a modern web application designed for managing financial transactions and services. It features a user-friendly interface built with React, TypeScript, and Tailwind CSS. The project utilizes React Query for efficient data fetching and state management, and Axios for API requests. The application includes features such as transaction history, account management, and financial analytics.",
    image: "/projects/al-muamalat.png",
    link: "https://www.al-muamalat.uz/",
    tools: ["React JS", "Tailwind CSS", "CSS", "TypeScript", "React-Query", "Axios", "Framer-motion", "Swiper"],
  },
  {
    title: "GoCart E-Commerce Platform",
    description:
      "GoCart is a modern e-commerce platform built with Next.js, JavaScript, and Tailwind CSS. It features a sleek, responsive design and utilizes React Query for efficient data fetching and state management. The project includes a product catalog, shopping cart functionality, and user authentication using Clerk. GoCart provides a seamless shopping experience with smooth animations and intuitive UI components.",
    image: "/projects/gocart.png",
    link: "https://gocart-shopify-store.vercel.app/",
    github: "https://github.com/fenix1409/gocart-shopify-store",
    tools: ["JavaScript", "Next.js", "Tailwind Css", "Redux Toolkit", "React-Query", "Clerk Auth"],
  },
  {
    title: "QuickGPT - AI Chatbot Platform",
    description:
      "QuickGPT is an AI chatbot platform that allows users to interact with an AI assistant for various tasks. Built with React, TypeScript, and Tailwind CSS, it features a sleek, modern design and utilizes OpenAI's GPT-3.5 API for natural language processing. The project includes real-time chat functionality, conversation history, and user authentication using Firebase.",
    image: "/projects/gpt.png",
    link: "https://quick-gpt-eight-beta.vercel.app/",
    github: "https://github.com/fenix1409/QuickGPT",
    tools: ["JavaScript", "React", "Tailwind Css", "Express.js", "MongoDB", "OpenAI GPT-3.5", "Firebase Auth"],
  },
  {
    title: "Codeflex AI - Fitness Trainer App",
    description:
      "Codeflex AI is a fitness trainer app that uses AI to provide personalized workout plans and nutrition advice. It features a sleek, modern design built with Next.js and TypeScript, and utilizes Vapi Voice AI for voice interactions. The app is fully responsive and optimized for both dekstop and mobile devices. It integrates Clerk for user authentication and Convex API for backend services, ensuring a seamless user experience.",
    image: "/projects/codeflex.png",
    link: "https://codeflex-ai-khaki.vercel.app/",
    github: "https://github.com/fenix1409/codeflex-ai",
    tools: ["TypeScript", "Next.JS", "Tailwind Css", "Vapi Voice AI", "React-Query", "Convex API", "Gemini AI", "Clerk Authication"],
  },
  {
    title: "Mackbook Pro Platform - 3D Product Showcase",
    description:
      "Apple-style website built with React, Three.js, GSAP, and TailwindCSS. Create immersive 3D product scenes with realistic lighting, scroll-triggered animations, masking effects and smooth animations. Optimized for performance and responsiveness across devices.",
    image: "/projects/mackbook.png",
    link: "https://apple-mackbook-platform.vercel.app/",
    github: "https://github.com/fenix1409/Apple-Mackbook-Platform",
    tools: ["JavaScript", "Three.JS", "Tailwind Css", "React.JS 19", "Zustand", "3D"],
  },
  {
    title: "Nike E-Commerce Platform",
    description:
      "A full-stack Nike-inspired e-commerce platform featuring secure user authentication, dynamic product filtering, shopping cart persistence, and wishlist functionality. Built with Next.js App Router for optimized performance, TypeScript for type safety, and Redux Toolkit for efficient state management. Features a responsive design with seamless animations and modern UI components.",
    image: "/projects/Nike.png",
    link: "https://e-commerce-nike-ashy.vercel.app/",
    github: "https://github.com/fenix1409/E-Commerce-Nike",
    tools: ["Next.js", "Neon", "Better Auth", "TypeScript", "Tailwind CSS", "Zustand", "Devin AI", "Drizzle ORM"],
  },
  {
    title: "SaaS App - LMS Platform",
    description:
      "Saas LMC is a modern AI companion platform built with Next.js where users can create personalized AI assistants, chat with them in real-time, and manage their conversation history. Features secure authentication, role-based permissions, and a responsive design.",
    image: "/projects/saas.png",
    link: "https://saas-ai-eight-umber.vercel.app/",
    github: "https://github.com/fenix1409/Saas-AI",
    tools: ["Next.js", "Supabase", "Clerk Auth", "TypeScript", "Tailwind CSS", "Sentrty", "VAPI Voice AI", "OpenAI", "Shadcn UI"],
  },
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/fenix1409",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/oripov_bobur",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/bobur-oripov1409/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Learning about me",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:oripovbobur208@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
