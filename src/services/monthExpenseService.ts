import monthExpenseModel from '../models/monthExpense';
import userModel from '../models/user';
import { MonthExpense } from '../types/entities';
import { getUserByMonthExpenseId, returnError } from '../utils/helpers';

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
    } catch (error: unknown) {
        throw new Error('Could not create Month, ensure fields are correct');
    }
};

export const getAllMonthExpenses = async (): Promise<Array<MonthExpense>> => {
    try {
        const monthExpenses = await monthExpenseModel.find();
        if (!monthExpenses) {
            throw new Error('Could not retrieve list of Month Expenses');
        } else {
            return monthExpenses;
        }
    } catch (error: unknown) {
        throw new Error('Could not retrieve list of Month Expenses');
    }
};

export const getMonthExpenseById = async (
    monthExpenseId: string
): Promise<MonthExpense> => {
    try {
        const targetedMonthExpense = await monthExpenseModel.findById(
            monthExpenseId
        );
        if (!targetedMonthExpense) {
            throw new Error(
                'Could not retrieve Month Expense, ensure ID is correct'
            );
        } else {
            return targetedMonthExpense;
        }
    } catch (error: unknown) {
        throw new Error(
            'Could not retreive Month Expense, ensure ID is correct'
        );
    }
};

export const deleteMonthExpenseById = async (
    monthExpenseId: string
): Promise<MonthExpense> => {
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
        if (!targetedMonthExpense) {
            throw new Error(
                'Could not delete monthExpense, ensure ID is correct'
            );
        } else {
            return targetedMonthExpense;
        }
    } catch (error) {
        throw new Error('Could not delete monthExpense, ensure ID is correct');
    }
};
