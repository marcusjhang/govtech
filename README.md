# Calculator Web Application

This is a simple web application that performs basic arithmetic operations (addition and subtraction) using a RESTful API built with Node.js and Express. The frontend is developed using React.

## Features

- A single-page web application with two number input fields.
- Two buttons to perform addition and subtraction.
- Results are displayed on the page after sending requests to the backend server.
- Input fields default to 0 if left blank.

## Project Structure

- **Frontend:** React application located in the `frontend` folder.
- **Backend:** Node.js server with Express located in the `backend` folder.
- **APIs:**
  - `POST /api/add`: Adds two numbers and returns the result.
  - `POST /api/subtract`: Subtracts the second number from the first and returns the result.

## Prerequisites

- Node.js (version 14 or above)
- npm (Node package manager)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/marcusjhang/govtechOA.git
   cd govtechOA
   ```

2.	Setup the Backend:
Navigate to the `backend` directory to set up the server:

    ```bash
    cd backend
    npm install
    ```

3. Start the Backend Server:

    ```bash
    node server.js
    ```

The server will start on http://localhost:5001.

4. Setup the Frontend:
    ```bash
    cd ../frontend
    npm install
    ```

5. Start the Frontend:
    ```bash
    npm start
    ```

The frontend will start on http://localhost:3000.

## Running Automated Tests

To ensure the backend's functionality is working correctly, automated tests have been set up using Jest and Supertest.

1. **Navigate to the Backend Directory:**
    ```bash
    cd backend
    ```

2. **Install Testing Dependencies:**
   If not already installed, make sure to install Jest and Supertest:
    ```bash
    npm install --save-dev jest supertest
    ```

3. **Run the Tests:**
    ```bash
    npm test
    ```

   This command will run the unit tests for the backend API endpoints, checking that the addition and subtraction functionalities are working as expected.

## Troubleshooting

### Common Issues

- **Network Errors:** Ensure both the frontend and backend servers are running on the correct ports (`3000` for frontend, `5001` for backend).
- **Port Conflicts:** If you receive an error that a port is already in use, stop the process using that port or change the port in the backend `server.js` or React app’s `package.json`.
- **CORS Issues:** If the frontend cannot communicate with the backend due to CORS, make sure CORS is enabled in your Express server using the CORS middleware.

### Restarting Servers

- Restart both frontend and backend servers if changes are made to the codebase or configurations.

## Deployment

- The frontend and backend can be deployed separately on any Node.js-compatible hosting service.
- Ensure that the frontend's API requests are configured to point to the correct URL of the deployed backend server.

## Acknowledgments

- **React:** Frontend framework for building user interfaces.
- **Express:** Backend framework for setting up RESTful APIs