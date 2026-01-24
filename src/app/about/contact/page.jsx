import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center space-y-6">
          <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg ring-1 ring-black/10">
            <Mail className="h-8 w-8" />
          </div>
          <h1 className="section-title">Contact Us</h1>
          <p className="text-gray-700 text-lg font-medium leading-relaxed">
            We&apos;d love to hear from you! Get in touch with us at:
          </p>
          <div className="bg-white/90 backdrop-blur rounded-3xl p-8 border border-blue-200 mt-8 shadow-xl ring-1 ring-black/5 text-left">
            <p className="text-sm font-bold text-blue-700 mb-2 inline-flex items-center gap-2">
              <Mail className="h-4 w-4" /> Email
            </p>
            <a
              href="mailto:info@booknest.com"
              className="text-lg font-extrabold text-gray-900 hover:text-blue-700 transition-colors"
            >
              info@booknest.com
            </a>
            <div className="mt-6 text-gray-700">
              <p className="text-sm font-bold text-blue-700 mb-2 inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> Phone
              </p>
              <p className="font-semibold">+1 (555) 123-4567</p>
            </div>
            <div className="mt-6 text-gray-700">
              <p className="text-sm font-bold text-blue-700 mb-2 inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Address
              </p>
              <p className="font-semibold">
                123 Book Street
                <br />
                Literary City, USA
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Link
              href="/"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" /> Go back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
