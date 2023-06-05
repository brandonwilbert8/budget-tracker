import monthExpenseModel from '../models/monthExpense';
import { MonthExpense } from '../types/entities';

export const createMonthExpense = async (
    monthExpenseData: MonthExpense
): Promise<MonthExpense> => {
    try {
        const monthExpense = new monthExpenseModel(monthExpenseData);
        const newMonthExpense = await monthExpense.save();
        return newMonthExpense;
    } catch (error) {
        throw new Error('Failed to create monthExpense');
    }
};

export const getAllMonthExpenses = async (): Promise<Array<MonthExpense>> => {
    try {
        const monthExpenses = await monthExpenseModel.find();
        return monthExpenses;
    } catch (error) {
        throw new Error('Failed to fetch all monthExpenses');
    }
};

export const getMonthExpenseById = async (
    monthExpenseId: string
): Promise<MonthExpense | null> => {
    try {
        const targetedMonthExpense = await monthExpenseModel.findById(
            monthExpenseId
        );
        return targetedMonthExpense;
    } catch (error) {
        throw new Error('Failed to find the targeted monthExpense');
    }
};

export const deleteMonthExpenseById = async (
    monthExpenseId: string
): Promise<MonthExpense | null> => {
    try {
        const targetedMonthExpense = await monthExpenseModel.findByIdAndDelete(
            monthExpenseId
        );
        return targetedMonthExpense;
    } catch (error) {
        throw new Error('Failed to delete the targeted monthExpense');
    }
};
