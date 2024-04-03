import express from 'express';
import { registerUser, loginUser } from '../controllers/autController';
import userValidator from '../validators/usersValidator';
import handleValidationResults from '../helpers/validationHelper';

const router = express.Router();

router.post('/', userValidator, handleValidationResults, registerUser);
router.post('/login', loginUser)

export default router;