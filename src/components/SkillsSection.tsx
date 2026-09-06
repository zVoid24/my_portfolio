import { motion } from "framer-motion";
import { Smartphone, Server, Database, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const skillCategories: { title: string; icon: LucideIcon; skills: Skill[] }[] = [
  {
    title: "Mobile & Frontend",
    icon: Smartphone,
    skills: [
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "#027DFB" },
      { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", color: "#0175C2" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg", color: "#00ADD8" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F0DB4F" },
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", color: "#DC382D" },
      { name: "RabbitMQ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg", color: "#FF6600" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", color: "#FCC624" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#FFCA28" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading number="01." title="Tech Stack" />

        <div className="grid gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <cat.icon size={18} />
                </div>
                <h3 className="text-sm font-mono text-muted-foreground tracking-widest uppercase">
                  {cat.title}
                </h3>
                <span className="h-px flex-1 bg-border/50" />
                <span className="text-xs font-mono text-muted-foreground/40">
                  {cat.skills.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.04, type: "spring", stiffness: 400, damping: 15 }}
                    className="hover-shine group flex items-center gap-3 pl-2 pr-4 py-2 rounded-full bg-secondary/30 border border-border/40 cursor-default transition-all duration-300 hover:border-primary/30 hover:bg-secondary/60"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${skill.color}22` }}
                    >
                      <img src={skill.icon} alt="" className="w-[18px] h-[18px]" loading="lazy" />
                    </div>
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
