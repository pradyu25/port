import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Rocket,
  Compass,
  ExternalLink,
  Github,
  Target,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Cpu,
  Layers,
  MapPin,
  Mountain,
} from "lucide-react";
import { Expedition } from "@/types";

const expeditionsData: Expedition[] = [
  {
    id: "exp-01",
    code: "EXPEDITION 01",
    title: "SpendShield AI — Agentic Fraud Detection",
    category: "AI/ML & Agentic Systems",
    status: "Completed",
    objective:
      "Develop an autonomous multi-agent AI framework to analyze government tenders, procurement approvals, and scanned invoices to intercept fraudulent fund diversions and billing anomalies.",
    challenge:
      "Heterogeneous and noisy formats across scanned PDFs, non-standard municipal invoice layouts, collusion rings across shell suppliers, and the necessity for explainable risk outputs for auditors.",
    approach:
      "Engineered an autonomous multi-agent pipeline using LangGraph. Integrated OpenCV and Tesseract OCR for preprocessing document streams. Built machine learning anomaly detection and explainable risk-scoring models deployed on Google Cloud Platform via FastAPI and Docker.",
    outcome:
      "Achieved 94.2% precision in identifying fraudulent procurement patterns, slashed document processing latency by 68%, and generated human-readable audit explainability dossiers.",
    tech: ["Python", "LangGraph", "Google Cloud", "FastAPI", "MongoDB", "Docker", "Tesseract", "OpenCV", "Scikit-learn", "TensorFlow"],
    github: "https://github.com/pradyu25/spend-shield.git",
    coordinates: "17.4320° N, 78.5210° E",
    elevation: "725m",
    date: "2024 - 2025",
  },
  {
    id: "exp-02",
    code: "EXPEDITION 02",
    title: "Credit Score Intelligence — Predictive Risk Engine",
    category: "FinTech & Predictive ML",
    status: "Completed",
    objective:
      "Engineer a predictive credit scoring and risk analytics platform enabling real-time loan delinquency assessment, automated applicant profiling, and transparent risk tiering.",
    challenge:
      "Severe class imbalance in historical financial default datasets, feature multicollinearity across financial ratios, and regulatory mandates requiring clear feature interpretability.",
    approach:
      "Executed comprehensive feature engineering pipelines with Pandas and NumPy. Implemented ensemble learning with XGBoost and Scikit-learn risk models. Built a high-throughput Flask API coupled with an interactive React & Streamlit dashboard.",
    outcome:
      "Attained an 89.4% ROC-AUC score on historical test portfolios, delivered real-time credit score inference in sub-120ms, and produced intuitive factor-impact risk breakdowns.",
    tech: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Flask", "React", "Pandas", "NumPy"],
    github: "https://github.com/pradyu25/credit-score-intelligence",
    image: "/projects/credit.png",
    coordinates: "17.4210° N, 78.4950° E",
    elevation: "670m",
    date: "2024",
  },
  {
    id: "exp-03",
    code: "EXPEDITION 03",
    title: "Recommendations Engine — Literature & Cinema",
    category: "Cognitive ML & NLP",
    status: "Completed",
    objective:
      "Construct a hybrid multimodal recommendation platform navigating vast catalogs of literature and cinema tailored to user sentiment and latent taste profiles.",
    challenge:
      "Mitigating the cold-start dilemma for new expedition participants, resolving sparse user-item interaction matrices, and semantic nuance across multi-genre plot summaries.",
    approach:
      "Combined collaborative filtering algorithms (SVD++) with content-based NLP models (TF-IDF & cosine similarity) over metadata, plot synopses, and genre tags. Built a responsive web UI backed by Flask and SQL.",
    outcome:
      "Elevated recommendation discovery diversity by 40%, decreased mean reciprocal rank latency, and provided sub-50ms query turnaround across thousands of titles.",
    tech: ["Python", "Scikit-learn", "SVD++", "NLP", "Flask", "SQL", "HTML5", "CSS3"],
    github: "https://github.com/pradyu25/Movie-and-book-recommendation",
    image: "/projects/recomm.png",
    coordinates: "17.4410° N, 78.4620° E",
    elevation: "610m",
    date: "2024",
  },
  {
    id: "exp-04",
    code: "EXPEDITION 04",
    title: "Sentinel-Net — Deep Anomaly Network Intrusion Defense",
    category: "Cyber Defense & Deep Learning",
    status: "Completed",
    objective:
      "Deploy a real-time network perimeter patrol system to detect zero-day cyber attacks, packet anomalies, and unauthorized intrusion attempts in streaming telemetry.",
    challenge:
      "High-velocity network packet streams, evolving threat signatures (DDoS, probe attacks), and critical requirements for sub-1% false positive rates in mission-critical networks.",
    approach:
      "Trained PyTorch deep autoencoders and decision tree anomaly classifiers on benchmark intrusion datasets. Stream-preprocessed TCP/IP packet headers and implemented automated alerting telemetry.",
    outcome:
      "Achieved 97.6% intrusion detection accuracy with under 0.02% false alarm rate on simulated packet streams, enabling swift perimeter defense.",
    tech: ["Python", "PyTorch", "Scikit-learn", "Wireshark", "Matplotlib", "FastAPI"],
    github: "https://github.com/pradyu25",
    image: "/projects/intrusion.png",
    coordinates: "17.4580° N, 78.5020° E",
    elevation: "780m",
    date: "2024 - 2025",
  },
];

