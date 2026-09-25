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

![Home Screen](images/home-screen.png)

### 2.2 Login / Registration Screen

<!-- Add a screenshot of the Login/Register page at images/login-screen.png. -->

![Login / Registration Screen](images/login-screen.png)

### 2.3 Scan / Upload Screen

<!-- Add a screenshot showing a user selecting a plant leaf image at images/scan-screen.png. -->

![Scan Screen](images/scan-screen.png)

### 2.4 Result Screen

<!-- Add a screenshot of the disease prediction/result page at images/result-screen.png. -->

![Result Screen](images/result-screen.png)

### 2.5 History Screen

<!-- Add a screenshot of the scan history page at images/history-screen.png. -->

![History Screen](images/history-screen.png)

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
