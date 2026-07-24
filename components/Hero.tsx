"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.p
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeUp}
        className="text-lg sm:text-xl font-thin tracking-wide text-white/65"
      >
        Welcome to
      </motion.p>
      <motion.h1
        initial="hidden"
        animate="visible"
        custom={0.12}
        variants={fadeUp}
        className="-mt-0.5 text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.02em] text-white"
      >
        {SITE_CONFIG.brandName}
      </motion.h1>
    </div>
  );
}
