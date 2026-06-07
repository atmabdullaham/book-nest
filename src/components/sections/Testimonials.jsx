const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Book Lover",
      message:
        "BookNest has completely changed how I discover books. The recommendations are spot-on and the interface is so user-friendly!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Avid Reader",
      message:
        "I love how easy it is to find and share book collections. The community here is amazing and supportive.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Reading Enthusiast",
      message:
        "BookNest helped me organize my reading list and find new authors I never would have discovered otherwise.",
      rating: 4,
    },
    {
      id: 4,
      name: "James Rodriguez",
      role: "Literature Student",
      message:
        "The platform is perfect for students and casual readers alike. Highly recommend BookNest to anyone who loves books!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Readers Say
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of happy readers who trust BookNest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.message}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
