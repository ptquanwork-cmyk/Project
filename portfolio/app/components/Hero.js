"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{ padding: "100px 10%" }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: "48px" }}
      >
        Hi, I'm{" "}
        <span
          style={{
            background: "linear-gradient(to right, #38bdf8, #a855f7)",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}
        >
          Jayson 🚀
        </span>
      </motion.h2>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        I build modern web apps and startups.
      </motion.p>
    </section>
  );
}