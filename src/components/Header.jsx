import { BookOpen, LogIn } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-white/70 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 font-extrabold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm ring-1 ring-black/10">
              <BookOpen className="h-4 w-4" />
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              BookNest
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: "/about", label: "About" },
              { href: "/tutorials", label: "Tutorials" },
              { href: "/register", label: "Register" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/login" className="btn btn-primary py-2 px-4 text-sm">
              <span className="inline-flex items-center gap-2">
                <LogIn className="h-4 w-4" /> Login
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
