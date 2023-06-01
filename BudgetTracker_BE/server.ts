import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute';
import { uri, db_port } from './config/db.config';

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

app.listen(db_port, () => {
  console.log(`Server running on port: ${db_port} 🎉`);
});

app.use(`${process.env.API_ROUTE}/users`, userRoute);
