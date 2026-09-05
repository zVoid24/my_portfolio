import { motion } from "framer-motion";
import { Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Swift Transit",
    description:
      "Centralized bus, ticket, and passenger management for Dhaka. Includes passenger app and admin dashboard with realtime tracking, payments (SSLCommerz), RFID workflow, caching, and messaging.",
    tech: ["Flutter", "React.js", "Golang", "PostgreSQL", "RabbitMQ", "Redis"],
    github: "https://github.com/zVoid24/Swift_Transit-Your_day_to_day_travel_solution",
    featured: true,
  },
  {
    title: "Fresh Basket",
    description:
      "Minimal online grocery store app with customer care live chat and fast product search.",
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/zVoid24/online_shop_flutter_bloc",
  },
  {
    title: "Zyra — Rescue/Defense Robot",
    description:
      "IoT robot prototype + mobile app to visualize sensor-driven outputs and mapping-style view.",
    tech: ["C++", "Arduino", "ESP32", "Flutter", "Firebase"],
    github: "https://github.com/zVoid24/Zyra---Robot",
  },
  {
    title: "Shark Bot",
    description:
      "High-performance Telegram bot for automated phone number and OTP handling. Built with Go and uses Redis for fast session management.",
    tech: ["Go", "Redis", "PostgreSQL"],
    github: "https://github.com/zVoid24/shark-bot",
  },
];

const featuredProject = projects.find((p) => p.featured)!;
const otherProjects = projects.filter((p) => !p.featured);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading number="03." title="Projects" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl overflow-hidden hover-glow group grid md:grid-cols-2 mb-8"
        >
          <div className="p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-primary/70 tracking-widest uppercase">
                Featured Project
              </span>
              <h3 className="text-2xl font-heading font-bold text-foreground mt-2 mb-4 group-hover:text-primary transition-colors">
                {featuredProject.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={featuredProject.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 w-fit px-4 py-2.5 rounded-lg bg-secondary/30 border border-border/40 text-sm text-muted-foreground hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              <Github size={16} />
              View on GitHub
            </a>
          </div>

          <div className="relative bg-secondary/10 p-6 md:p-10 flex items-center border-t md:border-t-0 md:border-l border-border/40">
            <div className="w-full rounded-lg border border-border/50 bg-background/60 overflow-hidden shadow-xl">
              <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-border/40 bg-secondary/30">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <div className="p-5 space-y-3">
                <div className="h-3 w-2/3 rounded-full bg-primary/30" />
                <div className="h-3 w-full rounded-full bg-border/70" />
                <div className="h-3 w-5/6 rounded-full bg-border/70" />
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="h-16 rounded-lg bg-primary/10 border border-primary/10" />
                  <div className="h-16 rounded-lg bg-primary/10 border border-primary/10" />
                  <div className="h-16 rounded-lg bg-primary/10 border border-primary/10" />
                </div>
                <div className="h-3 w-1/2 rounded-full bg-border/70" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 400, damping: 20 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-8 flex flex-col justify-between hover-glow group min-h-[320px] transition-all duration-75"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-muted-foreground/50">
                    0{i + 2}
                  </span>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary/20 border border-border/40 flex items-center justify-center text-muted-foreground/70 hover:bg-primary/10 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {proj.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
