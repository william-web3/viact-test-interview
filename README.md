## 📓 Pre-Requisites

List all the pre-requisites the system needs to develop this project.

1. A Linux host
2. Docker: 24.0.6+
3. Docker Compose: 2.23.0+
4. The deployment machine have access to the Internet, so the hosts can communicate with each other;
5. Network connection to Internet to pull container images from Docker Hub.

## 🔩 Development Environment
1. Server
  - Go to apps/api-server
  - Create a .env file using example.env

2. Frontend
  - Go to apps/web
  - Create a .env file using example.env

## 🚀 Deployment

1. Server
- Go to apps/api-server and run this command
```bash
$ docker compose up -f

2. Frontend
- Go to apps/web and run this command
```bash
$ docker compose up -f


3. In case you want to run both server and frontend in a same server and do not care about docker networks