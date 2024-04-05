import * as jwt from 'jsonwebtoken';
import { TK_SECRET } from '../config';

export const tokenSign = (user: any) => {
    const data = {
        userId: user.id,
        rol: user.rol
    };
    const token = jwt.sign(data, TK_SECRET, { expiresIn: '2h' });
    return token;
}

export const verifyToken = (tokenJwt: any) => {
    try {
        return jwt.verify(tokenJwt, TK_SECRET)       
    } catch (error) {
        return null; 
    }
}