import express from 'express';  // In ES6, inside package.json --> "type": "module" allows to use import statements instead of require.
import mongoose from 'mongoose';
import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const mongoDBURL = process.env.MONGODB_URI;

const app = express();

app.use(express.json());   // Middleware for parsing request body

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (req, res) => {
    return res.status(200).send("Welcome");
})

app.use('/books',booksRoute);   // Routes middleware

mongoose
  .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB database connected.")
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err)
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
})

