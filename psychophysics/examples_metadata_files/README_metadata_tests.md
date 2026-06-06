# Dummy metadata files for testing

These files are examples students can use to test the metadata-to-HTML scripts.

## metadata_2afc.csv

Use this for the 2AFC task.

Columns:
- image_file: image file name
- image_idx: image number
- correct_choice: correct class index

Class list:
0 = bear
1 = elephant
2 = person
3 = car
4 = dog
5 = apple
6 = chair
7 = plane
8 = bird
9 = zebra

The 2AFC script will use correct_choice to create:
- val
- ch1
- ch2
- correct_choice

## metadata_rating.csv

Use this for the Rating task.

Columns:
- image_file
- image_idx

The Rating script will randomize the image order and create:
- val

## metadata_nback.csv

Use this for the N-Back task.

Columns:
- image_file
- image_idx

The N-Back script will create:
- val
- correct

For N-Back:
0 = Novel
1 = Repeated
