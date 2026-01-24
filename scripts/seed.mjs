import dotenv from "dotenv";
import mongoose from "mongoose";
import Book from "../models/Book.js";

dotenv.config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;

const seedData = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: 450,
    category: "Self Improvement",
    description:
      "A practical guide to building good habits and breaking bad ones. Transform your life with tiny changes.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop",
    rating: 4.8,
    reviews: 250,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 350,
    category: "Fiction",
    description:
      "A classic tale of love, wealth, and the American Dream set in the Jazz Age.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=600&fit=crop",
    rating: 4.6,
    reviews: 180,
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 520,
    category: "History",
    description:
      "An epic narrative of humankind's journey from the Stone Age to the modern age.",
    image:
      "https://images.unsplash.com/photo-1543002588-d83cdf395bde?w=400&h=600&fit=crop",
    rating: 4.7,
    reviews: 320,
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 480,
    category: "Psychology",
    description:
      "Explore the two systems of thought that drive the way we think and make decisions.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=600&fit=crop",
    rating: 4.5,
    reviews: 210,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 320,
    category: "Fiction",
    description:
      "A controversial classic following a teenager's journey through New York City.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop",
    rating: 4.4,
    reviews: 150,
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    price: 280,
    category: "Strategy",
    description:
      "Ancient military strategy and philosophy applicable to modern business and life.",
    image:
      "https://images.unsplash.com/photo-1543002588-d83cdf395bde?w=400&h=600&fit=crop",
    rating: 4.6,
    reviews: 190,
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    price: 400,
    category: "Self Improvement",
    description:
      "Rules for focused success in a distracted world. Learn how to achieve more with deep work.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=600&fit=crop",
    rating: 4.7,
    reviews: 280,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 330,
    category: "Romance",
    description:
      "A timeless romance novel about love, society, and personal growth.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop",
    rating: 4.5,
    reviews: 220,
  },
];

async function seed() {
  if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI is missing. Create .env.local first.");
    process.exit(1);
  }

  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected");

    console.log("Clearing existing books...");
    await Book.deleteMany({});

    console.log("Seeding books...");
    const inserted = await Book.insertMany(seedData);
    console.log(`✅ Seeded ${inserted.length} books`);

    process.exit(0);
  } catch (err) {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  }
}

seed();
