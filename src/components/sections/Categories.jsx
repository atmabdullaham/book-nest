import {
  ArrowRight,
  BookOpen,
  Brain,
  Cpu,
  Landmark,
  Leaf,
  Target,
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Fiction",
      Icon: BookOpen,
      count: 245,
      desc: "Novels, classics, and stories you’ll love.",
    },
    {
      name: "Self Improvement",
      Icon: Leaf,
      count: 189,
      desc: "Habits, mindset, growth, and productivity.",
    },
    {
      name: "History",
      Icon: Landmark,
      count: 156,
      desc: "Civilizations, biographies, and world events.",
    },
    {
      name: "Psychology",
      Icon: Brain,
      count: 142,
      desc: "Behavior, thinking, and human nature.",
    },
    {
      name: "Technology",
      Icon: Cpu,
      count: 198,
      desc: "Software, AI, systems, and modern tools.",
    },
    {
      name: "Strategy",
      Icon: Target,
      count: 87,
      desc: "Decision-making, leadership, and tactics.",
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-slate-200/40 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-200/30 blur-3xl rounded-full" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="badge">Categories</span>
          <h2 className="section-title">Explore by Category</h2>
          <p className="section-subtitle">
            Discover your favorite books across diverse genres
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="card card-hover p-7 bg-white/95 backdrop-blur ring-1 ring-black/5 border border-slate-200 group cursor-pointer relative hover:border-indigo-200"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute -top-16 -right-16 w-56 h-56 bg-indigo-500/10 blur-2xl rounded-full" />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-slate-900 p-3 text-white shadow-lg ring-1 ring-black/10">
                    <cat.Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-extrabold text-slate-950 leading-tight">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-600">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <span className="shrink-0 inline-flex items-center rounded-full bg-slate-100 text-slate-800 border border-slate-200 px-3 py-1 text-xs font-extrabold">
                  {cat.count} books
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="inline-flex items-center rounded-full bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1 text-xs font-bold">
                  Curated
                </span>
                <span className="inline-flex items-center gap-2 text-indigo-700 font-extrabold group-hover:translate-x-0.5 transition-transform">
                  Browse <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
