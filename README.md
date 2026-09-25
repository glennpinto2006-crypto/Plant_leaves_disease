# AI-Based Plant Leaf Disease Detection System

## 1. Overview

The **AI-Based Plant Leaf Disease Detection System** is a web-based application designed to identify plant leaf diseases using artificial intelligence and image classification.

The system allows a user to upload an image of a plant leaf. The image is processed and passed to a trained AI model, which predicts the most probable disease class and provides a confidence value.

The project combines a web-based frontend with a Python Flask backend and a TensorFlow/Keras-based machine learning model.

### Problem Statement

Plant diseases can significantly affect crop quality and productivity. Identifying diseases manually from leaf symptoms can require expert knowledge and can be time-consuming.

The proposed system aims to assist in identifying plant diseases automatically from leaf images using an AI-based image classification approach.

### Objectives

- To develop an AI-based plant leaf disease detection system.
- To classify plant leaf images into different disease categories.
- To apply supervised learning for image classification.
- To use a neural-network-based model for learning visual patterns.
- To provide the predicted disease and confidence value through a web interface.
- To develop a simple and user-friendly application for plant disease identification.

## 2. Application Screenshots

### 2.1 Home Screen

<!-- Add a screenshot of the website's Home page at images/home-screen.png. -->

![Home Screen](<img width="1897" height="912" alt="image" src="https://github.com/user-attachments/assets/36f27d13-03d9-4830-99c3-5ce808585efa" />
)



### 2.3 Scan / Upload Screen

<!-- Add a screenshot showing a user selecting a plant leaf image at images/scan-screen.png. -->

![Scan Screen](<img width="1901" height="908" alt="image" src="https://github.com/user-attachments/assets/28ae77b4-9def-4264-b410-a83a3e2e849c" />
)

### 2.4 Result Screen

<!-- Add a screenshot of the disease prediction/result page at images/result-screen.png. -->

![Result Screen](<img width="1901" height="907" alt="image" src="https://github.com/user-attachments/assets/1009c469-14b1-4457-80e1-08b53e78811e" />
)

### 2.5 History Screen

<!-- Add a screenshot of the scan history page at images/history-screen.png. -->

![History Screen](<img width="1901" height="912" alt="image" src="https://github.com/user-attachments/assets/cd9d976e-97dc-46d5-8408-9cbd0d3d3f4e" />
)

## 3. Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript
- Responsive Web Interface

### Backend

- Python
- Flask
- Flask-CORS

### Artificial Intelligence / Machine Learning

- TensorFlow
- Keras
- NumPy
- Supervised Learning
- Neural Network-based Image Classification

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Google Colab

<!-- Remove Google Colab if it was not used for the final model. -->

## 4. System Architecture

The system follows a frontend-backend-AI architecture.

```text
			  ┌─────────────────────┐
			  │        USER         │
			  │ Upload Leaf Image   │
			  └──────────┬──────────┘
					 │
					 ▼
			  ┌─────────────────────┐
			  │      FRONTEND       │
			  │     HTML/CSS/JS     │
			  └──────────┬──────────┘
					 │
				 HTTP Request
					 │
					 ▼
			  ┌─────────────────────┐
			  │    FLASK BACKEND    │
			  │       app.py        │
			  └──────────┬──────────┘
					 │
					 ▼
			  ┌─────────────────────┐
			  │ IMAGE PREPROCESSING │
			  │ Resize: 128 × 128   │
			  │ Pixel Normalization │
			  └──────────┬──────────┘
					 │
					 ▼
			  ┌─────────────────────┐
			  │     AI MODEL        │
			  │  TensorFlow/Keras   │
			  │   Trained Model     │
			  └──────────┬──────────┘
					 │
					 ▼
			  ┌─────────────────────┐
			  │    CLASSIFICATION   │
			  │ Disease + Confidence│
			  └──────────┬──────────┘
					 │
					 ▼
			  ┌─────────────────────┐
			  │    RESULT PAGE      │
			  │ Display Prediction  │
			  └─────────────────────┘
```
