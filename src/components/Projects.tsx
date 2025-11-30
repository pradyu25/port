import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "AI-Powered Recommendation System",
    description: "Built a machine learning model for personalized content recommendations using collaborative filtering.",
    tech: ["Python", "TensorFlow", "pandas", "Flask"],
    github: "https://github.com/pradyu25/project1",
    align: "left",
  },
  {
    title: "Deep Learning Image Classifier",
    description: "Developed a CNN-based image classification system achieving 95% accuracy on test data.",
    tech: ["PyTorch", "OpenCV", "NumPy", "React"],
    github: "https://github.com/pradyu25/project2",
    align: "right",
  },
  {
    title: "Real-Time Data Analytics Dashboard",
    description: "Created an interactive dashboard for visualizing large-scale data with real-time updates.",
    tech: ["Python", "Plotly", "Pandas", "SQL"],
    github: "https://github.com/pradyu25/project3",
    align: "left",
  },
  {
    title: "NLP Sentiment Analysis Tool",
    description: "Implemented natural language processing for sentiment analysis on social media data.",
    tech: ["Python", "NLTK", "Transformers", "FastAPI"],
    github: "https://github.com/pradyu25/project4",
    align: "right",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--neon-blue)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-20 text-glow"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <div className="space-y-24 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: project.align === "left" ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                project.align === "right" ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Visual panel */}
              <div
                className={`glassmorphism p-8 rounded-2xl neon-border group hover:shadow-neon transition-all duration-300 ${
                  project.align === "right" ? "md:col-start-2" : ""
                }`}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                  <div className="text-center">
                    <Github className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <p className="text-muted-foreground">Project Preview</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={project.align === "right" ? "md:col-start-1 md:row-start-1" : ""}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-glow">{project.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => window.open(project.github, "_blank")}
                  variant="outline"
                  className="neon-border bg-transparent hover:bg-primary/20 text-primary group"
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
                  View Project
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-20"
        >
          <Button
            onClick={() => window.open("https://github.com/pradyu25", "_blank")}
            size="lg"
            className="neon-border bg-primary/10 hover:bg-primary/20 text-primary font-semibold px-12 py-6 text-lg group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Github className="w-5 h-5" />
              View More on GitHub
            </span>
            <div className="absolute inset-0 bg-primary/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
