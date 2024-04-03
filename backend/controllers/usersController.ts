import UsersModel from '../models/userModel';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

export const getUser = async(req: Request, res: Response) => {
    try {
        const news = await UsersModel.findAll();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
    try {
        await UsersModel.destroy({ where: { id: userId }});
        return res.status(201).send({ message: 'User deleted successfully' });

    } catch (error) {
        return res.status(500).send({ error: 'Internal Server Error' });
    }
};


export const createdUser = async (req: Request, res: Response) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        const createdNewUser = await UsersModel.create(req.body)       
        res.status(201).json(createdNewUser);
    }catch(error){
        return res.status(500).send({ error: 'Internal Server Error' });
    }
}

export const updateUser = async (req: Request, res: Response) => {   
    const userId = req.params.id;
    try {
        await UsersModel.update(req.body,{  where: {id: userId}});
        res.status(200).json({message: ` Users: ${userId}, Successfully updated`});
    } catch(error) {
        res.status(500).json({error: 'Internal Server Error'});
    }   
}


export const getOneUser = async (req: Request, res: Response) =>{
    const userId = req.params.id;
    try {
        const news = await UsersModel.findOne({ where: { id: userId}});
        res.status(200).json(news);
    } catch(error) {
        res.status(500).json({error: 'Internal Server Error'});
    }   
}