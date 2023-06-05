import express from 'express';
import * as monthExpenseController from '../controllers/monthExpenseController';

const router = express.Router();

router.get('/', monthExpenseController.getAllMonthExpenses);
router.get('/:id', monthExpenseController.getMonthExpenseById);
router.post('/', monthExpenseController.createMonthExpense);
router.delete('/:id', monthExpenseController.deleteMonthExpenseById);

export default router;
