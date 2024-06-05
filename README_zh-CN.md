# kFind-Docker
[English](README.md) | 简体中文

原项目地址：[k-Find](https://github.com/KMind-Inc/k-Find)

## 特性
新一代搜索引擎，汇聚深度和速度的搜索引擎，为您提供一触即达的信息体验。
- 普通模式：快速精准，即搜即得，满足您的日常信息需求。
- 深度模式：深入挖掘，全面详尽，为专业需求提供权威的深度资讯。

## 先决条件

在开始之前，请确保您的系统上安装了以下软件：

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## 构建和运行项目

### 使用Docker Compose

1. **克隆仓库**：

   ```sh
   https://github.com/L4Walk/kfind-docker.git

2. **获取AK**
    访问KMind进入kOS控制台，找到API设置，或者直接访问URL: https://kmind.com/workbench/act_list 点击左下角个人头像进入API设置

    ![ak](https://github.com/KMind-Inc/k-Find/blob/main/assets/ak.png?raw=true)


3. **配置`./server/.env`文件** 
- 文件示例如下
    ```shell
    PORT = 8081
    WORKERS = 1
    API_URL = https://api.kmind.com/kmind/api/act
    ACCESS_KEY = 
    ACCESS_SECRET_KEY = 
    ```
    
4. **创建和启动容器**  
在项目根目录下执行以下命令来构建和运行服务：

    ```sh
    docker-compose up --build
    ```

5. **访问应用**   
前端应用将运行在 http://localhost:3000  
后端应用将运行在 http://localhost:8000


## 联系本人
本人志愿维护，技术不精，若有bug，请多多包涵*_*

## 联系原项目

原项目由KMind团队维护, 你可以通过如下方式联系他们：
* 邮箱: developer@kmind.com
