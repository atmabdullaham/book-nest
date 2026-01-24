"use client";

import { BookOpen, KeyRound, LogIn } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const ADMIN_EMAIL = "admin@booknest.com";
  const ADMIN_PASSWORD = "123456";

  const doLogin = ({ nextEmail, nextPassword }) => {
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (nextEmail === ADMIN_EMAIL && nextPassword === ADMIN_PASSWORD) {
        // Set cookie
        document.cookie = "auth=true; path=/; max-age=86400; samesite=lax"; // 24 hours
        window.dispatchEvent(new Event("auth-changed"));
        toast.success("Login successful! Redirecting to admin...");
        router.push("/add-book");
      } else {
        toast.error("Invalid email or password");
      }
      setLoading(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doLogin({ nextEmail: email, nextPassword: password });
  };

  const handleUseDemo = () => {
    setEmail(ADMIN_EMAIL);
    setPassword(ADMIN_PASSWORD);
  };

  return (
    <div className="min-h-svh bg-gradient-to-br from-slate-50 via-indigo-50 to-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg ring-1 ring-black/10">
              <BookOpen className="h-7 w-7" />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-950 mb-2">
              BookNest
            </h1>
            <h2 className="text-2xl font-bold text-slate-900">Admin Login</h2>
            <p className="text-slate-600 text-sm mt-3">
              Sign in to your admin account to manage books
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left: Demo Credentials */}
            <div className="bg-indigo-50/70 border border-indigo-200 rounded-2xl p-6">
              <p className="text-sm font-bold text-indigo-900 mb-3">
                <span className="inline-flex items-center gap-2">
                  <KeyRound className="h-4 w-4" /> Demo Credentials
                </span>
              </p>

              <div className="space-y-3 text-sm text-indigo-900/90">
                <p>
                  <span className="font-mono bg-white/70 px-2 py-1 rounded border border-indigo-200">
                    admin@booknest.com
                  </span>
                </p>
                <p>
                  <span className="font-mono bg-white/70 px-2 py-1 rounded border border-indigo-200">
                    123456
                  </span>
                </p>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleUseDemo}
                  className="btn btn-secondary w-full sm:col-span-2"
                >
                  Autofill
                </button>
              </div>

              <p className="mt-4 text-xs text-indigo-900/70 font-medium">
                Click “Autofill” to fill demo credentials.
              </p>
            </div>

            {/* Right: Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@booknest.com"
                  autoComplete="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white text-slate-900"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn btn-primary text-lg font-bold"
              >
                {loading ? (
                  "Logging in..."
                ) : (
                  <span className="inline-flex items-center justify-center gap-2">
                    <LogIn className="h-4 w-4" /> Sign In
                  </span>
                )}
              </button>

              <div className="text-center border-t border-slate-200 pt-5">
                <p className="text-slate-600 text-sm mb-3">
                  Not an admin?{" "}
                  <Link
                    href="/books"
                    className="text-indigo-700 hover:text-indigo-800 font-bold underline"
                  >
                    Browse books instead
                  </Link>
                </p>
                <Link
                  href="/"
                  className="text-slate-500 hover:text-slate-700 text-sm"
                >
                  ← Back to Home
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
