import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Let's Talk", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-40 flex justify-center">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`flex flex-wrap items-center justify-center gap-1 md:gap-0 p-1.5 md:p-2 rounded-[1.5rem] md:rounded-full border border-border/60 bg-card/70 backdrop-blur-xl transition-all duration-300 max-w-[95vw] sm:max-w-max ${
          scrolled ? "shadow-[0_0_30px_hsl(185_80%_50%/0.1)]" : ""
        }`}
      >
        <div className="flex items-center gap-3 md:gap-4 px-3 md:px-4 py-1.5 md:border-r border-border/40 shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all duration-300">
              <Code2 size={18} />
            </div>
          </a>
          <div className="flex items-center gap-1.5 px-2 md:px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-emerald-500 whitespace-nowrap">Available</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1 px-1 py-1 md:py-0">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-2.5 md:px-4 py-1.5 md:py-2 text-[11px] md:text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary/60 transition-all duration-200 whitespace-nowrap font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
