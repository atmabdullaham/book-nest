import { connectDB } from "@/lib/mongodb";
import Book from "@/models/Book";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  try {
    const params = await context?.params;
    const id = typeof params?.id === "string" ? params.id : undefined;
    if (!id) {
      return NextResponse.json(
        { error: "Book not found" },
        { status: 404 }
      );
    }

    await connectDB();
    const book = await Book.findById(id);

    if (!book) {
      return NextResponse.json(
        { error: "Book not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(book);
  } catch (error) {
    if (error?.name === "CastError") {
      return NextResponse.json(
        { error: "Book not found" },
        { status: 404 }
      );
    }
    console.error("Failed to fetch book:", error);
    return NextResponse.json(
      { error: "Failed to fetch book" },
      { status: 500 }
    );
  }
}
