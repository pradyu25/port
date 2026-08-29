import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Compass,
  Brain,
  Shield,
  Code2,
  Terminal,
  FileText,
  MapPin,
  Sparkles,
  Target,
  Rocket,
  Wrench,
  TrendingUp,
} from "lucide-react";

const explorerTraits = [
  {
    icon: Brain,
    title: "Algorithmic Navigation",
    pouch: "Cognitive Engine",
    description: "Deep mathematical intuition in neural networks, NLP vector spaces, and loss landscapes.",
  },
  {
    icon: Shield,
    title: "Autonomous Agent Architectures",
    pouch: "Multi-Agent System",
    description: "Designing self-correcting LangGraph agent workflows for automated audits and fraud detection.",
  },
  {
    icon: Rocket,
    title: "Field Deployment & Scalability",
    pouch: "Basecamp Ops",
    description: "Containerizing machine learning models with FastAPI, Docker, and Google Cloud Platform.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Risk & Analytics",
    pouch: "Terrain Forensics",
    description: "Engineering robust credit risk models and anomaly classifiers with explainable AI outputs.",
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Topographic Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 contour-lines" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5 text-primary" />
            EXPLORER PROFILE & DOSSIER
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2d180e] dark:text-[#f5ede2]">
            Mapping Frontiers in <span className="text-[#a33e14] dark:text-[#e86835]">AI & Intelligent Systems</span>
          </h2>
          <p className="mt-3 text-base text-[#523321] dark:text-[#d6c7b2]">
            Undergraduate researcher, autonomous system builder, and data science pioneer navigating complex technical terrain.
          </p>
        </motion.div>

        {/* Two-Column Explorer Dossier */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Explorer Narrative & Mission (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Dossier Card */}
            <div className="bg-card/95 border border-border rounded-2xl p-6 sm:p-8 shadow-sm tactical-border relative space-y-5">
              <div className="flex items-center justify-between border-b border-border/80 pb-3 text-xs font-mono text-[#704832] dark:text-[#c0ad97]">
                <span className="flex items-center gap-2 text-[#a33e14] dark:text-[#e86835] font-semibold">
                  <Terminal className="w-4 h-4" />
                  FIELD DOSSIER: PRC-HYD-25
                </span>
                <span className="text-[#b35312] dark:text-[#f09a3e] font-medium">CLASSIFICATION: EXPLORER</span>
              </div>

              <div className="space-y-4 text-[#4a2e1e] dark:text-[#d6c7b2] text-sm sm:text-base leading-relaxed">
                <p>
                  I am <strong className="text-[#2d180e] dark:text-[#f5ede2] font-bold">Musunuri Pradyumna Ravi Chandra</strong>,
                  an AI/ML undergraduate at Nalla Narasimha Reddy Group of Institutions in Hyderabad. I treat complex data
                  ecosystems like undiscovered landscapes—charting patterns, traversing high-dimensional manifolds, and
                  discovering signals where others see noise.
                </p>

                <p>
                  My recent work has centered around <strong className="text-[#2d180e] dark:text-[#f5ede2] font-semibold">Agentic AI and FinTech intelligence</strong>.
                  Through systems like <em className="text-[#a33e14] dark:text-[#e86835] font-semibold">SpendShield AI</em>, I designed multi-agent pipelines capable
                  of reading unstructured procurement documents, validating invoice authenticity, and flagging fiscal anomalies with explainable AI outputs.
                </p>

                <p>
                  Whether engineering high-precision credit risk predictors with XGBoost, building multimodal recommendation engines with SVD++, or
                  deploying containerized APIs to Google Cloud Platform, I prioritize <strong className="text-[#2d180e] dark:text-[#f5ede2] font-semibold">measurable real-world impact</strong> and
                  architectural resilience.
                </p>
              </div>

              {/* Explorer Coordinates & Mission Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-border/70 text-xs font-mono">
                <div className="p-3 bg-[#faf6ee] dark:bg-[#251d17] rounded-xl border border-[#dfd3c3] dark:border-[#423328]">
                  <span className="text-[#704832] dark:text-[#c0ad97] block text-[10px]">BASE SECTOR</span>
                  <span className="font-semibold text-[#2d180e] dark:text-[#f5ede2]">Hyderabad, IN</span>
                </div>
                <div className="p-3 bg-[#faf6ee] dark:bg-[#251d17] rounded-xl border border-[#dfd3c3] dark:border-[#423328]">
                  <span className="text-[#704832] dark:text-[#c0ad97] block text-[10px]">PRIMARY FOCUS</span>
                  <span className="font-semibold text-[#a33e14] dark:text-[#e86835]">AI / Agentic ML</span>
                </div>
                <div className="p-3 bg-[#faf6ee] dark:bg-[#251d17] rounded-xl border border-[#dfd3c3] dark:border-[#423328] col-span-2 sm:col-span-1">
                  <span className="text-[#704832] dark:text-[#c0ad97] block text-[10px]">RADAR STATUS</span>
                  <span className="font-semibold text-[#b35312] dark:text-[#f09a3e]">Ready for Roles</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => smoothScrollTo("projects")}
                  className="px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold flex items-center gap-2 transition-all"
                >
                  <Rocket className="w-3.5 h-3.5" />
                  <span>Inspect Expeditions</span>
                </button>
                <button
                  onClick={() => smoothScrollTo("skills")}
                  className="px-4 py-2.5 rounded-xl bg-card hover:bg-muted text-foreground border border-border hover:border-primary/40 text-xs font-semibold flex items-center gap-2 transition-all"
                >
                  <Wrench className="w-3.5 h-3.5 text-primary" />
                  <span>Check Equipment Kit</span>
                </button>
                <button
                  onClick={() => smoothScrollTo("resume")}
                  className="px-4 py-2.5 rounded-xl bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/30 text-xs font-semibold flex items-center gap-2 transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Expedition Report</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Explorer Capabilities & Pillars (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-2">
              <Target className="w-3.5 h-3.5 text-secondary" />
              EXPLORER METHODOLOGIES & TRAITS
            </div>

            {explorerTraits.map((trait, idx) => {
              const Icon = trait.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all shadow-md group relative"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                          {trait.title}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                          {trait.pouch}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {trait.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
