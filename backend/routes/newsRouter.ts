import express from 'express';
import { deleteNews, getNews, createdNews, updateNews, getOneNews } from '../controllers/newsController';
import newsValidator from '../validators/newsValidator';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/',authenticateToken, getNews);

router.delete('/:id',authenticateToken, deleteNews);

router.post('/',authenticateToken, newsValidator, createdNews);

router.put('/:id',authenticateToken, newsValidator, updateNews);

router.get('/:id',authenticateToken, getOneNews);

export default router;


