import express from 'express';
import { register, login } from '../controllers/authController';
//  import { authToken } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', register);

router.post('/login', login);


export default router;