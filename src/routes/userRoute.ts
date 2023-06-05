import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id/history', userController.updateUserHistory);
router.delete('/:id', userController.deleteUserById);

export default router;
