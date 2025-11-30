import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const certifications = [
  {
    name: "Machine Learning Specialization",
    organization: "Stanford University - Coursera",
    year: "2024",
    link: "https://placeholder-certificate.com/ml",
  },
  {
    name: "Deep Learning Specialization",
    organization: "deeplearning.ai",
    year: "2024",
    link: "https://placeholder-certificate.com/dl",
  },
  {
    name: "AWS Certified Machine Learning",
    organization: "Amazon Web Services",
    year: "2023",
    link: "https://placeholder-certificate.com/aws",
  },
  {
    name: "TensorFlow Developer Certificate",
    organization: "Google",
    year: "2023",
    link: "https://placeholder-certificate.com/tf",
  },
  {
    name: "Data Science Professional Certificate",
    organization: "IBM",
    year: "2023",
    link: "https://placeholder-certificate.com/ds",
  },
];

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="certifications" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-20 text-glow"
        >
          <span className="text-primary">Certifications</span> & Achievements
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism p-6 rounded-xl neon-border group hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground mb-2">{cert.organization}</p>
                  <p className="text-sm text-primary font-semibold">{cert.year}</p>
                </div>

                <Button
                  onClick={() => window.open(cert.link, "_blank")}
                  variant="outline"
                  size="sm"
                  className="neon-border bg-transparent hover:bg-primary/20 text-primary group-hover:scale-110 transition-transform"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
