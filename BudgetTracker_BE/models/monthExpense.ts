import mongoose from 'mongoose';
import { expenseSchema } from './expense';

export const monthExpenseSchema = new mongoose.Schema({
  name: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  year: {
    type: Number,
    required: true,
    min: 2000,
    max: 3000,
  },
  expenseCollection: {
    type: [expenseSchema],
    required: true,
  },
});

const monthExpenseModel = mongoose.model('Month', monthExpenseSchema);

export default monthExpenseModel;
