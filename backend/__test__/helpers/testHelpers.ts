import moment from 'moment';

export const testUser = {
    "name": "newUser",
    "email": "newuser@gmail.com",
    "password": "Unacontraseña!1",
    "rol": "admin"
}
const actualDate = moment().format('YYYY-MM-DD');
export const testNew = {
    "title": "testTitle",
    "date": actualDate,
    "description": "descripcionTest",
    "image": "http://www.imagen.com"
}

export const updatedTestNew = {
        "title": "updated testTitle",
        "date": '2000-01-01',
        "description": "updated descripcionTest",
        "image": "http://www.imagen.com"
}