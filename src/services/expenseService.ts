import expenseModel from '../models/expense';
import monthExpenseModel from '../models/monthExpense';
import { Expense } from '../types/entities';
import { getMonthExpenseByExpenseId } from '../utils/helpers';

// Create a new Expense
export const createExpense = async (
    expenseData: Expense,
    monthExpenseId: string
): Promise<Expense> => {
    try {
        const newExpense = await expenseModel.create(expenseData);
        await monthExpenseModel.findByIdAndUpdate(
            monthExpenseId,
            {
                $push: {
                    expenseCollection: newExpense,
                },
            },
            {
                returnDocument: 'after',
            }
        );
        return newExpense;
    } catch (error: unknown) {
        throw new Error('Could not create expense');
    }
};

// Get all expenses
export const getAllExpenses = async (): Promise<Array<Expense> | null> => {
    try {
        return await expenseModel.find();
    } catch (error: unknown) {
        throw new Error('Could not retrieve list expenses');
    }
};

// Retrieve an expense via ID
export const getExpenseById = async (
    expenseId: string
): Promise<Expense | null> => {
    try {
        const targetExpense = await expenseModel.findById(expenseId);
        if (!targetExpense) {
            throw new Error(
                'Could not get expense,  please ensure ID is correct'
            );
        } else {
            console.log(targetExpense);
            return targetExpense;
        }
    } catch (error: unknown) {
        throw new Error('Could not get expense, please ensure ID is correct');
    }
};

// Update an expense via ID
export const updateExpenseById = async (
    expenseId: string,
    updatedData: Expense
): Promise<Expense | null> => {
    try {
        const monthExpense = await getMonthExpenseByExpenseId(expenseId);
        const updatedExpense = await expenseModel.findByIdAndUpdate(
            expenseId,
            updatedData,
            {
                returnDocument: 'after',
            }
        );
        if (!updatedExpense) {
            throw new Error(
                'Could not update, please ensure the specified fields are updated correctly'
            );
        }
        await monthExpenseModel
            .findByIdAndUpdate(
                monthExpense?._id,
                {
                    $set: {
                        expenseCollection: updatedExpense,
                    },
                },
                {
                    returnDocument: 'after',
                }
            )
            .exec();
        return updatedExpense;
    } catch (error: unknown) {
        throw new Error(
            'Could not update, please ensure the specified fields are updated correctly'
        );
    }
};

// Delete an expense
export const deleteExpenseById = async (
    expenseId: string
): Promise<Expense | null> => {
    try {
        const targetExpense = await expenseModel.findByIdAndDelete(expenseId);
        if (!targetExpense) {
            throw new Error(
                'Could not delete expense, ensure that the ID is correct'
            );
        }
        const targetedMonthExpense = await getMonthExpenseByExpenseId(
            expenseId
        );
        await monthExpenseModel
            .findByIdAndUpdate(
                targetedMonthExpense?._id,
                {
                    $pull: { expenseCollection: { _id: expenseId } },
                },
                {
                    returnDocument: 'after',
                }
            )
            .exec();
        const targetedExpense = await expenseModel.findByIdAndDelete(expenseId);
        return targetedExpense;
    } catch (error: unknown) {
        throw new Error(
            'Could not delete expense, ensure that the ID is correct'
        );
    }
};
