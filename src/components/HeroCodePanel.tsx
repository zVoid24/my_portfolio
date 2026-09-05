import { motion } from "framer-motion";

const HeroCodePanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="relative hidden lg:block"
    >
      <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full" />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative glass rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/30">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 text-xs font-mono text-muted-foreground/60">developer.go</span>
        </div>
        <pre className="p-6 text-[13px] md:text-sm font-mono leading-relaxed overflow-x-auto">
          <code>
            <span className="text-pink-400">package</span> main
            {"\n\n"}
            <span className="text-pink-400">type</span>{" "}
            <span className="text-primary">Developer</span>{" "}
            <span className="text-pink-400">struct</span> {"{"}
            {"\n"}  Name  <span className="text-sky-300">string</span>
            {"\n"}  Role  <span className="text-sky-300">string</span>
            {"\n"}  Stack []<span className="text-sky-300">string</span>
            {"\n"}  Focus <span className="text-sky-300">string</span>
            {"\n"}{"}"}
            {"\n\n"}
            <span className="text-pink-400">var</span>{" "}
            <span className="text-sky-300">zahidul</span> = <span className="text-primary">Developer</span>
            {"{"}
            {"\n"}  Name:  <span className="text-emerald-300">"Zahidul Islam Rabbi"</span>,
            {"\n"}  Role:  <span className="text-emerald-300">"Software Engineer"</span>,
            {"\n"}  Stack: []<span className="text-sky-300">string</span>{"{"}<span className="text-emerald-300">"Flutter"</span>,{" "}
            <span className="text-emerald-300">"Golang"</span>,{" "}
            <span className="text-emerald-300">"Node.js"</span>{"}"},
            {"\n"}  Focus: <span className="text-emerald-300">"offline-first, real-time apps"</span>,
            {"\n"}{"}"}
            {"\n\n"}
            <span className="text-muted-foreground/60">// currently available for work</span>
            {"\n"}
            <span className="text-pink-400">func</span>{" "}
            (<span className="text-sky-300">d</span> <span className="text-primary">Developer</span>){" "}
            <span className="text-primary">IsAvailable</span>() <span className="text-sky-300">bool</span>{" "}
            {"{"} <span className="text-pink-400">return</span> <span className="text-primary">true</span> {"}"}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-[7px] h-[15px] bg-primary/70 ml-1 align-middle translate-y-[2px]"
            />
          </code>
        </pre>
      </motion.div>
    </motion.div>
  );
};

export default HeroCodePanel;
