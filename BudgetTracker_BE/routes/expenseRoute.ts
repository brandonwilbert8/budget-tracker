import express, { Request, Response } from 'express';
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

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const targetedExpense = await expenseModel.findById(req.params.id);
    res.json(targetedExpense);
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ message: err.message });
  }
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
    res.status(400).json({ message: err.message });
    console.log('ERROR: ' + err.message);
  }
});

export default router;
