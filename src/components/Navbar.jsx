"use client";

import { BookOpen, LogIn, LogOut, Menu, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Books" },
    { href: "/#about", label: "About" },
    { href: "/#how-it-works", label: "How It Works" },
  ];

  const isActive = (href) => {
    if (href.startsWith("/#")) return false;
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const handleLogout = () => {
    document.cookie = "auth=; max-age=0; path=/; samesite=lax";
    setIsLoggedIn(false);
    setIsMobileMenuOpen(false);
    window.dispatchEvent(new Event("auth-changed"));
    router.push("/");
  };

  useEffect(() => {
    const checkAuth = () => {
      const cookies = document.cookie.split("; ");
      const authCookie = cookies.find((c) => c.startsWith("auth="));
      const authValue = authCookie?.split("=")[1];
      setIsLoggedIn(authValue === "true");
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    checkAuth();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("focus", checkAuth);
    window.addEventListener("visibilitychange", checkAuth);
    window.addEventListener("auth-changed", checkAuth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("focus", checkAuth);
      window.removeEventListener("visibilitychange", checkAuth);
      window.removeEventListener("auth-changed", checkAuth);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200"
          : "bg-white border-b border-slate-200"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm ring-1 ring-black/10 group-hover:scale-[1.03] transition-transform">
              <BookOpen className="h-5 w-5" />
            </span>
            <span className="text-xl font-bold text-slate-950">BookNest</span>
            {isLoggedIn && (
              <span className="hidden sm:inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 px-2.5 py-1 text-xs font-bold">
                Admin
              </span>
            )}
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-xl transition-all duration-200 font-semibold relative ${
                  isActive(item.href)
                    ? "text-indigo-700 bg-indigo-50"
                    : "text-slate-700 hover:text-indigo-700 hover:bg-indigo-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <Link
                  href="/add-book"
                  className="hidden sm:block btn btn-primary"
                >
                  <span className="inline-flex items-center gap-2">
                    <Plus className="h-4 w-4" /> Add Book
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn btn-secondary inline-flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="btn btn-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="inline-flex items-center gap-2">
                  <LogIn className="h-4 w-4" /> Login
                </span>
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-900"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200 mt-4 animate-in fade-in-up">
            <nav className="space-y-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-semibold transition-all ${
                    isActive(item.href)
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-700 hover:bg-indigo-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-2 border-t border-slate-200">
                {isLoggedIn ? (
                  <div className="grid grid-cols-2 gap-3 px-4 pt-3">
                    <Link href="/add-book" className="btn btn-primary w-full">
                      <span className="inline-flex items-center justify-center gap-2">
                        <Plus className="h-4 w-4" /> Add Book
                      </span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="btn btn-secondary w-full inline-flex items-center justify-center gap-2"
                    >
                      <LogOut className="h-4 w-4" /> Logout
                    </button>
                  </div>
                ) : (
                  <div className="px-4 pt-3">
                    <Link
                      href="/login"
                      className="btn btn-primary w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        <LogIn className="h-4 w-4" /> Login
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
