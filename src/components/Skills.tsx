import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Wrench,
  Brain,
  Code2,
  Cloud,
  Layout,
  BarChart3,
  Tool,
  CheckCircle2,
  Sparkles,
  Zap,
  Crosshair,
  ShieldAlert,
} from "lucide-react";
import { EquipmentCategory } from "@/types";

const equipmentKit: EquipmentCategory[] = [
  {
    category: "Navigational & Cognitive Rig",
    kitPouch: "POUCH A: AI / ML",
    description: "Neural reasoning engines, vector embeddings, and autonomous agent frameworks.",
    tools: [
      { name: "TensorFlow", level: "Core Instrument", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", purpose: "Deep neural networks & classification" },
      { name: "PyTorch", level: "Primary Weapon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", purpose: "Dynamic neural modeling & autoencoders" },
      { name: "Scikit-learn", level: "Primary Weapon", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", purpose: "Supervised & unsupervised ML pipelines" },
      { name: "LangGraph", level: "Primary Weapon", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4", purpose: "Multi-agent autonomous workflows" },
      { name: "LangChain", level: "Field Tested", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4", purpose: "LLM chains, prompt routing & RAG" },
      { name: "Hugging Face", level: "Field Tested", logo: "https://huggingface.co/front/assets/huggingface_logo.svg", purpose: "Transformers & pre-trained language models" },
      { name: "Keras", level: "Field Tested", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg", purpose: "High-level neural prototyping" },
      { name: "OpenAI", level: "Core Instrument", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg", purpose: "Advanced language synthesis & APIs" },
    ],
  },
  {
    category: "Field Scripting & Primary Weapons",
    kitPouch: "POUCH B: LANGUAGES",
    description: "High-precision computational scripting, algorithmic execution, and type safety.",
    tools: [
      { name: "Python", level: "Primary Weapon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", purpose: "Data science, machine learning & automation" },
      { name: "TypeScript", level: "Primary Weapon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", purpose: "Type-safe application engineering" },
      { name: "SQL", level: "Core Instrument", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", purpose: "Relational query optimization & data retrieval" },
      { name: "JavaScript", level: "Core Instrument", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", purpose: "Interactive client and runtime scripting" },
      { name: "Java", level: "Field Tested", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", purpose: "Object-oriented systems & data structures" },
      { name: "C#", level: "Field Tested", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", purpose: "Simulation engines & software architecture" },
    ],
  },
  {
    category: "Cloud Basecamp & Infrastructure",
    kitPouch: "POUCH C: DEVOPS & CLOUD",
    description: "Field containerization, cloud deployment pipelines, and persistent basecamp infrastructure.",
    tools: [
      { name: "Google Cloud", level: "Primary Weapon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", purpose: "Cloud Run, compute instances & storage" },
      { name: "Docker", level: "Core Instrument", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", purpose: "Microservice containerization & isolation" },
      { name: "Git", level: "Core Instrument", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", purpose: "Distributed version tracking & branch control" },
      { name: "GitHub", level: "Core Instrument", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", purpose: "Code repositories, CI/CD & collaboration" },
      { name: "AWS", level: "Field Tested", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", purpose: "Elastic cloud compute & cloud storage" },
    ],
  },
  {
    category: "Cartography & HUD Visuals",
    kitPouch: "POUCH D: FRONTEND",
    description: "Terrain visualization, interactive expedition interfaces, and responsive telemetry.",
    tools: [
      { name: "React", level: "Primary Weapon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", purpose: "Modular component architecture & state" },
      { name: "Next.js", level: "Core Instrument", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", purpose: "Server-side rendering & optimized web apps" },
      { name: "Tailwind CSS", level: "Primary Weapon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", purpose: "Utility-first tactical design systems" },
      { name: "HTML5", level: "Core Instrument", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", purpose: "Semantic document structuring" },
      { name: "CSS3", level: "Core Instrument", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", purpose: "Responsive layouts, gradients & animations" },
    ],
  },
  {
    category: "Terrain Forensics & Analytics",
    kitPouch: "POUCH E: DATA SCIENCE",
    description: "Matrix decompositions, multivariate feature engineering, and statistical signal discovery.",
    tools: [
      { name: "Pandas", level: "Primary Weapon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", purpose: "High-performance tabular data manipulation" },
      { name: "NumPy", level: "Primary Weapon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", purpose: "N-dimensional array mathematical operations" },
      { name: "Jupyter", level: "Core Instrument", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", purpose: "Exploratory data analysis & model validation" },
      { name: "Streamlit", level: "Field Tested", logo: "https://streamlit.io/images/brand/streamlit-mark-color.svg", purpose: "Rapid ML dashboard deployment" },
      { name: "Power BI", level: "Field Tested", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", purpose: "Business analytics & metric visualization" },
    ],
  },
  {
    category: "Survey & Calibration Gear",
    kitPouch: "POUCH F: UTILITIES",
    description: "API testing rigs, simulation sandboxes, and interface wireframing.",
    tools: [
      { name: "FastAPI", level: "Primary Weapon", logo: "https://cdn.worldvectorlogo.com/logos/fastapi.svg", purpose: "Asynchronous, high-speed ML inference APIs" },
      { name: "Flask", level: "Core Instrument", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", purpose: "Lightweight Python microservices" },
      { name: "MongoDB", level: "Core Instrument", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", purpose: "Document store for heterogeneous JSON schemas" },
      { name: "Postman", level: "Core Instrument", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", purpose: "REST API contract testing & monitoring" },
      { name: "VS Code", level: "Primary Weapon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", purpose: "Expedition IDE & debugging station" },
      { name: "Unity", level: "Field Tested", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", purpose: "3D simulations & interactive environments" },
    ],
  },
];

export default function Skills() {
  const [selectedPouch, setSelectedPouch] = useState<string>("All Pouches");
  const [inspectedTool, setInspectedTool] = useState<{
    name: string;
    level: string;
    purpose: string;
  } | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const pouchList = ["All Pouches", ...equipmentKit.map((k) => k.kitPouch)];

  const displayedKit =
    selectedPouch === "All Pouches"
      ? equipmentKit
      : equipmentKit.filter((k) => k.kitPouch === selectedPouch);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Topographic Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 contour-lines" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-3">
            <Wrench className="w-3.5 h-3.5" />
            SURVIVAL & EXPLORATION GEAR
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2d180e] dark:text-[#f5ede2]">
            Explorer <span className="text-[#a33e14] dark:text-[#e86835]">Equipment Kit</span>
          </h2>
          <p className="mt-3 text-base text-[#523321] dark:text-[#d6c7b2]">
            The mathematical, algorithmic, and infrastructure instruments deployed in the field to conquer computational challenges.
          </p>
        </motion.div>

        {/* Pouch Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {pouchList.map((pouch) => (
            <button
              key={pouch}
              onClick={() => setSelectedPouch(pouch)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                selectedPouch === pouch
                  ? "bg-[#a33e14] dark:bg-[#e86835] text-white font-semibold shadow-sm scale-[1.02]"
                  : "bg-[#faf6ee] dark:bg-[#251d17] border border-[#dfd3c3] dark:border-[#423328] text-[#523321] dark:text-[#d6c7b2] hover:text-[#2d180e] dark:hover:text-white hover:border-[#a33e14]/40"
              }`}
            >
              {pouch}
            </button>
          ))}
        </div>

        {/* Inspected Tool Banner if active */}
        <AnimatePresence>
          {inspectedTool && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 p-4 rounded-xl bg-[#faf6ee] dark:bg-[#251d17] border border-[#a33e14]/40 dark:border-[#e86835]/40 shadow-sm tactical-border font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#a33e14]/15 text-[#a33e14] dark:text-[#e86835]">
                  <Crosshair className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#704832] dark:text-[#c0ad97] uppercase text-[10px] block">INSPECTING EQUIPMENT</span>
                  <span className="text-base font-bold text-[#2d180e] dark:text-[#f5ede2]">{inspectedTool.name}</span>
                  <span className="mx-2 text-[#dfd3c3] dark:text-[#504035]">•</span>
                  <span className="text-[#a33e14] dark:text-[#e86835] font-semibold">{inspectedTool.level}</span>
                </div>
              </div>
              <p className="text-[#523321] dark:text-[#d6c7b2] text-xs sm:text-right max-w-md">
                {inspectedTool.purpose}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Equipment Compartments */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedKit.map((compartment, catIdx) => (
            <motion.div
              key={compartment.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: catIdx * 0.06 }}
              className="bg-card/95 border border-border rounded-2xl p-5 shadow-sm tactical-border flex flex-col justify-between hover:border-[#a33e14]/40 dark:hover:border-[#e86835]/40 transition-colors text-left"
            >
              <div>
                {/* Compartment Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/80 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold border border-primary/25">
                    {compartment.kitPouch}
                  </span>
                  <span className="text-[#704832] dark:text-[#c0ad97] text-[11px] font-medium">
                    {compartment.tools.length} Tools
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#2d180e] dark:text-[#f5ede2] mb-1">
                  {compartment.category}
                </h3>
                <p className="text-xs text-[#523321] dark:text-[#d6c7b2] mb-4 leading-relaxed">
                  {compartment.description}
                </p>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {compartment.tools.map((tool) => (
                    <div
                      key={tool.name}
                      onMouseEnter={() => setInspectedTool(tool)}
                      onClick={() => setInspectedTool(tool)}
                      className="p-2.5 rounded-xl bg-[#faf6ee] dark:bg-[#251d17] border border-[#dfd3c3] dark:border-[#423328] hover:border-[#a33e14]/50 hover:bg-[#f5ede0] dark:hover:bg-[#32261f] transition-all cursor-pointer group flex items-center gap-2.5"
                    >
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-5 h-5 object-contain shrink-0 group-hover:scale-110 transition-transform"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="overflow-hidden">
                        <div className="text-xs font-semibold text-[#2d180e] dark:text-[#f5ede2] truncate group-hover:text-[#a33e14] dark:group-hover:text-[#e86835] transition-colors">
                          {tool.name}
                        </div>
                        <div className="text-[10px] text-[#704832] dark:text-[#c0ad97] font-mono truncate">
                          {tool.level}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compartment Footer */}
              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-[#704832] dark:text-[#c0ad97]">
                <span className="flex items-center gap-1 text-[#b35312] dark:text-[#f09a3e] font-semibold">
                  <CheckCircle2 className="w-3 h-3" />
                  FIELD CALIBRATED
                </span>
                <span>STATUS: READY</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
