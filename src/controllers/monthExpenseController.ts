import { Request, Response } from 'express';
import * as monthExpenseService from '../services/monthExpenseService';

export const createMonthExpense = async (
    req: Request,
    res: Response
): Promise<void> => {
    const monthExpenseData = req.body;
    const userId = req.params.userId;
    try {
        const newMonthExpense = await monthExpenseService.createMonthExpense(
            userId,
            monthExpenseData
        );
        res.status(201).json(newMonthExpense);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};

export const getAllMonthExpenses = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const monthExpenses = await monthExpenseService.getAllMonthExpenses();
        res.status(200).json(monthExpenses);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};

export const getMonthExpenseById = async (
    req: Request,
    res: Response
): Promise<void> => {
    const monthExpenseId = req.params.id;
    try {
        const targetedMonthExpense =
            await monthExpenseService.getMonthExpenseById(monthExpenseId);
        res.status(200).json(targetedMonthExpense);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};

export const deleteMonthExpenseById = async (
    req: Request,
    res: Response
): Promise<void> => {
    const monthExpenseId = req.params.id;
    try {
        const targetedMonthExpense =
            await monthExpenseService.deleteMonthExpenseById(monthExpenseId);
        res.status(200).json(targetedMonthExpense);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};
