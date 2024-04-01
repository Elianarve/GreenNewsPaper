import { check } from "express-validator";
import  validateResultNews  from '../helpers/validateResult';
import { Request, Response, NextFunction } from 'express';

const newsValidator =[
    check('title')
        .exists()
        .notEmpty(),
    check('date')
        .exists()
        .notEmpty()
        .isDate(),
    check('description')
        .exists()
        .notEmpty(), 
    check('image')
        .exists(),
    (req: Request, res: Response, next: NextFunction) =>{
        validateResultNews(req, res, next)
    }
]

export default newsValidator;