
# Docker-Demo Project

This is a **Next.js** project using **Docker** and **Docker Compose**. It includes:

- A multi-stage Docker build for the Next.js application.
- A **PostgreSQL** database container for data storage.
- A **Redis** container for caching.

## Getting Started

To get started with this project, ensure you have Docker and Docker Compose installed on your machine.

### Prerequisites

- Docker
- Docker Compose

You can check if you have them installed using:

```bash
docker --version
docker-compose --version
```

## Project Structure

```
Docker-Demo/
├── .dockerignore
├── Dockerfile
├── docker-compose.yml
├── next.config.ts
├── package.json
├── package-lock.json
└── src/
```

- **Dockerfile**: Defines the Docker build process for the Next.js application.
- **docker-compose.yml**: Configures the services (frontend, PostgreSQL, Redis) and sets up networking.
- **next.config.ts**: Next.js configuration file.
- **src/**: Contains the Next.js application code.

## Configuration

### Dockerfile

This Dockerfile uses a multi-stage build:

1. **Base Image**: Uses `node:20-alpine3.19` for a lightweight Node.js environment.
2. **Build Stage**: Installs dependencies and builds the Next.js app.
3. **Production Stage**: Copies the build artifacts and installs only production dependencies.

### docker-compose.yml

This file sets up the following services:

- **front-end**: The Next.js application.
- **database**: A PostgreSQL container.
- **redis**: A Redis container for caching.

## Build and Run

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Docker-Demo
```

### 2. Create Environment Variables

Create a `.env` file in the project root and add the following:

```bash
# .env
POSTGRES_PASSWORD=postgres
POSTGRES_USER=postgres
POSTGRES_DB=postgres
NODE_ENV=production
```

### 3. Build and Start the Containers

Use Docker Compose to build and start the containers:

```bash
docker-compose up --build
```

This will:

- Build the Next.js app and start it on port **3000**.
- Start the PostgreSQL database on port **5431**.
- Start the Redis service on port **6379**.

### 4. Access the Application

Open your browser and navigate to:

```
http://localhost:3000
```

### 5. Stopping the Containers

To stop the running containers:

```bash
docker-compose down
```

## Useful Commands

### Rebuild the Containers

If you make changes to the code or dependencies, rebuild the containers:

```bash
docker-compose up --build
```

### View Running Containers

```bash
docker ps
```

### Connect to PostgreSQL Database

You can connect to the PostgreSQL database using:

```bash
psql -h localhost -p 5431 -U postgres -d postgres
```

### Access Redis CLI

To access the Redis CLI:

```bash
docker exec -it redis redis-cli
```

## Troubleshooting

- **Port Conflicts**: Ensure that ports **3000**, **5431**, and **6379** are not being used by other services on your machine.
- **Permission Issues**: If you encounter permission errors, try running the Docker commands with `sudo` (Linux users).

## License

This project is licensed under the MIT License.
