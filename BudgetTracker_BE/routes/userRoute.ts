import express from 'express';
import userModel from '../models/user';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello User!');
});

router.post('/', async (req, res) => {
  // const user = req.body.user
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