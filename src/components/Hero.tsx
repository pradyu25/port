import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Compass,
  MapPin,
  Map,
  Rocket,
  FileText,
  Radio,
  ArrowDown,
  Brain,
  Shield,
  Code2,
  CloudSun,
  Wind,
  Mountain,
  Thermometer,
} from "lucide-react";

const explorerRoles = [
  { title: "Agentic AI & LLM Systems Explorer", icon: Brain, sector: "AI/ML Territory", weatherNote: "High Visibility" },
  { title: "Predictive FinTech & Risk Architect", icon: Shield, sector: "Financial Highlands", weatherNote: "Stable Barometer" },
  { title: "Autonomous Machine Learning Engineer", icon: Rocket, sector: "Deep Tech Frontier", weatherNote: "Pleasant Conditions" },
  { title: "Full-Stack Systems Cartographer", icon: Code2, sector: "Full-Stack Range", weatherNote: "Gentle Alpine Breeze" },
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % explorerRoles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const CurrentRoleIcon = explorerRoles[currentRoleIndex].icon;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background Cartographic Grid with Soft Parchment Tint */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Topographic Contour Background Curves: Highly Visible in Light Cartographic Theme */}
      <div className="absolute inset-0 pointer-events-none opacity-45 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 200 C 300 100, 600 350, 1300 150"
            stroke="rgba(163, 62, 20, 0.35)"
            strokeWidth="1.8"
            strokeDasharray="6 6"
          />
          <path
            d="M-100 320 C 250 220, 750 450, 1300 280"
            stroke="rgba(140, 75, 35, 0.30)"
            strokeWidth="1.8"
          />
          <path
            d="M-100 450 C 400 380, 800 600, 1300 420"
            stroke="rgba(179, 83, 18, 0.32)"
            strokeWidth="1.8"
            strokeDasharray="8 8"
          />
          <path
            d="M-100 580 C 350 500, 650 700, 1300 540"
            stroke="rgba(163, 62, 20, 0.28)"
            strokeWidth="1.8"
          />
          {/* Elevation Survey Markers */}
          <g stroke="rgba(163, 62, 20, 0.5)" strokeWidth="1.5">
            <path d="M 300 190 L 300 210 M 290 200 L 310 200" />
            <path d="M 650 340 L 650 360 M 640 350 L 660 350" />
            <path d="M 900 490 L 900 510 M 890 500 L 910 500" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Mission Statement & Explorer Identity */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Weather & Mission Badge with Coordinates */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/90 border border-primary/30 text-xs font-mono shadow-sm backdrop-blur-sm"
            >
              <span className="flex items-center gap-1.5 text-primary font-semibold">
                <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "16s" }} />
                EXPEDITION BASE CAMP
              </span>
              <span className="text-border">•</span>
              <span className="text-muted-foreground flex items-center gap-1">
                <MapPin className="w-3 h-3 text-secondary" />
                17.3850° N, 78.4867° E (HYD)
              </span>
              <span className="text-border hidden sm:inline">•</span>
              <span className="text-amber-600 dark:text-amber-400 font-medium hidden sm:inline flex items-center gap-1">
                <CloudSun className="w-3 h-3" />
                21°C PLEASANT OVERCAST
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-xs font-mono uppercase tracking-widest text-primary font-semibold flex items-center gap-2"
              >
                <Mountain className="w-3.5 h-3.5 text-secondary" />
                Explorer Dossier: Musunuri Pradyumna Ravi Chandra
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2d180e] dark:text-[#f5ede2] leading-[1.15]"
              >
                Don&apos;t just view my portfolio.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a33e14] via-[#b35312] to-[#783e1c] dark:from-[#e86835] dark:via-[#f09a3e] dark:to-[#c87640]">
                  Explore it.
                </span>
              </motion.h1>
            </div>

            {/* Dynamic Role / Territory Readout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="p-3.5 rounded-xl bg-card/95 border border-border max-w-xl tactical-border backdrop-blur-md shadow-sm"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#704832] dark:text-[#c0ad97] mb-1.5">
                <span className="flex items-center gap-1.5 text-[#a33e14] dark:text-[#e86835] font-semibold">
                  <Compass className="w-3.5 h-3.5" />
                  CURRENT HEADING & SECTOR
                </span>
                <span className="text-[#b35312] dark:text-[#f09a3e] font-semibold">{explorerRoles[currentRoleIndex].sector}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#a33e14]/10 text-[#a33e14] dark:text-[#e86835]">
                  <CurrentRoleIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-[#2d180e] dark:text-[#f5ede2] transition-all duration-300">
                    {explorerRoles[currentRoleIndex].title}
                  </div>
                  <div className="text-[11px] font-mono text-[#704832] dark:text-[#c0ad97] flex items-center gap-1 mt-0.5">
                    <Wind className="w-3 h-3 text-[#b35312] dark:text-[#f09a3e]" />
                    <span>Atmospheric condition: {explorerRoles[currentRoleIndex].weatherNote}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission Briefing Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-base sm:text-lg text-[#4a2e1e] dark:text-[#d6c7b2] max-w-2xl leading-relaxed font-normal"
            >
              Welcome to my expedition headquarters. I am a Computer Science undergraduate specializing in{" "}
              <strong className="text-[#2d180e] dark:text-[#f5ede2] font-semibold">AI, Machine Learning, and Agentic Systems</strong>.
              Trek through live field expeditions, inspect equipment kits, discover verified credentials, and establish
              direct coordinates across cartographic terrain.
            </motion.p>

            {/* Exploration Launch CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                id="hero-open-map-btn"
                onClick={() => smoothScrollTo("map")}
                className="px-5 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm flex items-center gap-2 transition-all shadow-lg shadow-primary/20 hover:scale-[1.02]"
              >
                <Map className="w-4 h-4" />
                <span>Open Territory Map</span>
              </button>

              <button
                id="hero-expeditions-btn"
                onClick={() => smoothScrollTo("projects")}
                className="px-5 py-3 rounded-xl bg-card hover:bg-muted/80 text-foreground font-semibold text-sm border border-border/80 hover:border-primary/50 flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                <Rocket className="w-4 h-4 text-primary" />
                <span>View Expeditions</span>
              </button>

              <button
                id="hero-dossier-btn"
                onClick={() => smoothScrollTo("resume")}
                className="px-4 py-3 rounded-xl bg-secondary/10 hover:bg-secondary/20 text-secondary font-semibold text-sm border border-secondary/30 flex items-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Expedition Record</span>
              </button>

              <button
                id="hero-coordinates-btn"
                onClick={() => smoothScrollTo("contact")}
                className="p-3 rounded-xl bg-card hover:bg-muted text-muted-foreground hover:text-primary border border-border transition-colors"
                title="Set Coordinates"
              >
                <Radio className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Pleasant Expedition Weather & Field Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="grid grid-cols-3 gap-3 pt-4 max-w-lg border-t border-border/70 font-mono"
            >
              <div className="p-2 rounded-xl bg-card/60 border border-border/50">
                <div className="text-xl sm:text-2xl font-bold text-foreground">4+</div>
                <div className="text-[11px] text-muted-foreground uppercase flex items-center gap-1">
                  <Rocket className="w-3 h-3 text-primary" />
                  Key Expeditions
                </div>
              </div>
              <div className="p-2 rounded-xl bg-card/60 border border-border/50">
                <div className="text-xl sm:text-2xl font-bold text-primary flex items-center gap-1">
                  <Thermometer className="w-4 h-4" />
                  21°C
                </div>
                <div className="text-[11px] text-muted-foreground uppercase">Pleasant Weather</div>
              </div>
              <div className="p-2 rounded-xl bg-card/60 border border-border/50">
                <div className="text-xl sm:text-2xl font-bold text-secondary">3+</div>
                <div className="text-[11px] text-muted-foreground uppercase">Elite Discoveries</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Explorer Visual & Cartographic Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-full max-w-sm"
            >
              {/* Pleasant Topographic Ambient Rings */}
              <div className="absolute -inset-4 rounded-full border border-primary/20 pointer-events-none animate-breeze" />
              <div className="absolute -inset-8 rounded-full border border-secondary/15 pointer-events-none" />

              {/* Main Explorer Portrait Card */}
              <div className="relative rounded-2xl bg-card border border-border p-3 shadow-2xl overflow-hidden tactical-border backdrop-blur-md">
                {/* Top Weather & Telemetry Header */}
                <div className="flex items-center justify-between px-2.5 py-1.5 mb-2 bg-muted/50 rounded-lg text-[11px] font-mono text-muted-foreground">
                  <span className="flex items-center gap-1 text-primary font-medium">
                    <CloudSun className="w-3.5 h-3.5 text-amber-500" />
                    STATUS: ACTIVE TREK
                  </span>
                  <span>ID: PRC-9125</span>
                </div>

                {/* Explorer Image with topographic overlay */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-muted/30 group">
                  <img
                    src="/ravi.png"
                    alt="Musunuri Pradyumna Ravi Chandra"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gentle Gradient & Elevation Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Corner Coordinates Stamp */}
                  <div className="absolute bottom-3 left-3 right-3 text-left font-mono text-white text-xs space-y-1 pointer-events-none">
                    <div className="text-[10px] uppercase text-emerald-300 tracking-wider flex items-center gap-1">
                      <Compass className="w-3 h-3 text-emerald-300" />
                      Musunuri Pradyumna Ravi Chandra
                    </div>
                    <div className="text-[11px] font-bold text-white">
                      CSE (AIML) Undergrad • Hyderabad
                    </div>
                    <div className="text-[10px] text-gray-300 flex items-center justify-between">
                      <span>17°23&apos;06.0&quot;N 78°29&apos;12.1&quot;E</span>
                      <span className="text-amber-400">ELEV: 542M</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Explorer Kit Summary */}
                <div className="mt-3 pt-3 border-t border-border/80 flex items-center justify-between text-xs text-muted-foreground font-mono">
                  <span className="flex items-center gap-1">
                    <Mountain className="w-3.5 h-3.5 text-primary" />
                    EXPEDITION: LEVEL IV
                  </span>
                  <span className="text-secondary font-semibold flex items-center gap-1">
                    <Wind className="w-3 h-3" />
                    ATMOSPHERE: PLEASANT
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Explorer Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center justify-center gap-2 text-muted-foreground">
          <button
            onClick={() => smoothScrollTo("map")}
            className="flex flex-col items-center gap-1.5 group text-xs font-mono hover:text-primary transition-colors focus:outline-none"
          >
            <span>DESCEND INTO TERRITORY MAP</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="p-1.5 rounded-full border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors"
            >
              <ArrowDown className="w-4 h-4 text-primary" />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
}
