import { motion } from "framer-motion";
import { Award, Trophy, Star, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const achievements = [
  {
    icon: Trophy,
    title: "2nd Runners-up",
    text: "Unlock the Algorithm (Preliminary Round)",
    year: "2023",
    accent: "bg-amber-500/10 text-amber-400",
    glow: "bg-amber-500",
  },
  {
    icon: Award,
    title: "2nd Runners-up",
    text: "TypeTreck",
    year: "2023",
    accent: "bg-sky-500/10 text-sky-400",
    glow: "bg-sky-500",
  },
  {
    icon: Star,
    title: "Best Merit",
    text: "Education Zone 06 — Math & Computer",
    year: "2017",
    accent: "bg-primary/10 text-primary",
    glow: "bg-primary",
  },
];

const profiles = [
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/zvoid81",
    handle: "zvoid81",
    stat: "1036 rating",
    accent: "from-red-500/30 to-red-500/5 text-red-400 border-red-500/20",
    glowRgb: "239, 68, 68",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/zVoid/",
    handle: "zVoid",
    stat: null,
    accent: "from-amber-500/30 to-amber-500/5 text-amber-400 border-amber-500/20",
    glowRgb: "245, 158, 11",
  },
  {
    name: "VJudge",
    url: "https://vjudge.net/user/zVoid",
    handle: "zVoid",
    stat: null,
    accent: "from-sky-500/30 to-sky-500/5 text-sky-400 border-sky-500/20",
    glowRgb: "14, 165, 233",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading number="05." title="Achievements & CP" />

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative glass rounded-2xl p-6 hover-glow"
            >
              <div className={`absolute -top-8 -right-8 w-28 h-28 rounded-full blur-3xl opacity-25 pointer-events-none ${a.glow}`} />
              <div className="relative flex items-center justify-between mb-4">
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${a.accent}`}>
                  <a.icon size={20} />
                </div>
                <span className="text-xs font-mono text-muted-foreground/50">{a.year}</span>
              </div>
              <p className="relative font-heading font-semibold text-foreground mb-1">{a.title}</p>
              <p className="relative text-sm text-muted-foreground">{a.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <h3 className="font-heading font-semibold text-foreground mb-5">
            Problem Solving Profiles
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {profiles.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="hover-shine group flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border/40 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg font-heading font-bold border bg-gradient-to-br shrink-0 ${p.accent}`}
                  style={{ boxShadow: `0 0 20px rgba(${p.glowRgb}, 0.25)` }}
                >
                  {p.name[0]}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground">{p.name}</p>
                  <p className="text-xs font-mono text-muted-foreground truncate">
                    {p.stat ?? p.handle}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
