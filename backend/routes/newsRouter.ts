import express from 'express';
import { deleteNews, getNews, createdNews, updateNews, getOneNews } from '../controllers/newsController';
import newsValidator from '../validators/newsValidator';
import handleValidationResults from '../helpers/validationHelper';


const router = express.Router();

router.get('/', getNews);

router.delete('/:id', deleteNews);

router.post('/', newsValidator, handleValidationResults, createdNews);

router.put('/:id', newsValidator, handleValidationResults, updateNews);

router.get('/:id', getOneNews);

export default router;