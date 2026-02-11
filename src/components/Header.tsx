import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Briefcase, Award, Mail, FileText, Sun, Moon, User, GraduationCap } from "lucide-react";

const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Award },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
];

const Header = () => {
    const [activeTab, setActiveTab] = useState("hero");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        // Set initial theme
        document.documentElement.classList.add("dark");
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 200;

            sections.forEach((section) => {
                if (
                    section &&
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
                ) {
                    setActiveTab(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const target = document.getElementById(id);
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    };

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);

        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <>
            {/* Desktop Side Navigation */}
            <motion.nav
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-2 bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-3 card-shadow-lg"
            >
                {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative group p-3 rounded-xl transition-all ${activeTab === item.id
                                ? "bg-primary text-primary-foreground glow-strong"
                                : "hover:bg-muted text-muted-foreground hover:text-foreground"
                                }`}
                            title={item.label}
                        >
                            <Icon className="w-5 h-5" />

                            {/* Tooltip */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                className="absolute left-full ml-4 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all whitespace-nowrap card-shadow-lg"
                            >
                                {item.label}
                                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-foreground" />
                            </motion.div>

                            {/* Active Indicator */}
                            <AnimatePresence>
                                {activeTab === item.id && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-primary rounded-full glow"
                                    />
                                )}
                            </AnimatePresence>
                        </motion.button>
                    );
                })}

                {/* Theme Toggle in Sidebar */}
                <div className="h-px bg-border my-2" />
                <motion.button
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-all relative group"
                    title={theme === "dark" ? "Light Mode" : "Dark Mode"}
                >
                    <AnimatePresence mode="wait">
                        {theme === "dark" ? (
                            <motion.div
                                key="sun"
                                initial={{ rotate: -180, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 180, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Sun className="w-5 h-5" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="moon"
                                initial={{ rotate: 180, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -180, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Moon className="w-5 h-5" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </motion.nav>

            {/* Mobile Top Navigation */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border"
            >
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xl font-bold gradient-text"
                    >
                        Pradyumna
                    </motion.h1>

                    <div className="flex items-center gap-3">
                        <motion.button
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                            <AnimatePresence mode="wait">
                                {theme === "dark" ? (
                                    <motion.div
                                        key="sun"
                                        initial={{ rotate: -180, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 180, opacity: 0 }}
                                    >
                                        <Sun className="w-5 h-5" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="moon"
                                        initial={{ rotate: 180, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -180, opacity: 0 }}
                                    >
                                        <Moon className="w-5 h-5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                        <motion.button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                    >
                                        <X className="w-6 h-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                    >
                                        <Menu className="w-6 h-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="border-t border-border bg-card/95 backdrop-blur-xl overflow-hidden"
                        >
                            <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
                                {navItems.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.button
                                            key={item.id}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: -20, opacity: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            onClick={() => scrollTo(item.id)}
                                            whileHover={{ x: 10 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === item.id
                                                ? "bg-primary text-primary-foreground glow"
                                                : "hover:bg-muted"
                                                }`}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span className="font-medium">{item.label}</span>
                                            {activeTab === item.id && (
                                                <motion.div
                                                    layoutId="mobileActive"
                                                    className="ml-auto w-2 h-2 rounded-full bg-white"
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                />
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Resume Download Button */}
            <motion.a
                href="/pradyumna.pdf"
                download
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:flex fixed right-8 top-8 z-50 items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium card-shadow-lg hover:shadow-xl transition-all glow-strong"
            >
                <FileText className="w-5 h-5" />
                Download Resume
            </motion.a>
        </>
    );
};

export default Header;
