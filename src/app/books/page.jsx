"use client";

import BookCard from "@/components/BookCard";
import { Loader2, Search, SearchX, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch("/api/books");
        if (response.ok) {
          const data = await response.json();
          setBooks(data);
        }
      } catch (error) {
        console.error("Failed to fetch books:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();
  }, []);

  const categories = ["All", ...new Set(books.map((book) => book.category))];

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 ring-1 ring-black/5 shadow">
            <Loader2 className="h-7 w-7 animate-spin text-indigo-700" />
          </div>
          <p className="text-gray-700 text-lg font-semibold">Loading books…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 bg-gradient-to-br from-slate-50/80 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="badge">Browse Collection</span>
          <h1 className="section-title">Discover Amazing Books</h1>
          <p className="section-subtitle mx-auto">
            Explore our collection of {books.length} amazing books across
            different genres
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 bg-white/90 backdrop-blur rounded-3xl shadow-xl p-6 md:p-8 ring-1 ring-black/5">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-slate-900 placeholder-slate-500 font-semibold"
              aria-label="Search books"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-colors"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="mt-6">
            <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-gray-600 font-medium">
              Showing{" "}
              <span className="font-bold text-gray-900">
                {filteredBooks.length}
              </span>{" "}
              of <span className="font-bold text-gray-900">{books.length}</span>{" "}
              books
            </p>
            <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-1 text-sm font-bold">
              {selectedCategory === "All" ? "All Categories" : selectedCategory}
            </span>
          </div>
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in">
            {filteredBooks.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md ring-1 ring-black/5 mb-5">
              <SearchX className="h-7 w-7 text-indigo-700" />
            </div>
            <p className="text-gray-900 text-xl font-bold">No books found</p>
            <p className="text-gray-600 mt-2">
              Try a different keyword or choose another category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
