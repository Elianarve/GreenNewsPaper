//register y login
import { Request, Response } from 'express';
import UsersModel from "../models/userModel";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../interfaces/userInterface';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        const registerNewUser = await UsersModel.create(req.body)       
        res.status(201).json(registerNewUser);
    }catch(error){
        return res.status(500).send({ error: 'Internal Server Error' });
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const user = await UsersModel.findOne({ where: {email: req.body.email } }) as User | null;
        if(!user) {
            return res.status(404).send({ error: "Usuario no encontrado"});
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!passwordMatch) {
            return res.status(401).send( {error: "Contraseña incorrecta"});
        }

        const token = jwt.sign({userId: user.id, email: user.email }, 'secreto', { expiresIn: '2h'});

        res.status(200).send({
            message: "Inicio de sesión correcto",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            },
            tokenUser: token
        });
    } catch(error) {
        return res.status(500).send({ error: "Internal Server Error"});
    }
}



//validaciones