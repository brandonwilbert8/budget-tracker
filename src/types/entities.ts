import { ObjectId } from 'mongoose';

// This file is dedicated to labelling types to use across the project directories
export type Expense = {
    description: string;
    category: string;
    cost: number;
    date: Date;
};

export type MonthExpense = {
    name: number;
    year: number;
    expenseCollection?: Array<Expense>;
};

export type User = {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    monthlyIncome: number;
    savingsPlan: string;
    history?: Array<MonthExpense>;
};
