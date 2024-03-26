import NewsModel from '../models/newsModel';
import { Request, Response } from 'express';

export const getNews = async(req: Request, res: Response) => {
    try {
        const news = await NewsModel.findAll();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
}