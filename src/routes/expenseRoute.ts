import express from 'express';
import * as expenseController from '../controllers/expenseController';

const router = express.Router();

// GET Requests
router.get('/', expenseController.getAllExpenses);
router.get('/:id', expenseController.getExpenseById);

// POST Requests
router.post('/', expenseController.createExpense);

// PUT Requests
router.put('/:id', expenseController.updateExpenseById);

// DELETE Requests
router.delete('/:id', expenseController.deleteExpenseById);

export default router;
