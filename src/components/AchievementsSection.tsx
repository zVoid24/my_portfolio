import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";

const achievements = [
  { icon: Trophy, text: "2nd Runners-up — Unlock the Algorithm (Preliminary Round), Fall 2023" },
  { icon: Award, text: "2nd Runners-up — TypeTreck, Fall 2023" },
  { icon: Star, text: "Best Merit — Education Zone 06 in Math and Computer, 2017" },
];

const profiles = [
  { name: "Codeforces", url: "https://codeforces.com/profile/zvoid81", handle: "zvoid81" },
  { name: "LeetCode", url: "https://leetcode.com/u/zVoid/", handle: "zVoid" },
  { name: "VJudge", url: "https://vjudge.net/user/zVoid", handle: "zVoid" },
];

const AchievementsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-bold mb-12 flex items-center gap-4"
        >
          <span className="text-gradient">Achievements & CP</span>
          <span className="h-px flex-1 bg-border" />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {achievements.map((a, i) => (
              <div
                key={i}
                className="glass rounded-xl p-4 flex items-start gap-4 hover-glow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <a.icon size={18} className="text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{a.text}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-xl p-6 hover-glow"
          >
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Problem Solving Profiles
            </h3>
            <div className="space-y-3">
              {profiles.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors group"
                >
                  <span className="text-sm text-foreground">{p.name}</span>
                  <span className="text-xs font-mono text-primary group-hover:underline">
                    {p.handle}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
