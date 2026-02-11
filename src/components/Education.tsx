import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const education = [
    {
        degree: "B.Tech in Computer Science & Engineering",
        specialization: "Artificial Intelligence & Machine Learning",
        institution: "Nalla Narasimha Reddy Group of Institutions",
        location: "Hyderabad, Telangana",
        duration: "August 2022 - Present",
        highlights: [
            "Specialized in AI/ML with focus on deep learning and NLP",
            "Completed projects in Fintech and AI/ML with Agentic AI and GenAI",
            "Active participant in technical workshops and hackathons",
        ],
    },
];

const Education = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="education" className="py-20 px-6 lg:px-12 bg-muted/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full glow" />
                        <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
                    </div>
                    <p className="text-muted-foreground max-w-2xl">
                        Academic foundation in Computer Science with specialization in AI & ML
                    </p>
                </motion.div>

                {/* Education Card */}
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -10 }}
                        className="bg-card border border-border rounded-2xl p-8 card-shadow-lg hover:glow-strong transition-all relative overflow-hidden group"
                    >
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex flex-col gap-4 mb-6">
                                <div className="flex-1">
                                    <div className="flex items-start gap-4 mb-3">
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            className="p-3 bg-primary/10 rounded-xl"
                                        >
                                            <GraduationCap className="w-8 h-8 text-primary" />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-primary font-semibold">
                                                {edu.specialization}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Award className="w-4 h-4" />
                                            <span className="font-medium">{edu.institution}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{edu.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{edu.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="space-y-3 pt-6 border-t border-border">
                                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                                    Key Highlights
                                </h4>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {edu.highlights.map((highlight, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={inView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.4 + idx * 0.1 }}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start gap-2 text-sm"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            <span className="text-muted-foreground">{highlight}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
