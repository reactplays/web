"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onReady = () => setReady(true);
    video.addEventListener("canplaythrough", onReady);
    video.addEventListener("loadeddata", onReady);
    return () => {
      video.removeEventListener("canplaythrough", onReady);
      video.removeEventListener("loadeddata", onReady);
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="relative w-full aspect-video overflow-hidden rounded-video glass-surface glass-deep"
    >
      {/* Skeleton shown until the video reports it is ready */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 glass-shimmer animate-shimmer transition-opacity duration-500 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />

      <video
        ref={videoRef}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={SITE_CONFIG.videoSources.poster}
        aria-label="REACT PLAYS preview video"
      >
        <source src={SITE_CONFIG.videoSources.webm} type="video/webm" />
        <source src={SITE_CONFIG.videoSources.mp4} type="video/mp4" />
      </video>

      <motion.button
        type="button"
        onClick={toggleMute}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="glass-surface absolute right-4 top-4 z-[2] flex h-10 w-10 items-center justify-center rounded-full"
        style={
          {
            "--tint": "radial-gradient(140% 160% at 25% 20%, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.02) 60%, transparent 100%)",
          } as React.CSSProperties
        }
      >
        {muted ? (
          <VolumeX size={18} className="relative z-10 text-white/90" />
        ) : (
          <Volume2 size={18} className="relative z-10 text-white/90" />
        )}
      </motion.button>
    </motion.div>
  );
}
