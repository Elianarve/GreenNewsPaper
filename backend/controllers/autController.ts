//register y login
import { Request, Response } from 'express';
import UsersModel from "../models/userModel";
import bcrypt from 'bcryptjs';
import { User } from '../interfaces/userInterface';
import tokenSign from '../token/token';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        const registerNewUser = await UsersModel.create(req.body)  ;
        const tokenSession = tokenSign(registerNewUser); 

        res.status(201).send({
            message: "REGISTER_CORRECT",
            registerNewUser,
            userToken: tokenSession
        });
    }catch(error){
        return res.status(500).send({ error: 'Internal Server Error' });
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const user = await UsersModel.findOne({ where: {email: req.body.email } }) as User | null;
        if(!user) {
            return res.status(404).send({ error: "USER_NOT_FOUND"});
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!passwordMatch) {
            return res.status(401).send( {error: "PASSWORD_NOT_VALID"});
        }

        const tokenSession = tokenSign(user);

        res.status(200).send({
            message: "LOG_IN_CORRECT",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                rol: user.rol
            },
            userToken: tokenSession
        });
    } catch(error) {
        return res.status(500).send({ error: "Internal Server Error"});
    }
}



//validaciones