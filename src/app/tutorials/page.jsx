import { ArrowLeft, BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link";

const Tutorials = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center space-y-6">
          <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg ring-1 ring-black/10">
            <GraduationCap className="h-8 w-8" />
          </div>
          <h1 className="section-title">Tutorials & Guides</h1>
          <p className="text-gray-700 text-lg font-medium leading-relaxed">
            Check out our &quot;How It Works&quot; section on the home page to
            learn how to use BookNest and discover amazing books.
          </p>
          <div className="mt-10">
            <Link
              href="/#how-it-works"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" /> Learn How It Works
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300">
            <p className="text-gray-600 font-medium mb-4">Ready to explore?</p>
            <Link
              href="/books"
              className="btn btn-secondary inline-flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" /> Browse Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
