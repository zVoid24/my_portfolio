import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PublicationSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading number="04." title="Publication" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 hover-glow max-w-3xl"
        >
          <h3 className="font-heading font-semibold text-foreground mb-2">
            Competitive Sentiment Analysis Using Character-Level CNNs with
            Limited Data
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            IEEE (ICCCNT 2025, IIT Indore) • Published: Jul 18, 2025
          </p>
          <a
            href="https://www.researchgate.net/publication/394046738_Competitive_Sentiment_Analysis_Using_Character-_Level_CNNs_with_Limited_Data"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ExternalLink size={14} />
            View on ResearchGate
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationSection;
