# Appleton Little Paradise — Premium Website (Next.js + Tailwind)

Isang buong Next.js 14 (App Router) + Tailwind CSS na website para sa
Appleton Little Paradise Beach Resort & Restaurant, batay sa totoong
content mula sa `appletonlittleparadise.com` at sa Facebook page
(`facebook.com/ALPBeachREAL`).

## Paano patakbuhin

```bash
npm install
npm run dev
```

Buksan ang `http://localhost:3000`.

Para sa production build:

```bash
npm run build
npm start
```

> **Note:** kailangan ng internet access ang unang build para ma-download
> ang Google Fonts (Instrument Serif, Manrope, IBM Plex Mono) sa pamamagitan
> ng `next/font/google`. Normal ito sa Vercel o sa kahit anong hosting na
> may internet.

## Istraktura

```
app/
  layout.tsx      → fonts + metadata
  page.tsx        → inaayos ang lahat ng sections
  globals.css     → base styles + design tokens
components/
  Header.tsx      → sticky nav
  EstuaryRail.tsx → ang "signature" scroll rail (tingnan sa baba)
  Hero.tsx, About.tsx, Rooms.tsx, Amenities.tsx, Dining.tsx,
  Gallery.tsx, Testimonials.tsx, Location.tsx, FAQ.tsx,
  Booking.tsx, Footer.tsx
lib/
  data.ts         → LAHAT ng laman ng site (rooms, presyo, amenities,
                    contact info, image URLs) — dito mo babaguhin ang text
```

## Ang "Estuary Line"

Ang design signature ng site ay isang manipis na "wayfinding rail" sa gilid
ng page (visible sa desktop) na sumusunod sa parehong byahe ng guest: mula
sa highway → tulay → resort grounds → hapag-kainan → tabing-dagat →
booking. Ito ang parehong ideya ng resort mismo — "ocean and riverfront"
— ginawang isang visual na sinusundan habang nagsi-scroll ang guest.

## Pagpapalit ng mga larawan

Sa ngayon, humihiram muna ang site ng mga larawan mula sa live na
`appletonlittleparadise.com` (parehong may-ari, temporary lang habang
wala pang bagong photography). Para gumamit ng sarili niyong mga larawan:

1. Ilagay ang mga bagong photo sa `/public/photos/`.
2. Palitan ang mga URL sa `lib/data.ts` (halimbawa: `IMG.about`,
   `rooms[].img`, `dishes[].img`, `IMG.gallery`) ng landas papunta sa
   `/photos/pangalan-ng-file.jpg`.
3. I-update ang `next.config.mjs` — puwede nang alisin ang
   `remotePatterns` kapag lahat ng larawan ay lokal na.

## Pagbabago ng presyo, rooms, FAQ, atbp.

Halos lahat ng nakikita sa site — pangalan ng rooms, presyo, amenities,
FAQ, testimonials, contact details — ay nasa iisang file: `lib/data.ts`.
Doon ka mag-edit, awtomatikong mag-uupdate ang buong site.

## Pagkonekta ng booking form

Ang form sa `components/Booking.tsx` ay placeholder pa lang (nagpapakita
lang ng "thanks" message sa submit). Para maging live:

- Gumawa ng API route (`app/api/booking/route.ts`) na magpapadala ng
  email (gamit ang Resend, halimbawa) o SMS (gamit ang Twilio/Semaphore).
- O kaya, palitan ang `onSubmit` para direktang mag-post sa isang
  booking/channel-manager provider.

## Deploy

Pinaka-mabilis: i-push sa GitHub tapos i-import sa
[vercel.com/new](https://vercel.com/new) — awtomatiko nang ma-de-detect
bilang Next.js project.
