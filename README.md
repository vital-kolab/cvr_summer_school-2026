# CVR Summer School 2026 — Student Projects

This repository is a GitHub Pages-ready tutorial workspace for undergraduate students attending the **CVR Summer School 2026**.

It contains browser-based psychophysics experiments, example images, example data, Jupyter notebooks, and artificial neural network tutorials. The root `index.html` file is the student-facing tutorial navigator.

## Student entry point

After GitHub Pages is enabled, students should start from:

```text
https://<your-github-username>.github.io/<repo-name>/
```

From the landing page, students can:

- open the psychophysics and ANN tutorial pages;
- run the jsPsych tasks directly in the browser;
- launch every `.ipynb` notebook in Google Colab;
- find the relevant image, data, and result folders.

## Repository structure

```text
cvr-summer-school-2026/
|
|-- index.html                         # Main GitHub Pages tutorial hub
|-- assets/                            # Shared styling and Colab-link logic
|-- psychophysics/                     # Online behavioral experiments and data extraction notebooks
|   |-- tutorial.html                  # Psychophysics tutorial page
|   |-- tasks/                         # Browser-based jsPsych tasks
|   |-- data/                          # Example raw and extracted behavioral CSV files
|   |-- examples_metadata_files/        # Example CSV templates for making tasks
|   |-- extract_*.ipynb                 # Data extraction notebooks
|   |-- make_*_html_lines.ipynb         # Metadata-to-task helper notebooks
|
|-- anns/                              # Artificial neural network tutorials
|   |-- tutorial.html                  # ANN tutorial page
|   |-- *.ipynb                        # Model notebooks
|   |-- results/                       # Example model output CSV files
|   |-- utils.py                       # Shared helper code for notebooks
|
|-- images/                            # Stimulus and label images
|-- manipulate_stimuli.ipynb           # Optional stimulus manipulation notebook
|-- compare_humans_vs_anns.ipynb       # Human-vs-ANN comparison notebook
|-- .github/workflows/pages.yml        # Optional GitHub Actions Pages deployment
|-- .nojekyll                          # Ensures static files are served as-is
```

## Main folders

### Psychophysics

The `psychophysics/` folder contains online experiments made with **jsPsych**.

| Task paradigm | What the participant does | Task file |
|---|---|---|
| 2AFC | Chooses between two answers | `psychophysics/tasks/obj_2afc.html`, `psychophysics/tasks/draw_2afc.html` |
| Rating | Moves a slider to give a score | `psychophysics/tasks/ratings.html` |
| N-Back | Says whether an image is new or repeated | `psychophysics/tasks/n_back.html` |

To test new images, open the relevant task file and look for:

```javascript
// ===== STUDENTS: EDIT THIS SECTION =====
```

That section tells students what to change. More detailed instructions are provided in `psychophysics/tutorial.html`.

### Artificial neural networks

The `anns/` folder contains tutorials for artificial neural networks.

These files show how to:

- load a model;
- give images to the model;
- get model outputs;
- compare model behavior to human behavior.

The landing page automatically creates Google Colab links for each notebook once the site is hosted on GitHub Pages.

## GitHub Pages setup

Recommended instructor workflow:

1. Create a new GitHub repository, for example `cvr-summer-school-2026`.
2. Upload all files in this folder to the repository root.
3. Commit to the `main` branch.
4. Go to **Settings → Pages**.
5. Select either:
   - **GitHub Actions** as the source, using the included `.github/workflows/pages.yml`, or
   - **Deploy from a branch**, then choose `main` and `/ (root)`.
6. Open the published Pages URL.
7. Test the four psychophysics tasks and at least one Colab button.

The Colab links are generated from the GitHub Pages URL. If testing locally, use the repository selector on the landing page to enter `owner/repo` and branch name.

## Important notes for students

- Keep folder names unchanged. The tasks and notebooks use relative paths to find images and data.
- Sign into Google before launching notebooks in Colab.
- At the end of each jsPsych task, download the CSV file when prompted.
- Use the matching extraction notebook for each task type before comparing human data with ANN outputs.

## People

Centre for Vision Research, York University

Organizing committee:

- Kohitij Kar (Chair)
- Robert Alison (CVR Director)
- Eline Kupers
- Richard Murray
- Irit Printz (CVR Coordinator)

Teaching assistants:

- Sabine Muzellec (lead)
- Xue Teng

## License

Copyright © 2026 ViTA Lab, Centre for Vision Research, York University.

Educational/tutorial content is licensed under CC BY-NC 4.0.  
Code, HTML, JavaScript, CSS, and notebooks are licensed under the MIT License.

Please cite or acknowledge:

**CVR Summer School 2026 Tutorial Materials, ViTA Lab, Centre for Vision Research, York University.**

See `LICENSE.md` for details.
