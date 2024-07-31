
# Netflix Clone

A Netflix clone application built using Node.js for the backend and React for the frontend. This project replicates the functionality of a Netflix-based streaming platform.

## Hosted Link: [Click Here](https://netflix-clone-61r7.onrender.com/)


## Table of Contents:-

* [Overview]
* [Features]
* [Technologies Used]
* [Installation]
* [Configuration]
* [Running the Project]
* [API Endpoints]
* [Website UI Explanation]
* [License]

## Overview
This project is a Netflix clone built to demonstrate a functional streaming platform similar to Netflix. It showcases a responsive user interface, user authentication, content browsing, and video playback.

## Features

* **User Authentication**: Secure user registration and login using JWT.
* **UI**: Modern and responsive design using React and CSS.
* **Content Browsing**: Browse movies and TV shows by categories, genres, and recommendations.
* **Search Functionality**: Search for movies and TV shows.
* **Video Playback**: Stream videos with a built-in player.
* **Backend API**: Node.js and Express server with RESTful APIs.
* **Database Integration**: MongoDB for storing user data and content information.

## Technologies Used

* **Frontend**: React, Redux, CSS, Tailwind CSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Authentication**: JWT (JSON Web Tokens)


## Installation

1. **Clone the repository**

```
  https://github.com/Raj01Patel/Netflix-Clone.git
```

2. **Install dependencies:**

```
  cd netflix-clone
  npm install
```

3. **Set up environment variables:**
Create a `.env` file in the root directory and add your MongoDB URI and JWT secret.
```
  MONGO_URI=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
```

4. **Run the application::**

```
  npm start
```
    
## API Endpoints

### User Authentication:

```
POST /api/v1/auth/signup - Sign up a new user
POST /api/v1/auth/login - Log in a user
```

### Movie

```
GET /api/v1/movie - to get movies 
```
### Tv

```
GET /api/v1/movie - to get Tv shows
```

### Search

```
GET /api/v1/search - to search movie & Tv shows
```

## Website UI Explanation

![Screenshot (50)](https://github.com/user-attachments/assets/37f86160-b72b-42f2-af5c-016227e731ac)
![Screenshot (49)](https://github.com/user-attachments/assets/0d30cfa1-ca01-4923-98fa-4adae90d6ff7)
![Screenshot (51)](https://github.com/user-attachments/assets/f79ab9b9-18ea-4e23-a2d7-4970d0c35d06)
![Screenshot (55)](https://github.com/user-attachments/assets/b1786f55-21f5-4475-8827-f78035c22e8c)
![Screenshot (57)](https://github.com/user-attachments/assets/dc69a9bd-5341-432e-8f95-12c5fc39b7d4)
![Screenshot (58)](https://github.com/user-attachments/assets/bfbd1aef-38dd-4424-b7cb-609639592595)
![Screenshot (62)](https://github.com/user-attachments/assets/c15577b5-8c9c-45b8-964a-4d2a155b7d48)
![Screenshot (82)](https://github.com/user-attachments/assets/e1cb2fb9-41f9-4556-bec7-471aa18aff28)

## License:
- This project is licensed under the [Geekster](LICENSE).
- You are free to use and modify this code for your own purposes.

