# Repository rules

## Git
- Always commit and push directly to `main` (`git push origin main`). Do not create feature branches or pull requests unless asked.
- Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it via FTP. Only push work that builds (`cd frontend && npm run build`).
- Commit author must be **devsynx**:
  - `git config user.name "devsynx"`
  - `git config user.email "242815470+devsynxoffical@users.noreply.github.com"`
- Do not add AI attribution lines (`Co-Authored-By`, session links, etc.) to commit messages.

## Project
- Site source: `frontend/` (Vite + React + TypeScript).
- SEO / AEO / GEO setup and roadmap: `frontend/SEO-AEO-GEO.md`.
- New pages must also be added to `frontend/src/seo/routes.ts` (sitemap, prerender, llms.txt).
