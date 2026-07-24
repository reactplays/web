# REACT PLAYS — Landing Page

Single-page Next.js 15 (App Router) + TypeScript + Tailwind + Framer Motion landing page, built to spec: no navbar, no extra sections, one screen only.

## Before you launch

Edit `lib/config.ts` — it's the only file that needs real values:

- `telegramJoinUrl` — any Telegram URL (public channel, private invite link, group, or bot) — used by "Join Telegram"
- `bgmiAccountsUrl` — an independent URL, separate from `telegramJoinUrl` — used by "BGMI Accounts Available"
- `apkDownloadUrl` — direct link to the APK file — used by "Download APK"
- `seo.title` / `seo.description` if you want to tweak them
- `metadataBase` in `app/layout.tsx` — set this to your real production domain once you have one (needed for Open Graph/Twitter/Telegram image previews to resolve correctly)

There are exactly three clickable elements on the page — Download APK, Join Telegram, and BGMI Accounts Available — each wired to its own independently configurable destination.

Then drop these files into `public/`:

- `preview.webm` and `preview.mp4` — the 16:9 preview video (WebM preferred, MP4 fallback)
- `preview-poster.jpg` — a poster frame shown while the video is buffering
- `og-image.jpg` — the Open Graph / Twitter / Telegram link-preview image

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Structure

```
app/
  layout.tsx      SEO metadata, fonts, viewport/theme-color
  page.tsx         assembles the page, exact spacing per spec
  globals.css      monochrome gradient background, liquid-glass utility classes
components/
  Hero.tsx             "Welcome to" / "REACT PLAYS"
  VideoPlayer.tsx      16:9 video, skeleton loading, mute/unmute only
  ActionButtons.tsx    Download APK (green) / Join Telegram (blue), with breathing glow
  InfoCards.tsx        BGMI Accounts Available (independent URL)
  Footer.tsx           © REACT PLAYS
lib/
  config.ts               single source of truth for links/copy — three direct URLs
```

## Notes

- All three actions (Download APK, Join Telegram, BGMI Accounts Available) are plain direct links to whatever URL you configure — no username parsing, no deep-link construction. Paste any valid link (public channel, private invite, group, bot, or otherwise) and it just works.
- Motion respects `prefers-reduced-motion`.
- No extra sections, copy, or components were added beyond the spec.
