import { BookOpen, LockKeyhole, Sparkles } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 gradient-accent" />
      <div className="absolute inset-0 bg-slate-950/35" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[34rem] h-[34rem] bg-white/12 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-indigo-300/12 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/25 bg-slate-950/25 backdrop-blur p-10 md:p-14 shadow-2xl text-center">
          <span className="badge bg-white/15 text-white border-white/25 px-4 py-2">
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Start today
            </span>
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Ready to start your reading journey?
          </h2>

          <p className="mt-5 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Join thousands of book lovers discovering their next favorite read
            on BookNest.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/books"
              className="btn btn-secondary shadow-xl hover:shadow-2xl"
            >
              <span className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4" /> Browse Books
              </span>
            </Link>
            <Link
              href="/login"
              className="btn border-2 border-white/80 text-white hover:bg-white hover:text-slate-950 font-extrabold"
            >
              <span className="inline-flex items-center gap-2">
                <LockKeyhole className="h-4 w-4" /> Admin Portal
              </span>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              { title: "Curated picks", desc: "Hand-selected featured titles" },
              { title: "Secure admin", desc: "Protected add-book workflow" },
              { title: "Fast browsing", desc: "Search & filter in seconds" },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white/10 border border-white/15 p-5"
              >
                <p className="text-white font-extrabold">{p.title}</p>
                <p className="text-white/80 text-sm mt-1 font-medium">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
