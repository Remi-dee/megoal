# Megoal

Megoal is a goal-setting application that allows authenticated users to set and track their personal goals. The app is built using the MongoDB database, Express framework for the backend, and React Vite for the frontend. It provides users with a user-friendly interface to create, update, and monitor their goals, helping them stay focused and motivated.

Features

User Authentication
 User registration and login
 Secure authentication with JWT (JSON Web Tokens)
 Password hashing for enhanced security
Goal Management
 Create new goals
 Update existing goals
 Mark goals as completed
 Delete goals
Goal Tracking
 Set deadlines and reminders for goals
 Track progress and completion status
 View goal history and statistics
User Profile
 View and update user profile information
 Change password
UI/UX Enhancements
 Responsive design with Tailwind CSS
 Feedback popups using Toastify
 Icons using React Icons library
Getting Started

To run the Megoal application locally, follow these steps:

Clone the repository to your local machine.
Install the required dependencies for both the client and API. Run npm install in the root directory, as well as the client and api subdirectories.
Configure the environment variables for the API. Create a .env file in the api directory and add the following variables:
plaintext
Copy code
PORT=<api_port>
MONGO_URI=<mongodb_connection_string>
JWT_SECRET=<jwt_secret_key>
Replace <api_port> with the desired port number for the API server, <mongodb_connection_string> with the connection string for your MongoDB database, and <jwt_secret_key> with a secret key for JWT token generation.
Start the API server by running npm start or npm run dev in the api directory.
Start the client development server by running npm run dev in the client directory.
Open your web browser and navigate to http://localhost:3000 to access the Megoal app.
Folder Structure

The Megoal repository follows a specific folder structure to organize the codebase effectively:

/api: Contains the backend code built with Node.js and Express. This includes the routes, controllers, models, and middleware for handling API requests.
/client: Contains the frontend code built with React Vite. This includes the components, pages, and styles for the user interface.
/client/public: Contains static assets, such as images and fonts, that are served by the client.
/client/src: Contains the main source code for the client application, including the entry point, components, styles, and utility functions.
API Endpoints

The Megoal app uses the following API endpoints:

POST /api/auth/register: Registers a new user.
POST /api/auth/login: Logs in a user and generates a JWT token.
GET /api/auth/me: Retrieves the current user's profile information.
PUT /api/auth/me: Updates the current user's profile information.
PUT /api/auth/password: Changes the current user's password.
GET /api/goals: Retrieves all goals for the current user.
POST /api/goals: Creates a new goal for the current user.
PUT /api/goals/:id: Updates an existing goal.
