"use client";

/* eslint-disable @next/next/no-img-element */

import {
  AlertCircle,
  ArrowLeft,
  Award,
  BookOpen,
  Calendar,
  Check,
  Globe,
  Heart,
  Loader2,
  Share2,
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
  const [isWishlisted, setIsWishlisted] = useState(false);

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
            .slice(0, 4);
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
      <div className="py-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 shadow">
            <Loader2 className="h-7 w-7 animate-spin text-blue-400" />
          </div>
          <p className="text-white/70 text-lg font-semibold">
            Loading book details…
          </p>
        </div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="py-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 shadow">
            <AlertCircle className="h-7 w-7 text-red-400" />
          </div>
          <h1 className="text-2xl font-extrabold text-white mb-4">
            Book not found
          </h1>
          <Link
            href="/books"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
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

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(
      isWishlisted ? "Removed from wishlist" : "Added to wishlist!",
    );
  };

  const coverSrc = book?.image || fallbackCover;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation */}
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold mb-8 group transition-colors"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Books
        </Link>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Book Cover - Featured */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              <div className="relative">
                {/* Gradient Background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />

                {/* Cover Image */}
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-slate-800">
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

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Bestseller ⭐
                </div>
              </div>
            </div>
          </div>

          {/* Book Info */}
          <div className="lg:col-span-8">
            {/* Category & Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                {book.category}
              </span>
              <span className="inline-flex items-center bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-1.5 rounded-full text-xs font-bold">
                Featured
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight">
              {book.title}
            </h1>

            {/* Author */}
            <p className="text-xl text-blue-400 font-semibold mb-6">
              by <span className="text-white">{book.author}</span>
            </p>

            {/* Rating Section */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => {
                  const filled = i < Math.floor(book.rating || 4.5);
                  return (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        filled
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-white/20"
                      }`}
                    />
                  );
                })}
              </div>
              <span className="text-white/70 font-medium">
                {book.rating || 4.5} out of 5
              </span>
              <span className="text-white/50 text-sm">
                ({book.reviews || 1247} verified reviews)
              </span>
            </div>

            {/* Price Card */}
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-6 mb-8">
              <p className="text-white/70 text-sm font-semibold mb-2 uppercase tracking-wider">
                Price
              </p>
              <div className="flex items-baseline gap-3">
                <p className="text-5xl font-black text-white">${book.price}</p>
                <p className="text-white/50 text-lg line-through">
                  ${(parseFloat(book.price) * 1.25).toFixed(2)}
                </p>
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-bold">
                  20% OFF
                </span>
              </div>
            </div>

            {/* Book Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <BookOpen className="h-5 w-5 text-blue-400 mb-2" />
                <p className="text-white/70 text-xs font-semibold mb-1">
                  Pages
                </p>
                <p className="text-white font-bold">280-350</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <Globe className="h-5 w-5 text-blue-400 mb-2" />
                <p className="text-white/70 text-xs font-semibold mb-1">
                  Language
                </p>
                <p className="text-white font-bold">English</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <Calendar className="h-5 w-5 text-blue-400 mb-2" />
                <p className="text-white/70 text-xs font-semibold mb-1">
                  Published
                </p>
                <p className="text-white font-bold">2024</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-white text-lg font-bold mb-3">About</h3>
              <p className="text-white/70 leading-relaxed text-base">
                {book.description ||
                  "A compelling narrative that captivates readers from start to finish. This bestselling title offers profound insights, unforgettable characters, and a story that resonates long after the final page."}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-white text-lg font-bold mb-4">
                Key Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Award-winning author",
                  "International bestseller",
                  "Page-turning narrative",
                  "Deep character development",
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-white/80"
                  >
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
              <button
                onClick={handleWishlist}
                className={`flex-1 px-6 py-3 border-2 font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isWishlisted
                    ? "bg-red-500/20 border-red-500 text-red-300 hover:bg-red-500/30"
                    : "border-white/20 text-white/80 hover:border-white/40 hover:text-white"
                }`}
              >
                <Heart
                  className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`}
                />
                Wishlist
              </button>
              <button className="px-4 py-3 border-2 border-white/20 text-white/80 hover:border-white/40 hover:text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-blue-400" />
                <span>100% Original</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" />
                <span>Money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Books Section */}
        {relatedBooks.length > 0 && (
          <div className="mt-20 pt-12 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8">
              More from {book.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedBooks.map((relatedBook) => (
                <Link key={relatedBook._id} href={`/books/${relatedBook._id}`}>
                  <div className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-blue-500/20">
                    <div className="relative h-56 overflow-hidden bg-slate-700">
                      <img
                        src={relatedBook.image || fallbackCover}
                        alt={relatedBook.title}
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = fallbackCover;
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-white line-clamp-2 mb-2 group-hover:text-blue-300 transition-colors">
                        {relatedBook.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-3">
                        {relatedBook.author}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-400 font-bold">
                          ${relatedBook.price}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-white/70 text-xs">4.8</span>
                        </div>
                      </div>
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
