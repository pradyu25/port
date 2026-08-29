import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Map,
  User,
  Rocket,
  Wrench,
  GraduationCap,
  Award,
  FileText,
  Radio,
  Menu,
  X,
  Sun,
  Moon,
  ChevronRight,
  CloudSun,
  Wind,
} from "lucide-react";

interface NavWaypoint {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const navWaypoints: NavWaypoint[] = [
  { id: "hero", label: "Base", sublabel: "Expedition Base", icon: Compass },
  { id: "map", label: "Territory", sublabel: "Interactive Map", icon: Map, badge: "Map" },
  { id: "about", label: "Profile", sublabel: "Explorer Profile", icon: User },
  { id: "projects", label: "Expeditions", sublabel: "Field Projects", icon: Rocket },
  { id: "skills", label: "Equipment", sublabel: "Tech Toolkit", icon: Wrench },
  { id: "education", label: "Education", sublabel: "Aug 2022–May 2026 • 87%", icon: GraduationCap },
  { id: "discoveries", label: "Discoveries", sublabel: "Certifications", icon: Award },
  { id: "resume", label: "Record", sublabel: "Expedition Report", icon: FileText },
  { id: "contact", label: "Coordinates", sublabel: "Set Comms", icon: Radio },
];

export default function Header() {
  const [activeTab, setActiveTab] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [compassAngle, setCompassAngle] = useState(0);

  // Initialize theme: Default to Light mode
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  // Track active section and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 20);
      setCompassAngle((window.scrollY / 4) % 360);

      // Determine active section
      const sections = navWaypoints.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPos >= top) {
            setActiveTab(navWaypoints[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler with offset for sticky navbar
  const scrollToSection = (id: string) => {
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
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/80 shadow-md"
          : "bg-background/60 backdrop-blur-sm border-b border-border/40"
      }`}
    >
      {/* Top Coordinate & Weather Ticker bar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-card/75 border-b border-border/30 text-[11px] font-mono text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-primary font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            EXPEDITION: AI/ML MAPPING
          </span>
          <span className="text-border">|</span>
          <span className="flex items-center gap-1">
            <Compass className="w-3 h-3 text-secondary" />
            BASE: 17.3850° N, 78.4867° E (HYD)
          </span>
          <span className="text-border">|</span>
          <span className="flex items-center gap-1 text-foreground/90">
            <CloudSun className="w-3.5 h-3.5 text-amber-500" />
            WEATHER: 21°C • MILD OVERCAST • BREEZE 11 KM/H
          </span>
          <span className="text-border">|</span>
          <span>BEARING: {Math.round(compassAngle)}° NNE</span>
        </div>
        <div className="flex items-center gap-3">
          <span>TRAIL PROGRESS:</span>
          <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <span className="text-foreground font-semibold w-8 text-right">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Call Sign */}
          <button
            id="nav-logo-btn"
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group text-left focus:outline-none"
            aria-label="Jump to Expedition Base"
          >
            <div className="relative p-2 rounded-lg bg-primary/10 border border-primary/30 group-hover:border-primary/60 transition-colors">
              <Compass
                className="w-5 h-5 text-primary transition-transform duration-500 group-hover:scale-110"
                style={{ transform: `rotate(${compassAngle}deg)` }}
              />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-secondary animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base tracking-tight text-foreground group-hover:text-primary transition-colors">
                  Pradyumna
                </span>
              </div>
              <p className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
                <span>AI/ML EXPLORER</span>
                <span className="text-primary">•</span>
                <span className="text-secondary">PLEASANT EXPEDITION</span>
              </p>
            </div>
          </button>

          {/* Desktop Waypoints Navigation (Smooth Scroll Links) */}
          <nav
            id="desktop-nav-links"
            className="hidden md:flex items-center gap-1 bg-muted/50 p-1 rounded-xl border border-border/60"
          >
            {navWaypoints.map((waypoint) => {
              const Icon = waypoint.icon;
              const isActive = activeTab === waypoint.id;
              return (
                <button
                  key={waypoint.id}
                  id={`nav-link-${waypoint.id}`}
                  onClick={() => scrollToSection(waypoint.id)}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 focus:outline-none ${
                    isActive
                      ? "text-primary-foreground font-semibold shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-primary rounded-lg shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{waypoint.label}</span>
                    {waypoint.badge && !isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    )}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Weather Status & Theme Toggle */}
          <div className="flex items-center gap-2">
            {/* Quick Weather pill for sm screens */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-card border border-border text-[11px] font-mono text-muted-foreground">
              <CloudSun className="w-3.5 h-3.5 text-amber-500" />
              <span>21°C</span>
            </div>

            <button
              id="header-resume-jump-btn"
              onClick={() => scrollToSection("resume")}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-secondary/40 bg-secondary/10 hover:bg-secondary/20 text-secondary transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Dossier</span>
            </button>

            <button
              id="header-theme-toggle-btn"
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
              title={theme === "dark" ? "Switch to Cloudy Day Mode" : "Switch to Misty Twilight Mode"}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-card border border-border hover:border-primary/50 text-foreground transition-colors focus:outline-none"
              aria-label="Toggle Expedition Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar under sticky nav */}
      <div className="w-full h-[2px] bg-border/40 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border shadow-2xl px-4 pt-3 pb-6 space-y-2 overflow-hidden"
          >
            <div className="px-3 py-2 bg-muted/40 rounded-lg border border-border/40 mb-3 flex items-center justify-between font-mono text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 text-primary">
                <CloudSun className="w-3.5 h-3.5 text-amber-500" />
                21°C PLEASANT OVERCAST
              </span>
              <span>17.38°N 78.48°E</span>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navWaypoints.map((waypoint) => {
                const Icon = waypoint.icon;
                const isActive = activeTab === waypoint.id;
                return (
                  <button
                    key={waypoint.id}
                    id={`mobile-nav-${waypoint.id}`}
                    onClick={() => scrollToSection(waypoint.id)}
                    className={`flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                        : "text-foreground hover:bg-muted/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-md ${isActive ? "bg-black/20" : "bg-primary/10 text-primary"}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div>{waypoint.label}</div>
                        <div className={`text-[11px] ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                          {waypoint.sublabel}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
