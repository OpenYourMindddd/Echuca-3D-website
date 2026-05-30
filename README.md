# Echuca | 3D

A clean, responsive marketing site for **Echuca | 3D** — custom products and practical designs, locally made.

## Pages

- **Home** — hero, about, featured products
- **Products** — full catalogue from `src/data/products.js`
- **Contact** — enquiry form (mailto to echuca3d@gmail.com)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy on Cloudflare Pages

1. In [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Choose GitHub and repo **OpenYourMindddd/Echuca-3D-website**.
3. Build settings:

   | Setting | Value |
   |---------|--------|
   | Framework preset | Vite (or None) |
   | Build command | `npm run build` |
   | Build output directory | `dist` |

4. **Save and deploy**. Each push to `main` redeploys automatically.

**Build settings must be:**

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Build output directory | `dist` |

SPA routing (`/products`, `/contact`) is handled by `wrangler.jsonc` → `assets.not_found_handling: "single-page-application"`. Do **not** add a `public/_redirects` file — it conflicts with Workers deploy.

**If the build fails with `vite: not found`:** This repo includes `.npmrc` (`production=false`) so devDependencies (Vite) install in CI.

**If deploy fails with `Wrangler requires at least Node.js v22`:** Set **NODE_VERSION** = `22` in Cloudflare (or rely on `.node-version` / `.nvmrc` in this repo, both set to `22`). Wrangler 4 does not run on Node 20.

## Products catalogue

The site is in **coming soon** mode. The Products page shows a placeholder; `src/data/products.js` has an empty `products` array.

When ready to launch, add products to that file and restore the product grid on `src/pages/Products.jsx` (see comments in the file). `ProductCard.jsx` is kept for that launch.

## Contact form backend

The form uses a **mailto** flow by default. To use Formspree, Netlify Forms, or an API, update `handleSubmit` in `src/components/ContactForm.jsx` (comments in that file).

## Future store

- Product images: add `image` paths in `products.js` and place files in `public/images/`
- Pricing & cart: extend product objects and swap Enquire buttons in `ProductCard.jsx`
