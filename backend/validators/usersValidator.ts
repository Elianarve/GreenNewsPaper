import { check } from "express-validator";

const userValidator = [
    check('name')
    .notEmpty().withMessage('Name field must not be empty.')
    .isString().withMessage('Name field must be a string.')
    .isLength({min:2}),

    check('email')
    .notEmpty().withMessage('Email field must not be empty.')
    .isEmail().withMessage('Email field must be a valid email.')
]