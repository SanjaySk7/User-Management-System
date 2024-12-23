# User Management System

A web application designed to manage user details for individuals and organizations. It allows users to add, edit, delete, and view users information in a structured table format.

## Key Features:
- CRUD Operations: Create, Read, Update, and Delete users
- State Management: Using redux toolkit states are managed perfectly

## Technologies Used:

- Frontend: React.js, Redux
- Backend: Node.js, Express.js
- API EndPoints:
    - GET /users: Fetches all users from the database.
    - POST /users: Creates a new user.
    - PUT /users/:id: Updates an existing user by its ID.
    - DELETE /users/:id: Deletes a user by its ID.
- Database: MongoDB
- State Management: Redux Toolkit
- Axios: For making API calls to fetch and manage data.

## Database Schema: 
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true},
  dateOfBirth: { type: Date, required: true},
});

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
     git clone https://github.com/SanjaySk7/User-Management-System.git
   
2. Navigate to the project directory:
   cd user_management_system
   
3. Install Backend Dependencies:
    Go to the server directory:
   cd backend
   npm install
   
4. Set up your database:
     MONGO_URI=mongodb+srv://sanjay123:user123@user0.aqcot.mongodb.net/user0?retryWrites=true&w=majority

5. Run the application:
      npx nodemon server.js

6. Install Frontend Dependencies:
    Go back to the root project directory:
   cd ../frontend
   npm install
   
7. Start the development server:
    npm start

8. Open your browser and visit http://localhost:3000 to view the app.


## Major Technical Decisions

1. State Management with Redux Toolkit
    - Reasoning: For this project, Redux Toolkit was chosen to manage the application state. This decision was made because Redux provides a centralized store, making it easier to manage and share state across components. The Redux Toolkit simplifies the Redux workflow with built-in reducers and actions, reducing boilerplate code.
    - How it works: We use Redux to manage the state for the contacts, including fetching user details, editing, updating, and deleting users. The state is managed globally, making it easier to propagate changes throughout the app without the need for prop drilling.

2. MongoDB as the Database
   - Reasoning: MongoDB was chosen due to its flexible schema and scalability. It’s a NoSQL database, making it ideal for handling unstructured data like contact information, which can vary between entries.
   - How it works: The MongoDB database stores the contact information in a simple schema. Each contact document contains fields such as first name, last name, email, phone number, company, and job title. MongoDB’s ability to handle dynamic data makes it a good fit for the project.




