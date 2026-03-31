import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Ambient bg circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
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
              Beyond development, I have a background in competitive programming with a max rating of
              <span className="text-primary/90 font-semibold mx-1">1036</span> on Codeforces and have published researchers on NLP at
              <span className="text-primary/90 font-semibold mx-1">IEEE ICCCNT 2025</span>.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-5"
          >
            <a
              href="https://github.com/zVoid24"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-lg bg-secondary/20 border border-border/40 flex items-center justify-center text-muted-foreground/70 hover:bg-primary/10 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all duration-300"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/zahidul-islam-rabbi-b77724260"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-lg bg-secondary/20 border border-border/40 flex items-center justify-center text-muted-foreground/70 hover:bg-primary/10 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all duration-300"
            >
              <Linkedin size={22} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
