# Task Manager API (MERN Backend)

## Project Overview

This project is a simple backend API built using Node.js and Express.js. It demonstrates core backend development concepts including routing, request handling, input validation, and RESTful API design.

The API allows users to create, read, update, and delete tasks, acting as the server-side logic layer of an application.

---

## Objectives

* Build RESTful API endpoints (GET, POST)
* Handle user input and server responses
* Implement basic data validation
* Structure backend using controllers and routes

---

## Tech Stack

* Node.js
* Express.js
* JavaScript (ES6)

---

## Project Structure

```
mern-backend/
│── server.js
│── package.json
│
├── routes/
│   └── taskRoutes.js
│
├── controllers/
│   └── taskController.js
│
└── README.md
```

---

## Installation and Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Server

```bash
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## API Endpoints Testing
Tested All Api endpoints like GET, POST, DELETE with Postman Desktop Client.
### Base URL

```
http://localhost:5000/api/tasks
```

---

### GET All Tasks

Request:

```
GET /api/tasks
```

Response:

```json
[
  {
    "id": 1,
    "title": "Sample Task"
  }
]
```
<img width="1612" height="1002" alt="Screenshot (14)" src="https://github.com/user-attachments/assets/50a7bd0c-c1a6-4251-ab1a-0dcdc4a69833" />

---

### GET Single Task

Request:

```
GET /api/tasks/:id
```
![Uploading Screenshot (18).png…]()


---

### CREATE Task

Request:

```
POST /api/tasks
```

Body (JSON):

```json
{
  "title": "Learn MERN API"
}
```
<img width="1611" height="990" alt="Screenshot (8)" src="https://github.com/user-attachments/assets/19843af4-5fa3-4545-95ea-65193c6490f5" />

---

### UPDATE Task

Request:

```
PUT /api/tasks/:id
```

---

### DELETE Task

Request:

```
DELETE /api/tasks/:id
```
![Uploading Screenshot (17).png…]()

---

## Validation Rules

* `title` is required
* Must be a non-empty string
* Invalid input returns HTTP 400

---

## Testing

The API was tested using Postman by verifying:

* All endpoints (GET, POST, PUT, DELETE)
* Validation handling for incorrect input
* Proper HTTP status codes

---

## HTTP Status Codes Used

* 200: Success
* 201: Created
* 400: Bad Request
* 404: Not Found

---

## Features

* RESTful API design
* Clean folder structure (routes and controllers)
* Input validation and error handling
* In-memory data storage



## Future Improvements

* Integrate MongoDB with Mongoose
* Add authentication (JWT)
* Connect with a frontend (React)
* Deploy to a cloud platform



## Conclusion

This project demonstrates the ability to build a structured backend API, handle client-server communication, validate user input, and organize code for scalability. It forms a solid foundation for full-stack application development.
