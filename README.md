# Mohamed Reda Benlakehal — Portfolio

Personal portfolio of **Mohamed Reda Benlakehal**, Software Engineer — Full
Stack (backend-focused, Node.js & AWS), Paris, France.

Fast, responsive, accessible single-page site. Plain HTML/CSS/JS — no build
step, no dependencies. Dark & light themes, working contact form, SEO + social
preview, GitHub-Pages ready.

## Run locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
# or:  npx serve .
```

## Customize

- `index.html` — all content (text, projects, links).
- `style.css` — colors are CSS variables at the top; edit `--accent`, or the
  `[data-theme="dark"]` / `[data-theme="light"]` blocks to re-theme.
- `script.js` — theme toggle, mobile menu, scrollspy, contact form.

### Add a real photo
In `index.html`, replace the `about__portrait-img` div with:
`<img src="me.jpg" alt="Mohamed Reda Benlakehal" />` and drop `me.jpg` in the
folder. Also swap `og-image.png` if you want a custom social preview.

## Enable the contact form (2 min)
1. Sign up free at https://formspree.io and create a form.
2. Copy your form ID (looks like `xdorwkez`).
3. In `index.html`, replace `YOUR_FORM_ID` in the `<form action=...>` with it.

Until then the form shows a friendly "add your ID" note instead of sending.

## Enable analytics (optional)
In `index.html` `<head>` there's a commented ANALYTICS block. Uncomment one:
- **GoatCounter** (free, privacy-friendly): sign up, add your `data-goatcounter` URL.
- **Google Analytics 4**: paste your `G-XXXXXXX` measurement ID.

## Deploy on GitHub Pages
1. Push to GitHub (repo already contains an initial history).
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick `main` / `/ (root)`, save.
3. Live at `https://<username>.github.io/portfolio/` in ~1 minute.

The `.nojekyll` file is included so Pages serves files as-is.

## Custom domain (optional)
1. Buy a domain (e.g. `benlakehal.dev` via Namecheap, Porkbun, OVH…).
2. Create a file named `CNAME` (no extension) containing just your domain, e.g.
   `benlakehal.dev`, and commit it.
3. At your registrar, add DNS records pointing to GitHub Pages:
   - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - or a `CNAME` record for `www` → `<username>.github.io`
4. In **Settings → Pages**, set the custom domain and enable **Enforce HTTPS**.

After adding a domain, update the absolute URLs in `index.html` (og:url,
canonical, sitemap) to match.

## Contact
- LinkedIn: https://www.linkedin.com/in/mohamed-reda-benlakehal
- GitHub: https://github.com/RedaBenlakehal

## License
MIT — see [LICENSE](LICENSE).
