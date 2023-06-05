import mongoose from 'mongoose';
import { monthExpenseSchema } from './monthExpense';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    lowercase: true,
    maxLength: 15,
  },
  monthlyIncome: {
    type: Number,
    required: true,
    min: 1,
    max: 20000,
  },
  savingsPlan: {
    type: String,
    required: true,
    enum: ['Basic', 'Advanced', 'Maximiser'],
  },
  history: {
    type: [monthExpenseSchema],
    required: false,
  },
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
