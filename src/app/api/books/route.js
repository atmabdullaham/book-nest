import { connectDB } from "@/lib/mongodb";
import Book from "@/models/Book";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const books = await Book.find({}).sort({ createdAt: -1 });
    return NextResponse.json(books);
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return NextResponse.json(
      { error: "Failed to fetch books" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const authCookie = req.cookies?.get?.("auth")?.value;
    if (authCookie !== "true") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();
    const newBook = await req.json();

    // Validate required fields
    if (!newBook.title || !newBook.author || !newBook.price || !newBook.category) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create new book in MongoDB
    const book = new Book({
      title: newBook.title,
      author: newBook.author,
      price: parseFloat(newBook.price),
      category: newBook.category,
      description: newBook.description || "",
      image: newBook.image || undefined,
      rating: newBook.rating || 4.5,
      reviews: newBook.reviews || 0
    });

    await book.save();
    return NextResponse.json(book, { status: 201 });
  } catch (error) {
    console.error("Failed to add book:", error);
    return NextResponse.json(
      { error: error.message || "Failed to add book" },
      { status: 500 }
    );
  }
}
