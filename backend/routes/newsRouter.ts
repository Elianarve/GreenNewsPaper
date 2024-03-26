import express from 'express';
import { deleteNews, getNews, createdNews, updateNews, getOneNews } from '../controllers/newsController';

const router = express.Router();

router.get('/', getNews);

router.delete('/:id', deleteNews);

router.post('/', createdNews);

router.put('/:id', updateNews);

router.get('/:id', getOneNews);

export default router;