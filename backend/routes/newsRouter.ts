import express from 'express';
import { deleteNews, getNews, createdNews, updateNews, getOneNews } from '../controllers/newsController';
import newsValidator from '../validators/newsValidator';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = express.Router();

router.use(authenticateToken);

router.get('/', getNews);

router.delete('/:id', deleteNews);

router.post('/', newsValidator, createdNews);

router.put('/:id', newsValidator, updateNews);

router.get('/:id', getOneNews);

export default router;

