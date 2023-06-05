import { Request, Response } from 'express';
import * as expenseService from '../services/expenseService';

// Create a new expense
export const createExpense = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const newExpense = await expenseService.createExpense(req.body);
        res.status(200).json(newExpense);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
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
        const err = error as Error;
        res.status(500).json({ message: err.message });
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
        const err = error as Error;
        res.status(500).json({ message: err.message });
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
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};
// Delete expense by ID
export const deleteExpenseById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        await expenseService.deleteExpenseById(req.params.id);
        res.status(204).send();
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};
