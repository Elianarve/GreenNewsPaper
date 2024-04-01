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



//validaciones