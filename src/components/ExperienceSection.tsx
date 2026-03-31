import { motion } from "framer-motion";

const experiences = [
  {
    role: "Junior Flutter Developer",
    company: "Scube Technologies Limited",
    period: "Feb 2026 — Present",
    points: [
      "Developing and maintaining Flutter mobile applications for clients.",
      "Collaborating with cross-functional teams to deliver high-quality mobile solutions.",
    ],
  },
  {
    role: "Mobile Application Developer",
    company: "GMGI Solutions LTD",
    period: "Aug 2025 — Dec 2025",
    points: [
      "Built production mobile and backend components for mapping and offline-first field workflows.",
      "Developed offline data collection solutions used in partner programs (BRAC, MORU).",
      "Implemented backend services using Node.js and Golang; maintained system reliability.",
    ],
  },
  {
    role: "Mobile Application Developer Intern",
    company: "GMGI Solutions LTD",
    period: "May 2025 — Jul 2025",
    points: [
      "Developed an offline data collection app (Flutter) with clean, modular architecture.",
    ],
  },
  {
    role: "Prefect — Programming & Problem Solving Lab",
    company: "Daffodil International University",
    period: "Jan 2023 — Dec 2024",
    points: [
      "Assisted instructors in lab sessions; created contest problems and assessments.",
      "Mentored students in competitive programming and problem-solving.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-bold mb-16 flex items-center gap-4"
        >
          <span className="text-gradient">Experience</span>
          <span className="h-px flex-1 bg-border" />
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-3 top-2 w-3 h-3 rounded-full bg-primary hidden md:block shadow-[0_0_10px_hsl(185_80%_50%/0.5)]" />

                <div className="glass rounded-xl p-6 hover-glow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-heading font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-mono text-primary">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-primary/80 mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((p, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
