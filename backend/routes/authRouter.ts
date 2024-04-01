import express from 'express';
import { registerUser } from '../controllers/autController';

const router = express.Router();

router.post('/', registerUser);

export default router;