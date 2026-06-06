# Google Drive / Colab notebook link setup

The public tutorial pages use `data-colab-path="..."` attributes in the HTML, but the actual link generation happens in:

```text
assets/cvr-pages.js
```

At the very top of that file, fill in the `window.CVR_COLAB_DRIVE_LINKS` object.

## Where to paste links

Replace the blank string for each notebook with the Google Drive or Colab link for the instructor-controlled copy.

Accepted formats:

```text
https://colab.research.google.com/drive/FILE_ID
https://drive.google.com/file/d/FILE_ID/view?usp=sharing
https://drive.google.com/open?id=FILE_ID
```

Example:

```js
window.CVR_COLAB_DRIVE_LINKS = window.CVR_COLAB_DRIVE_LINKS || {
  "anns/AlexNet_demo.ipynb": "https://colab.research.google.com/drive/PASTE_FILE_ID_HERE",
  "anns/Facial_emotion.ipynb": "https://drive.google.com/file/d/PASTE_FILE_ID_HERE/view?usp=sharing",
  "anns/obj_2afc.ipynb": "",
  ...
};
```

If a value is left blank, that Colab button falls back to the notebook stored in the GitHub repo.

## Optional shared folder link

If you want to keep a single visible/shared folder link in the future, paste it here:

```js
window.CVR_SHARED_NOTEBOOK_FOLDER_URL = "https://drive.google.com/drive/folders/PASTE_FOLDER_ID_HERE?usp=sharing";
```

This is optional. The Colab buttons still need individual notebook links if you want each button to open a specific Drive-controlled notebook.

## Current notebook keys

```js
"anns/AlexNet_demo.ipynb": "",
"anns/Facial_emotion.ipynb": "",
"anns/obj_2afc.ipynb": "",
"anns/draw_2afc.ipynb": "",
"anns/ratings.ipynb": "",
"anns/n_back.ipynb": "",

"psychophysics/extract_2afc_results.ipynb": "",
"psychophysics/extract_ratings.ipynb": "",
"psychophysics/extract_n_back_results.ipynb": "",
"psychophysics/make_2afc_html_lines.ipynb": "",
"psychophysics/make_ratings_html_lines.ipynb": "",
"psychophysics/make_n_back_html_lines.ipynb": "",

"manipulate_stimuli.ipynb": "",
"compare_humans_vs_anns.ipynb": ""
```

## Important Drive sharing setting

For each notebook in Google Drive, set sharing so students can open it:

```text
General access → Anyone with the link → Viewer
```

Students can then use:

```text
File → Save a copy in Drive
```

inside Colab if they need their own editable version.
