import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FileText,
  Download,
  Eye,
  X,
  Compass,
  CheckCircle2,
  Terminal,
  Shield,
  Briefcase,
  GraduationCap,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function ExpeditionRecord() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-12 bg-muted/20 relative overflow-hidden">
      {/* Topographic Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 topographic-bg" />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-3">
            <FileText className="w-3.5 h-3.5" />
            EXPEDITION RECORD & CURRICULUM VITAE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2d180e] dark:text-[#f5ede2]">
            Official <span className="text-[#a33e14] dark:text-[#e86835]">Expedition Report</span>
          </h2>
          <p className="mt-3 text-base text-[#523321] dark:text-[#d6c7b2]">
            A comprehensive documentation of competencies, project milestones, research findings, and educational credentials.
          </p>
        </motion.div>

        {/* Tactical Dossier Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="bg-card/95 border border-border rounded-2xl p-6 sm:p-10 shadow-sm tactical-border relative space-y-8 text-left"
        >
          {/* Dossier Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/80 text-xs font-mono">
            <div>
              <span className="text-[#704832] dark:text-[#c0ad97] block text-[10px] uppercase font-medium">DOCUMENT ID</span>
              <span className="text-sm font-bold text-[#2d180e] dark:text-[#f5ede2]">REPORT #PRC-EXP-2025</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#a33e14]/10 text-[#a33e14] dark:text-[#e86835] border border-[#a33e14]/25 flex items-center gap-1 font-semibold">
                <Shield className="w-3.5 h-3.5" />
                CLEARANCE: UNRESTRICTED
              </span>
              <span className="text-[#704832] dark:text-[#c0ad97] hidden sm:inline font-medium">VERSION: 2.5</span>
            </div>
          </div>

          {/* Report Executive Summary Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 bg-[#faf6ee] dark:bg-[#251d17] rounded-xl border border-[#dfd3c3] dark:border-[#423328]">
              <span className="text-[#704832] dark:text-[#c0ad97] block text-[10px] uppercase font-medium">EXPEDITION LEAD</span>
              <span className="text-sm font-bold text-[#2d180e] dark:text-[#f5ede2]">M. P. Ravi Chandra</span>
            </div>
            <div className="p-4 bg-[#faf6ee] dark:bg-[#251d17] rounded-xl border border-[#dfd3c3] dark:border-[#423328]">
              <span className="text-[#704832] dark:text-[#c0ad97] block text-[10px] uppercase font-medium">ACADEMIC POST</span>
              <span className="text-sm font-bold text-[#a33e14] dark:text-[#e86835]">B.Tech CSE (AIML)</span>
            </div>
            <div className="p-4 bg-[#faf6ee] dark:bg-[#251d17] rounded-xl border border-[#dfd3c3] dark:border-[#423328]">
              <span className="text-[#704832] dark:text-[#c0ad97] block text-[10px] uppercase font-medium">PRIMARY DISCIPLINE</span>
              <span className="text-sm font-bold text-[#a33e14] dark:text-[#e86835]">Agentic AI & ML</span>
            </div>
            <div className="p-4 bg-[#faf6ee] dark:bg-[#251d17] rounded-xl border border-[#dfd3c3] dark:border-[#423328]">
              <span className="text-[#704832] dark:text-[#c0ad97] block text-[10px] uppercase font-medium">BASE COORDINATES</span>
              <span className="text-sm font-bold text-[#b35312] dark:text-[#f09a3e]">17.38° N, 78.48° E</span>
            </div>
          </div>

          {/* Key Dossier Highlights */}
          <div className="space-y-4 text-sm text-[#523321] dark:text-[#d6c7b2]">
            <h3 className="text-base font-bold text-[#2d180e] dark:text-[#f5ede2] font-mono flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#a33e14] dark:text-[#e86835]" />
              EXECUTIVE EXPEDITION HIGHLIGHTS
            </h3>
            <div className="grid md:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-[#faf6ee] dark:bg-[#251d17] border border-[#dfd3c3] dark:border-[#423328] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#a33e14] dark:text-[#e86835] shrink-0 mt-0.5" />
                <span className="text-[#4a2e1e] dark:text-[#e2d5c5]">
                  <strong className="text-[#2d180e] dark:text-[#f5ede2]">Autonomous Systems:</strong> Architected SpendShield AI multi-agent fraud detection with OCR and GCP.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#faf6ee] dark:bg-[#251d17] border border-[#dfd3c3] dark:border-[#423328] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#a33e14] dark:text-[#e86835] shrink-0 mt-0.5" />
                <span className="text-[#4a2e1e] dark:text-[#e2d5c5]">
                  <strong className="text-[#2d180e] dark:text-[#f5ede2]">FinTech Risk Modeling:</strong> Engineered predictive credit score intelligence with XGBoost and Streamlit.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#faf6ee] dark:bg-[#251d17] border border-[#dfd3c3] dark:border-[#423328] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#a33e14] dark:text-[#e86835] shrink-0 mt-0.5" />
                <span className="text-[#4a2e1e] dark:text-[#e2d5c5]">
                  <strong className="text-[#2d180e] dark:text-[#f5ede2]">National Credentials:</strong> NPTEL certifications in Python for Data Science and Blockchain Applications.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#faf6ee] dark:bg-[#251d17] border border-[#dfd3c3] dark:border-[#423328] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#a33e14] dark:text-[#e86835] shrink-0 mt-0.5" />
                <span className="text-[#4a2e1e] dark:text-[#e2d5c5]">
                  <strong className="text-[#2d180e] dark:text-[#f5ede2]">Technical Versatility:</strong> Proficient across Python, PyTorch, LangGraph, React, FastAPI, Docker, and SQL.
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#704832] dark:text-[#c0ad97]">
              <Compass className="w-4 h-4 text-[#a33e14] dark:text-[#e86835]" />
              <span>OFFICIAL PDF FILE READY FOR EXTRACTION</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                id="preview-cv-modal-btn"
                onClick={() => setIsPreviewOpen(true)}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#faf6ee] dark:bg-[#251d17] hover:bg-[#f5ede0] dark:hover:bg-[#32261f] text-[#2d180e] dark:text-[#f5ede2] border border-[#dfd3c3] dark:border-[#423328] hover:border-[#a33e14]/50 text-xs font-semibold font-mono flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Eye className="w-4 h-4 text-[#a33e14] dark:text-[#e86835]" />
                <span>Inspect Dossier</span>
              </button>

              <a
                id="download-cv-btn"
                href="/pradyumna.pdf"
                download="Musunuri_Pradyumna_Ravi_Chandra_CV.pdf"
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-[#a33e14] hover:bg-[#8f3611] text-white text-xs font-semibold font-mono flex items-center justify-center gap-2 transition-all shadow-sm hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>Download Report (PDF)</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full Screen Interactive PDF Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden tactical-border"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-muted/40 text-xs font-mono">
                <div className="flex items-center gap-2 text-foreground font-bold">
                  <FileText className="w-4 h-4 text-primary" />
                  <span>EXPEDITION REPORT: MUSUNURI PRADYUMNA RAVI CHANDRA</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/pradyumna.pdf"
                    download="Musunuri_Pradyumna_Ravi_Chandra_CV.pdf"
                    className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center gap-1.5 hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Preview Frame */}
              <div className="flex-1 bg-black/50 p-2 min-h-[70vh]">
                <iframe
                  src="/pradyumna.pdf"
                  title="Expedition Record CV Preview"
                  className="w-full h-full min-h-[70vh] rounded-lg border border-border/40"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
