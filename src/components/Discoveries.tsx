import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award,
  FileCheck,
  ExternalLink,
  Download,
  Eye,
  X,
  Compass,
  CheckCircle2,
  Calendar,
  Building,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Discovery } from "@/types";

const discoveriesList: Discovery[] = [
  {
    id: "disc-01",
    title: "Python for Data Science — Elite Certification",
    issuer: "NPTEL / Ministry of Education, Govt. of India (IIT)",
    date: "September 2025",
    coordinates: "13.0827° N, 80.2707° E",
    pdfUrl: "/nptel_pfds.pdf",
    category: "Elite Certification",
    description:
      "Comprehensive national certification covering statistical algorithms, matrix computations, exploratory data analysis, and predictive modeling using Python and Scikit-learn.",
    badges: ["National Level Exam", "Data Science", "Python", "Elite Credential"],
  },
  {
    id: "disc-02",
    title: "Blockchain and its Applications — National Credential",
    issuer: "NPTEL / IIT Kharagpur",
    date: "April 2025",
    coordinates: "22.3149° N, 87.3105° E",
    pdfUrl: "/nptel_ba.pdf",
    category: "Elite Certification",
    description:
      "Rigorous examination on decentralized consensus protocols, cryptographic hash trees, smart contract engineering, and distributed ledger security.",
    badges: ["Blockchain Architecture", "Consensus Protocols", "Decentralized Systems"],
  },
  {
    id: "disc-03",
    title: "Cybersecurity & Perimeter Defense Specialization",
    issuer: "Certified Cyber Defense Authority",
    date: "2024",
    coordinates: "17.3850° N, 78.4867° E",
    pdfUrl: "/cyber.pdf",
    category: "Specialization",
    description:
      "Deep technical verification in threat surface analysis, network vulnerability assessments, intrusion detection systems, and defensive cybersecurity operations.",
    badges: ["Network Security", "Perimeter Defense", "Vulnerability Assessment"],
  },
];

const expeditionMilestones = [
  {
    icon: Trophy,
    title: "Agentic AI Innovation Finalist",
    details: "Recognized for multi-agent autonomous fraud auditing system at institutional technical summit.",
  },
  {
    icon: ShieldCheck,
    title: "FinTech Predictive Risk Champion",
    details: "Built end-to-end credit risk scoring engine with sub-120ms real-time prediction turnaround.",
  },
  {
    icon: Sparkles,
    title: "Continuous Open-Source Contributor",
    details: "Authored and maintained repositories in machine learning, recommender systems, and fraud prevention.",
  },
];

export default function Discoveries() {
  const [activePdfModal, setActivePdfModal] = useState<{ url: string; title: string } | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="discoveries" className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Topographic Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 contour-lines" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            FIELD DISCOVERIES & CERTIFIED ARTIFACTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2d180e] dark:text-[#f5ede2]">
            Expedition <span className="text-[#a33e14] dark:text-[#e86835]">Discoveries</span>
          </h2>
          <p className="mt-3 text-base text-[#523321] dark:text-[#d6c7b2]">
            Verified credentials, certified relics, and technical honors collected throughout the exploration trail.
          </p>
        </motion.div>

        {/* Primary Discoveries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {discoveriesList.map((disc, idx) => (
            <motion.div
              key={disc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-card/95 border border-border rounded-2xl p-6 shadow-sm tactical-border flex flex-col justify-between group hover:border-[#a33e14]/50 dark:hover:border-[#e86835]/50 transition-colors text-left"
            >
              <div>
                {/* Discovery Card Header */}
                <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-border/80 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-bold border border-primary/25">
                    {disc.category}
                  </span>
                  <span className="text-[#704832] dark:text-[#c0ad97] text-[11px] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-primary" />
                    {disc.date}
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#2d180e] dark:text-[#f5ede2] group-hover:text-[#a33e14] dark:group-hover:text-[#e86835] transition-colors">
                      {disc.title}
                    </h3>
                    <p className="text-xs font-mono text-[#a33e14] dark:text-[#e86835] font-medium flex items-center gap-1 mt-0.5">
                      <Building className="w-3 h-3" />
                      {disc.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#523321] dark:text-[#d6c7b2] leading-relaxed mb-4">
                  {disc.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {disc.badges.map((b) => (
                    <span
                      key={b}
                      className="px-2 py-0.5 rounded-md bg-[#faf6ee] dark:bg-[#251d17] text-[#523321] dark:text-[#d6c7b2] text-[10px] font-mono border border-[#dfd3c3] dark:border-[#423328]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Preview Artifact & Download */}
              <div className="pt-4 border-t border-border/80 flex items-center gap-2">
                {disc.pdfUrl && (
                  <>
                    <button
                      onClick={() => setActivePdfModal({ url: disc.pdfUrl!, title: disc.title })}
                      className="flex-1 py-2 px-3 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors font-mono shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Artifact</span>
                    </button>
                    <a
                      href={disc.pdfUrl}
                      download
                      className="p-2 rounded-xl bg-[#faf6ee] dark:bg-[#251d17] hover:bg-[#f5ede0] dark:hover:bg-[#32261f] text-[#704832] dark:text-[#c0ad97] hover:text-[#2d180e] dark:hover:text-white border border-[#dfd3c3] dark:border-[#423328] transition-colors"
                      title="Download Certificate PDF"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expedition Honors & Field Accomplishments */}
        <div className="bg-card/95 border border-border rounded-2xl p-6 sm:p-8 shadow-sm tactical-border text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-[#a33e14] dark:text-[#e86835] font-bold mb-4 uppercase">
            <Trophy className="w-4 h-4" />
            Special Expedition Honors & Field Accomplishments
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {expeditionMilestones.map((milestone, mIdx) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={mIdx}
                  className="p-4 rounded-xl bg-[#faf6ee] dark:bg-[#251d17] border border-[#dfd3c3] dark:border-[#423328] hover:border-[#a33e14]/40 dark:hover:border-[#e86835]/40 transition-colors flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#2d180e] dark:text-[#f5ede2] mb-1">{milestone.title}</h4>
                    <p className="text-xs text-[#523321] dark:text-[#d6c7b2] leading-relaxed">
                      {milestone.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive PDF Artifact Inspector Modal */}
      <AnimatePresence>
        {activePdfModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden tactical-border"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-muted/40 text-xs font-mono">
                <div className="flex items-center gap-2 text-foreground font-bold truncate">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="truncate">{activePdfModal.title}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={activePdfModal.url}
                    download
                    className="px-2.5 py-1 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center gap-1 text-[11px] hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => setActivePdfModal(null)}
                    className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* PDF Preview Iframe */}
              <div className="flex-1 bg-black/40 p-2 min-h-[60vh]">
                <iframe
                  src={activePdfModal.url}
                  title={activePdfModal.title}
                  className="w-full h-full min-h-[60vh] rounded-lg border border-border/40"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
