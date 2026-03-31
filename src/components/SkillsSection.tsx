import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const skillCategories: { title: string; skills: Skill[] }[] = [
  {
    title: "Mobile & Frontend",
    skills: [
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "hover:shadow-[0_0_25px_hsl(207,90%,54%/0.4)]" },
      { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", color: "hover:shadow-[0_0_25px_hsl(207,90%,54%/0.4)]" },
      // { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "hover:shadow-[0_0_25px_hsl(193,95%,68%/0.4)]" },
      // { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "hover:shadow-[0_0_25px_hsl(12,77%,52%/0.4)]" },
      // { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "hover:shadow-[0_0_25px_hsl(228,77%,52%/0.4)]" },

    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg", color: "hover:shadow-[0_0_25px_hsl(193,70%,55%/0.4)]" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "hover:shadow-[0_0_25px_hsl(120,40%,50%/0.4)]" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "hover:shadow-[0_0_25px_hsl(207,60%,50%/0.4)]" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "hover:shadow-[0_0_25px_hsl(215,60%,55%/0.4)]" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "hover:shadow-[0_0_25px_hsl(52,84%,55%/0.4)]" },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "hover:shadow-[0_0_25px_hsl(215,50%,50%/0.4)]" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "hover:shadow-[0_0_25px_hsl(207,60%,50%/0.4)]" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "hover:shadow-[0_0_25px_hsl(120,50%,45%/0.4)]" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", color: "hover:shadow-[0_0_25px_hsl(0,70%,50%/0.4)]" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "hover:shadow-[0_0_25px_hsl(207,80%,52%/0.4)]" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "hover:shadow-[0_0_25px_hsl(12,80%,50%/0.4)]" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", color: "hover:shadow-[0_0_25px_hsl(48,80%,55%/0.4)]" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "hover:shadow-[0_0_25px_hsl(38,90%,55%/0.4)]" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold mb-16 flex items-center gap-4"
        >
          <span className="text-gradient">Tech Stack.</span>
          <span className="h-px flex-1 bg-border" />
        </motion.h2>

        <div className="space-y-16">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <h3 className="text-sm font-mono text-primary/60 mb-6 tracking-widest uppercase text-center">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ delay: si * 0.05, type: "spring", stiffness: 400, damping: 10 }}
                    className={`group flex flex-col items-center gap-4 p-6 rounded-2xl bg-card/40 border border-border/40 cursor-default transition-all duration-75 hover:border-primary/50 hover:bg-card/60 hover:shadow-[0_0_30px_hsl(185,80%,50%,0.2)] ${skill.color}`}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-14 h-14 transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
