import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

// GET Requests
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

// POST Requests
router.post('/', userController.createUser);

// DELETE Requests
router.delete('/:id', userController.deleteUserById);

export default router;
