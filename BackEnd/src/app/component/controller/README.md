# User API Controller Documentation

## Overview

This document serves as a guide for the `User API Controller`, part of a backend service responsible for handling user-related operations. The controller facilitates operations such as retrieving user details, registering a new user, and posting blog entries. It integrates with various use-cases and a logging library to provide these functionalities.

## Dependencies

- **Logger**: Utilizes a custom logging library for error logging.
- **Use-Cases**: Leverages specific use-cases (`get`, `post`, `postBlog`) for performing operations.
- **Config**: Imports configuration settings, specifically for database configurations used in blog posting.

## API Endpoints

The controller defines the following endpoints under the base URL `/api/v1/user`:

### 1. Get Users

- **Path**: `/username/:username?/email/:email?`
- **Method**: `GET`
- **Description**: Fetches user details based on optional query parameters `username` and `email`.
- **Response Codes**:
  - `200 OK`: Successfully retrieved user details.
  - `403 Forbidden`: Error occurred during the process.

### 2. Register User

- **Path**: `/`
- **Method**: `POST`
- **Description**: Registers a new user with the provided details in the request body.
- **Response Codes**:
  - `201 Created`: User successfully created.
  - `400 Bad Request`: Validation error with the input.
  - `500 Internal Server Error`: Unexpected error during user registration.

### 3. Post Blog

- **Path**: `/blog`
- **Method**: `POST`
- **Description**: Handles the posting of blog entries with details provided in the request body.
- **Response Codes**:
  - `201 Created`: Blog post successfully created.
  - `500 Internal Server Error`: Unexpected error during blog post creation.

## Error Handling

- All endpoints log errors using a custom logger.
- Errors are returned with appropriate HTTP status codes, distinguishing between validation errors (`400`) and internal server errors (`500`).

## Usage

To utilize these endpoints, ensure that the appropriate HTTP method is used, and provide any required parameters or request body content as described. Error responses will include a descriptive message to aid in debugging.

## Note

This documentation assumes familiarity with RESTful API principles and HTTP status codes. Ensure that your requests conform to the expected formats for successful interaction with the API.
