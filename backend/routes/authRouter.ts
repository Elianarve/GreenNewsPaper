import express from 'express';
import { register, login } from '../controllers/authController';
import { userValidator } from '../validators/usersValidator';
import handleValidationResults from '../helpers/validationHelper';


const router = express.Router();

router.post('/register', userValidator, handleValidationResults, register);

router.post('/login', login);


export default router;