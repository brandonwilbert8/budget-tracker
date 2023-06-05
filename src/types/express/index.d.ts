import express from 'express';

declare global {
  namespace Express {
    interface Request {
      expense?: any;
    }
    interface Response {
      expense?: any;
    }
  }
}
