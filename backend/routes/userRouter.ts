import express from 'express';
import { getUser, deleteUser, createdUser, updateUser, getOneUser } from '../controllers/usersControllers';
import usersValidator from '../validators/usersValidator';
// import { authToken } from '../middleware/authMiddleware';
// import { authRol } from '../middleware/rolMiddleware';

const router = express.Router();

router.get('/', getUser);

router.delete('/:id', deleteUser);

router.post('/', usersValidator, createdUser);

router.put('/:id', usersValidator, updateUser);

router.get('/:id', getOneUser);

export default router;