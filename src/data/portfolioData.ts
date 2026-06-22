export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Nexus Platform",
    description: "Scalable React.js collaboration platform with multi-role dashboards, video calling interface, document management system, and integrated payment UI for seamless investor–entrepreneur interaction.",
    tech: ["React.js", "Node.js", "WebRTC", "Stripe"],
    github: "https://github.com/sakinaowais989/nexus.git",
    live: "https://nexus-nine-black.vercel.app/",
    image: "/images/nexus.png"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Modern e-commerce platform using React.js with dynamic product listings, interactive cart system, and reusable components, ensuring a smooth and responsive shopping experience.",
    tech: ["React.js", "Tailwind CSS", "Context API"],
    github: "https://github.com/sakinaowais989/ecommerce-frontend-design.git",
    live: "https://ecommerce-frontend-design-five.vercel.app/",
    image: "/images/ecommerce.png"
  },
  {
    id: 3,
    title: "Lost & Found Platform",
    description: "Full-featured Lost & Found platform with complaint handling, volunteer management, and dual dashboards (Admin & Student), designed to streamline reporting and item recovery processes.",
    tech: ["React.js", "Node.js", "MongoDB"],
    github: "https://github.com/sakinaowais989/Hackathon-3.git",
    live: "https://hackathon-3-delta-five.vercel.app/",
    image: "/images/lost-found.png"
  },
  {
    id: 4,
    title: "Resume Builder",
    description: "Feature-rich Resume Builder application using React.js and Supabase, enabling users to generate, edit, and preview professional resumes with real-time updates and persistent data storage.",
    tech: ["React.js", "Supabase", "Tailwind CSS"],
    github: "https://github.com/sakinaowais989/Femhack-2026.git",
    live: "https://femhack-2026-dusky.vercel.app/",
    image: "/images/resume-builder.png"
  },
  {
    id: 5,
    title: "Budget Bloom Planner",
    description: "Budget Planner application using React.js that allows users to manage personal finances through income/expense tracking, real-time transaction updates, summary cards, and monthly data visualization with charts.",
    tech: ["React.js", "Chart.js", "LocalStorage"],
    github: "https://github.com/sakinaowais989/Budget-Planner.git",
    live: "https://budget-bloom-planner.vercel.app/",
    image: "/images/budget-bloom.png"
  },
  {
    id: 6,
    title: "Saylani Admission Form",
    description: "Fully responsive registration system for Saylani Welfare Mass IT Training Program using HTML, CSS, and JavaScript, with Firebase Realtime Database integration for secure, real-time data storage.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/sakinaowais989/Saylani-Admission-Form.git",
    live: "https://saylani-admission-form.vercel.app/",
    image: "/images/saylani-form.png"
  }
];