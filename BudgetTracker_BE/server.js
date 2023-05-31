import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';

dotenv.config();

const app = express();
const uri = process.env.DB_CONNECTION;
const port = process.env.PORT;

async function connect() {
  try {
    await mongoose.connect(uri, { dbName: 'expenseTrackerDB' });
    console.log('Connected to MongoDB 📀');
  } catch (error) {
    console.error(`Error message: ${error}`);
  }
}

connect();

app.use(express.json());

app.get('/api', (req, res) => {
  res.json('Welcome to Budget Tracker! 💸');
});

app.listen(port, () => {
  console.log(`Server running on port: ${port} 🎉`);
});

app.use('/users', userRoute);
