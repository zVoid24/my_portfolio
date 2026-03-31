import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Swift Transit",
    description:
      "Centralized bus, ticket, and passenger management for Dhaka. Includes passenger app and admin dashboard with realtime tracking, payments (SSLCommerz), RFID workflow, caching, and messaging.",
    tech: ["Flutter", "React.js", "Golang", "PostgreSQL", "RabbitMQ", "Redis"],
    github: "https://github.com/zVoid24/Swift_Transit-Your_day_to_day_travel_solution",
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

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-bold mb-16 flex items-center gap-4"
        >
          <span className="text-gradient">Projects</span>
          <span className="h-px flex-1 bg-border" />
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
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
