# ResidentialDesk

One-page, phone-first portfolio site for Vivek, real estate consultant. Built with Next.js (App Router).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Editing content
- **Contact details, listings, services, FAQs:** `lib/site.ts` (single source of truth)
- **Photos:** replace files in `public/images/` (`hero.jpg`, `vivek.jpg`, `villa.jpg`, `tower.jpg`, `loft.jpg`). Next.js serves them as optimised AVIF/WebP automatically.
- **Styles:** `app/globals.css`
