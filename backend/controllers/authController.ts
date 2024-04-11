import { tokenSign } from '../utils/token';
import { Request, Response } from 'express';
import UsersModel from "../models/userModel";
import bcrypt from 'bcryptjs';


export const register = async (req: Request, res: Response) => {
    try {
        const passwordHash = await bcrypt.hash(req.body.password, 10);
        req.body.password = passwordHash;
        const newUser = await UsersModel.create(req.body);
        const token = tokenSign(newUser);
        res.status(201).json({ message: 'Usuario registrado correctamente', data: newUser, token });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
}


export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        
        const user = await UsersModel.findOne({ where: { email } });

        if (!user) {
            return res.status(401).send({ error: 'Usuario no encontrado' });
        }
        const hashPassword = user?.get('password') as string;
        const checkPassword = await bcrypt.compare(password, hashPassword);
        const tokenSession = tokenSign(user);
        const userName = user?.get('name') as string;
        if (checkPassword) {
            const noPassword = { ...user.toJSON(), password: undefined }; //para esconder la contraseña en el navegador
            return res.send({
                message: `Usuario correcto, bienvenid@ ${userName}`,
                // data: user,
                data: noPassword,
                token: tokenSession
            });
        } else {
            return res.status(401).send({ error: 'Contraseña incorrecta' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Error interno del servidor' });
    }
}

