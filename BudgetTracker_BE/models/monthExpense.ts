import mongoose from 'mongoose';
import { expenseSummarySchema } from './expense';

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

const monthExpenseModel = mongoose.model('Month', monthEntriesSchema);

export default monthExpenseModel;
