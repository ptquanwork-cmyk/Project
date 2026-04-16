"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 10%"
      }}
    >
      <h1
        style={{
          background: "linear-gradient(to right, #38bdf8, #a855f7)",
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}
      >
        Jayson
      </h1>

      <div>Portfolio</div>
    </motion.nav>
  );
}