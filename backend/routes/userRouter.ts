import express from 'express';
import { getUser, deleteUser, createdUser, updateUser, getOneUser } from '../controllers/usersControllers';

const router = express.Router();

router.get('/', getUser);

router.delete('/:id', deleteUser);

router.post('/', createdUser);

router.put('/:id', updateUser);

router.get('/:id', getOneUser);



export default router;
