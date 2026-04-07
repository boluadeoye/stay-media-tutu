"use client";
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#F0EAF8", paddingTop: "96px", paddingBottom: "96px" }}
    >
      <div className="max-w-3xl mx-auto px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-[#1C1C1E]"
          style={{
            fontSize: "clamp(34px, 4.5vw, 58px)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          3,009 happy customers and counting...
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-5 label-overline"
        >
          TOP BEST REVIEWS OF COCKTAIL BY TÚTÙ
        </motion.div>
      </div>
    </section>
  );
}
