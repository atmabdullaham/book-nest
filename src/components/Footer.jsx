import { ArrowUp, BookOpen, Link2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-300 py-16 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-x-0 -top-1 h-1 bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-500/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 border border-white/15">
                <BookOpen className="h-5 w-5 text-white" />
              </span>
              <span className="text-white">BookNest</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Your gateway to discovering amazing books and building your
              personal library.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-lg flex items-center gap-2">
              <Link2 className="h-5 w-5 text-indigo-300" /> Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/books"
                  className="text-slate-400 hover:text-indigo-300 hover:translate-x-1 transition-all font-medium"
                >
                  → Browse Books
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-slate-400 hover:text-indigo-300 hover:translate-x-1 transition-all font-medium"
                >
                  → About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-slate-400 hover:text-indigo-300 hover:translate-x-1 transition-all font-medium"
                >
                  → Admin Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-indigo-300" /> Categories
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/books"
                  className="text-slate-400 hover:text-indigo-300 hover:translate-x-1 transition-all font-medium"
                >
                  → Fiction
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="text-slate-400 hover:text-indigo-300 hover:translate-x-1 transition-all font-medium"
                >
                  → Self Improvement
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="text-slate-400 hover:text-indigo-300 hover:translate-x-1 transition-all font-medium"
                >
                  → History
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-lg flex items-center gap-2">
              <Phone className="h-5 w-5 text-indigo-300" /> Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-indigo-300" /> info@booknest.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-indigo-300" /> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-indigo-300" /> 123 Book Street,
                Literary City
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-slate-500">
              &copy; {currentYear} BookNest. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#"
                className="text-slate-400 hover:text-indigo-300 hover:underline transition-colors font-medium"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-indigo-300 hover:underline transition-colors font-medium"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-indigo-300 hover:underline transition-colors font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 px-4 py-2 text-sm font-bold transition-colors"
            >
              Back to top <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
