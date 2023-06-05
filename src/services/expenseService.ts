import expenseModel from '../models/expense';
import { Expense } from '../types/entities';

// Create a new Expense
export async function createExpense(expenseData: Expense) {
    return expenseModel.create(expenseData);
}

// Retrieve an expense via ID
export async function getExpenseById(expenseId: string) {
    return expenseModel.findById(expenseId);
}

// Update an expense via ID
export async function updateExpenseById(
    expenseId: string,
    updatedData: Expense
) {
    return expenseModel.findByIdAndUpdate(expenseId, updatedData);
}

// Delete an expense
export async function deleteExpenseById(expenseId: string) {
    return expenseModel.findByIdAndDelete(expenseId);
}
