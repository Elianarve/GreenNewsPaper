import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { TK_SECRET } from '../config';

export const verifyToken = async (req: Request, res: Response, next: NextFunction) =>{
    const authToken = req.headers['authorization'];
    const nToken = authToken && authToken.split(' ')[1];
    if(!nToken){
        return res.status(401).send({ error: 'No autenticado' });
    }
    jwt.verify(nToken, TK_SECRET, (err) =>{
        if (err) {
        return res.status(403).send({ error: 'Token invalido' }); 
        }
    })
    next();
}