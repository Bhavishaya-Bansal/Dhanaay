Full Stack Feedback System 🚀

This project is a full-stack web application that allows users to provide feedback on products. Users can submit feedback, view the list of products along with their ratings, and view all feedback left by others.


Features ✨

📝 User Signup and Login functionality.
⭐ Users can submit feedback for products with a rating and comment.
📊 View all feedback and average ratings for products.
🔧 Admins can manage products and view user feedback.


Technologies Used 💻

Frontend:

⚛️ React.js (v18.3.1)
🎨 Material UI (MUI) for design components.
🌐 Axios for making HTTP requests.
🔀 React Router Dom for routing between different pages.

Backend:

🟢 Node.js with Express.js (v4.21.0)
🗄️ MySQL (using Sequelize ORM v6.37.3 for database interactions)
🔒 bcrypt for password hashing and security.
✅ Joi for request validation.
🛠 dotenv for environment configuration.


Installation and Setup 🛠️

Prerequisites:

📦 Node.js
🗄️ MySQL database installed and configured.


Steps to run the project:

Clone the repository:

```
Copy code
git clone <repository-url>
cd project-directory
```

Backend Setup:

Navigate to the backend folder:

```
Copy code
cd backend
```

Install dependencies for the backend:

```
Copy code
npm install
```

Set up environment variables by creating a .env file in the backend folder and add the following:

```
Copy code
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
PORT=5000
```

Ensure your MySQL server is running and create the database manually.

Start the backend server:

```
Copy code
npm run dev
```

Frontend Setup:
Navigate to the frontend folder:

```
Copy code
cd frontend
```

Install dependencies for the frontend:

```
Copy code
npm install
```

Start the frontend development server:

```
Copy code
npm start
```

Accessing the Application 🌐

The frontend will be running at http://localhost:3000 by default.
The backend API will be running at http://localhost:5000.


API Endpoints 🔗

User Routes:

POST /users/signup: Create a new user.
POST /users/login: Login for existing users.

Product Routes:

GET /products: Get all products.
POST /products/add: Add a new product (Admin).

Feedback Routes:

GET /feedback: Get all feedback for all products.
POST /feedback/add: Submit feedback for a product.

MySQL Database Schema 🗄️

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


Frontend Structure 📂

Components:

FeedbackForm.js: Form for submitting feedback.
FeedbackList.js: List to display feedback.
ProductList.js: Display list of products with average rating.
LoginSignup.js: User login and signup form.


Backend Routes 🚦

Models:

User: Handles user data.
Product: Handles product data.
Feedback: Handles feedback data.

Routes:

user.js: Routes for user authentication and management.
product.js: Routes for product CRUD operations.
feedback.js: Routes for feedback operations.


How to contribute 🤝

Fork the repository.
Create a new branch.
Make your changes.
Submit a pull request.

SCREENSHOTS:

Here user is given the choice to either Login if it is an existing user, if not then the user can SIGN UP:

![image](https://github.com/user-attachments/assets/6152af82-be55-4d51-9777-1ab18c11324b)


Here user can submit the feedback. By selecting the product, giving in the rating and putting in the comment as per their wish:

![image](https://github.com/user-attachments/assets/3f2b4d42-59e6-4d68-a858-7085631d78cb)


Choosing the Product:

![image](https://github.com/user-attachments/assets/8de50e2f-83c8-417d-bb26-75d5601b5bb8)


Giving in the rating and adding the Comment:

![image](https://github.com/user-attachments/assets/0a3d992a-3a8b-48be-a33d-bca2c8f0e764)


Here user can see the Feedbacks given for different Users on as per the Products:

![image](https://github.com/user-attachments/assets/694299cc-4bf1-4630-93ba-9d2ec4a98bf4)


In the end user has the Product's List with all of the products being mentioned with respective AVERAGE RATING's of the products in it and a LOG OUT button for the user to logout of the website:

![image](https://github.com/user-attachments/assets/5f717522-3e31-4492-acd2-a239588548e2)


DEMO VIDEO OF THE PROJECT:

https://drive.google.com/file/d/1WcKNf8LrPjRPZypYivzqcpBizoAYgDQF/view
