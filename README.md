# Good Eats — Diner Website Redesign Demo

Modern, mobile-first redesign demo for **Good Eats**, a neighborhood diner in Maspeth, Queens.

## Stack

- React + Vite
- Tailwind CSS v4
- Component-based architecture
- GitHub Actions → GitHub Pages (deploy from `gh-pages` branch)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages setup

After the first successful workflow run:

1. Open **Settings → Pages** on [github.com/AstridBonoan/GoodEats.io](https://github.com/AstridBonoan/GoodEats.io)
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Select branch **`gh-pages`** and folder **`/ (root)`**
4. Save

The site will be available at: `https://astridbonoan.github.io/GoodEats.io/`

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the app and publishes `dist/` to the `gh-pages` branch.
