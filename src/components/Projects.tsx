import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Sparkles, Code2, Zap, TrendingUp } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "SpendShield AI",
    description:
      "Designed SpendShield AI, an Agentic AI–based fraud detection system for public expenditure analysis. Built a multi-agent ML + NLP pipeline with OCR to process invoices, tenders, and approval documents. Developed anomaly detection and risk-scoring models with explainable AI outputs.",
    tech: ["Python", "LangGraph", "GCP", "FastAPI", "MongoDB", "Docker", "Tesseract", "OpenCV", "Scikit-learn", "TensorFlow"],
    github: "https://github.com/pradyu25/spend-shield.git",
    category: "AI/ML & Cloud",
    icon: Sparkles,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Credit Score Intelligence",
    description:
      "Developed an AI-powered credit scoring system using Python and machine learning. Implemented data preprocessing, feature engineering, and credit risk models. Built a RESTful backend using Flask, enabling real-time credit score predictions and dashboard.",
    tech: ["Python", "Scikit-Learn", "XGBoost", "Streamlit", "Flask", "React"],
    github: "https://github.com/pradyu25/credit-score-intelligence",
    category: "FinTech & ML",
    icon: TrendingUp,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Movie and Book Recommendations Engine",
    description:
      "Built a personalized recommendation engine for movies and books using machine learning techniques. Implemented collaborative filtering and content-based recommendation models. Applied NLP techniques for text preprocessing, feature extraction, and similarity computation.",
    tech: ["Python", "Scikit-learn", "SVD++", "NLP", "Flask", "SQL"],
    github: "https://github.com/pradyu25/Movie-and-book-recommendation",
    category: "ML & NLP",
    icon: Code2,
    gradient: "from-green-500 to-emerald-500",
  },
];

const ProjectCard = ({ project, index, inView }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
      whileHover={{ y: -15, scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative bg-card border border-border rounded-2xl p-6 card-shadow hover:glow-strong transition-all overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Animated gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Mouse follow spotlight */}
      {isHovered && (
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      <div className="relative z-10">
        {/* Header with Icon */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            animate={isHovered ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`p-3 bg-gradient-to-br ${project.gradient} rounded-xl`}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>

          {/* Category Badge */}
          <motion.span
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-lg border border-primary/20"
          >
            {project.category}
          </motion.span>
        </div>

        {/* Title */}
        <motion.h3
          className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
          animate={isHovered ? { x: [0, 5, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">
          {project.description}
        </p>

        {/* Tech Stack with animated tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 5).map((tech: string, idx: number) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15 + idx * 0.05 }}
              whileHover={{ scale: 1.15, y: -3 }}
              className="px-3 py-1 bg-muted text-foreground text-xs rounded-lg border border-border hover:border-primary/50 transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
          {project.tech.length > 5 && (
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 text-muted-foreground text-xs font-medium cursor-default"
            >
              +{project.tech.length - 5} more
            </motion.span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-border">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary/10 border border-primary/20 rounded-lg text-primary font-medium hover:bg-primary/20 transition-all group/btn"
          >
            <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
            View Code
          </motion.a>

          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 border border-border rounded-lg hover:bg-muted hover:border-primary/50 transition-all group/btn"
          >
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Hover indicator */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-4 right-4"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-5 h-5 text-primary" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Corner accent */}
      <motion.div
        className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity`}
        animate={isHovered ? { scale: [1, 1.5, 1], rotate: 360 } : {}}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4"
          >
            <Code2 className="w-4 h-4" />
            Featured Work
            <Sparkles className="w-4 h-4" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Showcasing real-world applications of AI/ML, data science, and full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/pradyu25"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold card-shadow-lg hover:shadow-2xl transition-all glow-strong group"
          >
            <span>View All 10+ Projects on GitHub</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
