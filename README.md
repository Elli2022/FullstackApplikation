# JS 3 - School Assignment - First Fullstack Application

## Overview
In this project, I built a fullstack application encompassing all components from the database to the frontend. My tech stack includes MongoDB and Redis for the database, NodeJS for the backend (including a gateway and microservices), and React for the frontend. This application is designed to handle user registration, login, token management, and ensures that my microservice is securely positioned behind a gateway. Additionally, the backend will log activities to files for monitoring purposes like tracking system failures, hacking attempts, and other irregularities.

### Features
- **User Registration Flow:**
  - Create a registration form.
  - Submit the form data through the gateway to the backend service.
  - Temporarily store new registrations in cache until completion or timeout.
  - Register the user upon following the registration link, saving their details to the database.

- **Authentication:**
  - Enable registered users to log in via a form.
  - Authenticate users against the database through the microservice via the gateway.
  - On successful login, issue a JWT token to the client through the gateway.
  - The gateway manages the backend session with the token.
  - The client handles the frontend session with the token.

- **Session Handling:**
  - The gateway caches tokens temporarily.
  - The client maintains the token throughout the session.
  - Validate client tokens against the cached tokens for every secure request.

- **Welcome Page:**
  - Present a welcome page upon successful login, displaying user data from the database.

- **Editing User Data:**
  - Provide users with the capability to edit their information.

### The VG (Pass with Distinction)
Unleashed my creativity to enhance the application with additional features, such as:
- Creating a blogging platform.

### Requirements
- The microservice must be session-based and secured through the gateway.
- The database should be effectively utilized.

### Development Guidelines
- **DB Setup:** Configured MongoDB and Redis for storing user data and session caching.
- **Backend Development:** Implemented the backend with NodeJS, ensuring the gateway and microservices are properly set up for handling requests, authentication, and logging.
- **Frontend Development:** Used React to build a user-friendly interface for registration, login, and displaying the welcome page.
- **Security:** Secured the application by managing sessions and tokens carefully, ensuring that all sensitive operations are protected.
- **Logging:** Implemented logging on the backend to monitor activities and identify potential issues.
