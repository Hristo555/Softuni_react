# Softuni_react

# Blog It

**Blog It** is a simple blogging platform built with React and React Router on the frontend and the SoftUni Practice Server as the backend. The application supports blog browsing, commenting, and blog post management with role-based access (guest/admin).

## 🛠 Tech Stack

- **Frontend**: React, React Router
- **Backend**: SoftUni Practice Server
- **Runtime**: Node.js

---

## 🚀 Features

- **Public Access (Guest):**
  - View blog posts
  - Register/Login
  - Comment on blog posts

- **Authenticated Users (Admin/Post Author):**
  - Create new blog posts
  - Edit own blog posts
  - Delete own blog posts

- **Access Control:**
  - Route guards for guests and admins to protect restricted actions and routes.

---

## 📁 Project Structure

- **Client**: React application
- **Server**: SoftUni Practice Server (runs locally)

---

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd blog-it
```

### 2. Install dependencies

#### Client Side

```bash
npm install
npm run dev
```

#### Server Side

```bash
cd server
node server
```

---

## 🗂️ Data Structure

- **Collections Used**:
  - `blogs`
  - `comments`

Each blog post can have multiple associated comments, and each comment can be viewed by all users.

---

## 🧩 Route Overview

| Route           | Access Level | Description                |
|----------------|--------------|----------------------------|
| `/login`        | Guest        | Login to the platform      |
| `/register`     | Guest        | Register a new account     |
| `/blogs`        | Public       | View all blog posts        |
| `/blogs/:id`    | Public       | View blog post details     |
| `/create`       | Admin        | Create a new blog post     |
| `/edit/:id`     | Author Only  | Edit your own blog post    |
| `/delete/:id`   | Author Only  | Delete your own blog post  |

---

## 🔐 Authentication & Authorization

- Route guards ensure only authorized users can access admin routes.
- Blog post editing/deleting is restricted to the original post author.

---