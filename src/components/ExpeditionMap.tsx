import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  MapPin,
  Mountain,
  Navigation,
  Crosshair,
  Radio,
  FileText,
  Award,
  GraduationCap,
  Wrench,
  Rocket,
  User,
  ArrowRight,
  Eye,
} from "lucide-react";
import { Waypoint } from "@/types";

const territoryWaypoints: Waypoint[] = [
  {
    id: "hero",
    label: "Expedition Base",
    sectorName: "Sector Alpha: Command Camp",
    coordinates: "17.3850° N, 78.4867° E",
    elevation: "542m",
    iconName: "Compass",
    description: "Headquarters, mission briefing, active radar telemetry, and personal identity.",
    x: 18,
    y: 52,
  },
  {
    id: "about",
    label: "Explorer Profile",
    sectorName: "Sector Beta: Dossier Ridge",
    coordinates: "17.4012° N, 78.4980° E",
    elevation: "610m",
    iconName: "User",
    description: "Background, mindset, research methodologies, and core explorer capabilities.",
    x: 32,
    y: 28,
  },
  {
    id: "projects",
    label: "Expeditions",
    sectorName: "Sector Gamma: Project Frontiers",
    coordinates: "17.4320° N, 78.5210° E",
    elevation: "725m",
    iconName: "Rocket",
    description: "Deep technical missions: SpendShield AI, Credit Scoring, Recommendations & Cyber Defense.",
    x: 52,
    y: 20,
  },
  {
    id: "skills",
    label: "Equipment Depot",
    sectorName: "Sector Delta: Survival Kit",
    coordinates: "17.4450° N, 78.4600° E",
    elevation: "680m",
    iconName: "Wrench",
    description: "Navigational neural toolkits, scripting frameworks, cloud basecamps, and analytics gear.",
    x: 72,
    y: 35,
  },
  {
    id: "education",
    label: "Education & Degree",
    sectorName: "Sector Epsilon: Academic Observatory",
    coordinates: "17.4180° N, 78.4410° E",
    elevation: "590m",
    iconName: "GraduationCap",
    description: "Academic foundation: B.Tech in CSE (AIML) at NNRG (Aug 2022 – May 2026) with 87% Result.",
    x: 82,
    y: 65,
  },
  {
    id: "discoveries",
    label: "Discoveries Vault",
    sectorName: "Sector Zeta: Artifact Archive",
    coordinates: "17.4600° N, 78.5100° E",
    elevation: "810m",
    iconName: "Award",
    description: "Elite certifications (NPTEL Data Science, Blockchain, Cybersecurity) with inspectable credentials.",
    x: 58,
    y: 78,
  },
  {
    id: "resume",
    label: "Expedition Record",
    sectorName: "Sector Eta: Official Dossier",
    coordinates: "17.4250° N, 78.4800° E",
    elevation: "640m",
    iconName: "FileText",
    description: "Complete expedition report and curriculum vitae available for instant inspection and download.",
    x: 38,
    y: 72,
  },
  {
    id: "contact",
    label: "Set Coordinates",
    sectorName: "Sector Theta: Comms Array",
    coordinates: "17.3910° N, 78.4720° E",
    elevation: "560m",
    iconName: "Radio",
    description: "Direct transmission station: dispatch messages, review coordinates, and establish communication.",
    x: 22,
    y: 84,
  },
];

