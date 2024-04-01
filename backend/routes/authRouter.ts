import express from 'express';
import { register } from '../controllers/autControllers';


const router = express.Router();

router.post('/register', register);

router.post('')

export default router;


