import { Request, Response } from 'express';
import * as expenseService from '../services/expenseService';
import { returnError } from '../utils/helpers';

// Create a new expense
export const createExpense = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const expenseData = req.body;
        const monthExpenseId = req.params.monthExpenseId;
        const newExpense = await expenseService.createExpense(
            expenseData,
            monthExpenseId
        );
        res.status(200).json(newExpense);
    } catch (error: unknown) {
        returnError(error, res);
    }
};

// Get all expenses
export const getAllExpenses = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const expenses = await expenseService.getAllExpenses();
        console.log(expenses);
        res.status(200).json(expenses);
    } catch (error: unknown) {
        returnError(error, res);
    }
};

// Retrieve expense by ID
export const getExpenseById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const expense = await expenseService.getExpenseById(req.params.id);
        if (!expense) {
            res.status(404).json({ message: 'Expense not found!' });
        } else {
            res.status(200).json(expense);
        }
    } catch (error: unknown) {
        returnError(error, res);
    }
};
// Update expense by ID
export const updateExpenseById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const updatedExpense = await expenseService.updateExpenseById(
            req.params.id,
            req.body
        );
        res.status(200).json(updatedExpense);
    } catch (error: unknown) {
        returnError(error, res);
    }
};
// Delete expense by ID
export const deleteExpenseById = async (
    req: Request,
    res: Response
): Promise<void> => {
    const expenseId = req.params.id;
    try {
        const targetedExpense = await expenseService.deleteExpenseById(
            expenseId
        );
        res.status(200).json(targetedExpense);
    } catch (error: unknown) {
        returnError(error, res);
    }
};
