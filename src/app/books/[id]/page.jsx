"use client";

/* eslint-disable @next/next/no-img-element */

import {
  AlertCircle,
  ArrowLeft,
  Heart,
  Loader2,
  ShoppingCart,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function BookDetailPage() {
  const params = useParams();
  const bookId = typeof params?.id === "string" ? params.id : undefined;
  const [book, setBook] = useState(null);
  const [relatedBooks, setRelatedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fallbackCover =
    "https://images.unsplash.com/photo-1507842217343-583f20270319?w=1200&h=800&fit=crop";

  useEffect(() => {
    async function fetchBook() {
      try {
        if (!bookId) {
          setError("Book not found");
          return;
        }
        // Fetch the main book
        const response = await fetch(`/api/books/${bookId}`);
        if (!response.ok) {
          setError("Book not found");
          return;
        }
        const bookData = await response.json();
        setBook(bookData);

        // Fetch all books for related books
        const allBooksResponse = await fetch("/api/books");
        if (allBooksResponse.ok) {
          const allBooks = await allBooksResponse.json();
          const related = allBooks
            .filter(
              (b) =>
                b.category === bookData.category &&
                String(b._id) !== String(bookData._id),
            )
            .slice(0, 3);
          setRelatedBooks(related);
        }
      } catch (error) {
        console.error("Failed to fetch book:", error);
        setError("Failed to load book");
      } finally {
        setLoading(false);
      }
    }
    fetchBook();
  }, [bookId]);

  if (loading) {
    return (
      <div className="py-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 ring-1 ring-black/5 shadow">
            <Loader2 className="h-7 w-7 animate-spin text-indigo-700" />
          </div>
          <p className="text-gray-700 text-lg font-semibold">
            Loading book details…
          </p>
        </div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="py-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 ring-1 ring-black/5 shadow">
            <AlertCircle className="h-7 w-7 text-indigo-700" />
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-4">
            Book not found
          </h1>
          <Link
            href="/books"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Books
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`"${book.title}" added to cart!`);
  };

  const coverSrc = book?.image || fallbackCover;

  return (
    <div className="py-12 bg-gradient-to-br from-slate-50/80 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-indigo-700 font-semibold hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Books
          </Link>
        </div>

        {/* Book Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
          {/* Book Image */}
          <div>
            <div className="relative w-full aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden bg-gray-200 ring-1 ring-black/5">
              <img
                src={coverSrc}
                alt={book.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = fallbackCover;
                }}
              />
            </div>
          </div>

          {/* Book Info */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl ring-1 ring-black/5 p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-1 rounded-full text-sm font-bold">
                  {book.category}
                </span>
                <span className="inline-flex items-center bg-slate-50 text-slate-800 border border-slate-200 px-3 py-1 rounded-full text-sm font-semibold">
                  Bestseller
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
                {book.title}
              </h1>
              <p className="text-lg text-slate-700 mb-6 font-medium">
                by{" "}
                <span className="text-gray-900 font-bold">{book.author}</span>
              </p>

              {/* Rating and Reviews */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const filled = i < Math.floor(book.rating || 4.5);
                    return (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${filled ? "fill-current" : "opacity-30"}`}
                      />
                    );
                  })}
                </div>
                <span className="text-slate-700 font-medium">
                  ({book.reviews || 127} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="bg-white p-5 rounded-2xl mb-6 border border-slate-200">
                <p className="text-slate-700 text-sm mb-1 font-semibold">
                  Price
                </p>
                <p className="text-4xl font-extrabold text-slate-950">
                  ${book.price}
                </p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  About this book
                </h3>
                <p className="text-slate-800 leading-relaxed">
                  {book.description ||
                    "A great read that readers keep coming back to. Add it to your library today."}
                </p>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-slate-600 text-sm">Pages</p>
                  <p className="font-semibold">280-350</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-slate-600 text-sm">Language</p>
                  <p className="font-semibold">English</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary flex-1 inline-flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-4 w-4" /> Add to Cart
                </button>
                <button className="btn btn-secondary flex-1 inline-flex items-center justify-center gap-2">
                  <Heart className="h-4 w-4" /> Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBooks.map((relatedBook) => (
                <Link key={relatedBook._id} href={`/books/${relatedBook._id}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img
                        src={relatedBook.image || fallbackCover}
                        alt={relatedBook.title}
                        className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = fallbackCover;
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold line-clamp-2">
                        {relatedBook.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {relatedBook.author}
                      </p>
                      <p className="text-indigo-700 font-bold mt-2">
                        ${relatedBook.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
