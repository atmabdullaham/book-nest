import { BookOpen, Search, ShoppingCart, Truck } from "lucide-react";

const HowItWorks = () => {
  const StepIcons = [Search, BookOpen, ShoppingCart, Truck];

  const steps = [
    {
      number: "1",
      title: "Browse",
      description:
        "Explore our extensive collection of books across all genres and categories.",
    },
    {
      number: "2",
      title: "Select",
      description:
        "Read detailed descriptions and reviews to find the perfect book for you.",
    },
    {
      number: "3",
      title: "Purchase",
      description:
        "Add books to your cart and proceed with a secure, easy checkout process.",
    },
    {
      number: "4",
      title: "Receive",
      description:
        "Your books are shipped directly to your door with free delivery on orders.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-20 bg-gradient-to-br from-blue-50/70 to-indigo-50 overflow-hidden"
    >
      <div className="absolute -top-24 right-10 w-72 h-72 bg-blue-400/12 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 left-10 w-72 h-72 bg-indigo-400/12 blur-3xl rounded-full" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="badge">Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Getting started with BookNest is simple. Follow these easy steps to
            find and purchase your favorite books.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="card bg-white/90 backdrop-blur p-8 text-center h-full hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl w-20 h-20 flex items-center justify-center text-4xl mx-auto mb-5 shadow-xl ring-1 ring-white/20">
                  {(() => {
                    const Icon = StepIcons[index];
                    return <Icon className="h-9 w-9" />;
                  })()}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1.5 text-sm font-bold">
                  Step {step.number}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-6 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
