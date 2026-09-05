import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  title: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ number, title, centered, className = "" }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("flex items-center gap-4 mb-16", centered && "justify-center", className)}
    >
      <span aria-hidden className="font-mono text-lg md:text-xl text-primary/50 shrink-0">
        {number}
      </span>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient whitespace-nowrap">
        {title}
      </h2>
      {!centered && <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />}
    </motion.div>
  );
};

export default SectionHeading;
