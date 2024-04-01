//register y login
import { Request, Response } from 'express';
import UsersModel from "../models/userModel";
import bcrypt from 'bcryptjs';

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
        const user: any = await UsersModel.findOne({ where: {email: req.body.email } });
        if(!user) {
            return res.status(404).send({ error: "Usuario no encontrado"});
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!passwordMatch) {
            return res.status(401).send( {error: "Contraseña incorrecta"});
        }

        res.status(200).send({ message: "Inicio de sesión correcto"})
    } catch(error) {
        return res.status(500).send({ error: "Internal Server Error"});
    }
}



//validaciones