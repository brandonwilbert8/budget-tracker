import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const uri = process.env.DB_CONNECTION;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
}

connect();

app.get('/api', (req, res) => {
  res.json('Welcome to Budget Tracker!');
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
