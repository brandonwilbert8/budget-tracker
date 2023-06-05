import userModel from '../models/user';
import monthExpenseModel from '../models/monthExpense';
import { MonthExpense, User } from '../types/entities';

export const createUser = async (userData: User) => {
    try {
        const user = new userModel(userData);
        const newUser = await user.save();
        return newUser;
    } catch (error) {
        throw new Error('Failed to create user');
    }
};

export const getAllUsers = async () => {
    try {
        const users = await userModel.find();
        return users;
    } catch (error) {
        throw new Error('Failed to fetch all users');
    }
};

export const getUserById = async (userId: string) => {
    try {
        const targetedUser = await userModel.findById(userId);
        return targetedUser;
    } catch (error) {
        throw new Error('Failed to find the targeted user');
    }
};

export const deleteUserById = async (userId: string) => {
    try {
        const targetedUser = await userModel.findByIdAndDelete(userId);
        return targetedUser;
    } catch (error) {
        throw new Error('Failed to delete the targeted user');
    }
};

export const updateUserHistory = async (
    monthExpenseData: MonthExpense,
    userId: string
) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            {
                $push: {
                    history: monthExpenseData,
                },
            },
            {
                returnDocument: 'after',
            }
        );
        const monthExpense = new monthExpenseModel(monthExpenseData);
        await monthExpense.save();
        return updatedUser;
    } catch (error) {
        throw new Error('Failed to update the targeted user history');
    }
};
