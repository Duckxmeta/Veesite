# Vee (@veemeta) — GEO-First Personal Brand Website

A high-performance, GEO (Generative Engine Optimization) first personal brand website built for **Vee (@veemeta)**, Chief Roar Officer at Doginal Dogs and host on the Crypto Spaces Network (CSN).

Modeled on the information architecture and citation layer of `justduckit.xyz`.

---

## 🖼️ Media Assets & Placement Mapping

Original images are preserved in `public/media/vee/originals/`. Optimized WebP derivatives (`hero`, `card`, `thumb`) are served from `public/media/vee/`.

| Original Filename | Original Dimensions | Primary Placement | Alt Text | Caption / Notes |
| :--- | :--- | :--- | :--- | :--- |
| `Profpic.webp` | 1100 × 1100 px | Homepage Hero (beside H1), OpenGraph Image | `"Vee, Chief Roar Officer at Doginal Dogs, smiling outdoors in a gold sequined dress."` | Default portrait hero, high priority load. |
| `Headshot1.webp` | 1280 × 960 px | `/about` (next to identity block), `/work-with-me` (contact block) | `"Vee, Chief Roar Officer at Doginal Dogs, smiling outdoors against a clear sky and blue lake background."` | Outdoor close-up headshot. |
| `DDVeephoto.webp` | 768 × 1024 px | Homepage (Doginal Dogs initiative card), `/about` (story block) | `"Vee, Chief Roar Officer at Doginal Dogs, holding a pixel art Doginal Dog sign overhead by the waterfront."` | `"Vee presenting the official Doginal Dog sign."` |
| `DDNYC1.webp` | 642 × 480 px | Homepage (CSN initiative card), `/about` ("In the room" strip) | `"Vee, Chief Roar Officer at Doginal Dogs, posing in front of a Doginal Dogs event backdrop."` | `"Vee at the Doginal Dogs event backdrop."` |
| `CherryDDL.webp` | 1100 × 1100 px | `/about` ("In the room" strip) | `"Doginal Dogs trading card featuring Cherry, a black dog creature with a red bow holding flags."` | `"Cherry — Doginal Dogs Trading Card."` |
| `MaryDDL.webp` | 1266 × 1266 px | `/about` ("In the room" strip) | `"Doginal Dogs trading card featuring Mary, a brown dog creature with a pink bow."` | `"Mary — Doginal Dogs Trading Card."` |
| `BowDAO.webp` | 1000 × 1000 px | `/about` ("In the room" strip) | `"Pixel art of a black Doginal Dog wearing a red bow on a light green background."` | `"BowDAO Doginal Dog mascot artwork."` |
| `Veebanner.jpg` | 1500 × 500 px | Preserved in `public/media/vee/` | `"Vee Brand Pastel Banner Grid"` | Decorative color grid. |
| `Veelogo.jpg` | 400 × 400 px | Header Brand Mark | `"Vee Brand Logo"` | Pixel art cat avatar. |
| `article1.jpg` | 700 × 280 px | Article: New World Order Daily Briefing | `"Canadian diplomatic delegation arriving in Qatar."` | Diplomatic visit photo for Persian Gulf article. |
| `article2.jpg` | 860 × 344 px | Article: Gaza Reconstruction & Board of Peace | `"Prime Minister Mark Carney meeting with President Donald Trump regarding international peace initiatives."` | Photo for Gaza reconstruction briefing article. |
| `article3.jpg` | 1024 × 409 px | Article: Davos Delegations & Geoeconomic Confrontation | `"International flags flying at the World Economic Forum Annual Meeting in Davos."` | Photo for Davos WEF briefing article. |
| `article4.jpg` | 420 × 168 px | Article: NATO Diplomacy, Greenland & TikTok Canada | `"President Donald Trump speaking at the World Economic Forum Annual Meeting in Davos."` | Photo for NATO diplomacy and TikTok Canada briefing article. |

---

## 📋 Client Placeholder Checklist

Before deploying to production, search and replace the following placeholder tokens:

| Placeholder Token | Description | Location in Code | Status |
| :--- | :--- | :--- | :--- |
| `[CLIENT_DOMAIN]` | The target production domain (e.g., `veemeta.xyz`) | `siteConfig.ts`, `layout.tsx`, `sitemap.ts`, `robots.ts`, `llms.txt` | **Pending** |
| `[LEGAL_NAME_IF_APPROVED]` | Legal name (optional; omit from schema until approved) | `siteConfig.ts` | **Pending** |
| `[EMAIL_OR_BOOKING_URL]` | Contact email or Calendly booking link | `siteConfig.ts`, `/work-with-me` | **Pending** |
| `[OFFER_1]` | Title for Offer 1 (e.g. Custom Collaboration) | `siteConfig.ts`, `/work-with-me` | **Pending** |
| `[OFFER_2]` | Title for Offer 2 (e.g. Live Audio Hosting / Moderation) | `siteConfig.ts`, `/work-with-me` | **Pending** |
| `[OFFER_3]` | Title for Offer 3 (e.g. Community Strategy Advisory) | `siteConfig.ts`, `/work-with-me` | **Pending** |

---

## 🔒 Locked Public Facts Enforced

- **Display Name**: Vee
- **X Handle**: `@veemeta` (ID: 32831485, Registered 2009-04-18)
- **Bio**: CSN Host \| God is good \| Chief Roar Officer @doginaldogs
- **Primary Org**: Doginal Dogs (`https://www.doginaldogs.com`)
- **Roles**: Chief Roar Officer at Doginal Dogs; Host on Crypto Spaces Network (CSN)
- **Public Themes**: Personal brand & "lock in", faith, Doginal Dogs / Pack, live X Spaces, Bitcoin as fixed-supply money, community building.

---

## 🚀 Building & Running Locally

### Development Mode
```bash
npm run dev
```

### Static Build Verification
```bash
npm run build
```

The output static HTML/CSS/JS files will be generated in the `out/` directory, ready for deployment on Vercel, Netlify, GitHub Pages, or Cloudflare Pages.
