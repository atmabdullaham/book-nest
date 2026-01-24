import {
  BadgeDollarSign,
  BookOpenText,
  Sparkles,
  Target,
  Truck,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-indigo-50 py-10"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute bottom-0 -right-40 h-[28rem] w-[28rem] rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-20 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
              <BookOpenText className="h-4 w-4" /> About Us
            </span>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              About BookNest
            </h2>

            <div className="space-y-5 max-w-xl">
              <p className="text-lg leading-relaxed text-slate-700">
                BookNest is a modern digital bookstore built for readers who
                value discovery, quality, and convenience. From timeless
                classics to the latest releases, we bring the world of books
                closer to you.
              </p>

              <p className="text-base leading-relaxed text-slate-600">
                By partnering directly with publishers and authors, we curate a
                diverse collection across every genre—making reading more
                accessible, affordable, and enjoyable for everyone.
              </p>
            </div>

            {/* Stats */}
            <div className="grid max-w-md grid-cols-2 gap-6 pt-6">
              <div className="rounded-2xl border border-blue-200 bg-white/80 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-lg">
                <p className="text-4xl font-extrabold text-blue-600">10K+</p>
                <p className="mt-2 text-sm font-semibold text-slate-700">
                  Books Available
                </p>
              </div>

              <div className="rounded-2xl border border-indigo-200 bg-white/80 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-lg">
                <p className="text-4xl font-extrabold text-indigo-600">50K+</p>
                <p className="mt-2 text-sm font-semibold text-slate-700">
                  Happy Readers
                </p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[2.75rem] bg-gradient-to-br from-blue-200/40 to-indigo-200/40 blur-3xl" />
            <div className="relative rounded-[2.75rem] border border-blue-200 bg-white/85 p-12 backdrop-blur-xl shadow-2xl">
              <h3 className="mb-10 flex items-center gap-3 text-2xl font-bold text-slate-900">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                  <Sparkles className="h-5 w-5" />
                </span>
                Why Choose BookNest?
              </h3>

              <ul className="space-y-8">
                {[
                  {
                    icon: BookOpenText,
                    title: "Extensive Collection",
                    desc: "Thousands of carefully curated titles across all genres",
                  },
                  {
                    icon: BadgeDollarSign,
                    title: "Fair Pricing",
                    desc: "Competitive prices with frequent exclusive offers",
                  },
                  {
                    icon: Truck,
                    title: "Fast & Reliable Delivery",
                    desc: "Quick, secure shipping with global reach",
                  },
                  {
                    icon: Target,
                    title: "Smart Recommendations",
                    desc: "Personalized suggestions powered by reader insights",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 text-blue-700">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
