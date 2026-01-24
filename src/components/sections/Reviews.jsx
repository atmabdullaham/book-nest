import { Star } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Book Lover",
      review:
        "BookNest has become my go-to place for finding great books. The selection is amazing!",
      rating: 5,
    },
    {
      name: "John Davis",
      role: "Student",
      review:
        "Affordable prices and fast delivery. Highly recommended for anyone who loves reading.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Author",
      review:
        "As an author, I appreciate how BookNest promotes independent and established authors alike.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Frequent Buyer",
      review:
        "The website is user-friendly and the customer service is excellent. Five stars!",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white to-indigo-50/50 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-400/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 flex flex-col items-center ">
          <span className="badge">Reviews</span>
          <h2 className="section-title">What Readers Say</h2>
          <p className="section-subtitle">
            Join thousands of satisfied customers who found their favorite books
            on BookNest
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card bg-white/90 backdrop-blur p-8 border border-white/30 hover:shadow-2xl transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center text-2xl">
                  <span className="text-base font-extrabold text-blue-700">
                    {testimonial.name
                      .split(" ")
                      .slice(0, 2)
                      .map((p) => p[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-3 text-sm font-bold text-gray-700">
                  {testimonial.rating}.0
                </span>
              </div>
              <p className="text-gray-700 italic leading-relaxed text-base">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <div className="mt-4 text-sm text-gray-500 font-semibold">
                Verified reader
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
