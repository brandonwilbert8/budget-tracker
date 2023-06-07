import monthExpenseModel from '../models/monthExpense';
import * as monthExpenseService from '../services/monthExpenseService';

import userModel from '../models/user';
import { User } from '../types/entities';
import expenseModel from '../models/expense';

export const createUser = async (userData: User): Promise<User> => {
    try {
        const user = new userModel(userData);
        const newUser = await user.save();
        return newUser;
    } catch (error: unknown) {
        throw new Error('Could not create user, ensure all fields are correct');
    }
};

export const getAllUsers = async (): Promise<Array<User>> => {
    try {
        const users = await userModel.find();
        return users;
    } catch (error: unknown) {
        throw new Error('Could not retrieve all users');
    }
};

export const getUserById = async (userId: string): Promise<User> => {
    try {
        const targetedUser = await userModel.findById(userId);
        if (!targetedUser) {
            throw new Error('Could not ger user, ensure ID is correct');
        } else {
            return targetedUser;
        }
    } catch (error: unknown) {
        throw new Error('Could not get user, ensure ID is correct');
    }
};

export const deleteUserById = async (userId: string): Promise<User> => {
    try {
        const targetUser = await userModel.findByIdAndDelete(userId);
        targetUser?.history?.map(async (month) => {
            const monthExpense = await monthExpenseModel.findByIdAndDelete(
                month._id
            );
            monthExpense?.expenseCollection.map(async (expense) => {
                await expenseModel.findByIdAndDelete(expense._id);
            });
        });
        if (!targetUser) {
            throw new Error('Could not delete user, ensure ID is correct');
        } else {
            return targetUser;
        }
    } catch (error: unknown) {
        throw new Error('Could not delete user, ensure ID is correct');
    }
};
