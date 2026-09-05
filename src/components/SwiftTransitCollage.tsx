import { motion } from "framer-motion";

const SwiftTransitCollage = () => {
  return (
    <motion.img
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      src="/projects/swift-transit/swift_transit_banner.jpg"
      alt="Swift Transit app screens: search route, stoppages, live bus tracking, payment, and RFID pass"
      className="w-full rounded-lg shadow-2xl"
      loading="lazy"
    />
  );
};

export default SwiftTransitCollage;
