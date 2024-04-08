import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { TK_SECRET } from '../config';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
        return res.status(401).send({ error: 'No authentication token provided.' })
    };

    jwt.verify(token, TK_SECRET, (err) => {
        if(err) {
            return res.status(403).send({ error: 'Invalid Token.'})
        };

    next();
    })
}