import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#050505",
        glass: {
          border: "rgba(255,255,255,0.14)",
          fill: "rgba(255,255,255,0.06)",
          fillStrong: "rgba(255,255,255,0.10)",
        },
        accent: {
          green: "#34C759",
          blue: "#0A84FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        video: "24px",
        capsule: "999px",
        card: "20px",
      },
      keyframes: {
        floatCapsule: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-2px) rotate(0.3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(1%, -1%) scale(1.03)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.38", transform: "scale(0.96)" },
          "50%": { opacity: "0.68", transform: "scale(1.03)" },
        },
      },
      animation: {
        floatCapsule: "floatCapsule 5s cubic-bezier(0.45,0.05,0.55,0.95) infinite",
        shimmer: "shimmer 2.2s linear infinite",
        drift: "drift 18s ease-in-out infinite",
        breathe: "breathe 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
