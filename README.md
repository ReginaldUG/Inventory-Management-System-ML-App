#  **Sales Forecasting With ML Model(XGBoost Regressor)**

This project is a lightweight prototype of an Inventory Management System Dashboard. It integrates a machine learning model for forecasting sales and visualizes the predictions in a simple, frontend dashboard.

The repository contains the frontend dashboard code and the Flask API backend used to fetch prediction stored in an AWS cloud database. The system uses a serverless architecture by leveraging AWS Services (Lambda, API Gateway, S3, and RDS) allowing prediction data to be queried without the need to manage a backend server.

##  System Architecture:


![Architecture Diagram](image.png)


##  Flask API Architecture:

![Flask API Architecture](https://github.com/user-attachments/assets/ce5739ca-6937-4ff8-94dd-f5cbecc9df67)


##  Here's how the system fits together:
1. Predictive Model runs on a local device and generates CSV prediction files
2. CSVs are uploaded to an AWS S3 bucket (acting as a staging area)
3. Upload to S3 triggers a Lambda function to insert predictions into AWS RDS NoSql database.
4. Flask API (hosted on AWS Lambda via API Gateway) retrieves prediction data.
5. Frontend Dashboard uses this API to fetch and present data to users.

## DEMO VIDEO
* Short Demo - [![Google Drive](https://img.shields.io/badge/Google%20Drive-Download-blue?logo=googledrive)](https://drive.google.com/file/d/11qtuy2ihZ3UqCfTa2libbMw2bvNhJ41W/view?usp=drive_link)
  
* Full Overview - [![Google Drive](https://img.shields.io/badge/Google%20Drive-Download-blue?logo=googledrive)](https://drive.google.com/file/d/1LssFO0nP6a3JRkufC_3JOWHCYYlRo60T/view?usp=drive_link)


**This repository includes:**
* Frontend Dashboard React Application Code to visualize predictions
* Flask API Backend to query data from RDS
* XGBoost Model Training code to forecast sales (runs on local system and is responsible for uploading to S3)
* CSV File for Business Historical data (This is the dataset the model is trained on)
* Lambda Function Code to readf CSV from S3 and insert into RDS.

The codes are included for reference and do not contain any sensitive AWS credentials.