export default function ExpeditionMap() {
  const [selectedWaypoint, setSelectedWaypoint] = useState<Waypoint>(territoryWaypoints[0]);
  const [radarActive, setRadarActive] = useState(true);

  const scrollToWaypoint = (id: string) => {
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

  return (
    <section id="map" className="py-20 px-4 sm:px-6 lg:px-12 bg-muted/20 relative overflow-hidden">
      {/* Topographic Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-15 topographic-bg" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-2">
              <Navigation className="w-3.5 h-3.5" />
              TERRITORY CARTOGRAPHY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Expedition <span className="text-primary">Territory Map</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mt-1">
              Select any coordinate or sector waypoint to preview mission telemetry and initiate a smooth journey to that region.
            </p>
          </div>

          {/* Map Controls */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <button
              onClick={() => setRadarActive(!radarActive)}
              className={`px-3 py-1.5 rounded-lg border transition-colors flex items-center gap-1.5 ${
                radarActive
                  ? "bg-primary/15 border-primary text-primary"
                  : "bg-card border-border text-muted-foreground"
              }`}
            >
              <Crosshair className="w-3.5 h-3.5" />
              <span>RADAR SWEEP: {radarActive ? "ONLINE" : "STANDBY"}</span>
            </button>
            <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-card border border-border text-muted-foreground">
              <Mountain className="w-3.5 h-3.5 text-secondary" />
              <span>SCALE: 1:25,000 AI</span>
            </div>
          </div>
        </div>

        {/* Map Stage & Telemetry Grid */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Main Interactive Map Viewport (8 Columns) */}
          <div className="lg:col-span-8 bg-card/90 border border-border rounded-2xl p-4 sm:p-6 shadow-md relative overflow-hidden tactical-border">
            {/* Topographic Map Background Container: Light Parchment Canvas / Dark Obsidian Canvas */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl bg-[#faf6ee] dark:bg-[#1f1712] border border-[#dfd3c3] dark:border-[#3d2f26] overflow-hidden select-none shadow-inner">
              {/* Radar Sweep Effect */}
              {radarActive && (
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-radial from-[#a33e14]/20 via-transparent to-transparent" />
              )}

              {/* Map SVG Layer with Contours, Mountain Ridges and Trails */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1000 600"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a33e14" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#b35312" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#6e3f22" stopOpacity="0.9" />
                  </linearGradient>

                  <pattern id="gridPattern" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path
                      d="M 50 0 L 0 0 0 50"
                      fill="none"
                      stroke="currentColor"
                      className="text-[#8c4b23]/15 dark:text-[#e86835]/15"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>

                {/* Tactical Coordinate Grid */}
                <rect width="1000" height="600" fill="url(#gridPattern)" />

                {/* Contour Elevation Rings: Clearly Visible in Copper and Mud Brown */}
                <path
                  d="M 100 300 Q 250 150 500 200 T 900 250"
                  fill="none"
                  stroke="currentColor"
                  className="text-[#a33e14]/30 dark:text-[#e86835]/35"
                  strokeWidth="1.5"
                />
                <path
                  d="M 120 320 Q 270 170 510 220 T 880 270"
                  fill="none"
                  stroke="currentColor"
                  className="text-[#a33e14]/25 dark:text-[#e86835]/25"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 150 360 Q 300 220 530 250 T 850 310"
                  fill="none"
                  stroke="currentColor"
                  className="text-[#a33e14]/30 dark:text-[#e86835]/30"
                  strokeWidth="1"
                />
                <path
                  d="M 200 450 Q 400 320 600 380 T 820 420"
                  fill="none"
                  stroke="currentColor"
                  className="text-[#b35312]/30 dark:text-[#f09a3e]/30"
                  strokeWidth="1.2"
                />
                <path
                  d="M 180 500 Q 350 400 580 430 T 790 480"
                  fill="none"
                  stroke="currentColor"
                  className="text-[#8c4b23]/30 dark:text-[#e86835]/25"
                  strokeWidth="1"
                />

                {/* Mountain Ridge SVG Peaks */}
                <g stroke="currentColor" className="text-[#8c3c14]/40 dark:text-[#e86835]/45" fill="none" strokeWidth="1.5">
                  <path d="M 450 180 L 520 120 L 590 180 Z" />
                  <path d="M 520 120 L 520 180" />
                  <path d="M 680 280 L 740 210 L 800 280 Z" />
                  <path d="M 740 210 L 740 280" />
                  <path d="M 280 230 L 330 170 L 380 230 Z" />
                  <path d="M 330 170 L 330 230" />
                </g>

                {/* Expedition Trails Connecting Waypoints */}
                <path
                  d="M 180 312 L 320 168 L 520 120 L 720 210 L 820 390 L 580 468 L 380 432 L 220 504 Z"
                  fill="none"
                  stroke="url(#trailGradient)"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  className="opacity-85"
                />

                {/* Elevation Label Markers in Mud Brown & Copper */}
                <text x="340" y="160" fill="currentColor" className="text-[#704832] dark:text-[#c0ad97]" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  610m
                </text>
                <text x="530" y="110" fill="currentColor" className="text-[#a33e14] dark:text-[#e86835]" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  725m (PEAK)
                </text>
                <text x="730" y="200" fill="currentColor" className="text-[#704832] dark:text-[#c0ad97]" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  680m
                </text>
                <text x="590" y="490" fill="currentColor" className="text-[#b35312] dark:text-[#f09a3e]" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  810m (VAULT)
                </text>
              </svg>

              {/* Compass Rose Indicator on Top Right */}
              <div className="absolute top-3 right-3 p-2 rounded-lg bg-card/90 border border-border shadow-sm font-mono text-[10px] text-[#704832] dark:text-[#c0ad97] flex items-center gap-2 pointer-events-none">
                <Compass className="w-4 h-4 text-[#a33e14] dark:text-[#e86835]" />
                <span>N 00° E</span>
              </div>

              {/* Coordinates Scale on Bottom Left */}
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-card/90 border border-border shadow-sm font-mono text-[10px] text-[#704832] dark:text-[#c0ad97] pointer-events-none">
                GRID: 17°N / 78°E • HYDERABAD SECTOR
              </div>

              {/* Interactive Waypoint Pins */}
              {territoryWaypoints.map((wp) => {
                const isSelected = selectedWaypoint.id === wp.id;
                return (
                  <div
                    key={wp.id}
                    style={{ left: `${wp.x}%`, top: `${wp.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <button
                      id={`map-pin-${wp.id}`}
                      onClick={() => setSelectedWaypoint(wp)}
                      onDoubleClick={() => scrollToWaypoint(wp.id)}
                      className="group relative flex flex-col items-center focus:outline-none"
                      aria-label={`Select ${wp.label} at ${wp.coordinates}`}
                    >
                      {/* Pulsing Beacon Rings */}
                      <span
                        className={`absolute w-8 h-8 rounded-full transition-transform duration-300 ${
                          isSelected
                            ? "bg-[#a33e14]/25 dark:bg-[#e86835]/35 animate-ping"
                            : "bg-[#a33e14]/10 dark:bg-[#e86835]/20 group-hover:scale-125"
                        }`}
                      />

                      {/* Waypoint Marker Icon */}
                      <div
                        className={`relative p-2 rounded-full border transition-all duration-300 shadow-md ${
                          isSelected
                            ? "bg-[#a33e14] text-white border-white scale-125 ring-4 ring-[#a33e14]/30"
                            : "bg-card text-[#a33e14] dark:text-[#e86835] border-[#a33e14]/40 hover:border-[#a33e14] hover:scale-110"
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                      </div>

                      {/* Pin Label Tooltip */}
                      <span
                        className={`mt-1.5 px-2 py-0.5 rounded text-[10px] font-mono tracking-tight whitespace-nowrap transition-all shadow-sm ${
                          isSelected
                            ? "bg-[#a33e14] text-white font-bold"
                            : "bg-card/95 text-[#2d180e] dark:text-[#f5ede2] border border-[#d8cdbd] dark:border-[#423328] group-hover:border-[#a33e14]/60"
                        }`}
                      >
                        {wp.label}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Hint bar below map */}
            <div className="mt-3 flex items-center justify-between text-xs text-[#704832] dark:text-[#c0ad97] font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Click pin to inspect telemetry • Double click or use button to trek
              </span>
              <span className="hidden sm:inline">Active Nodes: {territoryWaypoints.length}</span>
            </div>
          </div>

          {/* Right Column: Selected Sector Telemetry Dossier (4 Columns) */}
          <div className="lg:col-span-4 bg-card border border-border rounded-2xl p-5 shadow-xl space-y-4 tactical-border">
            <div className="flex items-center justify-between border-b border-border/80 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold">
                <Crosshair className="w-4 h-4" />
                WAYPOINT TELEMETRY
              </div>
              <span className="text-[11px] font-mono text-secondary px-2 py-0.5 rounded bg-secondary/10 border border-secondary/20">
                ACTIVE
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedWaypoint.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 text-left"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#2d180e] dark:text-[#f5ede2]">{selectedWaypoint.label}</h3>
                  <p className="text-xs font-mono text-[#a33e14] dark:text-[#e86835] font-medium">{selectedWaypoint.sectorName}</p>
                </div>

                <p className="text-sm text-[#523321] dark:text-[#d6c7b2] leading-relaxed">
                  {selectedWaypoint.description}
                </p>

                {/* Coordinate & Altitude Specs */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-[#faf6ee] dark:bg-[#251d17] p-3 rounded-xl border border-[#dfd3c3] dark:border-[#423328]">
                  <div>
                    <span className="text-[10px] text-[#704832] dark:text-[#c0ad97] block">COORDINATES</span>
                    <span className="font-semibold text-[#2d180e] dark:text-[#f5ede2]">{selectedWaypoint.coordinates}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#704832] dark:text-[#c0ad97] block">ELEVATION</span>
                    <span className="font-semibold text-[#a33e14] dark:text-[#e86835]">{selectedWaypoint.elevation}</span>
                  </div>
                </div>

                {/* Direct Trek Button */}
                <button
                  id={`trek-to-${selectedWaypoint.id}-btn`}
                  onClick={() => scrollToWaypoint(selectedWaypoint.id)}
                  className="w-full py-3 px-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.01]"
                >
                  <span>Trek to {selectedWaypoint.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Quick Sector Jump Grid */}
            <div className="pt-3 border-t border-border/80 text-left">
              <span className="text-[11px] font-mono text-[#704832] dark:text-[#c0ad97] uppercase block mb-2 font-medium">
                All Exploration Sectors
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {territoryWaypoints.map((wp) => (
                  <button
                    key={wp.id}
                    onClick={() => {
                      setSelectedWaypoint(wp);
                      scrollToWaypoint(wp.id);
                    }}
                    className={`px-2.5 py-1.5 rounded-lg text-left text-xs font-mono transition-colors flex items-center justify-between ${
                      selectedWaypoint.id === wp.id
                        ? "bg-[#a33e14]/15 dark:bg-[#e86835]/20 text-[#a33e14] dark:text-[#e86835] border border-[#a33e14]/30 font-semibold"
                        : "bg-[#faf6ee] dark:bg-[#251d17] text-[#523321] dark:text-[#d6c7b2] hover:text-[#2d180e] dark:hover:text-white hover:bg-[#f3ede3] dark:hover:bg-[#32261f] border border-transparent"
                    }`}
                  >
                    <span className="truncate">{wp.label}</span>
                    <ArrowRight className="w-3 h-3 shrink-0 opacity-60 text-[#a33e14] dark:text-[#e86835]" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
