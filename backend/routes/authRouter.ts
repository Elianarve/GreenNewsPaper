import express from 'express';
import { register } from '../controllers/autControllers';
import { login } from "../controllers/autControllers"

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.post('')

export default router;


