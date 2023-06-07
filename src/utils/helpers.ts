import { Request, Response } from 'express';
import userModel from '../models/user';
import monthExpenseModel from '../models/monthExpense';

// Helper for returning errors
export const returnError = (error: unknown, res?: Response, req?: Request) => {
    const err = error as Error;
    return res?.status(500).json({ name: err.name, message: err.message });
};

// Helper for getting a user by monthExpenseId
export const getUserByMonthExpenseId = async (monthExpenseId: string) => {
    return await userModel
        .findOne()
        .where('history._id')
        .equals(monthExpenseId)
        .exec();
};

// Helper for getting a monthExpense by expenseId
export const getMonthExpenseByExpenseId = async (expenseId: string) => {
    return await monthExpenseModel
        .findOne()
        .where('expenseCollection._id')
        .equals(expenseId)
        .exec();
};
