# Psychophysics tasks

This folder contains simple online experiments made with **jsPsych**.

---

## What is inside this folder?

```text
psychophysics/
|
|-- tasks/                          # The experiment files that students run
|   |-- obj_2afc.html               # 2AFC paradigm with object images
|   |-- draw_2afc.html              # 2AFC paradigm with drawing images
|   |-- ratings.html                # Rating paradigm
|   |-- n_back.html                 # N-Back paradigm
|   |-- utils.js                    # Shared helper code used by the tasks
|
|-- tutorial.html                   # Step-by-step explanation of the code and outline of the tutorial
|
|-- data/                           # Example output files
|
|-- example_metadata_files/         # Example metadata CSV files 
|
|-- make_2afc_html_lines.py         # Makes val, ch1, ch2, correct_choice
|-- make_rating_html_lines.py       # Makes randomized val
|-- make_nback_html_lines.py        # Makes val, correct, ch1, ch2
|-- manipulate_stimuli.ipynb        # Creates altered images: blur, noise, contrast, etc.
|
|-- extract_2afc_results.ipynb      # Cleans 2AFC data
|-- extract_ratings.ipynb           # Cleans rating data
|-- extract_n_back_results.ipynb     # Cleans N-Back data
```

---

## How to navigate this folder

Start with the files in this order:

### 1. Start with the tutorial

Open:

```text
tutorial.html
```

This is the main file to read first.

It explains:

- what happens during one trial,
- what the different screens are,
- what students can change,
- how to use their own images,
- how to create metadata files,
- how to generate the lines for the HTML task files,
- how to extract the data after the experiment.

---

### 2. Choose a task paradigm

Then choose the task paradigm you want to use:

| If you want to... | Use this paradigm | Open this file |
|---|---|---|
| Ask participants to choose between two answers | 2AFC | `tasks/obj_2afc.html` or `tasks/draw_2afc.html` |
| Ask participants to give a score on a slider | Rating | `tasks/ratings.html` |
| Ask participants whether an image is new or repeated | N-Back | `tasks/n_back.html` |

---

### 3. Look at the example metadata files

Open:

```text
example_metadata_files/
```

These files show how to describe your images.

The metadata file tells the task:

- which images to show,
- what the image index is,
- what the correct answer is, if needed,
- which images should be repeated, for N-Back.

---

### 4. Generate the HTML lines

After creating your metadata file, run the script for your paradigm:

| Task paradigm | Script |
|---|---|
| 2AFC | `make_2afc_html_lines.py` |
| Rating | `make_rating_html_lines.py` |
| N-Back | `make_nback_html_lines.py` |

The script will print lines such as:

```javascript
let val = [...];
```

Copy those lines into the task file under:

```javascript
// ===== STUDENTS: EDIT THIS SECTION =====
```

---

### 5. Run the task

Open the task HTML file in a browser.

For example:

```text
tasks/ratings.html
```

Run through the task once to make sure:

- the images load,
- the instructions make sense,
- the buttons or slider work,
- the data file is saved.

---

### 6. Extract the data

After collecting data, use the extraction notebook for your paradigm:

| Task paradigm | Extraction notebook |
|---|---|
| 2AFC | `extract_2afc_results.ipynb` |
| Rating | `extract_ratings.ipynb` |
| N-Back | `extract_n_back_results.ipynb` |

These notebooks turn the raw jsPsych CSV files into cleaner CSV files that are easier to analyze.

---

## Task paradigms

### 1. 2AFC

**2AFC** means **two-alternative forced choice**.

On each trial, the participant sees an image and chooses between two possible answers.

Files using this paradigm:

- `tasks/obj_2afc.html`
- `tasks/draw_2afc.html`

Use this when you want to ask:

> “Which of these two options matches the image?”

---

### 2. Rating

In a **Rating** task, the participant sees an image and moves a slider.

File using this paradigm:

- `tasks/ratings.html`

Use this when you want to ask:

> “How much does this image have this property?”

For example:

- How trustworthy does this face look?
- How pleasant is this image?

---

### 3. N-Back

In an **N-Back** task, the participant decides whether the current image is new or repeated.

File using this paradigm:

- `tasks/n_back.html`

Use this when you want to ask:

> “Have you seen this image before in this experiment?”

---

## Simple navigation summary

```text
tutorial.html
    ↓
choose a task paradigm
    ↓
look at example_metadata_files/
    ↓
create your own metadata CSV
    ↓
run the matching make_*_html_lines.py script
    ↓
paste the generated lines into the HTML task file
    ↓
run the task
    ↓
extract the data with the matching notebook
```
