# Thunder Lake Systems — Portfolio Site

Client-facing portfolio site for a workflow modernization consulting practice.
Static HTML/CSS/JS — no build step, no dependencies, no framework.

## Structure

```
ThunderLakeSystems/
├── index.html           Homepage
├── case-studies.html    Case study listing
├── services.html        Services overview
├── about.html           About page
├── contact.html         Contact + form
├── 404.html             Custom 404 page
├── css/
│   └── styles.css       All styles (design tokens + components)
└── js/
    ├── components.js    Shared nav + footer (injected at runtime)
    └── main.js          Mobile nav, active link, form handling
```

All internal links and asset paths are relative — the site works correctly
when served from a GitHub Pages project subdirectory (e.g. `username.github.io/repo-name/`).

---

## Deploy to GitHub Pages

### 1. Create a GitHub repository

Go to https://github.com/new and create a new **public** repository.
Leave it empty (no README, no .gitignore — those are already here).

### 2. Initialize git and push

Open a terminal in this folder and run:

```bash
git init
git add .
git commit -m "Initial site build"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your GitHub username and the
repository name you just created.

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

GitHub will build and publish the site. It usually goes live within 1–2 minutes.
Your URL will be: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

> **Note:** The `.nojekyll` file in this repo tells GitHub Pages to skip Jekyll
> processing. This is required — without it, CSS and JS in subdirectories may
> not be served correctly.

---

## Making Changes

Edit files locally, then push:

```bash
git add .
git commit -m "Describe what changed"
git push
```

GitHub Pages automatically rebuilds on every push to `main`.

---

## Custom Domain (Optional)

To use a custom domain (e.g. `thunderlakesystems.com`):

1. Add a file named `CNAME` to the project root containing only your domain:
   ```
   thunderlakesystems.com
   ```
2. Push the change to GitHub
3. In your domain registrar, point your DNS to GitHub Pages:
   - For an apex domain: add `A` records pointing to GitHub's IPs
   - For a `www` subdomain: add a `CNAME` record pointing to `YOUR-USERNAME.github.io`
4. In GitHub Settings → Pages, set your custom domain

Full instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
