import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink, Briefcase } from "lucide-react";
import { Button } from "./ui/button";

const experienceTimeline = [
  {
    title: "Google Cloud Computing Virtual Internship",
    organization: "AICTE – Google",
    date: "September 2024",
    description:
      "Hands-on cloud fundamentals, compute, storage, networking, and deployment of scalable cloud apps.",
    link: "",
  },
  {
    title: "Cyber Security Intern",
    organization: "SkillVertex",
    date: "January 2024",
    description:
      "Worked on vulnerability identification, network threat patterns, and system security fundamentals.",
    link: "",
  },
];

const certificationTimeline = [
  {
    name: "Python for Data Science",
    organization: "NPTEL",
    date: "September 2025",
    link: "/nptel2.pdf",
  },
  {
    name: "NPTEL – Blockchain and its Applications",
    organization: "NPTEL",
    date: "April 2025",
    link: "/nptel1.pdf",
  },
  {
    name: "AR/VR Certification",
    organization: "Cymax Infotainment Pvt Ltd",
    date: "August 2024",
    link: "/cymax.pdf",
  },
  {
    name: "Cyber Security Training",
    organization: "SkillVertex",
    date: "January 2024",
    link: "/cyber.pdf",
  },
  
];

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="certifications"
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-glow"
        >
          <span className="text-primary">Certifications</span> & Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Certifications Timeline – TOP */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <div className="relative border-l border-primary/30 pl-4 space-y-8">
              {certificationTimeline.map((cert, index) => (
                <motion.div
                  key={cert.name + cert.date}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-4"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary shadow-[0_0_16px] shadow-primary" />

                  <div className="glassmorphism p-4 rounded-xl neon-border group hover:bg-primary/5 transition-all duration-300">
                    <p className="text-xs uppercase tracking-wide text-primary mb-1">
                      {cert.date}
                    </p>
                    <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {cert.organization}
                    </p>

                    {cert.link && (
                      <Button
                        onClick={() => window.open(cert.link, "_blank")}
                        variant="outline"
                        size="sm"
                        className="neon-border bg-transparent hover:bg-primary/20 text-primary group-hover:scale-105 transition-transform"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Certificate
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Timeline – BELOW */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Experience
            </h3>
            <div className="relative border-l border-primary/30 pl-4 space-y-8">
              {experienceTimeline.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.date}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-4"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary shadow-[0_0_16px] shadow-primary" />

                  <div className="glassmorphism p-4 rounded-xl neon-border hover:bg-primary/5 transition-all duration-300">
                    <p className="text-xs uppercase tracking-wide text-primary mb-1">
                      {exp.date}
                    </p>
                    <h4 className="text-lg font-bold mb-1">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {exp.organization}
                    </p>
                    {exp.description && (
                      <p className="text-sm text-muted-foreground">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
