import Link from "next/link";

const NewArrivals = () => {
  const newArrivals = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      image:
        "https://images.unsplash.com/photo-1507842217343-583f20270319?w=300&h=400&fit=crop",
      price: "$16.99",
      category: "Fiction",
    },
    {
      id: 2,
      title: "Lessons in Chemistry",
      author: "Bonnie Garmus",
      image:
        "https://images.unsplash.com/photo-1516979187457-635ffe35ff85?w=300&h=400&fit=crop",
      price: "$18.99",
      category: "Historical Fiction",
    },
    {
      id: 3,
      title: "Tomorrow, and Tomorrow, and Tomorrow",
      author: "Gabrielle Zevin",
      image:
        "https://images.unsplash.com/photo-1507842217343-583f20270319?w=300&h=400&fit=crop",
      price: "$19.99",
      category: "Contemporary",
    },
    {
      id: 4,
      title: "The Woman in Me",
      author: "Britney Spears",
      image:
        "https://images.unsplash.com/photo-1507842217343-583f20270319?w=300&h=400&fit=crop",
      price: "$18.50",
      category: "Biography",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              New Arrivals
            </h2>
            <p className="text-lg text-gray-600">
              Discover the latest additions to our collection
            </p>
          </div>
          <Link
            href="/books"
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
          >
            View All
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((book) => (
            <div
              key={book.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden bg-gray-200 h-64">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-blue-600 font-semibold mb-2">
                  {book.category}
                </p>
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{book.author}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">
                    {book.price}
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-semibold transition-colors">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
