import express from 'express';
import { deleteNews, getNews, createdNews, updateNews, getOneNews } from '../controllers/newsController';
import newsValidator from '../validators/newsValidator';


const router = express.Router();

router.get('/', getNews);

router.delete('/:id', deleteNews);

router.post('/', newsValidator, createdNews);

router.put('/:id', newsValidator, updateNews);

router.get('/:id', getOneNews);

export default router;