import express from 'express';
import {
    createExpenseHandler,
    getAllExpensesHandler,
    getExpenseByIdHandler,
    updateExpenseByIdHandler,
    deleteExpenseByIdHandler,
} from '../controllers/expenseController';

const router = express.Router();

router.get('/', getAllExpensesHandler);
router.get('/:id', getExpenseByIdHandler);
router.post('/', createExpenseHandler);
router.put('/:id', updateExpenseByIdHandler);
router.delete('/:id', deleteExpenseByIdHandler);

export default router;
