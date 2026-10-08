import { useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Sparkles,
  Layers,
  Globe2,
  Box,
  GraduationCap,
  Code2,
  Briefcase,
  Rocket,
  CheckCircle2,
  ExternalLink,
  FileText,
  Send,
  Copy,
  Check,
} from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  extendedDesc?: string;
}

const featuredProjects: Project[] = [
  {
    title: "Multi Disease Prediction",
    category: "AI + HEALTHCARE",
    description: "AI-powered health diagnosis platform with Android app, FastAPI and OCR.",
    image: "/project-medical-hud.svg",
    tags: ["FastAPI", "ML", "Android", "OCR"],
    link: "https://github.com/pradyu25",
    extendedDesc:
      "A comprehensive multi-disease diagnostic assistant integrating computer vision for medical scan OCR, ensemble machine learning models for disease risk stratification, and a responsive Android client communicating with high-performance FastAPI microservices.",
  },
  {
    title: "SpendShield AI",
    category: "AGENTIC AI + OCR",
    description: "Fraud detection in public expenditure using agentic AI and OCR.",
    image: "/project-spendshield.svg",
    tags: ["LangGraph", "GCP", "FastAPI"],
    link: "https://github.com/pradyu25/spend-shield.git",
    extendedDesc:
      "Autonomous agentic fraud detection pipeline built on LangGraph that extracts tabular expenditure data from scanned government invoices, runs multi-agent risk scoring, flags procurement anomalies, and outputs explainable audit reports on Google Cloud Platform.",
  },
  {
    title: "Credit Score Intelligence",
    category: "FINTECH + ML",
    description: "ML-based credit scoring with explainability.",
    image: "/project-credit-score.svg",
    tags: ["XGBoost", "Streamlit", "Flask"],
    link: "https://github.com/pradyu25/credit-score-intelligence",
    extendedDesc:
      "Predictive financial credit risk platform utilizing gradient-boosted trees (XGBoost), SHAP value explainability, automated risk tier classification, and dual web interfaces built with Streamlit and Flask for financial analysts.",
  },
];

const allProjects: Project[] = [
  ...featuredProjects,
  {
    title: "Recommendations Engine",
    category: "RECOMMENDER SYSTEMS",
    description: "Hybrid recommendation platform combining collaborative filtering and NLP-based content similarity.",
    image: "/projects/recomm.png",
    tags: ["Python", "Scikit-learn", "SVD++", "NLP", "Flask"],
    link: "https://github.com/pradyu25/Movie-and-book-recommendation",
    extendedDesc: "Dual-domain discovery engine computing latent matrix factorization and semantic text similarity for books and films.",
  },
  {
    title: "Sentinel-Net",
    category: "CYBERSECURITY + DEEP LEARNING",
    description: "Deep learning intrusion detection system for streaming network telemetry and anomaly classification.",
    image: "/projects/intrusion.png",
    tags: ["PyTorch", "FastAPI", "Wireshark", "Matplotlib"],
    link: "https://github.com/pradyu25",
    extendedDesc: "Real-time packet inspection and anomaly defense engine using temporal neural networks to spot distributed network attacks.",
  },
];

