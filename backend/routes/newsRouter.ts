import express from 'express';
import { deleteNews, getNews, createdNews, updateNews, getOneNews } from '../controllers/newsController';
import newsValidator from '../validators/newsValidator';
<<<<<<< HEAD
import { authToken } from '../middlewares/authMiddleware';
import { authRol } from '../middlewares/rolMiddleware';
=======
import { authToken } from '../middleware/authMiddleware';
import { authRol } from '../middleware/rolMiddleware';
import handleValidationResults from '../helpers/validationHelper';
>>>>>>> feature-validations


const router = express.Router();

router.get('/', authToken, authRol(['user','admin']),  getNews); 

router.delete('/:id', authToken, authRol(['admin']), deleteNews);  

router.post('/',authToken, authRol(['user','admin']), newsValidator, handleValidationResults, createdNews);

router.put('/:id', authToken, authRol(['admin']), newsValidator, handleValidationResults, updateNews);

router.get('/:id',authToken, authRol(['user','admin']), getOneNews);

// router.get('/', getNews); 

// router.delete('/:id', authToken, deleteNews);  

// router.post('/',authToken, newsValidator, handleValidationResults, createdNews);

// router.put('/:id', authToken, newsValidator, handleValidationResults, updateNews);

// router.get('/:id',authToken, getOneNews);

export default router;