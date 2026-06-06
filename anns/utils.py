import torchvision as tv
from torch.utils.data import DataLoader, Dataset, TensorDataset
from torchvision import datasets, models, transforms
import os
import torch

im_transforms = transforms.Compose([
    transforms.Resize((224, 224)),   # Resize the image to 224x224 instead of cropping
    transforms.Lambda(lambda x: (x / 255.0)),  # Rescale by dividing by 255
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),  # Normalize
    ])

im_transforms_ratings = transforms.Compose([
    transforms.ToTensor(),
    transforms.Resize((224, 224)),   # Resize the image to 224x224 instead of cropping
    transforms.Lambda(lambda x: (x / 255.0)),  # Rescale by dividing by 255
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),  # Normalize
    ])

def sort_images(x):
    xs = []
    for im in x:
        t = int(os.path.splitext(os.path.basename(im))[0].replace('im', ''))
        xs.append(t)
    return list(sorted(xs))


def make_val_loader(image_folder: str, batch_size: int):
    indices = sort_images(os.listdir(image_folder))
    # load all the images and store as a numpy array
    images = []
    for i in range(len(indices)):
        img_path = os.path.join(image_folder, f'im{indices[i]}.png')
        img = tv.io.read_image(img_path)          

        if img.shape[0] == 1:
            img = img.repeat(3, 1, 1)

        img = im_transforms(img)                      # apply transforms here

        # print(img.shape)
        images.append(img)

    # stack into a single tensor: [N, C, H, W]
    images = torch.stack(images, dim=0)

    data_loader = DataLoader(TensorDataset(images), batch_size=batch_size, shuffle=False)
    
    return data_loader



import torch
import torch.nn as nn

class MemNet(nn.Module):
    def __init__(self):
        super(MemNet, self).__init__()
        self.conv1 = nn.Conv2d(3, 96, kernel_size=(11,11), stride=(4,4))
        self.relu1 = nn.ReLU()
        self.pool1 = nn.MaxPool2d(kernel_size=3, stride=2, padding=0, dilation=1, ceil_mode=True)
        self.norm1 = nn.LocalResponseNorm(5, alpha=0.0001, beta=0.75, k=1)
        self.conv2 = nn.Conv2d(96, 256, kernel_size=(5, 5), stride=(1, 1), padding=(2, 2), groups=2)
        self.relu2 = nn.ReLU()
        self.pool2 = nn.MaxPool2d(kernel_size=3, stride=2, padding=0, dilation=1, ceil_mode=True)
        self.norm2 = nn.LocalResponseNorm(5, alpha=0.0001, beta=0.75, k=1)
        self.conv3 = nn.Conv2d(256, 384, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
        self.relu3 = nn.ReLU()
        self.conv4 = nn.Conv2d(384, 384, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), groups=2)
        self.relu4 = nn.ReLU()
        self.conv5 = nn.Conv2d(384, 256, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), groups=2)
        self.relu5 = nn.ReLU()
        self.pool5 = nn.MaxPool2d(kernel_size=3, stride=2, padding=0, dilation=1, ceil_mode=True)
        self.fc6 = nn.Linear(in_features=9216, out_features=4096, bias=True)
        self.relu6 = nn.ReLU()
        self.drop6 = nn.Dropout(0.5)
        self.fc7 = nn.Linear(in_features=4096, out_features=4096, bias=True)
        self.relu7 = nn.ReLU()
        self.drop7 = nn.Dropout(0.5)
        self.fc8_euclidean = nn.Linear(in_features=4096, out_features=1, bias=True)

    def forward(self, x):
        x = self.conv1(x)
        x = self.relu1(x)
        x = self.pool1(x)
        x = self.norm1(x)
        x = self.conv2(x)
        x = self.relu2(x)
        x = self.pool2(x)
        x = self.norm2(x)
        x = self.conv3(x)
        x = self.relu3(x)
        x = self.conv4(x)
        x = self.relu4(x)
        x = self.conv5(x)
        x = self.relu5(x)
        x = self.pool5(x)
        x = x.view(x.shape[0], -1)
        x = self.fc6(x)
        x = self.relu6(x)
        x = self.drop6(x)
        x = self.fc7(x)
        x = self.relu7(x)
        x = self.drop7(x)
        x = self.fc8_euclidean(x)
        return x
