# Technical Test Backend - Boxful

---

## Overview

This API is designed to facilitate the creation and management of delivery orders for products. It allows users to submit input data such as name, collection address, destiny address, the products and other relevant information to save an order.

---

## Technologies

- <b>Language:</b> TypeScript
- <b>Framework:</b> NestJS
- <b>ODM:</b> Mongoose
- <b>Database:</b> MongoDB
- <b>Containers:</b> Docker
- <b>Documentation:</b> Swagger

--- 
## Features

- Create and Read operations for Order entity.
- Read operations for State entity.
- Database seeder for State entity.

---
## Prerequisites

- NodeJS (version 16.x or above).
- MongoDB or a MongoAtlas connection (not optional if you don't use Docker).
- Docker (optional if you want to dockerize the API and database).
- A package manager like npm.

---
## Installation

1. Clone the repository:
```
git clone https://github.com/fmel025/boxful-tech-test-backend.git
```
2. Navigate to the project directory:
```
cd boxful-tech-test-backend
```
3. Install dependencies:
```
npm install
``` 

---
## Running the application

1. Create a .env file and add the environment variables that are defined in the .env.example file, set their values and you can run the application:

<b>Note:</b> You should consider setting the <b>API_PORT</b> environment variable different to 3000 or the one defined in your frontend application if you run it locally.

### Using Docker

2. For this step you must have Docker installed.
3. Run the command:
```bash
# For a development environment
npm run start:docker:dev

# For a production environment
npm run start:docker:prod
```

<b>Note:</b> If you want to stop all your containers completely use the following command:
```bash
docker-compose down
```

<b>Note:</b> If you use Docker, your database host in the .env file must coincide with the <b>mongo</b> service name inside the DB_URI, in this case its name is mongo, like the following example:
```
DB_URI=mongodb://youruser:yourpassword@mongo:27017/db?authSource=admin
```

### Run locally

2. Execute the following command:
```bash
# For development environment
npm run start

# For development and watch mode:
npm run start:dev

# For a production environment
npm run build
npm run start:prod
```

---
## After installation and running

Before sending the API to production or development, you should use the <b>States Seeder</b> to generate a list of states that you want to use in your frontend app.

For doing this, in your navigator, or in your API documentation, you should execute the following endpoint:

```bash
GET localhost:{your_api_port}/api/v1/seeds/states
```

After that you can check using the API endpoints that the states have been created inside the database.

---
## API Documentation

To access the API documentation, navigate to {host}:{port}/docs in your browser. This will provide you with a detailed overview of all available endpoints, required parameters, and expected responses.

Or if you are not using Docker you can find the documentation here to test the API: [Swagger Documentation](http://localhost:8080/docs).

<b>NOTE:</b> Remember to access only when the server is running.