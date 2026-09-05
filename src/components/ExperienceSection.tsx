import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const typeStyles: Record<string, string> = {
  "Full-time": "bg-primary/10 text-primary border-primary/20",
  Internship: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Academic: "bg-sky-500/10 text-sky-400 border-sky-500/20",
};

const experiences = [
  {
    role: "Junior Flutter Developer",
    company: "Scube Technologies Limited",
    initials: "ST",
    period: "Feb 2026 — Present",
    type: "Full-time",
    current: true,
    points: [
      "Developing and maintaining Flutter mobile applications for clients.",
      "Building and maintaining custom Linux distributions for kiosk and standalone 24/7 deployments.",
      "Implementing IPC and Modbus communication for embedded and industrial system integrations.",
    ],
  },
  {
    role: "Mobile Application Developer",
    company: "GMGI Solutions LTD",
    initials: "GS",
    period: "Aug 2025 — Dec 2025",
    type: "Full-time",
    current: false,
    points: [
      "Built production mobile and backend components for mapping and offline-first field workflows.",
      "Developed offline data collection solutions used in partner programs (BRAC, MORU).",
      "Implemented backend services using Node.js and Golang; maintained system reliability.",
    ],
  },
  {
    role: "Mobile Application Developer Intern",
    company: "GMGI Solutions LTD",
    initials: "GS",
    period: "May 2025 — Jul 2025",
    type: "Internship",
    current: false,
    points: [
      "Developed an offline data collection app (Flutter) with clean, modular architecture.",
    ],
  },
  {
    role: "Prefect — Programming & Problem Solving Lab",
    company: "Daffodil International University",
    initials: "DIU",
    period: "Jan 2023 — Dec 2024",
    type: "Academic",
    current: false,
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
        <SectionHeading number="02." title="Experience" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
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

                <div className="glass rounded-2xl p-6 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-heading font-bold text-primary shrink-0">
                      {exp.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="text-lg font-heading font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        {exp.current ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-500 shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {exp.period}
                          </span>
                        ) : (
                          <span className="text-sm font-mono text-primary shrink-0">
                            {exp.period}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-1.5">
                        <p className="text-sm text-primary/80">{exp.company}</p>
                        <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${typeStyles[exp.type]}`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-[3.75rem]">
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
