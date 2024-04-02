import express from 'express';
import { deleteNews, getNews, createdNews, updateNews, getOneNews } from '../controllers/newsController';
import newsValidator from '../validators/newsValidator';
import { verifyToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', verifyToken, getNews);

router.delete('/:id', deleteNews);

router.post('/', newsValidator, createdNews);

router.put('/:id', newsValidator, updateNews);

router.get('/:id', getOneNews);

export default router;