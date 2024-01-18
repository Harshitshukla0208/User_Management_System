# User Management System

This is a simple User Management System built using Node.js, MongoDB, EJS, and Bootstrap. The application allows you to manage user information, including creating, updating, and deleting user records.

## Features

- **User Registration:** Add new users to the system with a unique username and password.

- **User Authentication:** Secure user authentication using password hashing for enhanced security.

- **User Profile:** View and update user profiles, including username and password.

- **User Listing:** Display a list of all users in the system with options to edit or delete each user.

## Technologies Used

- **Node.js:** A JavaScript runtime for server-side development.
- **Express:** A minimal and flexible Node.js web application framework.
- **MongoDB:** A NoSQL database for storing user information.
- **EJS:** A simple templating language for generating HTML markup.
- **Bootstrap:** A popular CSS framework for building responsive and visually appealing user interfaces.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Harshitshukla0208/User_Management_System
   ```

2. Navigate to the project directory:

   ```bash
   cd user-management-system
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your MongoDB database and update the database connection string in `config.js`.

5. Start the application:

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

## Configuration

Update the configuration settings in `config.js` to customize the application according to your needs.

```javascript
module.exports = {
  port: 3000,
  dbUrl: 'mongodb://localhost:27017/usermanagement',
  sessionSecret: 'your_session_secret',
};
```

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.

2. Register a new user or log in with existing credentials.

3. Explore and manage users through the user interface.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[Harshit Shukla]

Feel free to contribute and improve this User Management System. If you encounter any issues or have suggestions for enhancements, please open an [issue](https://github.com/Harshitshukla0208/User_Management_System/issues).

Happy coding!