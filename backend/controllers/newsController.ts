import { Request, Response } from 'express';
import NewsModel from '../models/newsModel';

// Obtener todas las noticias
export const getAllNews = async (req: Request, res: Response) => {
  try {
    const news = await NewsModel.findAll();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las noticias' });
  }
};

// Obtener una noticia por su ID
export const getNewsById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const news = await NewsModel.findByPk(id);
    if (!news) {
      res.status(404).json({ message: 'Noticia no encontrada' });
      return;
    }
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la noticia' });
  }
};

// Crear una nueva noticia
export const createNews = async (req: Request, res: Response) => {
  const { title, publishedAt, description, authorId, image } = req.body;
  try {
    const news = await NewsModel.create({
      title,
      publishedAt,
      description,
      authorId,
      image
    });
    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la noticia' });
  }
};

// Actualizar una noticia
export const updateNews = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, publishedAt, description, authorId, image } = req.body;
  try {
    const news = await NewsModel.findByPk(id);
    if (!news) {
      res.status(404).json({ message: 'Noticia no encontrada' });
      return;
    }
    await news.update({
      title,
      publishedAt,
      description,
      authorId,
      image
    });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la noticia' });
  }
};

// Eliminar una noticia
export const deleteNews = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const news = await NewsModel.findByPk(id);
    if (!news) {
      res.status(404).json({ message: 'Noticia no encontrada' });
      return;
    }
    await news.destroy();
    res.json({ message: 'Noticia eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la noticia' });
  }
};


