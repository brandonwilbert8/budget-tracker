import mongoose from 'mongoose';

export const expenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Needs', 'Wants', 'Savings'],
    required: true,
  },
  cost: {
    type: Number,
    required: true,
    min: 1,
    max: 10000,
  },
  date: {
    type: Date,
    required: true,
  },
});

const expenseModel = mongoose.model('Expense', expenseSchema);

export default expenseModel;
