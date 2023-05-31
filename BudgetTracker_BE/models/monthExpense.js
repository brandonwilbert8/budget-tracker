import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
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

const expenseSummarySchema = new mongoose.Schema({
  entries: {
    type: [expenseSchema],
  },
});

const monthExpenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    min: 2000,
    max: 3000,
  },
  expenseSummaryId: {
    type: [expenseSummarySchema],
    required: true,
  },
});

export const monthEntriesSchema = new mongoose.Schema({
  type: [monthExpenseSchema],
});
