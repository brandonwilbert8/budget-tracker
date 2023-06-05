import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const createUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    const userData = req.body;
    try {
        const newUser = await userService.createUser(userData);
        res.status(201).json(newUser);
    } catch (error: unknown) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};

export const getAllUsers = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};

export const getUserById = async (
    req: Request,
    res: Response
): Promise<void> => {
    const userId = req.params.id;
    try {
        const targetedUser = await userService.getUserById(userId);
        res.status(200).json(targetedUser);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};

export const deleteUserById = async (
    req: Request,
    res: Response
): Promise<void> => {
    const userId = req.params.id;
    try {
        const targetedUser = await userService.deleteUserById(userId);
        res.status(200).json(targetedUser);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};

export const updateUserHistory = async (
    req: Request,
    res: Response
): Promise<void> => {
    const userId = req.params.id;
    const monthExpenseData = req.body;
    try {
        const updatedUser = await userService.updateUserHistory(
            monthExpenseData,
            userId
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};
