import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import HeroCodePanel from "./HeroCodePanel";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "4+", label: "Projects Shipped" },
  { value: "1036", label: "Codeforces Rating" },
  { value: "1", label: "IEEE Publication" },
];

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm mb-4"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-4"
            >
              Zahidul Islam Rabbi
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-heading font-bold text-muted-foreground mb-6"
            >
              I build <span className="text-gradient">mobile experiences.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-8 space-y-4"
            >
              <p>
                Mobile Application Developer specializing in <span className="text-primary/90 font-medium">Flutter</span> with backend
                experience in <span className="text-primary/90 font-medium">Golang</span> & <span className="text-primary/90 font-medium">Node.js</span>. I craft performant, offline-first
                apps using Provider state management and modern database solutions like <span className="text-primary/90 font-medium">PostgreSQL</span> , <span className="text-primary/90 font-medium">MongoDB</span>, <span className="text-primary/90 font-medium">MySQL</span> and <span className="text-primary/90 font-medium">Firebase</span>.
              </p>
              <p>
                Beyond development, I have a background in competitive programming and have
                published research on NLP at <span className="text-primary/90 font-semibold">IEEE ICCCNT 2025</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden bg-border/40 mb-8"
            >
              {stats.map((s) => (
                <div key={s.label} className="bg-card/50 backdrop-blur-sm px-3 py-4 text-center">
                  <div className="text-xl md:text-2xl font-heading font-bold text-gradient">{s.value}</div>
                  <div className="text-[11px] md:text-xs text-muted-foreground mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button onClick={() => scrollTo("#projects")} className="btn-primary">
                View My Work
              </button>
              <button onClick={() => scrollTo("#contact")} className="btn-outline">
                Get In Touch
              </button>

              <div className="flex items-center gap-3 ml-2">
                <a
                  href="https://github.com/zVoid24"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-lg bg-secondary/20 border border-border/40 flex items-center justify-center text-muted-foreground/70 hover:bg-primary/10 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/zahidul-islam-rabbi-b77724260"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-lg bg-secondary/20 border border-border/40 flex items-center justify-center text-muted-foreground/70 hover:bg-primary/10 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:rabbi1272@gmail.com"
                  className="w-11 h-11 rounded-lg bg-secondary/20 border border-border/40 flex items-center justify-center text-muted-foreground/70 hover:bg-primary/10 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          <HeroCodePanel />
        </div>
      </div>

      <motion.button
        onClick={() => scrollTo("#skills")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default HeroSection;
