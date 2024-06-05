# kFind-Docker
English | [简体中文](README_zh-CN.md)

Original project address: [k-Find](https://github.com/KMind-Inc/k-Find)

## Features
A new generation of search engine that combines depth and speed to provide you with an information experience that is just one touch away.
- Normal Mode: Fast and accurate, providing immediate results to meet your daily information needs.
- Deep Mode: In-depth exploration, comprehensive and detailed, providing authoritative in-depth information for professional needs.

## Prerequisites

Before you begin, make sure you have the following software installed on your system:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Building and Running the Project

### Using Docker Compose

1. **Clone the Repository**:

   ```sh
   https://github.com/L4Walk/kfind-docker.git 
   ```

2. **Get the AK**
   Access KMind and enter the kOS console to find the API settings, or directly visit the URL: https://kmind.com/workbench/act_list and click on the profile icon at the bottom left to enter the API settings.

   ![ak](https://github.com/KMind-Inc/k-Find/blob/main/assets/ak.png?raw=true) 

3. **Configure the `./server/.env` file**
   - An example file is as follows:
     ```shell
     PORT = 8081
     WORKERS = 1
     API_URL = https://api.kmind.com/kmind/api/act 
     ACCESS_KEY = 
     ACCESS_SECRET_KEY = 
     ```

4. **Create and Start Containers**  
Execute the following command in the project root directory to build and run the service:

   ```sh
   docker-compose up --build
   ```

5. **Access the Application**  
The front-end application will run at http://localhost:3000  
The back-end application will run at http://localhost:8000

## Contact Me
I am voluntarily maintaining this project, and my technical skills may not be perfect, so please be forgiving if there are any bugs*_*

## Contact the Original Project

The original project is maintained by the KMind team, and you can contact them through the following methods:
* Email: developer@kmind.com