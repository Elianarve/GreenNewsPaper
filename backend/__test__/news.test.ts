import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';
import UsersModel from '../models/userModel';
import moment from 'moment';

const api = request(app);

describe('TESTING CRUD news', () => {

    describe('GET', () => {
        test('GET Response body must be an array and then show 200 status', async() => {
            const response = await api.get('/news')
            expect(response.status).toBe(200)
            expect(Array.isArray(response.body)).toBe(true)
        })    
    });

    describe('POST', () => {
        let newUser: any = {}
        let authorId;
        let token;

        beforeEach(async() => {
            newUser = await api.post('/auth').send({
                "name": "newUser",
                "email": "newuser@gmail.com",
                "password": "Unacontraseña!1"
            });

            authorId = newUser.body.registerNewUser.id;
            token = newUser.body.userToken;
        });

    test('POST response should be an object and then show 201 status', async() => {
            const actualDate = moment().format('YYYY-MM-DD');
            const response = await api.post('/news').set('Authorization', `Bearer ${token}`).send({
                "title": "testTitle",
                "date": actualDate,
                "description": "descripcionTest",
                "author_id": authorId,
                "image": "http://www.imagen.com"
            });
            expect(response.status).toBe(201);
            expect(typeof response.body).toBe('object')
    })

    afterAll(async() => {
        await UsersModel.destroy({ where: {id: newUser.body.registerNewUser.id} })
    })

    })
    
    afterAll( async () => {
        server.close();
        await connection_db.sync({force: true });
        console.log('All databases are clean')
     })
})
