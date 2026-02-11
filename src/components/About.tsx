import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Target, Rocket, Zap, Code2, Brain, TrendingUp, FileText } from "lucide-react";

const highlights = [
    {
        icon: Brain,
        title: "AI/ML Specialist",
        description: "Deep expertise in machine learning, NLP, and intelligent systems",
    },
    {
        icon: Code2,
        title: "Full-Stack Developer",
        description: "Proficient in building end-to-end scalable applications",
    },
    {
        icon: TrendingUp,
        title: "Data-Driven",
        description: "Strong analytical skills with focus on actionable insights",
    },
];

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="about" className="py-20 px-6 lg:px-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4"
                    >
                        <Target className="w-4 h-4" />
                        About Me
                        <Sparkles className="w-4 h-4" />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Passionate About <span className="gradient-text">Innovation</span>
                    </h2>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 }}
                            >
                                I&apos;m a <span className="text-foreground font-semibold">results-driven AI/ML and Data Science undergraduate</span> with a passion for transforming complex problems into elegant, scalable solutions.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4 }}
                            >
                                My journey in technology is fueled by curiosity and a drive to build <span className="text-foreground font-semibold">intelligent systems that create real-world impact</span>. From fraud detection systems to credit scoring models, I thrive on challenges that push the boundaries of what&apos;s possible.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 }}
                            >
                                I&apos;m seeking opportunities to contribute my <span className="text-foreground font-semibold">advanced modeling, analytics, and automation skills</span> to develop high-impact, data-driven solutions in a dynamic environment.
                            </motion.p>
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium glow transition-all"
                            >
                                <Rocket className="w-5 h-5" />
                                Let&apos;s Connect
                            </motion.a>
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-all"
                            >
                                View My Work
                                <Zap className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="/pradyumna.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 bg-primary/5 rounded-lg font-medium hover:bg-primary/10 transition-all text-primary"
                            >
                                <FileText className="w-5 h-5" />
                                View Resume
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right: Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6"
                    >
                        {highlights.map((highlight, index) => {
                            const Icon = highlight.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    className="flex gap-4 p-6 bg-card border border-border rounded-xl card-shadow hover:glow transition-all group"
                                >
                                    <div className="shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                                            {highlight.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            {highlight.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.7 }}
                            className="grid grid-cols-2 gap-4 pt-4"
                        >
                            {[
                                { value: "10+", label: "Projects" },
                                { value: "4", label: "Certifications" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="text-center p-4 bg-card border border-border rounded-xl card-shadow hover:glow transition-all"
                                >
                                    <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                                    <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
