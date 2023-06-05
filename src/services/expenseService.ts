import expenseModel from '../models/expense';
import { Expense } from '../types/entities';

// Create a new Expense
export const createExpense = async (expenseData: Expense): Promise<Expense> => {
    return expenseModel.create(expenseData);
};

// Get all expenses
export const getAllExpenses = async (): Promise<Array<Expense> | null> => {
    return expenseModel.find();
};

// Retrieve an expense via ID
export const getExpenseById = async (
    expenseId: string
): Promise<Expense | null> => {
    return expenseModel.findById(expenseId);
};

// Update an expense via ID
export const updateExpenseById = async (
    expenseId: string,
    updatedData: Expense
): Promise<Expense | null> => {
    return expenseModel.findByIdAndUpdate(expenseId, updatedData, {
        returnDocument: 'after',
    });
};

// Delete an expense
export const deleteExpenseById = async (expenseId: string): Promise<void> => {
    expenseModel.findByIdAndDelete(expenseId);
};
