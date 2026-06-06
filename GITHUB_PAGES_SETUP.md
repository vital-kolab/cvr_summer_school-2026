# GitHub Pages setup guide

This repository is ready to be used as a static GitHub Pages site.

## Fast setup

1. Create a new GitHub repository.
2. Upload the complete folder contents to the repository root.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose one of these options:
   - **GitHub Actions**: use the included workflow at `.github/workflows/pages.yml`.
   - **Deploy from a branch**: choose `main` and `/ (root)`.
6. Visit the published Pages URL.

## What to test

- Root landing page: `index.html`
- Psychophysics tutorial: `psychophysics/tutorial.html`
- ANN tutorial: `anns/tutorial.html`
- Browser tasks:
  - `psychophysics/tasks/obj_2afc.html`
  - `psychophysics/tasks/draw_2afc.html`
  - `psychophysics/tasks/ratings.html`
  - `psychophysics/tasks/n_back.html`
- At least one Colab button from the landing page.

## How Colab links work

The site uses `assets/cvr-pages.js` to infer the GitHub repository from the GitHub Pages URL.

For a page hosted at:

```text
https://kohitij.github.io/cvr-summer-school-2026/
```

notebook buttons become links of the form:

```text
https://colab.research.google.com/github/kohitij/cvr-summer-school-2026/blob/main/path/to/notebook.ipynb
```

If the site is tested locally, use the repository fields on the landing page to set `owner/repo` and branch manually.

## Do not rename these folders

The tasks and notebooks rely on relative paths. Avoid renaming:

- `images/`
- `psychophysics/`
- `psychophysics/tasks/`
- `psychophysics/data/`
- `anns/`
- `anns/results/`
