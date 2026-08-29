import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  MapPin,
  Compass,
  CheckCircle2,
  Brain,
  Cpu,
  Binary,
  Layers,
  Sparkles,
} from "lucide-react";

export default function Education() {
  const courseworkItems = [
    { name: "Machine Learning & Deep Learning", category: "Core AI", icon: Brain },
    { name: "Natural Language Processing & LLMs", category: "AI Systems", icon: Cpu },
    { name: "Data Structures & Algorithms", category: "Computing Foundations", icon: Binary },
    { name: "Neural Networks & Computer Vision", category: "Deep Tech", icon: Layers },
    { name: "Database Management & Distributed Systems", category: "Data Architecture", icon: BookOpen },
    { name: "Operating Systems & Computer Networks", category: "Systems Engineering", icon: Sparkles },
  ];

  const academicMilestones = [
    {
      metric: "87%",
      title: "Academic Aggregate",
      subtitle: "Aug 2022 — May 2026 Standing",
      detail: "Sustained distinction performance across 4 years of CSE (AIML) engineering studies.",
    },
    {
      metric: "Aug 2022 — May 2026",
      title: "Program Timeline",
      subtitle: "4-Year Bachelor of Technology",
      detail: "Full-time undergraduate engineering specializing in Artificial Intelligence and Machine Learning.",
    },
    {
      metric: "Hyderabad",
      title: "Base Camp Location",
      subtitle: "Tech & Innovation Hub",
      detail: "Nalla Narasimha Reddy Group of Institutions, premier engineering campus in Hyderabad.",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-background"
    >
      {/* Clearly Visible Cartographic Surveyor & Contour Background */}
      <div className="absolute inset-0 pointer-events-none visible-surveyor-pattern opacity-80" />
      <div className="absolute inset-0 pointer-events-none contour-lines opacity-40" />

      {/* Decorative Surveyor Elevation Grid Watermark */}
      <div className="absolute top-12 right-12 font-mono text-[11px] text-[#704832]/30 pointer-events-none hidden md:block text-right select-none">
        <div>ACADEMIC OBSERVATORY: SECTOR EPSILON</div>
        <div>COORD: 17.4180° N, 78.4410° E | ELEV: 590M</div>
        <div>CONTOUR INTERVAL: 15M (SURVEY GRADE)</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header: Clean Fade Animation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION & DEGREE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2d180e] dark:text-[#f5ede2]">
            Education <span className="text-[#a33e14] dark:text-[#e86835]">& Qualifications</span>
          </h2>
          <p className="mt-3 text-base text-[#523321] dark:text-[#d6c7b2]">
            Comprehensive technical education specializing in Artificial Intelligence, Machine Learning, and Systems Engineering.
          </p>
        </motion.div>

        {/* Primary Education Hero Card: Clean Zoom-In Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-10 rounded-2xl bg-card/95 border border-border/90 p-6 sm:p-10 shadow-lg tactical-border backdrop-blur-sm"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Degree & Institution Info */}
            <div className="lg:col-span-8 space-y-5 text-left">
              {/* Status and Timeline Tags */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/40 text-primary text-xs font-mono font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  Aug 2022 — May 2026
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#b35312]/15 border border-[#b35312]/30 text-[#8f3f09] dark:text-[#f09a3e] text-xs font-mono">
                  <MapPin className="w-3 h-3" />
                  Hyderabad, Telangana
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-700/10 border border-emerald-700/30 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  Final Year Scholar
                </span>
              </div>

              {/* Title & College */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2d180e] dark:text-[#f5ede2] leading-snug">
                  Bachelor of Technology in Computer Science & Engineering
                </h3>
                <div className="text-lg sm:text-xl font-bold text-[#a33e14] dark:text-[#e86835] mt-1">
                  Specialization: Artificial Intelligence & Machine Learning (AIML)
                </div>
                <div className="text-base font-semibold text-[#452b1d] dark:text-[#d6c7b2] mt-2 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#a33e14] dark:text-[#e86835]" />
                  <span>Nalla Narasimha Reddy Group of Institutions, Hyderabad</span>
                </div>
              </div>

              {/* Narrative Summary */}
              <p className="text-sm sm:text-base text-[#523321] dark:text-[#d6c7b2] leading-relaxed">
                Undergoing rigorous academic and research-driven training covering modern artificial intelligence, deep learning architectures, scalable distributed computing, and advanced data structures. Actively applying theoretical foundations to real-world autonomous multi-agent systems and predictive machine learning models.
              </p>

              {/* Key Competency Badges */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#704832] dark:text-[#c0ad97] mb-2.5 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#a33e14] dark:text-[#e86835]" />
                  <span>Primary Engineering Disciplines:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Deep Neural Networks",
                    "NLP & LLMs",
                    "Data Structures & Algorithms",
                    "Systems Architecture",
                    "Python for Data Science",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded-md bg-[#ede6dc] dark:bg-[#251d17] border border-[#d8cdbd] dark:border-[#423328] text-xs font-medium text-[#381c0e] dark:text-[#f5ede2]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Prominent 87% Result Badge: Clean Zoom-In Animation */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-xs rounded-2xl bg-gradient-to-b from-[#faf4ec] to-[#f4ebe0] dark:from-[#251d17] dark:to-[#1c1511] border-2 border-[#a33e14]/40 dark:border-[#e86835]/40 p-6 sm:p-8 shadow-md relative overflow-hidden text-center"
              >
                {/* Corner Decorative Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full pointer-events-none" />

                <div className="inline-flex p-3 rounded-xl bg-primary/15 text-primary mb-3">
                  <Award className="w-8 h-8" />
                </div>

                <div className="text-4xl sm:text-5xl font-black text-[#a33e14] dark:text-[#e86835] tracking-tight">
                  87%
                </div>
                <div className="text-sm font-bold uppercase tracking-wide text-[#2d180e] dark:text-[#f5ede2] mt-1">
                  Academic Result
                </div>
                <div className="text-xs font-mono text-[#704832] dark:text-[#c0ad97] mt-1">
                  Cumulative Standing • Distinction
                </div>

                <div className="mt-4 pt-4 border-t border-[#d8cdbd] dark:border-[#423328] text-xs text-[#523321] dark:text-[#d6c7b2] leading-relaxed">
                  Consistently maintained first-class performance throughout four years of undergraduate engineering.
                </div>

                <div className="mt-3 inline-block px-3 py-1 rounded-full bg-emerald-700/10 text-emerald-800 dark:text-emerald-400 border border-emerald-700/30 text-[11px] font-mono font-semibold">
                  Distinction Classification
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Milestone Cards: Clean Roll-In / Fade Animation */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {academicMilestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl bg-card/85 border border-border/80 p-5 shadow-sm hover:border-[#a33e14]/50 dark:hover:border-[#e86835]/50 transition-all text-left"
            >
              <div className="text-lg font-bold text-[#a33e14] dark:text-[#e86835] font-mono">
                {item.metric}
              </div>
              <div className="text-base font-bold text-[#2d180e] dark:text-[#f5ede2] mt-1">
                {item.title}
              </div>
              <div className="text-xs text-[#704832] dark:text-[#c0ad97] font-mono mt-0.5">
                {item.subtitle}
              </div>
              <p className="text-xs text-[#523321] dark:text-[#d6c7b2] mt-2.5 leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Academic Coursework Syllabus Grid: Clean Zoom-In Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl bg-card/85 border border-border p-6 sm:p-8 shadow-md"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6 border-b border-border/70 pb-4">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[#2d180e] dark:text-[#f5ede2] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#a33e14] dark:text-[#e86835]" />
                Key Coursework & Technical Syllabi
              </h4>
              <p className="text-xs sm:text-sm text-[#523321] dark:text-[#d6c7b2] mt-0.5">
                Core subjects and advanced electives completed during B.Tech (2022 — 2026)
              </p>
            </div>
            <span className="text-xs font-mono text-[#a33e14] dark:text-[#e86835] bg-[#a33e14]/10 dark:bg-[#e86835]/15 px-2.5 py-1 rounded-md border border-[#a33e14]/25">
              87% Academic Score
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courseworkItems.map((course, index) => {
              const CourseIcon = course.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf6f0] dark:bg-[#251d17] border border-[#e4d9ca] dark:border-[#423328] hover:border-[#a33e14]/40 dark:hover:border-[#e86835]/40 transition-colors text-left"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <CourseIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#a33e14] dark:text-[#e86835] uppercase">
                      {course.category}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#2d180e] dark:text-[#f5ede2]">
                      {course.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