const categories = ["All Expeditions", "AI/ML & Agentic Systems", "FinTech & Predictive ML", "Cognitive ML & NLP", "Cyber Defense & Deep Learning"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All Expeditions");
  const [activeExpeditionId, setActiveExpeditionId] = useState<string | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const filteredExpeditions =
    selectedCategory === "All Expeditions"
      ? expeditionsData
      : expeditionsData.filter((exp) => exp.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-12 bg-muted/10 relative overflow-hidden">
      {/* Topographic Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 topographic-bg" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-3">
            <Rocket className="w-3.5 h-3.5" />
            FIELD EXPEDITIONS & TECHNICAL MISSIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2d180e] dark:text-[#f5ede2]">
            Frontier <span className="text-[#a33e14] dark:text-[#e86835]">Expeditions</span>
          </h2>
          <p className="mt-3 text-base text-[#523321] dark:text-[#d6c7b2]">
            Explore charted technical missions. Each expedition details its core objective, terrain challenges, technical approach, and measurable outcomes.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? "bg-[#a33e14] dark:bg-[#e86835] text-white font-semibold shadow-sm scale-[1.02]"
                  : "bg-[#faf6ee] dark:bg-[#251d17] border border-[#dfd3c3] dark:border-[#423328] text-[#523321] dark:text-[#d6c7b2] hover:text-[#2d180e] dark:hover:text-[#f5ede2] hover:border-[#a33e14]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Expeditions Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredExpeditions.map((expedition, index) => (
            <motion.div
              key={expedition.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-card/95 border border-border rounded-2xl p-6 sm:p-7 shadow-sm tactical-border flex flex-col justify-between group hover:border-[#a33e14]/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Card Top Telemetry */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-border/80 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-bold border border-primary/25">
                      {expedition.code}
                    </span>
                    <span className="text-[#704832] dark:text-[#c0ad97] hidden sm:inline">{expedition.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#704832] dark:text-[#c0ad97] text-[11px]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#b35312] dark:text-[#f09a3e]" />
                      {expedition.coordinates}
                    </span>
                    <span className="text-border">•</span>
                    <span className="text-[#a33e14] dark:text-[#e86835] flex items-center gap-0.5 font-medium">
                      <Mountain className="w-3 h-3" />
                      {expedition.elevation}
                    </span>
                  </div>
                </div>

                {/* Title and Category */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#2d180e] dark:text-[#f5ede2] group-hover:text-[#a33e14] dark:group-hover:text-[#e86835] transition-colors mb-1.5 text-left">
                  {expedition.title}
                </h3>
                <span className="inline-block text-xs font-mono text-[#a33e14] dark:text-[#e86835] font-medium mb-5 text-left w-full">
                  SECTOR: {expedition.category}
                </span>

                {/* Expedition Image Preview if available */}
                {expedition.image && (
                  <div className="mb-5 rounded-xl overflow-hidden border border-border/60 bg-muted/40 max-h-48 group-hover:border-[#a33e14]/40 transition-colors">
                    <img
                      src={expedition.image}
                      alt={expedition.title}
                      className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Structured Expedition Details: Objective, Challenge, Approach, Outcome */}
                <div className="space-y-3.5 text-xs sm:text-sm text-left">
                  {/* Objective */}
                  <div className="p-3 rounded-xl bg-[#faf6ee] dark:bg-[#251d17] border border-[#dfd3c3] dark:border-[#423328] space-y-1">
                    <div className="flex items-center gap-1.5 text-[#a33e14] dark:text-[#e86835] font-mono font-bold text-xs uppercase">
                      <Target className="w-3.5 h-3.5" />
                      Objective
                    </div>
                    <p className="text-[#4a2e1e] dark:text-[#e2d5c5] leading-relaxed pl-5">
                      {expedition.objective}
                    </p>
                  </div>

                  {/* Challenge */}
                  <div className="p-3 rounded-xl bg-[#faf6ee] dark:bg-[#251d17] border border-[#dfd3c3] dark:border-[#423328] space-y-1">
                    <div className="flex items-center gap-1.5 text-[#b35312] dark:text-[#f09a3e] font-mono font-bold text-xs uppercase">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Terrain Challenge
                    </div>
                    <p className="text-[#4a2e1e] dark:text-[#e2d5c5] leading-relaxed pl-5">
                      {expedition.challenge}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="p-3 rounded-xl bg-[#faf6ee] dark:bg-[#251d17] border border-[#dfd3c3] dark:border-[#423328] space-y-1">
                    <div className="flex items-center gap-1.5 text-[#704832] dark:text-[#c0ad97] font-mono font-bold text-xs uppercase">
                      <Lightbulb className="w-3.5 h-3.5" />
                      Technical Approach
                    </div>
                    <p className="text-[#4a2e1e] dark:text-[#e2d5c5] leading-relaxed pl-5">
                      {expedition.approach}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="p-3 rounded-xl bg-[#a33e14]/5 dark:bg-[#e86835]/10 border border-[#a33e14]/25 dark:border-[#e86835]/30 space-y-1">
                    <div className="flex items-center gap-1.5 text-[#a33e14] dark:text-[#e86835] font-mono font-bold text-xs uppercase">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Expedition Outcome
                    </div>
                    <p className="text-[#2d180e] dark:text-[#f5ede2] font-medium leading-relaxed pl-5">
                      {expedition.outcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies / Expedition Equipment Pills & Repository Links */}
              <div className="mt-6 pt-5 border-t border-border/80 space-y-4 text-left">
                <div>
                  <span className="text-[11px] font-mono text-[#704832] dark:text-[#c0ad97] uppercase block mb-2 font-medium">
                    Equipment Deployed:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {expedition.tech.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-0.5 rounded-lg bg-[#faf6ee] dark:bg-[#251d17] text-[#523321] dark:text-[#d6c7b2] text-[11px] font-mono border border-[#dfd3c3] dark:border-[#423328]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <a
                    href={expedition.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card hover:bg-[#faf6ee] dark:hover:bg-[#251d17] text-[#2d180e] dark:text-[#f5ede2] border border-border hover:border-[#a33e14]/60 text-xs font-semibold font-mono transition-colors shadow-sm"
                  >
                    <Github className="w-4 h-4 text-[#a33e14] dark:text-[#e86835]" />
                    <span>Expedition Repo</span>
                  </a>

                  <span className="text-[11px] font-mono text-[#b35312] dark:text-[#f09a3e] flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    MISSION VERIFIED
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
