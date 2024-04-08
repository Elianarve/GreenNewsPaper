import express from 'express';
import { getUser, deleteUser, createdUser, updateUser, getOneUser } from '../controllers/usersController';
import userValidator from '../validators/usersValidator';
import handleValidationResults from '../helpers/validationHelper';

const router = express.Router();

router.get('/', getUser);

router.delete('/:id', deleteUser);

router.post('/', userValidator, handleValidationResults, createdUser);

router.put('/:id', updateUser);

router.get('/:id', getOneUser);

export default router;