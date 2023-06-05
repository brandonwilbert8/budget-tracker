import express, { NextFunction, Request, Response } from 'express';
import expenseModel from '../models/expense';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const expenses = await expenseModel.find();
        res.json(expenses);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', getExpense, async (req: Request, res: Response) => {
    res.send(res.expense);
});

router.post('/', async (req: Request, res: Response) => {
    const expense = new expenseModel({
        description: req.body.description,
        category: req.body.category,
        cost: req.body.cost,
        date: req.body.date,
    });
    try {
        const newExpense = await expense.save();
        res.status(200).json(newExpense);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', getExpense, async (req: Request, res: Response) => {
    const objectId = req.params.id;
    const updateExpense = req.body;

    try {
        const updatedExpense = await expenseModel.findByIdAndUpdate(
            objectId,
            updateExpense,
            {
                returnDocument: 'after',
            }
        );
        res.status(200).json(updatedExpense);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
});

router.delete('/:id', getExpense, async (req: Request, res: Response) => {
    const objectId = req.params.id;
    try {
        await expenseModel.findByIdAndDelete(objectId);
        res.status(200).json({ message: 'Deleted Expense' });
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
});

async function getExpense(req: Request, res: Response, next: NextFunction) {
    let expense;
    try {
        expense = await expenseModel.findById(req.params.id);
        if (expense === null) {
            return res.status(404).json({ message: 'Cannot find expense' });
        }
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }

    res.expense = expense;
    next();
}

export default router;
