import { Request, Response } from 'express';
import * as userService from '../services/userService';
import { returnError } from '../utils/helpers';

export const createUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    const userData = req.body;
    try {
        const newUser = await userService.createUser(userData);
        res.status(201).json(newUser);
    } catch (error: unknown) {
        returnError(error, res);
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
        returnError(error, res);
    }
};

export const getUserById = async (
    req: Request,
    res: Response
): Promise<void> => {
    const userId = req.params.id;
    try {
        const targetedUser = await userService.getUserById(userId);
        if (!targetedUser) {
            res.status(404).json({ message: 'User not found!' });
        } else {
            res.status(200).json(targetedUser);
        }
    } catch (error) {
        returnError(error, res);
    }
};

export const deleteUserById = async (
    req: Request,
    res: Response
): Promise<void> => {
    const userId = req.params.id;
    try {
        await userService.deleteUserById(userId);
        res.status(200).json({ message: 'Successfully removed the user!' });
    } catch (error) {
        returnError(error, res);
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
        returnError(error, res);
    }
};
