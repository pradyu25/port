import { motion } from "framer-motion";
import { Home, User, Code2, Sparkles, Mail, Award, ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Floating nav buttons (left side)

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "certifications", label: "Certifications", icon: Award }, // ✅ NEW
  { id: "contact", label: "Contact", icon: Mail },
];

// Brain Network Background
function BrainNetwork() {
  const nodes = [
    { cx: 20, cy: 30 },
    { cx: 40, cy: 18 },
    { cx: 65, cy: 25 },
    { cx: 85, cy: 40 },
    { cx: 78, cy: 65 },
    { cx: 55, cy: 75 },
    { cx: 30, cy: 70 },
    { cx: 15, cy: 50 },
  ];

  const links: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 0],
    [1, 5],
    [2, 6],
    [3, 7],
  ];

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.45 }}
      transition={{ duration: 1.5, delay: 0.6 }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center"
        animate={{
          x: ["-4%", "4%", "-4%"],
          y: ["-3%", "3%", "-3%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="w-[70vw] max-w-[700px] h-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.path
            d="M32 28 C20 35 18 55 30 65 C30 80 48 84 55 72 C65 85 84 80 82 60 C92 52 90 34 75 30 C70 20 50 16 40 20 Z"
            fill="none"
            stroke="rgba(34,211,238,0.45)"
            strokeWidth="1.2"
            strokeDasharray="5 4"
            animate={{ strokeDashoffset: [18, 0, 18] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {links.map(([a, b], i) => {
            const n1 = nodes[a], n2 = nodes[b];
            return (
              <motion.line
                key={i}
                x1={n1.cx}
                y1={n1.cy}
                x2={n2.cx}
                y2={n2.cy}
                stroke="rgba(59,130,246,0.5)"
                strokeWidth="0.8"
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, delay: i * 0.25 }}
              />
            );
          })}

          {nodes.map((node, i) => (
            <motion.circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r={1.6}
              fill="rgba(34,211,238,0.9)"
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.25, 0.9] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-6"
    >
      {/* Glow animation */}
      <motion.div
        className="absolute inset-0 opacity-30 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(0, 246, 255, 0.15), transparent 60%)",
            "radial-gradient(circle at 80% 50%, rgba(255, 0, 170, 0.15), transparent 60%)",
            "radial-gradient(circle at 50% 80%, rgba(0, 246, 255, 0.15), transparent 60%)",
            "radial-gradient(circle at 20% 50%, rgba(0, 246, 255, 0.15), transparent 60%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Brain network */}
      <BrainNetwork />

      {/* FLOATING BUTTON NAVIGATION */}
      <div className="hidden lg:flex flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-20">
        {navItems.map(({ id, icon: Icon }) => (
          <motion.button
            key={id}
            onClick={() => scrollTo(id)}
            className="w-12 h-12 rounded-xl border border-cyan-400/40 bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(0,246,255,0.5)] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className="w-5 h-5 text-cyan-300" />
          </motion.button>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
          >
            Musunuri <br />
            Pradyumna <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Ravi Chandra
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-cyan-300/80 font-mono tracking-wide"
          >
            Hyderabad, India · CSE (AI & ML) · 2022 – 2026
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 leading-relaxed max-w-xl"
          >
            Motivated AI and ML enthusiast focused on building scalable,
            intelligent backend systems powered by real-time machine learning
            and generative AI workflows.
          </motion.p>

          {/* BUTTONS */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <motion.button
              onClick={() => scrollTo("projects")}
              className="px-8 py-3 bg-cyan-500/10 border border-cyan-400 text-cyan-400 rounded-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,246,255,0.5)" }}
            >
              VIEW PROJECTS
            </motion.button>

            <motion.a
              href="/lRESUMEin.pdf"
              download
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              DOWNLOAD RESUME
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE ORB — BIGGER VERSION */}
<motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="relative hidden md:flex items-center justify-center"
>
  {/* Glow — INCREASED SIZE */}
  <motion.div
    className="w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-20 blur-3xl"
    animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  />

  {/* Outer ring — INCREASED SIZE */}
  <motion.div
    className="absolute w-88 h-88 rounded-full border-2 border-cyan-400/30"
    animate={{ rotate: 360 }}
    transition={{ duration: 30, repeat: Infinity }}
  />

  {/* Inner ring — INCREASED SIZE */}
  <motion.div
    className="absolute w-68 h-68 rounded-full border-2 border-fuchsia-400/40"
    animate={{ rotate: -360 }}
    transition={{ duration: 20, repeat: Infinity }}
  />

  {/* Profile Picture — INCREASED SIZE */}
  <motion.div
    whileHover={{ scale: 1.04 }}
    className="absolute w-64 h-64 rounded-full overflow-hidden border border-cyan-400/60 shadow-lg bg-black/60"
  >
    <img
      src="/ravi.png"
      alt="Musunuri Pradyumna Ravi Chandra"
      className="w-full h-full object-cover mix-blend-screen"
    />
  </motion.div>
</motion.div>
</div>

      {/* Scroll Indicator */}
      <motion.div
        onClick={() => scrollTo("projects")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </motion.div>
    </section>
  );
}
