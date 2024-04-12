import express from 'express';
import { register, login } from '../controllers/authController';
import { userValidator } from '../validators/usersValidator';
import handleValidationResults from '../helpers/validationHelper';
// import { authToken } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', userValidator, handleValidationResults, register);

router.post('/login', login);


export default router;