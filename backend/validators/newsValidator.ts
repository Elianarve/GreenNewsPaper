import { check } from "express-validator";

const newsValidator =[
    check('title')
        .notEmpty().withMessage('The title field must not be empty.')
        .isString().withMessage('The description field must be a string')
        .isLength({min: 3, max: 40}).withMessage('The title field must be between 3 and 40 characters long.'),

    check('description')
        .notEmpty().withMessage('The description field must not be empty.')
        .isString().withMessage('The description field must be a string')
        .isLength({min: 25, max: 60000}).withMessage('The title field must be between 25 and 60000 characters long.'),

    check('image')
        .notEmpty().withMessage('The image field must not be empty.')
        .isURL().withMessage('The image field should be a valid URL.'),
]

export default newsValidator;