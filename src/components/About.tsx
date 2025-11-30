import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Brain,
  Cpu,
  Database,
  Code2,
  BarChart3,
  LineChart,
  MessageSquareText,
  Gamepad2,
  Orbit,
  Sparkles,
  FileText,
  PieChart,
} from "lucide-react";

const skills = [
  { label: "Python", icon: Code2 },
  { label: "Node.js", icon: Code2 },
  { label: "C Programming", icon: Code2 },
  { label: "Unity Engine", icon: Gamepad2 },
  { label: "Augmented Reality (AR)", icon: Orbit },
  { label: "Artificial intelligence", icon: Brain },
  { label: "Machine Learning", icon: Cpu },
  { label: "Vibe Coding", icon: Sparkles },
  { label: "MySQL", icon: Database },
  { label: "PostgreSQL", icon: Database },
  { label: "PL/SQL", icon: Database },
  { label: "MS-Office", icon: FileText },
  { label: "Power BI", icon: BarChart3 },
  { label: "Data Science", icon: LineChart },
  { label: "Google Analytics", icon: PieChart },
  { label: "Statistical Modeling", icon: LineChart },
  { label: "Data Analysis", icon: BarChart3 },
  { label: "Data Analytics", icon: BarChart3 },
  { label: "Natural Language Processing (NLP)", icon: MessageSquareText },
  { label: "Django", icon: Code2 },
  { label: "MongoDB", icon: Database },
];

const sizeClasses = [
  { chip: "px-4 py-2 text-xs md:text-sm", icon: "w-4 h-4" },
  { chip: "px-5 py-2.5 text-sm md:text-base", icon: "w-5 h-5" },
  { chip: "px-6 py-3 text-base md:text-lg", icon: "w-6 h-6" },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      {/* Soft vertical gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-10 md:mb-12 text-glow">
            About <span className="text-primary">Me</span>
          </h2>

          {/* Catchy about me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glassmorphism p-8 md:p-12 rounded-2xl mb-10 md:mb-12"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-5">
              I am a Computer Science Engineering undergraduate specializing in{" "}
              <span className="text-primary font-semibold">
                Artificial Intelligence and Machine Learning
              </span>
              , obsessed with the idea of turning messy data and abstract ideas
              into systems that actually do something useful. I enjoy working on
              projects where algorithms, infrastructure, and user experience all
              meet.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              My work spans{" "}
              <span className="text-primary font-semibold">
                AI, Machine Learning, Deep Learning, Data Science, and Analytics
              </span>
              — from exploring datasets and designing models to integrating them
              with{" "}
              <span className="text-primary font-semibold">
                Python, Django, Node.js, and modern databases
              </span>
              . I’m especially interested in intelligent backends, NLP-driven
              systems, and analytics pipelines that give real, actionable
              insights rather than just dashboards that look good.
            </p>
          </motion.div>

          {/* Brainstorm skills rectangle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative rounded-2xl border border-primary/30 bg-background/40 backdrop-blur-xl px-4 py-6 md:px-8 md:py-8 overflow-hidden"
          >
            {/* Grid / outline effect */}
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(hsl(var(--primary) / 0.12) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(var(--primary) / 0.08) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Heading inside box */}
            <div className="relative flex items-center justify-between mb-4 md:mb-6">
              <div>
                <h3 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-primary/80">
                  Skill Brainstorm
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  A quick visual map of what I build, break, and experiment with.
                </p>
              </div>
            </div>

            {/* Brainstorm cloud of skill chips */}
            <div className="relative z-10 flex flex-wrap gap-3 md:gap-4 justify-center md:justify-between">
              {skills.map((skill, index) => {
                const size = sizeClasses[index % sizeClasses.length];
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1, y: 0 }
                        : { opacity: 0, scale: 0.8, y: 10 }
                    }
                    transition={{
                      duration: 0.45,
                      delay: 0.25 + index * 0.07,
                      ease: "easeOut",
                    }}
                    className={`
                      glassmorphism
                      rounded-2xl
                      flex items-center gap-2 md:gap-3
                      cursor-default
                      hover:bg-primary/10 hover:border-primary/60
                      border border-primary/30
                      shadow-[0_0_15px_rgba(8,47,73,0.45)]
                      ${size.chip}
                    `}
                    style={{
                      transformOrigin:
                        index % 2 === 0 ? "left center" : "right center",
                    }}
                    whileHover={{
                      scale: 1.07,
                      rotate: index % 2 === 0 ? -1 : 1,
                    }}
                  >
                    <Icon
                      className={`${size.icon} text-primary flex-shrink-0`}
                    />
                    <span className="text-foreground/90 font-medium whitespace-nowrap">
                      {skill.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
