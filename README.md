# Kanban Board with JWT Authentication


This project is a secure Kanban board application with JSON Web Token (JWT) authentication added to manage user access and enhance security. The primary objective of this assignment is to integrate JWT into the existing application for user authentication.



# Table of Contents


	•	Overview

	•	Features

	•	Installation

	•	Configuration

	•	Usage

	•	Video Walkthrough Submission

	•	Technologies Used

	•	License



# Overview


Authentication with JSON Web Tokens (JWTs) is essential for full-stack applications as it provides a scalable, secure method for verifying user identities. JWTs encode authentication data that can be used across the application to authenticate users seamlessly, enhancing security while ensuring smooth access control.



This Kanban board application allows users to securely log in, create, and manage work tasks. JWTs are used to manage authentication across the app, making sure users only access their designated content.



# Features


	•	Secure login page with JWT authentication

	•	Persistent session with JWT stored in local storage

	•	Secure logout that clears JWT and ends the session

	•	Role-based access to manage Kanban board tasks

	•	Expiration handling to invalidate sessions after a defined period of inactivity



# Installation


	1.	Clone the repository and navigate into the project directory.



git clone <repository-url>

cd <project-directory>




	2.	Install the necessary dependencies.



npm install



	3.	Download and unzip the starter code if not included in the repository.



# Configuration


	1.	Create a .env file in the root directory of your server with the following information:



DB_USERNAME=<Your_Database_Username>

DB_PASSWORD=<Your_Database_Password>

JWT_SECRET=<Your_JWT_Secret_Key>





	2.	Make sure to replace the placeholder values with your actual configuration.



# Usage


	1.	Start the server:



npm start





	2.	Access the Kanban board at http://localhost:3000 and log in with valid credentials.



# User Story


As a member of an agile team, I want a Kanban board with a secure login page, so that I can securely access and manage my work tasks.



# Acceptance Criteria


	•	Login: Successful login redirects to the Kanban board.

	•	JWT Storage: JWT is securely stored in the client’s local storage for authenticated requests.

	•	Invalid Credentials: Displays error messages for invalid username or password.

	•	Logout: JWT is removed from local storage on logout, redirecting to login.

	•	Session Expiration: JWT is invalidated after inactivity, requiring re-authentication.



# Video Walkthrough Submission


Please submit a video walkthrough of the project demonstrating:



	•	The login functionality with both valid and invalid credentials

	•	JWT storage and session handling

	•	The logout process and session expiration

	•	Overall Kanban board functionality

Submit your video walk-through video link here: 



# Technologies Used


	•	Node.js: Backend framework

	•	Express.js: Server framework

	•	JWT: For secure user authentication

	•	HTML/CSS: Frontend for UI design

	•	Render: For deployment



# License

This project is licensed under the MIT License.

