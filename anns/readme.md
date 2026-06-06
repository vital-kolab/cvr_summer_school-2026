# ANN Model Tutorial

This folder shows how to test artificial neural networks as if they were experimental subjects.

Humans were already tested on psychophysics tasks somewhere else.  
Here, we now ask:

> Can models do the same tasks as humans?

The goal is to run models on task images and save their responses in CSV files.

---

## What is the idea?

Usually, models are trained to do a standard task.

For example:

```text
image → model → prediction
```

A model might look at an image and predict:

```text
dog, car, face, happy, sad, etc.
```

This is useful, but it is not always the same format as the human task.

So in this tutorial, we do two things:

1. First, look at what models normally do.
2. Then, adjust the model output so it matches the human task.

---

## Demo notebooks

These notebooks show how models are normally used:

```text
AlexNet_demo.ipynb
Facial_emotion.ipynb
```

They answer simple questions like:

```text
What object does the model see?
What emotion does the model predict?
```

These notebooks are just demos.

They help you understand:

```text
image → model → output
```

---

## Task-matched notebooks

These notebooks test models in the same kind of format as the human tasks:

```text
obj_2afc.ipynb
draw_2afc.ipynb
ratings.ipynb
n_back.ipynb
```

The goal is:

```text
task images → model → task-like response → CSV
```

---

## What each notebook gives

| Notebook | What the model does | Output CSV |
|---|---|---|
| `obj_2afc.ipynb` | Tests object recognition in a 2-choice task | `results/obj_2afc.csv` |
| `draw_2afc.ipynb` | Tests drawing recognition in a 2-choice task | `results/draw_2afc.csv` |
| `ratings.ipynb` | Gives one rating score per image | `results/ratings.csv` |
| `n_back.ipynb` | Gives one memorability score per image | `results/n_back.csv` |

---

## What is saved?

Each notebook saves a CSV file with one row per image.

For 2AFC tasks:

```text
image_name, image_index, accuracy
```

For rating or memorability tasks:

```text
image_name, image_index, score
```

These files are the model responses.

They can later be compared with human responses.

---

## What can you change?

You can change:

```text
the model
the image folder
the image condition
```

For example, you can test:

```text
AlexNet
ResNet
ConvNeXt
original images
blurred images
noisy images
drawings
```

Then save a new CSV file and compare the results.

---

## Main workflow

```text
1. Open a demo notebook
2. See what a model normally outputs
3. Open a task-matched notebook
4. Run the model on task images
5. Convert the output into the task format
6. Save the model responses as a CSV
7. Compare the results from different models, or the same model under different conditions
```

