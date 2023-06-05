import express, { Request, Response } from 'express';
import userModel from '../models/user';
import monthExpenseModel from '../models/monthExpense';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await userModel.find();
        console.log('Found all users → ' + JSON.stringify(users));
        res.json(users);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const objectId = req.params.id;
        const targetedUser = await userModel.findById(objectId);
        console.log('Found → ' + JSON.stringify(targetedUser));
        res.json(targetedUser);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req: Request, res: Response) => {
    const user = new userModel(req.body);
    try {
        const newUser = await user.save();
        console.log('Adding → ' + JSON.stringify(user));
        res.status(201).json(newUser);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(400).json({ message: err.message });
        console.log('ERROR: ' + err.message);
    }
});

router.put('/:id/history', async (req: Request, res: Response) => {
    const objectId = req.params.id;
    const monthExpense = new monthExpenseModel(req.body);
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            objectId,
            {
                $push: {
                    history: monthExpense,
                },
            },
            {
                returnDocument: 'after',
            }
        );
        await monthExpense.save();
        console.log(
            'Adding → ' +
                JSON.stringify(monthExpense) +
                'to → ' +
                JSON.stringify(updatedUser)
        );
        res.status(201).json(updatedUser);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(400).json({ message: err.message });
        console.log('ERROR: ' + err.message);
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const objectId = req.params.id;
        const targetedUser = await userModel.findByIdAndDelete(objectId);
        console.log('Deleted → ' + JSON.stringify(targetedUser));
        res.json(targetedUser);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
});

export default router;
