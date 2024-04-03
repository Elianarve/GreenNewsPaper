import jwt from 'jsonwebtoken';
import { TK_SECRET } from '../config';

const tokenSign = (user: any) => {
    const data = {
        userId: user.id,
        rol: user.rol
    };
    const token = jwt.sign(data, TK_SECRET, { expiresIn: '2h' });
    return token;
}

export default tokenSign;