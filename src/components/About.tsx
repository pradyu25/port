import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Database, Code2, BarChart3, Cpu, Layers } from "lucide-react";

const skills = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Cpu, label: "Machine Learning" },
  { icon: Layers, label: "Deep Learning" },
  { icon: Database, label: "Data Science" },
  { icon: BarChart3, label: "Data Analytics" },
  { icon: Code2, label: "Python & Frameworks" },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-glow">
            About <span className="text-primary">Me</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphism p-8 md:p-12 rounded-2xl mb-12"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              I'm an undergraduate student pursuing Computer Science Engineering with a specialization in 
              <span className="text-primary font-semibold"> Artificial Intelligence and Machine Learning</span>. 
              My journey in tech is driven by a passion for building intelligent systems that solve real-world problems.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              With strong foundations in AI, ML, and Deep Learning, combined with expertise in Data Science and Analytics, 
              I strive to create end-to-end solutions using modern frameworks and tools. I'm proficient in 
              <span className="text-primary font-semibold"> Python</span>, various ML/DL frameworks including 
              <span className="text-primary font-semibold"> TensorFlow, PyTorch, and scikit-learn</span>, 
              and have experience with full-stack development.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glassmorphism p-6 rounded-xl text-center group hover:bg-primary/10 transition-all duration-300 cursor-pointer"
              >
                <skill.icon className="w-12 h-12 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-foreground/90">{skill.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
