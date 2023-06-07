import monthExpenseModel from '../models/monthExpense';
import userModel from '../models/user';
import { MonthExpense } from '../types/entities';
import { getUserByMonthExpenseId } from '../utils/helpers';

export const createMonthExpense = async (
    userId: string,
    monthExpenseData: MonthExpense
): Promise<MonthExpense> => {
    try {
        const monthExpense = new monthExpenseModel(monthExpenseData);
        const newMonthExpense = await monthExpense.save();
        await userModel.findByIdAndUpdate(
            userId,
            {
                $push: {
                    history: newMonthExpense,
                },
            },
            {
                returnDocument: 'after',
            }
        );
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
        const targetedUser = await getUserByMonthExpenseId(monthExpenseId);
        await userModel
            .findByIdAndUpdate(
                targetedUser?.id,
                {
                    $pull: { history: { _id: monthExpenseId } },
                },
                {
                    returnDocument: 'after',
                }
            )
            .exec();
        const targetedMonthExpense = await monthExpenseModel.findByIdAndDelete(
            monthExpenseId
        );
        return targetedMonthExpense;
    } catch (error) {
        throw new Error('Failed to delete the targeted monthExpense');
    }
};
