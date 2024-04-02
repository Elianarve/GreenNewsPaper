import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from 'express';

const validateResultUsers = (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    next();
};

export default validateResultUsers;