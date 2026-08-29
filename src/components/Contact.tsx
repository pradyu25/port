import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Radio,
  Send,
  Compass,
  MapPin,
  Mail,
  Phone,
  Github,
  CheckCircle2,
  Terminal,
  Crosshair,
  Wifi,
  Sparkles,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionSuccess, setTransmissionSuccess] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Transmission Incomplete",
        description: "Please provide your Callsign, Frequency (Email), and Mission Briefing.",
        variant: "destructive",
      });
      return;
    }

    setIsTransmitting(true);

    // Simulate tactical radio transmission dispatch
    setTimeout(() => {
      setIsTransmitting(false);
      setTransmissionSuccess(true);
      toast({
        title: "Signal Dispatched!",
        description: "Your communication packet has been received at Base Camp Hyderabad.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setTransmissionSuccess(false);
      }, 5000);
    }, 900);
  };

  const waypointChannels = [
    {
      icon: Mail,
      label: "PRIMARY FREQUENCY (EMAIL)",
      value: "mprc9125@gmail.com",
      href: "mailto:mprc9125@gmail.com",
      status: "Always Monitored",
    },
    {
      icon: Phone,
      label: "DIRECT LINE (PHONE)",
      value: "+91 8142943409",
      href: "tel:+918142943409",
      status: "Active Voice Dispatch",
    },
    {
      icon: Github,
      label: "MISSION CODE REPOSITORIES (GITHUB)",
      value: "@pradyu25",
      href: "https://github.com/pradyu25",
      status: "Public Repositories",
    },
    {
      icon: MapPin,
      label: "BASE CAMP COORDINATES",
      value: "Hyderabad, Telangana (17.3850° N, 78.4867° E)",
      href: "#",
      status: "Command Camp Sector",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Topographic Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 contour-lines" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            COMMUNICATION ARRAY & WAYPOINT RELAY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2d180e] dark:text-[#f5ede2]">
            Set <span className="text-[#a33e14] dark:text-[#e86835]">Coordinates</span>
          </h2>
          <p className="mt-3 text-lg sm:text-xl font-semibold text-[#a33e14] dark:text-[#e86835]">
            &ldquo;Found something interesting? Establish communication.&rdquo;
          </p>
          <p className="mt-1 text-sm text-[#523321] dark:text-[#d6c7b2]">
            Whether for internship opportunities, full-time AI/ML roles, collaborative research, or project inquiries—broadcast your signal directly.
          </p>
        </motion.div>

        {/* Two-Column Grid: Form on Left, Waypoint Channels on Right */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Tactical Dispatch Form (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 bg-card/95 border border-border rounded-2xl p-6 sm:p-8 shadow-sm tactical-border relative text-left"
          >
            {/* Form Telemetry Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/80 text-xs font-mono">
              <span className="flex items-center gap-2 text-[#a33e14] dark:text-[#e86835] font-bold">
                <Terminal className="w-4 h-4" />
                TRANSMISSION CONSOLE // FREQ: 142.800 MHz
              </span>
              <span className="flex items-center gap-1 text-[#b35312] dark:text-[#f09a3e] font-semibold">
                <Wifi className="w-3.5 h-3.5 animate-pulse" />
                LINK ONLINE
              </span>
            </div>

            {transmissionSuccess ? (
              <div className="p-8 rounded-xl bg-primary/10 border border-primary/30 text-center space-y-3 font-mono">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#2d180e] dark:text-[#f5ede2]">TRANSMISSION CONFIRMED</h3>
                <p className="text-xs text-[#523321] dark:text-[#d6c7b2] max-w-sm mx-auto">
                  Your coordinates and dispatch have been logged at Base Camp. Expect an acknowledgment signal shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleTransmit} className="space-y-4 text-xs font-mono">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Callsign / Name */}
                  <div className="space-y-1.5">
                    <label className="text-[#704832] dark:text-[#c0ad97] block text-[11px] font-medium">
                      CALLSIGN / EXPLORER NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf6ee] dark:bg-[#251d17] border border-[#dfd3c3] dark:border-[#423328] focus:border-[#a33e14] dark:focus:border-[#e86835] focus:outline-none text-[#2d180e] dark:text-[#f5ede2] placeholder:text-[#9c7a67] dark:placeholder:text-[#887060] font-sans text-sm"
                    />
                  </div>

                  {/* Frequency / Email */}
                  <div className="space-y-1.5">
                    <label className="text-[#704832] dark:text-[#c0ad97] block text-[11px] font-medium">
                      SIGNAL FREQUENCY (EMAIL) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. explorer@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf6ee] dark:bg-[#251d17] border border-[#dfd3c3] dark:border-[#423328] focus:border-[#a33e14] dark:focus:border-[#e86835] focus:outline-none text-[#2d180e] dark:text-[#f5ede2] placeholder:text-[#9c7a67] dark:placeholder:text-[#887060] font-sans text-sm"
                    />
                  </div>
                </div>

                {/* Subject / Purpose */}
                <div className="space-y-1.5">
                  <label className="text-[#704832] dark:text-[#c0ad97] block text-[11px] font-medium">
                    EXPEDITION OBJECTIVE / SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AI/ML Opportunity / Research Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf6ee] dark:bg-[#251d17] border border-[#dfd3c3] dark:border-[#423328] focus:border-[#a33e14] dark:focus:border-[#e86835] focus:outline-none text-[#2d180e] dark:text-[#f5ede2] placeholder:text-[#9c7a67] dark:placeholder:text-[#887060] font-sans text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[#704832] dark:text-[#c0ad97] block text-[11px] font-medium">
                    MISSION BRIEFING / DISPATCH MESSAGE *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Broadcast your coordinates, role details, or collaboration ideas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf6ee] dark:bg-[#251d17] border border-[#dfd3c3] dark:border-[#423328] focus:border-[#a33e14] dark:focus:border-[#e86835] focus:outline-none text-[#2d180e] dark:text-[#f5ede2] placeholder:text-[#9c7a67] dark:placeholder:text-[#887060] font-sans text-sm resize-none"
                  />
                </div>

                {/* Dispatch Button */}
                <button
                  type="submit"
                  disabled={isTransmitting}
                  className="w-full py-3 px-6 rounded-xl bg-[#a33e14] hover:bg-[#8f3611] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-sm disabled:opacity-50"
                >
                  {isTransmitting ? (
                    <span className="flex items-center gap-2">
                      <Radio className="w-4 h-4 animate-spin" />
                      DISPATCHING SIGNAL...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      TRANSMIT DISPATCH
                    </span>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Direct Waypoint Channels (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-5 space-y-3 text-left"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-[#704832] dark:text-[#c0ad97] mb-1 flex items-center gap-2 font-medium">
              <Crosshair className="w-3.5 h-3.5 text-[#a33e14] dark:text-[#e86835]" />
              DIRECT WAYPOINTS & COMM RELAYS
            </div>

            {waypointChannels.map((ch, idx) => {
              const Icon = ch.icon;
              return (
                <a
                  key={idx}
                  href={ch.href}
                  target={ch.href.startsWith("http") ? "_blank" : undefined}
                  rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-4 rounded-xl bg-card/95 border border-border hover:border-[#a33e14]/50 transition-all shadow-sm group flex items-center gap-3.5 block"
                >
                  <div className="p-2.5 rounded-lg bg-[#a33e14]/10 text-[#a33e14] dark:text-[#e86835] group-hover:bg-[#a33e14] group-hover:text-white transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-[#704832] dark:text-[#c0ad97] uppercase">
                      {ch.label}
                    </div>
                    <div className="text-sm font-bold text-[#2d180e] dark:text-[#f5ede2] group-hover:text-[#a33e14] dark:group-hover:text-[#e86835] transition-colors truncate">
                      {ch.value}
                    </div>
                    <div className="text-[10px] font-mono text-[#b35312] dark:text-[#f09a3e] font-semibold">
                      {ch.status}
                    </div>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
