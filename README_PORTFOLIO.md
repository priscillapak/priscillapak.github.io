# GitHub Portfolio Page (React, no-build)

This is a **static** portfolio page built with **React** but **without npm/tooling**, so it deploys cleanly to **GitHub Pages** even if your local Node/npm setup is broken.

## Local preview

Just open `index.html` in a browser.

If you want a local server:

- Python:
  ```bash
  cd github-portfolio-react
  python3 -m http.server 5173
  ```
  Then visit http://localhost:5173

## Deploy to GitHub Pages

### Option A (recommended): `username.github.io`

1. Create a repo named **`<your-username>.github.io`**.
2. Copy these files to the repo root (or push this folder as the repo).
3. In GitHub: **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**

### Option B: project repo

If you deploy from a project repo, GitHub Pages will host at:
`https://<user>.github.io/<repo>/`

For that, set all links to be relative (this template already uses relative paths like `./styles.css`).

## Customize

Edit `src/main.jsx`:
- `data.links.github`, `data.links.linkedin`, `data.links.resume`, `data.links.email`
- Replace `data.projects` with real repos + 1–2 sentence outcomes

