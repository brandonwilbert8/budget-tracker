import { Request, Response } from 'express';
import {
    createExpense,
    getAllExpenses,
    getExpenseById,
    updateExpenseById,
    deleteExpenseById,
} from '../services/expenseService';

// Create a new expense
export async function createExpenseHandler(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const newExpense = await createExpense(req.body);
        res.status(200).json(newExpense);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
}

// Get all expenses
export async function getAllExpensesHandler(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const expenses = await getAllExpenses();
        console.log(expenses);
        res.status(200).json(expenses);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
}

// Retrieve expense by ID
export async function getExpenseByIdHandler(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const expense = await getExpenseById(req.params.id);
        if (!expense) {
            res.status(404).json({ message: 'Expense not found!' });
        } else {
            res.status(200).json(expense);
        }
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
}
// Update expense by ID
export async function updateExpenseByIdHandler(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const updatedExpense = await updateExpenseById(req.params.id, req.body);
        res.status(200).json(updatedExpense);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
}
// Delete expense by ID
export async function deleteExpenseByIdHandler(
    req: Request,
    res: Response
): Promise<void> {
    try {
        await deleteExpenseById(req.params.id);
        res.status(204).send();
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
}
