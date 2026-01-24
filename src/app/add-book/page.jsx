import AddBookForm from "@/components/forms/AddBookForm";
import { Plus } from "lucide-react";

export default function AddBookPage() {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="section-title mb-4 inline-flex items-center justify-center gap-2">
            <Plus className="h-6 w-6 text-blue-700" /> Add New Book
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg font-medium">
            Fill out the form below to add a new book to the BookNest
            collection.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto border-2 border-blue-100 hover:shadow-2xl transition-shadow duration-300">
          <AddBookForm />
        </div>
      </div>
    </div>
  );
}
