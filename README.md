# Blog Project using React, Vite, Tailwind CSS, and Appwrite

This repository contains a blog project built using React with Vite as the build tool. The project uses Appwrite for backend functionalities such as adding, deleting, and editing posts, inserting images, and user authentication. Tailwind CSS is used for styling the application.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Environment Variables](#environment-variables)

## Introduction

The Blog Project is a web application that allows users to manage blog posts efficiently. It offers basic CRUD (Create, Read, Update, Delete) operations for posts and supports image uploading. The project also includes user authentication, allowing users to view and manage posts based on their login status.

## Features

- User authentication (Login and Register)
- Add new blog posts with text and images
- Edit existing blog posts
- Delete posts
- View posts based on login status
- Responsive UI built with Tailwind CSS

## Installation

To run this project locally, you need to have Node.js and npm (or yarn) installed on your machine. You should also have Appwrite set up and configured.

1. Clone the repository to your local machine:

```
   git clone https://github.com/srijosh/Blog-Project-using-React-Vite-Tailwind-CSS-and-Appwrite.git
```

2. Navigate to the project directory:

```
   cd Blog-Project-using-React-Vite-Tailwind-CSS-and-Appwrite
```

3. Install the required dependencies:

```
   npm install
```

4. Create a .env file in the root directory using the provided .env.sample file as a reference. Add your Appwrite configuration (API endpoint, project ID, and other details) to the .env file.

5. Start the development server:

```
    npm run dev
```

6. Open your browser and go to http://localhost:5173 to view the application.

## Usage

1. Register and Login: Users need to register or log in to access the blog features.
2. Viewing Posts: After logging in, users can view all blog posts.
3. Adding a Post: You can enter text, upload an image, and submit the post.
4. Editing a Post: You can update text and replace the image if needed.
5. Deleting a Post: You can remove a post from the list.
6. Logging Out: Users can log out to exit their session securely.

## Technologies Used

React: A JavaScript library for building user interfaces.
Vite: A build tool for fast and optimized development.
Tailwind CSS: A utility-first CSS framework for styling.
Appwrite: A backend server for handling authentication, database, file storage, and more.
JavaScript: For writing the core logic.

## Environment Variables

This project uses environment variables for Appwrite configurations. A sample .env.sample file is provided to show the structure. To get started:
Create a .env file in the root directory.
Copy the contents of .env.sample to your .env file.
Replace the placeholder values with your actual Appwrite configuration details.
