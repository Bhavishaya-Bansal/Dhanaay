Full Stack Feedback System

This project is a full-stack web application that allows users to provide feedback on products. Users can submit feedback, view the list of products along with their ratings, and view all feedback left by others.

Features:

User Signup and Login functionality.
Users can submit feedback for products with a rating and comment.
View all feedback and average ratings for products.
Admins can manage products and view user feedback.


Technologies Used:

Frontend:

React.js (v18.3.1)
Material UI (MUI) for design components.
Axios for making HTTP requests.
React Router Dom for routing between different pages.

Backend:

Node.js with Express.js (v4.21.0)
MySQL (using Sequelize ORM v6.37.3 for database interactions)
bcrypt for password hashing and security.
Joi for request validation.
dotenv for environment configuration.


Installation and Setup:

Prerequisites:

Node.js (>= 14.x.x)
MySQL database installed and configured.


Steps to run the project:

Clone the repository:

bash
Copy code
git clone <repository-url>
cd project-directory
Backend Setup:

Navigate to the backend folder:

bash
Copy code
cd backend
Install dependencies for the backend:

bash
Copy code
npm install
Set up environment variables by creating a .env file in the backend folder and add the following:

bash
Copy code
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
PORT=5000
Ensure your MySQL server is running and create the database manually.

Start the backend server:

bash
Copy code
npm run dev
Frontend Setup:

Navigate to the frontend folder:

bash
Copy code
cd frontend
Install dependencies for the frontend:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm start
Accessing the Application:

The frontend will be running at http://localhost:3000 by default.
The backend API will be running at http://localhost:5000.


API Endpoints:

User Routes:

POST /users/signup: Create a new user.
POST /users/login: Login for existing users.

Product Routes:

GET /products: Get all products.
POST /products/add: Add a new product (Admin).

Feedback Routes:

GET /feedback: Get all feedback for all products.
POST /feedback/add: Submit feedback for a product.


MySQL Database Schema:

Users Table:

id (INT, Primary Key, Auto Increment)
username (VARCHAR, Unique)
email (VARCHAR, Unique)
password (VARCHAR)
Products Table:

id (INT, Primary Key, Auto Increment)
name (VARCHAR)
description (VARCHAR)
Feedbacks Table:

id (INT, Primary Key, Auto Increment)
userId (Foreign Key from Users Table)
productId (Foreign Key from Products Table)
rating (INT)
comment (VARCHAR)


Frontend Structure:

Components:
FeedbackForm.js: Form for submitting feedback.
FeedbackList.js: List to display feedback.
ProductList.js: Display list of products with average rating.
LoginSignup.js: User login and signup form.


Backend Routes:

Models:

User: Handles user data.
Product: Handles product data.
Feedback: Handles feedback data.

Routes:

user.js: Routes for user authentication and management.
product.js: Routes for product CRUD operations.
feedback.js: Routes for feedback operations.


How to contribute:
Fork the repository.
Create a new branch.
Make your changes.
Submit a pull request.


