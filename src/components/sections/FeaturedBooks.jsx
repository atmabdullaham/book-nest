"use client";

import BookCard from "@/components/BookCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const FeaturedBooks = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeaturedBooks() {
      try {
        const response = await fetch("/api/books");
        if (response.ok) {
          const data = await response.json();
          setFeatured(data.slice(0, 4));
        }
      } catch (error) {
        console.error("Failed to fetch featured books:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchFeaturedBooks();
  }, []);

  return (
    <section
      id="featured"
      className="relative py-20 bg-gradient-to-br from-gray-50/80 to-blue-50 overflow-hidden"
    >
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400/12 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-400/12 blur-3xl rounded-full" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="badge">Curated Selection</span>
          <h2 className="section-title">Featured Books</h2>
          <p className="section-subtitle">
            Handpicked bestsellers and customer favorites
          </p>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="card overflow-hidden h-[26rem] bg-white/70 animate-pulse"
              >
                <div className="h-72 bg-gradient-to-br from-gray-200 to-gray-300" />
                <div className="p-5 space-y-3">
                  <div className="h-4 w-3/4 bg-gray-200 rounded" />
                  <div className="h-3 w-1/2 bg-gray-200 rounded" />
                  <div className="h-3 w-full bg-gray-200 rounded" />
                  <div className="h-3 w-5/6 bg-gray-200 rounded" />
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="h-6 w-20 bg-gray-200 rounded" />
                    <div className="h-6 w-16 bg-gray-200 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featured.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        )}
        <div className="text-center">
          <Link
            href="/books"
            className="btn btn-primary inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            Explore All Books <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
