import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Sparkles, Zap, Brain, Code2 } from "lucide-react";
import { useState } from "react";

// Comprehensive skills with logos from CDN
const skillsData = {
    "AI & Machine Learning": [
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
        { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo.svg" },
        { name: "LangChain", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
        { name: "LangGraph", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
        { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
    ],
    "Programming Languages": [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    "Cloud & DevOps": [
        { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    ],
    "Frontend Development": [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
    "Backend & Databases": [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "FastAPI", logo: "https://cdn.worldvectorlogo.com/logos/fastapi.svg" },
        { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    "Data Science & Analytics": [
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "Streamlit", logo: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
        { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    ],
    "Tools & Frameworks": [
        { name: "Unity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
};

const certifications = [
    { name: "NPTEL - Python for Data Science", org: "NPTEL", date: "September 2025", link: "/nptel_pfds.pdf" },
    { name: "NPTEL - Blockchain and its Applications", org: "NPTEL", date: "April 2025", link: "/nptel_ba.pdf" },
    { name: "AR/VR Certification", org: "Cymax Infotainment Pvt Ltd", date: "August 2024", link: "/cymax.pdf" },
    { name: "Cyber Security", org: "SkillVertex", date: "January 2024", link: "/cyber.pdf" },
];

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return (
        <section id="skills" className="py-20 px-6 lg:px-12 bg-muted/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
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
                        <Brain className="w-4 h-4" />
                        Technical Arsenal
                        <Sparkles className="w-4 h-4" />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Skills & <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        A comprehensive toolkit spanning AI/ML, full-stack development, and cloud technologies
                    </p>
                </motion.div>

                {/* Interactive Skills Grid */}
                <div className="space-y-12">
                    {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            className="relative"
                        >
                            {/* Category Header */}
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-3 mb-6 cursor-pointer group"
                                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                            >
                                <div className="flex items-center gap-3 flex-1">
                                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full glow" />
                                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                        {category}
                                    </h3>
                                    <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold">
                                        {skills.length}
                                    </div>
                                </div>
                                <Zap className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>

                            {/* Skills Cards */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                                {skills.map((skill, index) => (
                                    <SkillCard
                                        key={skill.name}
                                        skill={skill}
                                        index={index}
                                        inView={inView}
                                        categoryIndex={categoryIndex}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-20"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full glow" />
                        <h3 className="text-2xl font-bold">Certifications & Achievements</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {certifications.map((cert, index) => (
                            <motion.a
                                key={index}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.9 + index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="group bg-card border border-border rounded-xl p-6 card-shadow hover:glow-strong transition-all relative overflow-hidden"
                            >
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <Sparkles className="w-5 h-5 text-primary" />
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>

                                    <h4 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">
                                        {cert.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground">
                                        {cert.org}
                                    </p>
                                    <p className="text-xs text-primary font-semibold mt-1">
                                        {cert.date}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Individual Skill Card Component
const SkillCard = ({ skill, index, inView, categoryIndex }: any) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, rotateY: -180 }}
            animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1 + index * 0.05,
                type: "spring",
                stiffness: 100,
            }}
            whileHover={{ y: -10, scale: 1.1, rotateZ: 5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative bg-card border border-border rounded-xl p-4 card-shadow hover:glow-strong transition-all cursor-pointer"
        >
            {/* Glow effect */}
            <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"
                animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
            />

            <div className="relative z-10 flex flex-col items-center gap-3">
                {/* Logo */}
                <motion.div
                    className="w-12 h-12 flex items-center justify-center"
                    animate={isHovered ? { rotateY: 360 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all"
                        onError={(e) => {
                            // Fallback to icon if image fails
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                </motion.div>

                {/* Name */}
                <p className="text-xs font-bold text-center group-hover:text-primary transition-colors">
                    {skill.name}
                </p>
            </div>

            {/* Sparkle effect on hover */}
            {isHovered && (
                <motion.div
                    className="absolute top-2 right-2"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    exit={{ scale: 0 }}
                >
                    <Sparkles className="w-3 h-3 text-primary" />
                </motion.div>
            )}
        </motion.div>
    );
};

export default Skills;
