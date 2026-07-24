// Edit these values before launch. Nothing else in the codebase should need touching.
// All three are direct URLs — paste any link here: a public channel, a private
// invite link, a group, a bot, or anything else. Nothing is constructed from a
// username, so any valid URL works as-is.

export const SITE_CONFIG = {
  brandName: "REACT PLAYS",
  telegramJoinUrl: "https://t.me/+5lbL-nTj9_kzYjFl", // used by "Join Telegram"
  bgmiAccountsUrl: "https://t.me/+o3fte8s3NP9hMmU1", // independent from telegramJoinUrl — used by "BGMI Accounts Available"
  apkDownloadUrl: "https://t.me/+5lbL-nTj9_kzYjFl",
  videoSources: {
    webm: "/preview.webm",
    mp4: "/preview.mp4",
    poster: "/preview-poster.jpg",
  },
  seo: {
    title: "REACT PLAYS",
    description: "Premium Gaming Landing Page",
    themeColor: "#0a0a0a",
  },
} as const;
