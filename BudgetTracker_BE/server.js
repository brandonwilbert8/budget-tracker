import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import { uri, db_port } from './config/db.config.js';

dotenv.config({ path: '.env' });

const app = express();

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

app.listen(db_port, () => {
  console.log(`Server running on port: ${db_port} 🎉`);
});

app.use('/users', userRoute);
