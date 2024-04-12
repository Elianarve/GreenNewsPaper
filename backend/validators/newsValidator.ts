import { check } from "express-validator";

const newsValidator =[
    check('title')
        .notEmpty().withMessage('The title field must not be empty.')
        .isString().withMessage('The description field must be a string')
        .isLength({min: 3, max: 25}).withMessage('The title field must be between 3 and 25 characters long.'),

    check('date')
        .notEmpty().withMessage('The date field must not be empty.')
        .isDate().withMessage('The date field must be a date.')
        .isISO8601().withMessage('The date field must be in the format YYYY-MM-DD.')
        .custom((value) => {
            const newDate = new Date(value);
            const currentDate = new Date();
            if ( newDate > currentDate ) {
                throw new Error('The date field must be equal to or earlier than the current date.')
            }
            return true;
        }),

    check('description')
        .notEmpty().withMessage('The description field must not be empty.')
        .isString().withMessage('The description field must be a string'),

    check('image')
        .notEmpty().withMessage('The image field must not be empty.')
        .isURL().withMessage('The image field should be a valid URL.'),
]

export default newsValidator;