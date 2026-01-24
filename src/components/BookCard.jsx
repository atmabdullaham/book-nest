/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const BookCard = ({ book }) => {
  const bookId = book._id || book.id;
  const coverSrc =
    book.image ||
    "https://images.unsplash.com/photo-1507842217343-583f20270319?w=1200&h=800&fit=crop";

  const rating = typeof book.rating === "number" ? book.rating : 4.6;
  const reviews = typeof book.reviews === "number" ? book.reviews : 120;
  const description =
    book.description || "A must-read you’ll want on your shelf.";

  return (
    <Link href={`/books/${bookId}`}>
      <div className="card card-hover overflow-hidden group h-full flex flex-col bg-white">
        <div className="h-72 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 relative">
          <img
            src={coverSrc}
            alt={book.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-white/15 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

          <span className="absolute top-4 right-4 badge bg-indigo-600 text-white border-0">
            {book.category}
          </span>

          <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-extrabold text-gray-900 ring-1 ring-black/5">
            <span className="text-yellow-500">★</span>
            <span>{rating.toFixed(1)}</span>
            <span className="text-gray-500 font-semibold">({reviews})</span>
          </div>
        </div>
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="font-bold text-lg mb-1 line-clamp-2 text-slate-950 group-hover:text-indigo-700 transition-colors">
            {book.title}
          </h3>
          <p className="text-slate-600 text-sm mb-3 font-medium">
            {book.author}
          </p>
          <p className="text-slate-700 text-sm mb-4 line-clamp-2 flex-grow">
            {description}
          </p>
          <div className="flex justify-between items-center pt-4 border-t border-slate-100">
            <span className="text-2xl font-extrabold text-slate-950">
              ${book.price}
            </span>
            <span className="inline-flex items-center gap-2 text-indigo-700 font-extrabold group-hover:translate-x-0.5 transition-transform">
              View <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
