import expenseModel from '../models/expense';
import { Expense } from '../types/entities';

// Create a new Expense
export const createExpense = async (expenseData: Expense): Promise<Expense> => {
    try {
        return expenseModel.create(expenseData);
    } catch (error: unknown) {
        throw new Error('Could not create expense');
    }
};

// Get all expenses
export const getAllExpenses = async (): Promise<Array<Expense> | null> => {
    try {
        return expenseModel.find();
    } catch (error: unknown) {
        throw new Error('Could not retrieve list expenses');
    }
};

// Retrieve an expense via ID
export const getExpenseById = async (
    expenseId: string
): Promise<Expense | null> => {
    try {
        const targetExpense = expenseModel.findById(expenseId);
        if (!targetExpense) {
            throw new Error('could not get expense');
        } else {
            return targetExpense;
        }
    } catch (error: unknown) {
        throw new Error('Could not get expense');
    }
};

// Update an expense via ID
export const updateExpenseById = async (
    expenseId: string,
    updatedData: Expense
): Promise<Expense | null> => {
    try {
        const targetExpense = expenseModel.findByIdAndUpdate(
            expenseId,
            updatedData,
            {
                returnDocument: 'after',
            }
        );
        if (!targetExpense) {
            throw new Error('Could not update');
        } else {
            return targetExpense;
        }
    } catch (error: unknown) {
        throw new Error('Could not update');
    }
};

// Delete an expense
export const deleteExpenseById = async (expenseId: string): Promise<void> => {
    try {
        expenseModel.findByIdAndDelete(expenseId);
    } catch (error: unknown) {
        throw new Error('Could not delete');
    }
};
