# BookNest

BookNest is a simple book browsing platform built with Next.js (App Router), Tailwind CSS, and MongoDB (Mongoose). Users can browse books and view details, while an admin can log in (mock auth) to add new books.

## Setup & Installation

### Prerequisites

- Node.js 18+ (recommended: Node.js 20+)
- npm
- A MongoDB database (MongoDB Atlas or local)

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env.local` file in the project root:

```bash
MONGODB_URI="your-mongodb-connection-string"
```

### 3) (Optional) Seed sample books

```bash
npm run seed
```

### 4) Run the app

```bash
npm run dev
```

Open `http://localhost:3000`.

### Admin demo credentials

- Email: `admin@booknest.com`
- Password: `123456`

## Route Summary

### UI Routes

| Route            | Access    | What it does                          |
| ---------------- | --------- | ------------------------------------- |
| `/`              | Public    | Landing page with marketing sections  |
| `/books`         | Public    | Shows all books (latest first)        |
| `/books/[id]`    | Public    | Book details page                     |
| `/login`         | Public    | Admin login (sets `auth=true` cookie) |
| `/register`      | Public    | Registration UI page                  |
| `/add-book`      | Protected | Admin-only add book form              |
| `/about`         | Public    | About page                            |
| `/about/contact` | Public    | Contact page                          |
| `/about/teams`   | Public    | Teams page                            |
| `/tutorials`     | Public    | Tutorials page                        |

### API Routes

| Method | Endpoint          | What it does                           | Auth                        |
| ------ | ----------------- | -------------------------------------- | --------------------------- |
| `GET`  | `/api/books`      | Returns all books from MongoDB         | Public                      |
| `POST` | `/api/books`      | Creates a new book                     | Requires cookie `auth=true` |
| `GET`  | `/api/books/[id]` | Returns a single book by MongoDB `_id` | Public                      |

## Implemented Features (Brief)

- Book listing: Fetches and displays all books from MongoDB.
- Book details: Dynamic route (`/books/[id]`) to view full book information.
- Admin add-book flow: Form submits to `POST /api/books` and stores the book in MongoDB.
- Mock admin authentication: Login sets a cookie (`auth=true`) for a simple admin session.
- Route protection: Middleware blocks `/add-book` and redirects to `/login` when not authenticated.
- API error handling: Basic validation and consistent JSON error responses.
- Toast feedback: Uses notifications for actions like successful login and adding a book.
- Seed script: `npm run seed` wipes and inserts demo books into the database.
