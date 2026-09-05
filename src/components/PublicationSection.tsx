import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
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
          className="glass rounded-2xl overflow-hidden hover-glow grid md:grid-cols-[1.3fr_1fr]"
        >
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
              <FileText size={18} />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4 leading-snug">
              Competitive Sentiment Analysis Using Character-Level CNNs with
              Limited Data
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded">
                IEEE ICCCNT 2025
              </span>
              <span className="text-xs font-mono text-muted-foreground bg-secondary/40 px-2 py-1 rounded">
                IIT Indore
              </span>
              <span className="text-xs font-mono text-muted-foreground bg-secondary/40 px-2 py-1 rounded">
                Jul 18, 2025
              </span>
            </div>
            <a
              href="https://www.researchgate.net/publication/394046738_Competitive_Sentiment_Analysis_Using_Character-_Level_CNNs_with_Limited_Data"
              target="_blank"
              rel="noreferrer"
              className="hover-shine inline-flex items-center gap-2 w-fit px-4 py-2.5 rounded-lg bg-secondary/30 border border-border/40 text-sm text-muted-foreground hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              <ExternalLink size={16} />
              View on ResearchGate
            </a>
          </div>

          <div className="relative bg-secondary/10 p-3 md:p-4 flex items-center justify-center border-t md:border-t-0 md:border-l border-border/40">
            <div className="w-full bg-white rounded-sm shadow-2xl px-6 py-6 select-none">
              <p className="text-center text-[7px] font-bold leading-[9px] text-gray-800 mb-1">
                Competitive Sentiment Analysis Using
                <br />
                Character-Level CNNs with Limited Data
              </p>
              <p className="text-center text-[4.5px] leading-[7px] text-gray-500 mb-2">
                IEEE ICCCNT 2025 &nbsp;•&nbsp; IIT Indore
              </p>
              <div className="h-px bg-gray-300 mb-2" />
              <p className="text-[5px] font-bold text-gray-700 mb-1.5">Abstract</p>
              <div className="grid grid-cols-2 gap-3 text-[4.5px] leading-[6.5px] text-gray-400">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  enim ad minim veniam quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat duis aute
                  irure dolor.
                </p>
                <p className="text-justify">
                  In reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur excepteur sint occaecat cupidatat non
                  proident sunt in culpa qui officia deserunt mollit anim id
                  est laborum sed ut perspiciatis unde omnis iste natus.
                </p>
              </div>
              <div className="mt-2.5 h-14 rounded-[1px] bg-gray-100 border border-gray-200 flex items-center justify-center">
                <div className="w-3/4 h-3/4 flex items-end gap-[2px]">
                  {[40, 65, 50, 80, 55, 70, 45].map((h, idx) => (
                    <div
                      key={idx}
                      className="flex-1 bg-primary/40 rounded-t-[0.5px]"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-2.5 text-[4.5px] leading-[6.5px] text-gray-400">
                <p className="text-justify">
                  Ut enim ad minima veniam quis nostrum exercitationem ullam
                  corporis suscipit laboriosam nisi ut aliquid ex ea commodi
                  consequatur quis autem vel eum iure reprehenderit.
                </p>
                <p className="text-justify">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet consectetur adipisci velit sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationSection;