const techStack = [
  {
    name: "Python",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 128 128">
        <path fill="#3776AB" d="M63.7 3.5c-27.9 0-26.2 12.1-26.2 12.1l.1 12.6h26.7v3.8H27s-17.6 2-17.6 26.2 15.4 25.4 15.4 25.4h9.2v-12.8s-.5-15.4 15.1-15.4h26.1s14.6.2 14.6-14.3V18.1S88.6 3.5 63.7 3.5zm-14.7 8.2c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z"/>
        <path fill="#FFD438" d="M64.3 124.5c27.9 0 26.2-12.1 26.2-12.1l-.1-12.6H63.7V96H101s17.6-2 17.6-26.2-15.4-25.4-15.4-25.4h-9.2v12.8s.5 15.4-15.1 15.4H52.8s-14.6-.2-14.6 14.3v23.2s-2.8 14.6 26.1 14.6zm14.7-8.2c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z"/>
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 128 128">
        <path fill="#61DAFB" d="M64 45.4a18.6 18.6 0 1 0 0 37.2 18.6 18.6 0 0 0 0-37.2zm0 30.6a12 12 0 1 1 0-24 12 12 0 0 1 0 24z"/>
        <path fill="#61DAFB" d="M125.6 57.6c-1.8-8.8-8.8-15.5-19.1-18.4-1.9-5.3-4.5-10.4-7.8-15.1-4-5.8-9.4-10.2-15.7-12.4-12.6-4.5-26.6-.7-39.7 10.8C30.2 11 16.2 7.2 3.6 11.7c-6.3 2.2-11.7 6.6-15.7 12.4-3.3 4.7-5.9 9.8-7.8 15.1C-30.2 42.1-37.2 48.8-39 57.6c-2.4 11.6 1.3 23.3 10.3 32 2.6 2.5 5.5 4.7 8.7 6.6 2 5.1 4.7 10 7.9 14.5 4 5.8 9.4 10.2 15.7 12.4 4 1.4 8.2 2.1 12.4 2.1 9 0 18.1-3.2 26.7-9.4 8.6 6.2 17.7 9.4 26.7 9.4 4.2 0 8.4-.7 12.4-2.1 6.3-2.2 11.7-6.6 15.7-12.4 3.2-4.5 5.9-9.4 7.9-14.5 3.2-1.9 6.1-4.1 8.7-6.6 9-8.7 12.7-20.4 10.3-32z" opacity="0.3"/>
        <ellipse cx="64" cy="64" rx="58" ry="22" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(30 64 64)"/>
        <ellipse cx="64" cy="64" rx="58" ry="22" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(90 64 64)"/>
        <ellipse cx="64" cy="64" rx="58" ry="22" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(150 64 64)"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 128 128">
        <path fill="#5FA04E" d="M64 4.3 10.9 35v61.4L64 127l53.1-30.6V35L64 4.3zm0 13.9 41 23.7v47.4L64 113 23 89.3V41.9l41-23.7z"/>
        <path fill="#417E38" d="M64 50c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14z"/>
      </svg>
    ),
  },
  {
    name: "FastAPI",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 128 128">
        <circle cx="64" cy="64" r="58" fill="#05998B"/>
        <path fill="#FFFFFF" d="M68 20 34 68h28l-8 40 40-52H64l4-36z"/>
      </svg>
    ),
  },
  {
    name: "TensorFlow",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 128 128">
        <path fill="#FF6F00" d="m64 12 48 27.7v55.4L64 122.9l-24-13.9V81.3l24 13.9 24-13.9V46.6L64 32.8 39.9 46.6l24.1 13.9v27.7L16 67.4V39.7L64 12z"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 128 128">
        <path fill="#2496ED" d="M121.2 59.8c-2.4-1.7-7.4-2.8-12.7-.9-.8-7-5.4-12.4-12.6-13.8l-3.3-.6-.8 3.3c-2.4 10.4 2.6 18.9 9.3 22.9-2.9 1.4-7.4 2.1-13.5 2.1H13.6C6.1 72.8 0 78.9 0 86.4c0 19.5 15.8 35.3 35.3 35.3 33.7 0 60.7-18.7 73.1-46.7 10.2.8 17.9-5.1 19.6-11.7.5-1.9.4-3.1-.3-3.9l-6.5.4zM47.2 46.3h10.9v10.9H47.2V46.3zm-14.5 0h10.9v10.9H32.7V46.3zm-14.5 0h10.9v10.9H18.2V46.3zm43.6 0h10.9v10.9H61.8V46.3zm14.5 0h10.9v10.9H76.3V46.3zm-43.6-14.5h10.9v10.9H32.7V31.8zm14.5 0h10.9v10.9H47.2V31.8zm14.5 0h10.9v10.9H61.8V31.8zm-14.5-14.5h10.9v10.9H47.2V17.3z"/>
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 128 128">
        <path fill="#FF9900" d="M42.2 73.2c-5.7 4.2-14 6.5-21.2 6.5C10.7 79.7 3.5 76 1 70.8c-.8-1.7.4-3.3 2.3-2.6 10.5 4 23.3 5.4 35.8 1.4 2.6-.8 4.7 1.9 3.1 3.6zm54.3-17.7c-1.3-.8-2.6-1.7-4-2.4-7.5-3.8-16.7-5.9-26.6-5.9-18.2 0-33.8 7-42 17.5-1.1 1.4-.2 3.1 1.6 2.6 10.4-2.8 23-4.4 36.3-4.4 12.3 0 24.2 1.4 34 3.9 2 .5 3.3-1.2 2.3-2.6l-1.6-8.7z"/>
        <path fill="#FF9900" d="M100.9 77.2c-2.3 3.8-6.1 6.8-10.7 8.5-1.9.7-3.4-.6-2.5-2.2 2.6-4.8 3.8-10.4 3.4-16.1-.2-2.1 1.7-3.4 3.2-2.1 4.2 3.7 6.9 8.2 6.6 11.9z"/>
      </svg>
    ),
  },
  {
    name: "GCP",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 128 128">
        <path fill="#EA4335" d="M64 45.4c4.6 0 8.8 1.6 12 4.7l9-9C79.4 36 72.1 33 64 33c-17.4 0-32.1 10.1-39 24.8l12.5 9.7C41 54.7 51.5 45.4 64 45.4z"/>
        <path fill="#4285F4" d="M94.6 65.4c0-2.2-.2-4.4-.6-6.4H64v12.2h17.2c-.8 4-3 7.4-6.4 9.7l9.9 7.7c5.8-5.3 9.9-13.2 9.9-23.2z"/>
        <path fill="#FBBC05" d="M37.5 67.5c-.6-1.8-1-3.7-1-5.5 0-1.9.4-3.7 1-5.5L25 46.8C22.4 51.9 21 57.8 21 64s1.4 12.1 4 17.2l12.5-9.7z"/>
        <path fill="#34A853" d="M64 94.6c8.1 0 15.4-2.7 20.8-7.3l-9.9-7.7c-2.8 1.9-6.4 3-10.9 3-12.5 0-23-9.3-26.5-22.1L25 70.2C31.9 84.9 46.6 94.6 64 94.6z"/>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 128 128">
        <path fill="#336791" d="M64.7 16.4c-22.2 0-37.3 14.5-38.3 35.8-.8 16.2 7.7 30 18.9 36.3v17.4l11.6-6.1c2.5.6 5.2.9 8 .9 26.6 0 44.5-18.4 44.5-44.4-.1-23.8-19.4-39.9-44.7-39.9zm-8.8 24.2c3.4 0 6.1 2.8 6.1 6.2s-2.7 6.2-6.1 6.2-6.1-2.8-6.1-6.2 2.7-6.2 6.1-6.2zm24.6 30.6c-5.8 4.6-13.7 7.3-22.4 7.3-3.6 0-7.1-.5-10.3-1.4l5.3-7.5c2 .4 4.1.6 6.3.6 6.3 0 12.1-1.9 16.3-5.2l4.8 6.2z"/>
      </svg>
    ),
  },
  {
    name: "More",
    icon: (
      <div className="w-7 h-7 rounded-full flex items-center justify-center text-[#e5c179] font-mono font-bold tracking-widest text-sm bg-white/5 border border-white/10">
        •••
      </div>
    ),
  },
];

