import express, { Request, Response } from 'express';
import monthExpenseModel from '../models/monthExpense';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const monthExpenses = await monthExpenseModel.find();
    res.json(monthExpenses);
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const targetedMonth = await monthExpenseModel.findById(req.params.id);
    res.json(targetedMonth);
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req: Request, res: Response) => {
  const monthExpense = new monthExpenseModel({
    name: req.body.name,
    year: req.body.year,
    expenseCollection: req.body.expenseCollection,
  });
  try {
    const newMonthExpense = await monthExpense.save();
    res.status(201).json(newMonthExpense);
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ message: err.message });
    console.log('ERROR: ' + err.message);
  }
});

export default router;
