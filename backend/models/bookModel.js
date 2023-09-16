import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      publishYear: {
        type: Number,
        required: true,
      },
    },
    {
      timestamps: true, // automatically adds two fields to each document: createdAt and updatedAt
    }
  );
  
  export const Book = mongoose.model('Book', bookSchema);