# First Fullstack MERN Application

## Overview
This project is a fullstack application built using the MERN stack (MongoDB, Express, React, Node.js). The stack includes MongoDB and Redis for the database, Express and Node.js for the backend (including a gateway and microservices), and React for the frontend. The application supports user registration, login, token management, and ensures secure microservice operations behind a gateway. The backend also logs activities to monitor system failures, hacking attempts, and other irregularities.

### Features
- **User Registration Flow:**
  - Registration form created in React.
  - Form data submitted through the Express gateway to the Node.js backend service.
  - New registrations temporarily stored in Redis cache until completion or timeout.
  - Users register by following a registration link, saving their details in MongoDB.

- **Authentication:**
  - Users log in via a form.
  - Authentication against MongoDB through the microservice via the Express gateway.
  - On successful login, a JWT token is issued to the client through the gateway.
  - The gateway manages the backend session with the token.
  - The client handles the frontend session with the token.

- **Session Handling:**
  - The gateway caches tokens in Redis temporarily.
  - The client maintains the token throughout the session.
  - Client tokens validated against the cached tokens for every secure request.

- **Welcome Page:**
  - Displays user data from MongoDB upon successful login.

- **Editing User Data:**
  - Users can edit their information.

### Enhanced Features
Enhanced the application with additional features, such as:
- Creating a blogging platform.

### Requirements
- The microservice is session-based and secured through the Express gateway.
- Effective utilization of MongoDB.

### Development Guidelines
- **DB Setup:** Configured MongoDB and Redis for storing user data and session caching.
- **Backend Development:** Implemented the backend with NodeJS and Express, ensuring the gateway and microservices are properly set up for handling requests, authentication, and logging.
- **Frontend Development:** Used React to build a user-friendly interface for registration, login, and displaying the welcome page.
- **Security:** Secured the application by managing sessions and tokens carefully, ensuring that all sensitive operations are protected.
- **Logging:** Implemented logging on the backend to monitor activities and identify potential issues.
