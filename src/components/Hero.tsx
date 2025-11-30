import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import cyberOrb from "@/assets/cyber-orb.png";

const Hero = () => {
  const handleDownloadResume = () => {
    // Placeholder for resume download
    window.open("https://placeholder-resume.pdf", "_blank");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--neon-blue) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--neon-blue) / 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-glow mb-4 leading-tight">
                Musunuri Pradyumna
                <br />
                <span className="text-primary">Ravi Chandra</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              CSE (AIML) Undergraduate | Aspiring AI/ML Engineer | Strong foundations in AI, ML, DL, 
              Data Science & Analytics | Proficient in Python, ML/DL frameworks, and end-to-end technical stacks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="neon-border bg-primary/10 hover:bg-primary/20 text-primary font-semibold px-8 py-6 text-lg group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Cyberpunk orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-72 h-72 md:w-96 md:h-96 rounded-full relative"
              >
                <img
                  src={cyberOrb}
                  alt="Cyberpunk Profile Orb"
                  className="w-full h-full object-cover rounded-full animate-pulse-glow"
                />
              </motion.div>
              
              {/* Rotating rings */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-primary/30 rounded-full"
                style={{ transform: "scale(1.1)" }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-secondary/20 rounded-full"
                style={{ transform: "scale(1.2)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
