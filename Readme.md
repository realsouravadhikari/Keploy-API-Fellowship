# Book Manager API

A REST API server for managing books, built with Node.js, Express, and MongoDB.

## 🧱 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- (Optional) React for frontend

## 📌 API Endpoints

| Method | Endpoint        | Description           |
|--------|-----------------|-----------------------|
| GET    | /api/books      | Get all books         |
| GET    | /api/books/:id  | Get a book by ID      |
| POST   | /api/books      | Add a new book        |
| PUT    | /api/books/:id  | Update a book         |
| DELETE | /api/books/:id  | Delete a book         |

## ▶️ How to Run

### Backend

```bash
git clone <repo>
cd book-api-server
npm install
cp .env.example .env  # update Mongo URI
npm start
