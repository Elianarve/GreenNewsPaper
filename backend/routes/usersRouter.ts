import express from 'express';
import { getUser, deleteUser, createdUser, updateUser, getOneUser } from '../controllers/usersController';
import { userValidator, updateUserValidator } from '../validators/usersValidator';
import handleValidationResults from '../helpers/validationHelper';
import { authRol } from '../middleware/rolMiddleware';

const router = express.Router();

router.get('/', authRol(['admin']), getUser);

router.delete('/:id', authRol(['admin']) ,deleteUser);

router.post('/', authRol(['admin']) ,userValidator, handleValidationResults, createdUser);

router.put('/:id', authRol(['admin']) ,updateUserValidator, handleValidationResults, updateUser);

router.get('/:id', authRol(['admin']) ,getOneUser);

export default router;