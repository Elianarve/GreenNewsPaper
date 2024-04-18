import express from 'express';
import { deleteNews, getNews, createdNews, updateNews, getOneNews } from '../controllers/newsController';
import newsValidator from '../validators/newsValidator';
import { authToken } from '../middleware/authMiddleware';
import { authRol } from '../middleware/rolMiddleware';
import handleValidationResults from '../helpers/validationHelper';


const router = express.Router();

router.get('/', authToken, authRol(['user','admin']),  getNews); 

router.delete('/:id', authToken, authRol(['admin']), deleteNews);  

router.post('/',authToken, authRol(['user','admin']), newsValidator, handleValidationResults, createdNews);

router.put('/:id', authToken, authRol(['admin']), newsValidator, handleValidationResults, updateNews);

router.get('/:id',authToken, authRol(['user','admin']), getOneNews);

export default router;