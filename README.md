# Library Management Application

This is a library management system built using **Spring Boot** for the backend and **React with TypeScript** for the frontend. The application enables users to manage book loans, leave feedback, and communicate with administrators.

## Features

### User Features

- **Authentication**: Secure login and registration using **Okta**.
- **Book Search**: Search for books by name or category.
- **Book Loan Management**:
  - Checkout books.
  - Manage loan expiration dates.
- **Feedback and Reviews**:
  - Leave reviews and feedback for books.
  - View all feedback for each book.
- **Admin Communication**:
  - Ask questions and receive answers from the admin.

### Admin Features

- All user features.
- **Book Management**:
  - Add new books and update their quantities.
- **User Communication**:
  - Respond to user questions.

## Setup Instructions

### Prerequisites

Before setting up the project, ensure you have the following installed:

- **Java JDK 17** or higher.
- **Node.js** and **npm** (Node Package Manager).
- **IntelliJ IDEA** (or another Java IDE).
- **A web browser** for accessing the frontend.

### Installation Steps

- **Clone the Repository**:

  ```bash
  git clone https://github.com/AbbassNurLDin23/library-app
  ```

- **Backend Setup (Spring Boot)**:

  - Open the `backend/spring-boot-library` folder in **IntelliJ IDEA** (or another Java IDE).
  - Configure the `application.properties` file with your Okta credentials and database details.
  - Run the `LibraryManagementApplication.java` main class to start the backend server.

- **Frontend Setup (React with TypeScript)**:
  - Open the `frontend/react-library` folder in a terminal.
  - Install the required dependencies:
    ```bash
    npm install
    ```
  - Start the development server:
    ```bash
    npm start
    ```
  - Access the application in your browser at `http://localhost:3000`.

## Commands

In the project directory, you can run the following commands:

- **`npm start`**  
  Runs the app in development mode.  
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
  The page will reload if you make edits.  
  You will also see any lint errors in the console.

- **`npm test`**  
  Launches the test runner in interactive watch mode.

- **`npm run build`**  
  Builds the app for production to the `build/` folder.  
  The build is minified and optimized for the best performance.  
  Your app is ready to be deployed.

- **`npm run eject`**
  > **Note**: This is a one-way operation. Once you eject, you can’t go back!  
  > If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.  
  > Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project.

## Deployment

- **Deploying the Backend**:

  - Build the backend application using Maven:
    ```bash
    mvn package
    ```
  - Deploy the generated `.jar` file to a cloud platform or server such as **AWS**, **Google Cloud**, or **Heroku**.

- **Deploying the Frontend**:
  - Build the React application for production:
    ```bash
    npm run build
    ```
  - Upload the contents of the `build/` folder (which will now be created in the `frontend/react-library` directory) to a hosting platform such as **Netlify**, **Vercel**, or **AWS Amplify**.

## Acknowledgments

This project was developed with the help of a **Udemy course** on Spring Boot and React. Special thanks to the course creator for their valuable guidance and resources.

## License

This project is licensed under the **MIT License**.
