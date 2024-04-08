import { check } from "express-validator";
import  validateResultUsers  from '../helpers/validateResultUsers';
import { Request, Response, NextFunction } from 'express';

const usersValidator =[
    check('name')
        .exists()
        .notEmpty(),
    check('email')
        .exists()
        .notEmpty()
        .isEmail(),
    check('password')
        .exists()
        .notEmpty()
        .isLength({ min: 6, max: 10 }), 
    check('rol')
        .exists(),
    (req: Request, res: Response, next: NextFunction) =>{
        validateResultUsers(req, res, next)
    }
]

export default usersValidator;