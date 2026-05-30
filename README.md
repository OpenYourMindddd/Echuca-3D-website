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

## Adding products

Edit `src/data/products.js`. Each product needs at least `id`, `name`, and `description`. Optional: `image`, `category`, and later `price` for checkout.

## Contact form backend

The form uses a **mailto** flow by default. To use Formspree, Netlify Forms, or an API, update `handleSubmit` in `src/components/ContactForm.jsx` (comments in that file).

## Future store

- Product images: add `image` paths in `products.js` and place files in `public/images/`
- Pricing & cart: extend product objects and swap Enquire buttons in `ProductCard.jsx`
