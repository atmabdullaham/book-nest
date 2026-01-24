import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0b1220] via-[#0e1630] to-[#070b14] py-8 md:py-16">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-1/2 -right-40 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.08]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Welcome to BookNest
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Discover your next
              <span className="block bg-gradient-to-r from-sky-200 via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                favorite book
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
              A premium digital marketplace for modern readers. Discover
              best-sellers, hidden gems, and expertly curated collections in one
              seamless experience.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/books"
                className="group inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Browse Books
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#featured"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur transition-all hover:bg-white hover:text-slate-900"
              >
                Featured Picks
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
              {[
                { label: "Books", value: "10K+" },
                { label: "Readers", value: "50K+" },
                { label: "Delivery", value: "Fast" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-center backdrop-blur"
                >
                  <p className="text-2xl font-extrabold text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual card */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/20 to-white/5 blur-3xl" />
            <div className="relative rounded-[3rem] border border-white/20 bg-white/10 p-10 backdrop-blur-xl shadow-2xl">
              <div className="flex justify-center">
                <BookOpen className="h-20 w-20 text-white/90" />
              </div>

              <p className="mt-6 text-center text-lg font-semibold text-slate-200">
                Your digital library awaits
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {["Trending", "New", "Curated"].map((label) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-6 text-center text-sm font-semibold text-white backdrop-blur"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
