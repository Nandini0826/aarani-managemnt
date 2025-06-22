# aarani-managemnt


The **Aarani Management System** is a Node.js + Express.js powered backend application designed to efficiently manage products for a boutique or company. It helps you keep track of product details such as name, description, pricing, and availability in a secure and structured way using MongoDB.
https://img.shields.io/badge/Bootstrap-563d7c?logo=bootstrap&logoColor=white https://img.shields.io/badge/EJS-yellowgreen 


## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation & Running the Application](#installation)  
- [Folder Structure](#folder-structure)  
- [API Endpoints](#api-endpoints)  

## 📦 Features

- Add, edit, or delete products from the catalog  
- Store and retrieve product descriptions and pricing  
- RESTful API endpoints for product operations  
- MongoDB integration for persistent data storage  
- Clean and modular Express-based architecture
---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Frontend:** ejs, Bootstrap  
- **Database:** MongoDB + Mongoose  
- **Environment Management:** dotenv  
- **Tools:** Postman for API testing

---
## 🚀 Getting Started

### ✅ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14 or later)  
- [MongoDB](https://www.mongodb.com/) installed locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

### 📥 Installation & Running the Application

1. **Clone the repository**

```bash
git clone https://github.com/Nandini0826/aarani-managemnt.git
cd aarani-managemnt
```
2. **Install backend dependencies**

```bash
npm install
```
3. **Setup up .env file**
```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/aarani
```
4. **Run the server**
```bash
npm start
```
Your server will be running at:
http://localhost:3000

### 📁 Folder Structure

```bash
aarani-managemnt/
├── models/          # Mongoose models
├── routes/          # Express routes
├── controllers/     # Request handlers
├── config/          # Database config
├── .env             # Environment variables
├── server.js        # Entry point
└── README.md
```

### 📌 API Endpoints

*   `GET /api/products`: Fetch all products
*   `GET /api/products/:id`: Get a specific product by ID
*   `POST /api/products`: Create a new product
*   `PUT  /api/products/:id`: Update a product by ID
*   `DELETE	/api/products/:id`:	Delete a product by ID


