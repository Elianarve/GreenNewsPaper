import express from 'express';
import { getUser, deleteUser, createdUser, updateUser, getOneUser } from '../controllers/usersController';
import usersValidator from '../validators/usersValidator';

const router = express.Router();

router.get('/', getUser);

router.delete('/:id', deleteUser);

router.post('/', usersValidator, createdUser);

router.put('/:id', usersValidator, updateUser);

router.get('/:id', getOneUser);

export default router;