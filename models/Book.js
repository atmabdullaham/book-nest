import mongoose from 'mongoose';

const DEFAULT_COVER =
  "https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=600&fit=crop";

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters']
    },
    author: {
      type: String,
      required: [true, 'Please provide an author'],
      trim: true,
      maxlength: [100, 'Author name cannot be more than 100 characters']
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
      min: [0, 'Price cannot be negative']
    },
    category: {
      type: String,
      required: [true, 'Please provide a category'],
      enum: [
        'Fiction',
        'Self Improvement',
        'History',
        'Psychology',
        'Technology',
        'Strategy',
        'Science',
        'Biography',
        'Mystery',
        'Romance'
      ]
    },
    description: {
      type: String,
      default: "",
      maxlength: [1000, 'Description cannot be more than 1000 characters']
    },
    image: {
      type: String,
      trim: true,
      default: DEFAULT_COVER
    },
    rating: {
      type: Number,
      default: 4.5,
      min: [0, 'Rating cannot be less than 0'],
      max: [5, 'Rating cannot be more than 5']
    },
    reviews: {
      type: Number,
      default: 0,
      min: [0, 'Reviews cannot be negative']
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.models.Book || mongoose.model('Book', BookSchema);
