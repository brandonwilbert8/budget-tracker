import express from 'express';
import userModel from '../models/user.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello User!');
});

router.post('/', async (req, res) => {
  const user = new userModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
    monthlyIncome: req.body.monthlyIncome,
    savingsPlan: req.body.savingsPlan,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log('ERROR: ' + error.message);
  }
});

export default router;
