"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Footer() {
  return (
    <motion.p
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="text-xs text-white/40"
    >
      © {SITE_CONFIG.brandName}
    </motion.p>
  );
}
