import React from "react";
import PurposeSection from "./PurposeSection";
import TeamSection from "./TeamSection";
import { motion } from "framer-motion";
const Aboutus = () => {
  return (
    // <div>

    // <PurposeSection/>
    // <TeamSection/>
    // </div>
    <main>
      {/* Animated PurposeSection */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <PurposeSection />
      </motion.div>
      {/* aboutus */}
      {/* Animated TeamSection */}
      {/* <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    > */}
      <TeamSection />
      {/* </motion.div> */}
    </main>
  );
};

export default Aboutus;
