import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-bold mb-4"
        >
          <span className="text-gradient">Get In Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-8"
        >
          I'm currently open to new opportunities. Whether you have a question
          or just want to say hi, feel free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16} className="text-primary" />
            27, Topkhana Road, Dhaka-1000
          </div>
          <a href="tel:+8801634328659" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone size={16} className="text-primary" />
            +8801634328659
          </a>
          <a href="mailto:rabbi1272@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Mail size={16} className="text-primary" />
            rabbi1272@gmail.com
          </a>
        </motion.div>

        {/* <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          href="mailto:rabbi1272@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-heading font-medium"
        >
          <Mail size={18} />
          Say Hello
        </motion.a> */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-xs text-muted-foreground"
        >
          Designed & Built by Zahidul Islam Rabbi
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
