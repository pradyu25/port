import { motion, useAnimation } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Sparkles, Code2, Brain, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "AI/ML Engineer",
  "Data Scientist",
  "Full-Stack Developer",
  "Problem Solver",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [10, 0],
      transition: { duration: 0.5 },
    });
  }, [currentRole, controls]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 lg:pt-0"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium"
              >
                <Sparkles className="w-4 h-4" />
                Available for Opportunities
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground font-medium"
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                Musunuri Pradyumna
                <br />
                <span className="gradient-text">Ravi Chandra</span>
              </motion.h1>

              {/* Animated Role */}
              <motion.div
                className="h-12 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  key={currentRole}
                  animate={controls}
                  className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-primary"
                >
                  {currentRole === 0 && <Brain className="w-6 h-6" />}
                  {currentRole === 1 && <Code2 className="w-6 h-6" />}
                  {currentRole === 2 && <Rocket className="w-6 h-6" />}
                  {currentRole === 3 && <Sparkles className="w-6 h-6" />}
                  {roles[currentRole]}
                </motion.div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Results-driven <span className="font-semibold text-foreground">AI/ML and Data Science</span> undergraduate passionate about building scalable, intelligent systems that solve real-world problems. Seeking to contribute advanced modeling, analytics, and automation skills to develop high-impact, data-driven solutions in a dynamic environment.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 text-sm text-muted-foreground"
            >
              <a href="mailto:mprc9125@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                mprc9125@gmail.com
              </a>
              <a href="tel:+918142943409" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +91 8142943409
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Hyderabad, Telangana
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => scrollTo("projects")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all card-shadow hover:shadow-lg glow"
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={() => scrollTo("contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-all"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4"
            >
              <motion.a
                href="https://github.com/pradyu25"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 border border-border rounded-lg hover:bg-muted hover:border-primary transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/musunuri-pradyumna-ravi-chandra-a08500306/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 border border-border rounded-lg hover:bg-muted hover:border-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-all duration-500 card-shadow-lg">
                <motion.img
                  src="/ravi.png"
                  alt="Musunuri Pradyumna Ravi Chandra"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 -right-4 px-4 py-2 bg-card border border-primary/30 rounded-xl card-shadow-lg"
              >
                <div className="text-sm font-bold text-primary">B.Tech CSE (AI & ML)</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-card border border-secondary/30 rounded-xl card-shadow-lg"
              >
                <div className="text-sm font-bold text-secondary">10+ Projects</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
