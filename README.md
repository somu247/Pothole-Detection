<H1 align="center">YOLOv8 Image Segmentation & Pothole Detection</H1>

## Google Colab File Link (A Single Click Solution)
The google colab file link for yolov8 segmentation and tracking is provided below, you can check the implementation in Google Colab, and its a single click implementation
,you just need to select the Run Time as GPU, and click on Run All.

[`Google Colab File`](https://colab.research.google.com/drive/17SLXw-wdHG2syQhLSHH5r5_rkZx5poo0)


## Object Segmentation and Tracking (ID + Trails)  using YOLOv8 on Custom Data

<h2>Clone the repository</h2>

```
!git clone https://github.com/somu247/pothole_detection_yolov8.git
```
<h2>Goto the cloned folder</h2>

```
cd pothole_detection_yolov8
```
<h2>Install the Dependencies</h2>

```
!pip install ultralytics
```
```
!pip install roboflow
```
```
!pip install fastapi kaleido python_multipart uvicorn
```
<h2>Importing YOLO and a roboflow workspace for Object Detection</h2>

```
from roboflow import Roboflow
rf = Roboflow(api_key="{the api key}")
project = rf.workspace("{name of workspace}").project("object-detection-bounding-box-ftfs5")
dataset = project.version(1).download("yolov5")
```

<h2>Downloading the Datasets From The Google Drive</h2> 

[`Pothole Detection Dataset`](https://drive.google.com/drive/folders/1Bt1ghpewGpPnX696u-TEHaUCrH85AKtw)

<h2>Downloading a Demo Video from the Google Drive</h2>

[`Demo Video`](https://drive.google.com/file/d/1xDzURxmF6OWQWc2RIkn_0PbSFZOqhnY8/view?usp=drive_link)

<h2>My roboflow workspace containing the pothole dataset</h2>

[`Roboflow Workspace`](https://app.roboflow.com/vit-76kid/pothole-detection-project-3yiqt/1)

Run the code with mentioned command below.
- For training the data
```
!yolo task=detect mode=train model=yolov8m.pt data={dataset.location}/data.yaml epochs={number of epochs} imgsz=640
```
- For yolov8 segmentation + Tracking & prediction
```
!yolo task=detect mode=predict model={HOME}/runs/detect/train/weights/best.pt conf=0.25 source='/content/drive/MyDrive/demo.mp4'
```

