// Static fallback data for initial setup
export const staticBooksData = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: 450,
    category: "Self Improvement",
    description: "A practical guide to building good habits and breaking bad ones. Transform your life with tiny changes.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 350,
    category: "Fiction",
    description: "A classic tale of love, wealth, and the American Dream set in the Jazz Age.",
    image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=600&fit=crop",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 520,
    category: "History",
    description: "An epic narrative of humankind's journey from the Stone Age to the modern age.",
    image: "https://images.unsplash.com/photo-1543002588-d83cdf395bde?w=400&h=600&fit=crop",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 480,
    category: "Self Improvement",
    description: "Explore the two systems of thought that drive the way we think and make decisions.",
    image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=600&fit=crop",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 320,
    category: "Fiction",
    description: "A controversial classic following a teenager's journey through New York City.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop",
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    price: 280,
    category: "History",
    description: "Ancient military strategy and philosophy applicable to modern business and life.",
    image: "https://images.unsplash.com/photo-1543002588-d83cdf395bde?w=400&h=600&fit=crop",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    price: 400,
    category: "Self Improvement",
    description: "Rules for focused success in a distracted world. Learn how to achieve more with deep work.",
    image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=600&fit=crop",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 330,
    category: "Fiction",
    description: "A timeless romance novel about love, society, and personal growth.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop",
  },
];

// Fetch books from API or use static data
export async function getBooksData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/books`, {
      next: { revalidate: 60 } // ISR - revalidate every 60 seconds
    });
    
    if (!response.ok) throw new Error('Failed to fetch books');
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch books from API, using static data:', error);
    return staticBooksData;
  }
}

// Keep the old export for backward compatibility
export const booksData = staticBooksData;
