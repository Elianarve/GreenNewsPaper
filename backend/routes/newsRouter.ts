import express from 'express';
import { deleteNews, getNews, createdNews, updateNews, getOneNews } from '../controllers/newsController';
import newsValidator from '../validators/newsValidator';
import { authToken } from '../middlewares/authMiddleware';
import { authRol } from '../middlewares/rolMiddleware';


const router = express.Router();

router.get('/', authToken, authRol(['user','admin']),  getNews); 

router.delete('/:id', authToken, authRol(['admin']), deleteNews);  

router.post('/', authToken, authRol(['user','admin']), createdNews);

router.put('/:id', authToken, authRol(['admin']), newsValidator, updateNews);

router.get('/:id', authRol(['user','admin']), authToken, getOneNews);

export default router;