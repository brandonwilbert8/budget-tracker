import userModel from '../models/user';
import monthExpenseModel from '../models/monthExpense';
import { MonthExpense, User } from '../types/entities';

export const createUser = async (userData: User): Promise<User> => {
    try {
        const user = new userModel(userData);
        const newUser = await user.save();
        return newUser;
    } catch (error) {
        throw new Error('Failed to create user');
    }
};

export const getAllUsers = async (): Promise<Array<User>> => {
    try {
        const users = await userModel.find();
        return users;
    } catch (error) {
        throw new Error('Failed to fetch all users');
    }
};

export const getUserById = async (userId: string): Promise<User | null> => {
    try {
        const targetedUser = await userModel.findById(userId);
        return targetedUser;
    } catch (error) {
        throw new Error('Failed to find the targeted user');
    }
};

export const deleteUserById = async (userId: string): Promise<void> => {
    try {
        await userModel.findByIdAndDelete(userId);
    } catch (error) {
        throw new Error('Failed to delete the targeted user');
    }
};

export const updateUserHistory = async (
    monthExpenseData: MonthExpense,
    userId: string
): Promise<User | null> => {
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
