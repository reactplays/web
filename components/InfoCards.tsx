"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function InfoCards() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="flex w-full max-w-md flex-col"
    >
      <motion.a
        href={SITE_CONFIG.bgmiAccountsUrl}
        whileTap={{ scale: 0.982 }}
        whileHover={{ scale: 1.008 }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="glass-surface flex w-full items-center justify-between rounded-card px-5 py-4 text-left"
        style={
          {
            "--tint": "radial-gradient(130% 160% at 18% 12%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02) 60%, transparent 100%)",
          } as React.CSSProperties
        }
      >
        <span className="relative z-10 text-sm font-medium text-white">BGMI Accounts Available</span>
        <ChevronRight size={18} className="relative z-10 text-white/45" />
      </motion.a>
    </motion.div>
  );
}
