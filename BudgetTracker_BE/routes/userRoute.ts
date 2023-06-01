import express, { Request, Response } from 'express';
import userModel from '../models/user';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const targetedUser = await userModel.findById(req.params.id);
    res.json(targetedUser);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req: Request, res: Response) => {
  const user = new userModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
    monthlyIncome: req.body.monthlyIncome,
    savingsPlan: req.body.savingsPlan,
  });
  try {
    console.log(JSON.stringify(user));
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ message: err.message });
    console.log('ERROR: ' + err.message);
  }
});

export default router;
