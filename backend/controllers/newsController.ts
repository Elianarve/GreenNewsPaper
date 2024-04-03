import NewsModel from '../models/newsModel';
import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../interfaces/AuthenticatedRequestInterface';

export const getNews = async(req: Request, res: Response) => {
    try {
        const news = await NewsModel.findAll();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
}

export const deleteNews = async (req: Request, res: Response) => {
    const newsId = req.params.id;
    try {
            await NewsModel.destroy({ where: { id: newsId }});
        return res.status(201).send({ message: 'News deleted successfully' });

    } catch (error) {
        return res.status(500).send({ error: 'Internal Server Error' });
    }
};


export const createdNews = async (req: Request, res: Response) => {
    try {
        const createdNewNews = await NewsModel.create(req.body);       
        res.status(201).json(createdNewNews);
    } catch(error){
        return res.status(500).send({ error: 'Internal Server Error' });
    }
}

export const updateNews = async (req: Request, res: Response) => {   
    const newsId = req.params.id;
    try {
        await NewsModel.update(req.body,{  where: {id: newsId}});
        res.status(200).json({message: ` News: ${newsId}, Successfully updated`});
    } catch(error) {
        res.status(500).json({error: 'Internal Server Error'});
    }   
}


export const getOneNews = async (req: Request, res: Response) =>{
    const newsId = req.params.id;
    try {
        const news = await NewsModel.findOne({ where: { id: newsId}});
        res.status(200).json(news);
    } catch(error) {
        res.status(500).json({error: 'Internal Server Error'});
    }   
}