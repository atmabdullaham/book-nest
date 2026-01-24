"use client";

/* eslint-disable @next/next/no-img-element */

import { ArrowLeft, Loader2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const AddBookForm = () => {
  const router = useRouter();
  const fallbackCover =
    "https://images.unsplash.com/photo-1507842217343-583f20270319?w=1200&h=800&fit=crop";
  const [loading, setLoading] = useState(false);
  const [previewSrc, setPreviewSrc] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    category: "Fiction",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      setPreviewSrc(value);
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newBook = await response.json();
        toast.success(`"${newBook.title}" added successfully!`);
        setFormData({
          title: "",
          author: "",
          price: "",
          category: "Fiction",
          description: "",
          image: "",
        });
        setPreviewSrc("");
        setTimeout(() => router.push("/books"), 1500);
      } else if (response.status === 401) {
        toast.error("Please login as admin to add books.");
        router.push("/login");
      } else {
        const err = await response.json().catch(() => null);
        toast.error(err?.error || "Failed to add book");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div>
          <label className="block text-gray-800 font-bold mb-3">
            Book Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter book title"
            className="w-full"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-gray-800 font-bold mb-3">
            Author Name *
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            className="w-full"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-800 font-bold mb-3">
            Price ($) *
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="w-full"
            required
            min="0"
            step="0.01"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-800 font-bold mb-3">
            Category *
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full"
            required
          >
            <option value="Fiction">Fiction</option>
            <option value="Self Improvement">Self Improvement</option>
            <option value="History">History</option>
            <option value="Psychology">Psychology</option>
            <option value="Technology">Technology</option>
            <option value="Strategy">Strategy</option>
            <option value="Science">Science</option>
            <option value="Biography">Biography</option>
          </select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-gray-800 font-bold mb-3">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter a brief description of the book"
          className="w-full"
          rows="5"
        />
      </div>

      {/* Image URL */}
      <div>
        <label className="block text-gray-800 font-bold mb-3">
          Book Cover Image URL
        </label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Paste image URL (optional)"
          className="w-full"
        />
        {previewSrc && (
          <div className="mt-4 flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={previewSrc}
                alt="Preview"
                className="h-48 w-[320px] object-cover"
                loading="lazy"
                onError={() => setPreviewSrc(fallbackCover)}
              />
            </div>
          </div>
        )}
      </div>

      {/* Submit Buttons */}
      <div className="flex gap-4 pt-6 border-t border-gray-200">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 btn btn-primary text-lg font-bold"
        >
          {loading ? (
            <span className="inline-flex items-center justify-center gap-1 md:gap-2">
              <Loader2 className="h-4 w-4 animate-spin" /> Adding…
            </span>
          ) : (
            <span className="inline-flex items-center justify-center gap-1 md:gap-2">
              <Plus className="h-4 w-4" /> Add Book
            </span>
          )}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="flex-1 btn btn-secondary font-bold"
        >
          <span className="inline-flex items-center justify-center gap-1 md:gap-2">
            <ArrowLeft className="h-4 w-4" /> Cancel
          </span>
        </button>
      </div>
    </form>
  );
};

export default AddBookForm;
