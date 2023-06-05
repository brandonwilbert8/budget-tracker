import { Request, Response } from 'express';

// Helper for returning errors
export const returnError = (error: unknown, res?: Response, req?: Request) => {
    const err = error as Error;
    return res?.status(500).json({ name: err.name, message: err.message });
};