const timeline = [
  {
    icon: <GraduationCap className="w-4 h-4 text-[#e5c179]" />,
    date: "2019 — 2023",
    title: "B.Tech CSE (AIML)",
    org: "Nalla Narasimha Reddy Group Of Institutions",
    detail: "Graduated with 87% academic aggregate. Specialized in Deep Learning, AI architectures, Data Structures & Cloud Systems.",
  },
  {
    icon: <Code2 className="w-4 h-4 text-[#e5c179]" />,
    date: "2022 — Present",
    title: "Projects & Product Development",
    org: "AI/ML • Full Stack • Mobile",
    detail: "Built production-grade ML applications: agentic fraud detection (SpendShield), predictive credit modeling, and medical AI systems.",
  },
  {
    icon: <Briefcase className="w-4 h-4 text-[#e5c179]" />,
    date: "2024 — Present",
    title: "Freelance / Contract",
    org: "AI Annotation, Data, Product Development",
    detail: "Delivering end-to-end client applications, high-precision AI training data pipelines, OCR document engines, and scalable REST backends.",
  },
  {
    icon: <Rocket className="w-4 h-4 text-[#e5c179]" />,
    date: "2026 →",
    title: "Exploring Greater Impact",
    org: "Open to Opportunities",
    detail: "Actively exploring roles in AI/ML Engineering, Autonomous Agents, Computer Vision, and Full Stack Product Engineering.",
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [allProjectsModalOpen, setAllProjectsModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Contact form state
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "experience", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -45% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("mprc9125@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Portfolio Collaboration");
    const message = String(data.get("message") || "");
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:mprc9125@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#050607] text-[#f5f2e9] selection:bg-[#e5c179]/30 selection:text-white font-sans overflow-x-hidden">
      <div className="cosmic-grain" />

      {/* TOP NAVIGATION BAR */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[74px] bg-[#050607]/65 backdrop-blur-xl border-b border-white/[0.04] transition-all">
        <div className="max-w-[1240px] mx-auto h-full px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Go to home"
          >
            <span className="text-[#e5c179] text-xl leading-none drop-shadow-[0_0_12px_rgba(229,193,121,0.7)] group-hover:rotate-45 transition-transform duration-300">
              ✦
            </span>
            <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.24em] text-[#f4f0e5] group-hover:text-white transition-colors">
              PRADYUMNA
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Experience" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative py-2 text-[12px] font-medium tracking-wider uppercase transition-colors ${
                    isActive ? "text-[#f7f3e8]" : "text-[#9e9d96] hover:text-[#f7f3e8]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#e5c179] shadow-[0_0_8px_#e5c179]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Topbar Right Action */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setContactModalOpen(true)}
              className="btn-pill-outline hidden sm:inline-flex"
            >
              Let&apos;s Connect <ArrowUpRight className="w-3.5 h-3.5 text-[#e5c179]" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="md:hidden w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#d8d5cb] hover:border-[#e5c179]/60 hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[74px] z-40 bg-[#08090a]/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden flex flex-col gap-3"
          >
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Experience" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left py-2.5 text-sm font-medium tracking-wider text-[#ccc9bf] hover:text-[#e5c179]"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10 flex justify-between items-center">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setContactModalOpen(true);
                }}
                className="btn-gold-pill w-full text-center"
              >
                Let&apos;s Connect <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {/* ========================================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================================= */}
        <section
          id="home"
          className="relative min-h-screen pt-[80px] pb-16 flex items-center overflow-hidden border-b border-white/[0.04]"
        >
          {/* Background image: Astronaut overlooking the planet with golden horizon glow */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat pointer-events-none"
            style={{
              backgroundImage: "url('/explorer-hero.png')",
              backgroundPosition: "center right",
            }}
          />

          {/* Deep atmospheric vignettes for razor-sharp readability */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                linear-gradient(90deg, #050607 0%, rgba(5,6,7,0.96) 28%, rgba(5,6,7,0.65) 55%, rgba(5,6,7,0.2) 100%),
                linear-gradient(0deg, #050607 0%, transparent 35%, rgba(5,6,7,0.4) 100%)
              `,
            }}
          />

          {/* Golden Orbital Trajectory Ring Overlay */}
          <div
            className="absolute pointer-events-none border border-[#e5c179]/20 rounded-full"
            style={{
              width: "720px",
              height: "720px",
              right: "6%",
              top: "10%",
              transform: "rotate(24deg)",
            }}
          />
          <div
            className="absolute pointer-events-none border border-[#e5c179]/10 rounded-full"
            style={{
              width: "980px",
              height: "440px",
              right: "-5%",
              top: "28%",
              transform: "rotate(16deg)",
            }}
          />

          {/* Orbit Node 1 (Upper Right): TURNING COMPLEXITY INTO OPPORTUNITY */}
          <div className="absolute hidden lg:flex items-center gap-3 pointer-events-none top-[17%] right-[10%]">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#e5c179]/40 beacon-pulse-ring" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#e5c179] shadow-[0_0_12px_#e5c179]" />
            </div>
            <div className="font-mono text-[8px] tracking-[0.24em] text-[#d6d3c8] leading-tight max-w-[150px]">
              TURNING COMPLEXITY INTO OPPORTUNITY
            </div>
          </div>

          {/* Orbit Node 2 (Center Left of Earth): IDEAS / MODELS / PRODUCTS / IMPACT */}
          <div className="absolute hidden lg:flex items-center gap-3 pointer-events-none top-[44%] right-[38%]">
            <div className="relative w-5 h-5 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#e5c179]/40 beacon-pulse-ring" />
              <div className="w-2 h-2 rounded-full bg-[#e5c179] shadow-[0_0_10px_#e5c179]" />
            </div>
            <div className="font-mono text-[7px] tracking-[0.22em] text-[#e3ded2] leading-tight">
              IDEAS<br />MODELS<br />PRODUCTS<br />IMPACT
            </div>
          </div>

          {/* Far Left Rotated Margin Indicator */}
          <div className="absolute left-6 bottom-28 hidden xl:flex flex-col items-center gap-4 text-[#75746e]">
            <span className="font-mono text-[8px] tracking-[0.3em] uppercase -rotate-90 origin-center translate-y-3">
              SCROLL
            </span>
            <div className="w-[1px] h-14 bg-gradient-to-b from-[#75746e] to-transparent" />
          </div>

          {/* Hero Content Container */}
          <div className="relative max-w-[1240px] mx-auto w-full px-6 sm:px-8 py-10 flex flex-col justify-between min-h-[640px]">
            <div className="max-w-[620px] pt-6 sm:pt-12">
              {/* Kicker */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2.5 text-[#d4d1c7] font-mono text-[9px] sm:text-[10px] tracking-[0.26em] uppercase mb-6"
              >
                <span>EXPLORER</span>
                <span className="text-[#e5c179]">×</span>
                <span>BUILDER</span>
                <span className="text-[#e5c179]">×</span>
                <span>LEARNER</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-[44px] sm:text-[62px] md:text-[70px] font-semibold tracking-[-0.04em] leading-[1.02] text-[#f7f5ee] mb-6"
              >
                Engineering<br />
                Intelligence for<br />
                a <span className="font-serif-italic">Better Tomorrow.</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#b5b3aa] text-[13px] sm:text-[15px] leading-[1.75] max-w-[490px] mb-8 font-normal"
              >
                I&apos;m Pradyumna, an AI/ML and Full Stack developer building real-world products at the
                intersection of artificial intelligence, design, and technology.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
                <button
                  onClick={() => scrollTo("projects")}
                  className="btn-gold-pill"
                >
                  View My Work <ArrowRight className="w-3.5 h-3.5 text-[#12110c]" />
                </button>

                <a
                  href="/cyber.pdf"
                  download="Musunuri_Pradyumna_Resume.pdf"
                  className="btn-glass-pill"
                >
                  <Download className="w-3.5 h-3.5 text-[#e5c179]" /> Download Resume
                </a>
              </motion.div>

              {/* Social Links Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center gap-6 text-[#9a9990]"
              >
                <a
                  href="https://github.com/pradyu25"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#e5c179] transition-colors p-1"
                  aria-label="GitHub profile"
                >
                  <Github className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/musunuri-pradyumna-ravi-chandra-a08500306/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#e5c179] transition-colors p-1"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="mailto:mprc9125@gmail.com"
                  className="hover:text-[#e5c179] transition-colors p-1"
                  aria-label="Email address"
                >
                  <Mail className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#e5c179] transition-colors font-mono text-sm px-1"
                  aria-label="X profile"
                >
                  𝕏
                </a>
              </motion.div>
            </div>

            {/* Floating Widget: CURRENTLY EXPLORING (bottom right of hero) */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="self-end mt-8 lg:mt-0 glass-panel p-4 sm:p-5 rounded-2xl w-full max-w-[270px] border border-white/[0.12] shadow-2xl"
            >
              <div className="font-mono text-[8px] tracking-[0.2em] text-[#e5c179] uppercase mb-3 flex items-center gap-1.5">
                <Sparkles className="w-2.5 h-2.5 text-[#e5c179]" /> CURRENTLY EXPLORING
              </div>
              <ul className="space-y-2 text-[11px] text-[#dedbd2]">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e5c179] shadow-[0_0_6px_#e5c179]" />
                  <span>Agentic AI Systems</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e5c179] shadow-[0_0_6px_#e5c179]" />
                  <span>Real World Products</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e5c179] shadow-[0_0_6px_#e5c179]" />
                  <span>Scalable ML Pipelines</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 01 / ABOUT */}
        {/* ========================================================================= */}
        <section
          id="about"
          className="relative py-24 sm:py-28 border-b border-white/[0.04] bg-gradient-to-b from-[#050607] via-[#090b0c] to-[#050607]"
        >
          <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Visual Card: Interactive Portrait of Pradyumna */}
              <div className="lg:col-span-5">
                <button
                  type="button"
                  onClick={() => setAboutModalOpen(true)}
                  className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e5c179] rounded-2xl group"
                  aria-label="View more about Musunuri Pradyumna Ravi Chandra"
                >
                  <div className="relative aspect-[16/12] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 glass-panel group-hover:border-[#e5c179]/60 transition-all duration-500 shadow-2xl group-hover:shadow-[0_20px_60px_rgba(229,193,121,0.18)] cursor-pointer">
                    {/* User portrait */}
                    <img
                      src="/ravi.png"
                      alt="Musunuri Pradyumna Ravi Chandra"
                      className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-95 group-hover:brightness-105 transition-all duration-700 group-hover:scale-105"
                    />

                    {/* Atmospheric luxury dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050607]/90 via-[#050607]/25 to-transparent pointer-events-none" />

                    {/* Corner Survey Markings */}
                    <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#e5c179]/60 pointer-events-none" />
                    <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#e5c179]/60 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#e5c179]/60 pointer-events-none" />
                    <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#e5c179]/60 pointer-events-none" />

                    {/* Top Meta Tags */}
                    <div className="absolute top-3.5 left-4 right-4 flex justify-between items-center text-[9px] font-mono text-[#dcd8cc] tracking-wider pointer-events-none">
                      <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[#e5c179]">
                        PRC / 9125
                      </span>
                      <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                        HYDERABAD · IN
                      </span>
                    </div>

                    {/* Bottom Identification Label */}
                    <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-[9px] font-mono text-[#b8b5ab] tracking-wider pointer-events-none">
                      <span className="font-semibold text-white">M. PRADYUMNA RAVI CHANDRA</span>
                      <span className="text-[#e5c179] group-hover:underline">VIEW PROFILE ↗</span>
                    </div>
                  </div>
                </button>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.24em] text-[#e5c179] uppercase">
                      01 / ABOUT
                    </span>
                    <button
                      onClick={() => setAboutModalOpen(true)}
                      className="btn-pill-outline text-[9px] hidden sm:inline-flex"
                    >
                      More About Me <ArrowRight className="w-3 h-3 text-[#e5c179]" />
                    </button>
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.035em] leading-[1.08] text-[#f7f5ee] mb-5">
                    Explorer at Heart,<br />
                    Builder by <span className="font-serif-italic">Passion.</span>
                  </h2>

                  <p className="text-[#a4a298] text-[13px] sm:text-[14px] leading-[1.8] mb-8 font-normal">
                    I&apos;m a Computer Science graduate specializing in AI &amp; Machine Learning. I enjoy
                    building practical AI systems, full-stack applications, and data-driven solutions that
                    solve real-world problems.
                  </p>
                </div>

                {/* 4 Stat Items in Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
                  {/* Stat 1 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#e5c179] shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-[#f7f5ee]">8.7/10</div>
                      <div className="text-[9px] font-mono text-[#787771] tracking-wider uppercase">CGPA</div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#e5c179] shrink-0">
                      <Box className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-[#f7f5ee]">10+</div>
                      <div className="text-[9px] font-mono text-[#787771] tracking-wider uppercase">Projects</div>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#e5c179] shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-[#f7f5ee]">3+</div>
                      <div className="text-[8px] font-mono text-[#787771] tracking-wider uppercase leading-tight">
                        Domains<br />(AI, Web, Mobile)
                      </div>
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#e5c179] shrink-0">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-[#f7f5ee] leading-tight">Real-World</div>
                      <div className="text-[8px] font-mono text-[#787771] tracking-wider uppercase">
                        Impact Focused
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:hidden">
                  <button
                    onClick={() => setAboutModalOpen(true)}
                    className="btn-pill-outline w-full text-center"
                  >
                    More About Me <ArrowRight className="w-3 h-3 text-[#e5c179]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 02 / FEATURED PROJECTS */}
        {/* ========================================================================= */}
        <section
          id="projects"
          className="relative py-24 sm:py-28 border-b border-white/[0.04] bg-[#050607]"
        >
          <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.24em] text-[#e5c179] uppercase block mb-2.5">
                  02 / FEATURED PROJECTS
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.035em] leading-[1.05] text-[#f7f5ee]">
                  Projects that<br />
                  Solve Real <span className="font-serif-italic">Problems.</span>
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <p className="text-[#96948b] text-[13px] leading-relaxed max-w-[420px]">
                  A collection of projects across AI/ML, full-stack development, and real-world applications
                  designed to create impact.
                </p>
                <button
                  onClick={() => setAllProjectsModalOpen(true)}
                  className="btn-pill-outline shrink-0 self-start sm:self-auto"
                >
                  View All Projects <ArrowRight className="w-3.5 h-3.5 text-[#e5c179]" />
                </button>
              </div>
            </div>

            {/* 3 Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
              {featuredProjects.map((project, idx) => (
                <div
                  key={project.title}
                  onClick={() => setSelectedProject(project)}
                  className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
                >
                  {/* Project Image */}
                  <div className="relative aspect-[16/10] bg-[#090b0c] overflow-hidden border-b border-white/[0.06]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090a]/80 via-transparent to-transparent" />
                  </div>

                  {/* Project Body */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <span className="font-mono text-[8px] tracking-[0.2em] text-[#8e8d85] uppercase block mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-[17px] font-semibold text-[#f7f5ee] group-hover:text-[#e5c179] transition-colors mb-2.5">
                        {project.title}
                      </h3>
                      <p className="text-[#a4a299] text-xs leading-[1.65] font-normal mb-6 min-h-[44px]">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] font-mono text-[8px] text-[#b0ada3]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Arrow Button */}
                      <div className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.03] group-hover:border-[#e5c179] group-hover:bg-[#e5c179]/10 flex items-center justify-center text-[#e5c179] transition-all shrink-0 ml-2">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 03 / SKILLS & TOOLS */}
        {/* ========================================================================= */}
        <section
          id="skills"
          className="relative py-20 sm:py-24 border-b border-white/[0.04] bg-[#070809]"
        >
          <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Headline */}
              <div className="lg:col-span-4">
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.24em] text-[#e5c179] uppercase block mb-2.5">
                  03 / SKILLS &amp; TOOLS
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.035em] leading-[1.08] text-[#f7f5ee]">
                  Technologies<br />
                  I Work With.
                </h2>
              </div>

              {/* Right 10 Tech Icons Grid */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 sm:gap-4">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="glass-panel glass-panel-hover rounded-xl p-4 flex flex-col items-center justify-center gap-3 text-center min-h-[92px] group"
                    >
                      <div className="transition-transform duration-300 group-hover:scale-110">
                        {tech.icon}
                      </div>
                      <span className="text-[11px] font-medium text-[#b3b0a7] group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 04 / EXPERIENCE & JOURNEY */}
        {/* ========================================================================= */}
        <section
          id="experience"
          className="relative py-24 sm:py-28 border-b border-white/[0.04] bg-gradient-to-b from-[#070809] to-[#050607] overflow-hidden"
        >
          {/* Subtle cosmic arc highlight */}
          <div
            className="absolute pointer-events-none -bottom-20 left-1/2 -translate-x-1/2 w-[1200px] h-[220px] rounded-[100%] border-t border-[#e5c179]/20 shadow-[0_-20px_90px_rgba(229,193,121,0.08)]"
          />

          <div className="max-w-[1240px] mx-auto px-6 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
              {/* Left Headline */}
              <div className="lg:col-span-4">
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.24em] text-[#e5c179] uppercase block mb-2.5">
                  04 / EXPERIENCE &amp; JOURNEY
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.035em] leading-[1.08] text-[#f7f5ee]">
                  A Journey<br />
                  of Continuous<br />
                  <span className="font-serif-italic">Exploration.</span>
                </h2>
              </div>

              {/* Right Horizontal Connected Timeline */}
              <div className="lg:col-span-8 flex items-center">
                <div className="w-full relative">
                  {/* Connecting Horizontal Line (desktop) */}
                  <div className="hidden sm:block absolute top-[21px] left-8 right-8 h-[1px] bg-gradient-to-r from-[#e5c179]/60 via-[#e5c179]/40 to-[#e5c179]/20" />

                  {/* 4 Milestones */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-4 relative">
                    {timeline.map((step, idx) => (
                      <div key={step.title} className="flex flex-col relative group">
                        {/* Milestone Node */}
                        <div className="w-11 h-11 rounded-full border border-[#e5c179]/50 bg-[#0c0e0f] flex items-center justify-center text-[#e5c179] shadow-[0_0_15px_rgba(229,193,121,0.2)] mb-4 shrink-0 transition-transform group-hover:scale-110 group-hover:border-[#e5c179]">
                          {step.icon}
                        </div>

                        {/* Date badge */}
                        <span className="font-mono text-[9px] text-[#8e8d85] tracking-wider mb-2">
                          {step.date}
                        </span>

                        {/* Title */}
                        <h3 className="text-[13px] font-semibold text-[#f7f5ee] leading-tight mb-1.5 group-hover:text-[#e5c179] transition-colors">
                          {step.title}
                        </h3>

                        {/* Organization */}
                        <p className="text-[11px] text-[#a19f95] leading-relaxed">
                          {step.org}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 05 / CONTACT */}
        {/* ========================================================================= */}
        <section
          id="contact"
          className="relative min-h-[480px] sm:min-h-[520px] flex items-center border-b border-white/[0.04] overflow-hidden"
        >
          {/* Background: Explorer gazing into glowing stargate portal */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat pointer-events-none"
            style={{
              backgroundImage: "url('/contact-portal.svg')",
              backgroundPosition: "center right",
            }}
          />

          {/* Vignettes */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                linear-gradient(90deg, #050607 0%, rgba(5,6,7,0.95) 30%, rgba(5,6,7,0.5) 60%, rgba(5,6,7,0.2) 100%),
                linear-gradient(0deg, #050607 0%, transparent 25%, rgba(5,6,7,0.5) 100%)
              `,
            }}
          />

          {/* Contact Content Container */}
          <div className="relative max-w-[1240px] mx-auto w-full px-6 sm:px-8 py-20 flex flex-col md:flex-row md:items-center justify-between gap-12">
            {/* Left Copy */}
            <div className="max-w-[500px]">
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.24em] text-[#e5c179] uppercase block mb-2.5">
                05 / CONTACT
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.035em] leading-[1.05] text-[#f7f5ee] mb-4">
                Let&apos;s Build<br />
                What&apos;s <span className="font-serif-italic">Next.</span>
              </h2>
              <p className="text-[#aba99f] text-[13px] sm:text-[14px] leading-relaxed mb-8">
                Open to collaborations, exciting projects, and opportunities to create real impact.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="btn-gold-pill"
                >
                  Let&apos;s Talk <ArrowRight className="w-3.5 h-3.5 text-[#12110c]" />
                </button>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="btn-glass-pill"
                >
                  <Mail className="w-3.5 h-3.5 text-[#e5c179]" /> Drop a Message
                </button>
              </div>
            </div>

            {/* Right Locator & Philosophy Badge */}
            <div className="flex items-center gap-6">
              <div className="font-mono text-[8px] sm:text-[9px] text-[#9b9991] tracking-[0.22em] uppercase leading-loose text-right">
                NEW IDEAS<br />
                NEW PLACES<br />
                SAME CURIOSITY
              </div>

              {/* Pulsing Locator Target */}
              <div className="relative w-8 h-8 rounded-full border border-[#e5c179]/50 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#e5c179]/40 beacon-pulse-ring" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#e5c179] shadow-[0_0_10px_#e5c179]" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* FOOTER */}
      {/* ========================================================================= */}
      <footer className="h-16 border-t border-white/[0.06] bg-[#040505] flex items-center">
        <div className="max-w-[1240px] mx-auto w-full px-6 sm:px-8 flex items-center justify-between text-[#6a6962] font-mono text-[9px] sm:text-[10px] tracking-wider">
          <span>© {new Date().getFullYear()} Musunuri Pradyumna Ravi Chandra</span>
          <span className="hidden sm:inline">AI × ENGINEERING × CURIOSITY</span>
          <button
            onClick={() => scrollTo("home")}
            className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[#9c9b93] hover:text-[#e5c179] hover:border-[#e5c179]/50 transition-colors"
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* MODAL: MORE ABOUT ME / DOSSIER */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {aboutModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setAboutModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[700px] max-h-[90vh] overflow-y-auto rounded-2xl glass-panel p-6 sm:p-8 border border-white/15 shadow-2xl text-left my-8"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#e5c179] uppercase">
                  EXPLORER DOSSIER // BACKGROUND &amp; CREDENTIALS
                </span>
                <button
                  onClick={() => setAboutModalOpen(false)}
                  className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[#999] hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Bio Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="sm:col-span-1 rounded-xl overflow-hidden border border-white/10">
                  <img src="/ravi.png" alt="Pradyumna" className="w-full h-full object-cover" />
                </div>
                <div className="sm:col-span-2 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-1">Musunuri Pradyumna Ravi Chandra</h3>
                  <p className="text-xs text-[#e5c179] font-mono mb-3">AI / ML Engineer &amp; Full Stack Developer</p>
                  <p className="text-xs text-[#b5b3aa] leading-relaxed mb-4">
                    Based in Hyderabad, Telangana. Driven by an obsession with autonomous agent workflows,
                    practical predictive models, and clean systems architecture.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-[#8f8e87]">
                    <div>DEGREE: <b>B.Tech CSE (AIML)</b></div>
                    <div>AGGREGATE: <b>87%</b></div>
                    <div>LOCATION: <b>Hyderabad, IN</b></div>
                    <div>STATUS: <b>Available</b></div>
                  </div>
                </div>
              </div>

              {/* Verified Certifications with direct PDF links */}
              <div className="mb-6">
                <h4 className="text-xs font-mono tracking-wider text-[#e5c179] uppercase mb-3">
                  Verified Certifications &amp; Discoveries
                </h4>
                <div className="space-y-2">
                  {[
                    {
                      title: "Python for Data Science",
                      issuer: "NPTEL",
                      date: "September 2025",
                      pdf: "/nptel_pfds.pdf",
                    },
                    {
                      title: "Blockchain and its Applications",
                      issuer: "NPTEL",
                      date: "April 2025",
                      pdf: "/nptel_ba.pdf",
                    },
                    {
                      title: "Cyber Security",
                      issuer: "SkillVertex",
                      date: "January 2024",
                      pdf: "/cyber.pdf",
                    },
                  ].map((cert) => (
                    <div
                      key={cert.title}
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#e5c179] shrink-0" />
                        <div>
                          <div className="text-xs font-medium text-white">{cert.title}</div>
                          <div className="text-[10px] text-[#8e8d85] font-mono">{cert.issuer} · {cert.date}</div>
                        </div>
                      </div>
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] font-mono text-[#e5c179] hover:underline flex items-center gap-1"
                      >
                        <FileText className="w-3 h-3" /> View Certificate
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => {
                    setAboutModalOpen(false);
                    setContactModalOpen(true);
                  }}
                  className="btn-gold-pill text-xs"
                >
                  Connect with Pradyumna <ArrowRight className="w-3.5 h-3.5 text-[#12110c]" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL: VIEW ALL PROJECTS */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {allProjectsModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setAllProjectsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[880px] max-h-[90vh] overflow-y-auto rounded-2xl glass-panel p-6 sm:p-8 border border-white/15 shadow-2xl text-left my-8"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#e5c179] uppercase block mb-1">
                    PROJECT ARCHIVE
                  </span>
                  <h3 className="text-xl font-bold text-white">All Expeditions &amp; Systems</h3>
                </div>
                <button
                  onClick={() => setAllProjectsModalOpen(false)}
                  className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[#999] hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allProjects.map((p) => (
                  <div
                    key={p.title}
                    className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-[8px] text-[#e5c179] tracking-wider block mb-1">
                        {p.category}
                      </span>
                      <h4 className="text-base font-semibold text-white mb-2">{p.title}</h4>
                      <p className="text-xs text-[#a3a197] leading-relaxed mb-4">{p.description}</p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="flex flex-wrap gap-1">
                        {p.tags.slice(0, 3).map((t) => (
                          <span key={t} className="px-1.5 py-0.5 rounded bg-white/5 font-mono text-[8px] text-[#8e8d85]">
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-[#e5c179] hover:underline flex items-center gap-1"
                      >
                        Repository <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL: SINGLE PROJECT DETAIL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[620px] rounded-2xl glass-panel p-6 sm:p-8 border border-white/15 shadow-2xl text-left"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-5">
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#e5c179] uppercase">
                  {selectedProject.category}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[#999] hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-5 border border-white/10 bg-[#090b0c]">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-xs text-[#b8b6ad] leading-relaxed mb-6 font-normal">
                {selectedProject.extendedDesc || selectedProject.description}
              </p>

              <div className="mb-6">
                <span className="font-mono text-[9px] text-[#787771] tracking-wider uppercase block mb-2">
                  TECHNOLOGIES UTILIZED
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 font-mono text-[10px] text-[#e5c179]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                <button onClick={() => setSelectedProject(null)} className="btn-glass-pill text-xs">
                  Close
                </button>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold-pill text-xs"
                >
                  Open Repository <ExternalLink className="w-3.5 h-3.5 text-[#12110c]" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* MODAL: CONTACT MESSAGE COMPOSER */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {contactModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setContactModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[560px] rounded-2xl glass-panel p-6 sm:p-8 border border-white/15 shadow-2xl text-left"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[#e5c179] uppercase block mb-1">
                    DIRECT TRANSMISSION CHANNEL
                  </span>
                  <h3 className="text-xl font-bold text-white">Let&apos;s Build Together</h3>
                </div>
                <button
                  onClick={() => setContactModalOpen(false)}
                  className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[#999] hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Direct email card */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between mb-5">
                <div>
                  <div className="text-[10px] font-mono text-[#787771]">PRIMARY EMAIL</div>
                  <div className="text-xs font-mono text-[#f5ecd5]">mprc9125@gmail.com</div>
                </div>
                <button onClick={copyEmail} className="btn-pill-outline text-[10px] h-7 px-3">
                  {copiedEmail ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                  {copiedEmail ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleContactSubmit} className="space-y-3.5">
                <div>
                  <label className="font-mono text-[9px] text-[#9a9992] tracking-wider uppercase block mb-1">
                    Your Name
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="E.g. Sarah Connor"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#e5c179]/70"
                  />
                </div>

                <div>
                  <label className="font-mono text-[9px] text-[#9a9992] tracking-wider uppercase block mb-1">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#e5c179]/70"
                  />
                </div>

                <div>
                  <label className="font-mono text-[9px] text-[#9a9992] tracking-wider uppercase block mb-1">
                    Subject
                  </label>
                  <input
                    name="subject"
                    placeholder="Project opportunity / Collaboration / AI Engineering"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#e5c179]/70"
                  />
                </div>

                <div>
                  <label className="font-mono text-[9px] text-[#9a9992] tracking-wider uppercase block mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me what you're building or exploring..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#e5c179]/70 resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button type="submit" className="btn-gold-pill w-full justify-center">
                    {formSent ? "Opened Mail Client" : "Transmit Message"} <Send className="w-3.5 h-3.5 text-[#12110c]" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
