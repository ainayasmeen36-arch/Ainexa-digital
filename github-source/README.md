# AINEXA Digital Solutions

Static Next.js 14 marketing site + local admin dashboard (`/admin`) using LocalStorage.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Static export (Hostinger / VPS)

```bash
npm run build
```

Upload the `out/` folder to your web root. `next.config.js` already sets `output: 'export'`.

Update contact details in `lib/data.ts` (email, WhatsApp, phone).
