A Book Selling Platform using Next.js (App Router)
📌 Project Overview

BookNest is a beginner-friendly book selling platform built using Next.js (App Router) with Tailwind CSS.
The application allows users to browse books, view detailed book information, and enables an admin to add new books through a protected route.

The project uses Next.js built-in backend (API Route Handlers) instead of a separate Express.js server.

🎯 Project Goals

This project is designed to demonstrate:

Next.js App Router fundamentals

File-based routing

Server-side data fetching

Mock authentication using cookies

Route protection using middleware

CRUD-style API using Next.js backend

Clean component-based UI with Tailwind CSS

🧰 Tech Stack
Frontend

Next.js 15/16 (App Router)

React

Tailwind CSS

Backend

Next.js Route Handlers (app/api)

Data stored using in-memory array / JSON / database (optional)

Authentication

Mock authentication (hardcoded credentials)

Cookie-based session handling

🏗 Architecture Overview
User
↓
Next.js Pages & Components
↓
Next.js API Routes (app/api)
↓
Data Source (JSON / Memory / DB)

✔ No separate backend
✔ No Express.js
✔ Single deployment

🗺 Pages & Routes
Route Access Description
/ Public Landing page
/login Public Admin login
/books Public Book list
/books/[id] Public Book details
/add-book Protected Add new book
🏠 Landing Page Requirements

The landing page must contain 7 sections, excluding Navbar and Footer.

Required Sections:

Hero Section

Book Categories

Featured Books

About BookNest

How It Works

Reader Reviews / Testimonials

Call To Action

Navbar and Footer should appear globally via layout.js.

🔐 Authentication Guideline (Mock Login)
Purpose

Authentication is implemented only for admin access, not for customers.

Hardcoded Admin Credentials
Email: admin@booknest.com
Password: 123456

Login Flow

User submits login form

Credentials are checked against hardcoded values

On success:

Set cookie: auth=true

Redirect to /books

On failure:

Show error message

🍪 Cookie Usage

Cookie name: auth

Cookie value: true

Used for:

Checking login state

Protecting routes

⚠ Passwords are never stored in cookies.

🛡 Route Protection (Middleware)
Protected Route
/add-book

Protection Logic

If auth cookie does not exist:

Redirect to /login

Implemented using:

middleware.js

Middleware runs before the page loads.

📚 Book Data Structure

Each book should follow this structure:

{
id: "1",
title: "Atomic Habits",
author: "James Clear",
price: 450,
category: "Self Improvement",
description: "A practical guide to building good habits.",
image: "https://example.com/book.jpg"
}

🌐 Backend API (Next.js Route Handlers)

All APIs are implemented using Next.js built-in backend.

API Routes
Method Endpoint Description
GET /api/books Get all books
GET /api/books/[id] Get single book
POST /api/books Add new book
API Folder Structure
app/api/
├─ books/
│ ├─ route.js
│ └─ [id]/
│ └─ route.js

➕ Add Book Page (Protected)
Route
/add-book

Features

Form fields:

Title

Author

Price

Category

Image URL

Description

Submit data to /api/books

Show success toast

Redirect to /books

🔔 Toast Notifications

Use toast notifications to show success messages.

Example:

✅ Book added successfully!

Recommended libraries:

react-hot-toast

sonner

📁 Recommended Folder Structure
app/
├─ layout.js # Global layout
├─ page.js # Landing page
├─ login/
│ └─ page.js
├─ books/
│ ├─ page.js
│ └─ [id]/
│ └─ page.js
├─ add-book/
│ └─ page.js
├─ api/
│ └─ books/
│ ├─ route.js
│ └─ [id]/
│ └─ route.js
├─ middleware.js
components/
├─ Navbar.jsx
├─ Footer.jsx
├─ BookCard.jsx
├─ forms/
│ └─ AddBookForm.jsx
├─ sections/
│ ├─ Hero.jsx
│ ├─ Categories.jsx
│ ├─ FeaturedBooks.jsx
│ ├─ About.jsx
│ ├─ HowItWorks.jsx
│ ├─ Reviews.jsx
│ └─ CTA.jsx
data/
└─ books.js (optional)
