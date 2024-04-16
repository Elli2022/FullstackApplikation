# JS 3 - School Assignment - First Fullstack MERN Application

## Overview
In this project, I built a fullstack application using the MERN stack (MongoDB, Express, React, Node.js). This comprehensive stack includes MongoDB and Redis for the database, Express and Node.js for the backend (including a gateway and microservices), and React for the frontend. The application supports user registration, login, token management, and ensures secure microservice operations behind a gateway. The backend also logs activities to monitor system failures, hacking attempts, and other irregularities.

### Features
- **User Registration Flow:**
  - Create a registration form in React.
  - Submit the form data through the Express gateway to the Node.js backend service.
  - Temporarily store new registrations in Redis cache until completion or timeout.
  - Register the user upon following the registration link, saving their details in MongoDB.

- **Authentication:**
  - Enable registered users to log in via a form.
  - Authenticate users against MongoDB through the microservice via the Express gateway.
  - On successful login, issue a JWT token to the client through the gateway.
  - The gateway manages the backend session with the token.
  - The client handles the frontend session with the token.

- **Session Handling:**
  - The gateway caches tokens in Redis temporarily.
  - The client maintains the token throughout the session.
  - Validate client tokens against the cached tokens for every secure request.

- **Welcome Page:**
  - Present a welcome page upon successful login, displaying user data from MongoDB.

- **Editing User Data:**
  - Provide users with the capability to edit their information.

### The VG (Pass with Distinction)
Unleashed my creativity to enhance the application with additional features, such as:
- Creating a blogging platform.

### Requirements
- The microservice must be session-based and secured through the Express gateway.
- MongoDB should be effectively utilized.

### Development Guidelines
- **DB Setup:** Configured MongoDB and Redis for storing user data and session caching.
- **Backend Development:** Implemented the backend with NodeJS and Express, ensuring the gateway and microservices are properly set up for handling requests, authentication, and logging.
- **Frontend Development:** Used React to build a user-friendly interface for registration, login, and displaying the welcome page.
- **Security:** Secured the application by managing sessions and tokens carefully, ensuring that all sensitive operations are protected.
- **Logging:** Implemented logging on the backend to monitor activities and identify potential issues.
