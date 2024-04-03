import express from 'express';
import { deleteNews, getNews, createdNews, updateNews, getOneNews } from '../controllers/newsController';
import newsValidator from '../validators/newsValidator';
import handleValidationResults from '../helpers/validationHelper';
import { authenticateToken } from '../middleware/verifyToken';


const router = express.Router();

router.get('/', authenticateToken, getNews);

router.delete('/:id', deleteNews);

router.post('/', authenticateToken, newsValidator, handleValidationResults, createdNews);

router.put('/:id', authenticateToken, newsValidator, handleValidationResults, updateNews);

router.get('/:id', getOneNews);

export default router;