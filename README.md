# Centro de Salud Hispano de Georgia — Website

Bilingual (Spanish-first) medical clinic website built with Next.js 15, TypeScript, Tailwind CSS v4, shadcn/ui, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animations:** Framer Motion 11
- **Fonts:** Playfair Display + Source Sans 3 (Google Fonts via next/font)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, Trust bar, Services, Why Us, Testimonials, Map |
| `/servicios` | Detailed services with FAQ accordion |
| `/nosotros` | About — Team cards, mission, values |
| `/contacto` | Contact form (GHL) + calendar (GHL) + map |
| `/blog` | Health blog grid with category filter |

## GoHighLevel Integration

Set the following in `.env.local`:

```bash
NEXT_PUBLIC_GHL_FORM_URL=https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID
NEXT_PUBLIC_GHL_CALENDAR_URL=https://api.leadconnectorhq.com/widget/booking/YOUR_CALENDAR_ID
```

**Without these:** Native fallback form and placeholder calendar card are shown automatically.

**How to find GHL embed URLs:**
- **Form:** GHL Dashboard → Sites → Forms → [Your Form] → Integrate → Copy iframe `src` URL
- **Calendar:** GHL Dashboard → Calendars → [Your Calendar] → Embed → Copy iframe `src` URL

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Option 2: GitHub + Vercel

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) → Import repository
3. Add environment variables in Project Settings → Environment Variables
4. Deploy

### Required Environment Variables in Vercel

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL |
| `NEXT_PUBLIC_GHL_FORM_URL` | No | GHL contact form embed URL |
| `NEXT_PUBLIC_GHL_CALENDAR_URL` | No | GHL calendar embed URL |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 ID |

## Post-Deploy Checklist

- [ ] Verify all pages load at production URL
- [ ] Test phone link `tel:+14704481172` on mobile
- [ ] Test WhatsApp link opens correctly
- [ ] Verify Google Maps iframe loads
- [ ] Set GHL form and calendar URLs in Vercel env vars
- [ ] Validate JSON-LD at [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
- [ ] Verify Lighthouse scores > 90 in Chrome DevTools

## Customization

### Replace placeholder content

- **Doctor info & photos:** Edit `src/lib/constants.ts` → `TEAM` array
- **Testimonials:** Edit `src/lib/constants.ts` → `TESTIMONIALS` array
- **Services:** Edit `src/lib/constants.ts` → `SERVICES` array
- **Business info:** Edit `src/lib/constants.ts` → `BUSINESS` object
- **Colors:** Edit `src/app/globals.css` → CSS custom properties

### Update production domain

Replace `centrodesaludhispanoga.com` in:
- `src/lib/constants.ts` → `BUSINESS.siteUrl`
- `public/robots.txt`

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── ui/           # shadcn auto-generated
│   ├── layout/       # Header, Footer, Nav
│   ├── home/         # Home page sections
│   ├── servicios/    # Services page components
│   ├── nosotros/     # About page components
│   ├── contacto/     # Contact page + GHL embeds
│   ├── blog/         # Blog components
│   └── shared/       # Reusable components
├── context/          # React Context (Language)
├── lib/              # Constants, utilities, motion variants
└── types/            # TypeScript types
```
