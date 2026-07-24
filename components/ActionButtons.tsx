"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import TelegramIcon from "@/components/icons/TelegramIcon";
import { SITE_CONFIG } from "@/lib/config";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const pressTransition = { type: "spring", stiffness: 500, damping: 32 } as const;

export default function ActionButtons() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="flex w-full max-w-md flex-row items-center justify-center gap-4"
    >
      <div className="relative flex-1">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-3 rounded-capsule blur-2xl animate-breathe"
          style={{
            background:
              "radial-gradient(circle, rgba(52, 199, 89, 0.55), rgba(52, 199, 89, 0.15) 60%, transparent 80%)",
          }}
        />
        <motion.a
          href={SITE_CONFIG.apkDownloadUrl}
          whileTap={{ scale: 0.965 }}
          whileHover={{ scale: 1.02 }}
          transition={pressTransition}
          className="glass-surface relative z-10 flex w-full items-center justify-center gap-2.5 rounded-capsule px-[21px] py-[15px] text-[15px] font-semibold text-white/90"
          style={
            {
              "--tint": "radial-gradient(120% 140% at 22% 15%, rgba(100, 230, 145, 0.4), rgba(52, 199, 89, 0.18) 55%, rgba(52, 199, 89, 0.1) 100%)",
              "--tint-border": "rgba(140, 235, 170, 0.55)",
              "--tint-glow": "0 12px 30px -8px rgba(52, 199, 89, 0.5)",
              "--inner-glow": "inset 0 0 20px rgba(52, 199, 89, 0.2)",
            } as React.CSSProperties
          }
          aria-label="Download APK"
        >
          <Download size={19} className="relative z-10 text-white" />
          <span className="relative z-10">Download APK</span>
        </motion.a>
      </div>

      <div className="relative flex-1">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-3 rounded-capsule blur-2xl animate-breathe"
          style={{
            background:
              "radial-gradient(circle, rgba(10, 132, 255, 0.55), rgba(10, 132, 255, 0.15) 60%, transparent 80%)",
          }}
        />
        <motion.a
          href={SITE_CONFIG.telegramJoinUrl}
          whileTap={{ scale: 0.965 }}
          whileHover={{ scale: 1.02 }}
          transition={pressTransition}
          className="glass-surface relative z-10 flex w-full items-center justify-center gap-2.5 rounded-capsule px-[21px] py-[15px] text-[15px] font-semibold text-white/90"
          style={
            {
              "--tint": "radial-gradient(120% 140% at 22% 15%, rgba(115, 190, 255, 0.4), rgba(10, 132, 255, 0.18) 55%, rgba(10, 132, 255, 0.1) 100%)",
              "--tint-border": "rgba(150, 205, 255, 0.55)",
              "--tint-glow": "0 12px 30px -8px rgba(10, 132, 255, 0.5)",
              "--inner-glow": "inset 0 0 20px rgba(10, 132, 255, 0.2)",
            } as React.CSSProperties
          }
          aria-label="Join Telegram"
        >
          <TelegramIcon size={19} className="relative z-10 text-white" />
          <span className="relative z-10">Join Telegram</span>
        </motion.a>
      </div>
    </motion.div>
  );
}
