# PeopleAnalyticsLab – Static Presentation (GitHub Pages)

This repository contains a static, multi-page version of the PeopleAnalyticsLab strategic presentation.

## Structure
- `index.html` – Title page
- `executive-summary.html` – Executive Summary
- `problem-market.html` – Problem & Market
- `solution.html` – Solution Overview
- `modules.html` – Analytics Modules
- `tiers.html` – Service Tiers
- `enablement.html` – Strategic Enablement
- `competitive.html` – Competitive Positioning
- `gtm.html` – Go-to-Market Strategy
- `financials.html` – Financial Projections
- `scaling.html` – Organizational Scaling
- `assets/style.css` – Shared styles
- `.nojekyll` – Disables Jekyll processing on GitHub Pages

## Publish on GitHub Pages
1. Create a new GitHub repository (public is easiest).  
   - For a **user site**: name it `<your-username>.github.io` and push these files to the default branch.  
   - For a **project site**: any repo name works. Push these files, then go to **Settings → Pages** and set **Source** to `Deploy from a branch`, choose the branch and root folder (or `/docs` if you move files there).

2. Commit & push all files.

3. If using a project site, open **Settings → Pages** and ensure the site is enabled. Your site will be available at the URL GitHub provides.

---

To add more pages, duplicate any HTML file, change the `<title>`, the `<h2>` heading, and update the nav links if you change ordering.
