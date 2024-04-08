import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';
import UsersModel from '../models/userModel';
import NewsModel from '../models/newsModel';
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
        await UsersModel.destroy({ where: {id: newUser.body.registerNewUser.id} });
    })

    });

    describe('DELETE', () => {
        let newUser: any = {};
        let authorId;
        let token;
        let newNew;
        let response;

        beforeEach(async() => {
            newUser = await api.post('/auth').send({
                "name": "newUser",
                "email": "newuser@gmail.com",
                "password": "Unacontraseña!1"
            });
            authorId = newUser.body.registerNewUser.id;
            token = newUser.body.userToken;

            newNew = await api.post('/news').set('Authorization', `Bearer ${token}`).send({
                "title": "testTitle",
                "date": '2000-01-01',
                "description": "descripcionTest",
                "author_id": authorId,
                "image": "http://www.imagen.com"
            })
            response = await api.delete(`/news/${newNew.body.id}`).send()

        });

        afterAll(async() => {
            await UsersModel.destroy({ where: {id: newUser.body.registerNewUser.id}})
        })

        test('Delete method should be 201 status', () => {
            expect(response.status).toBe(201)
        })
    })

    describe('PUT', () => {
        let newUser: any = {};
        let authorId;
        let token;
        let newNew;

        beforeEach(async() => {
            newUser = await api.post('/auth').send({
                "name": "newUser",
                "email": "newuser@gmail.com",
                "password": "Unacontraseña!1"
            });
            authorId = newUser.body.registerNewUser.id;
            token = newUser.body.userToken;

            newNew = await api.post('/news').set('Authorization', `Bearer ${token}`).send({
                "title": "testTitle",
                "date": '2000-01-01',
                "description": "descripcionTest",
                "author_id": authorId,
                "image": "http://www.imagen.com"
            });

        });

        test('Put response should be an object and return status 200', async() => {
            const response = await api.put(`/news/${newNew.body.id}`).send({
                "title": "updated testTitle",
                "date": '2000-01-01',
                "description": "updated descripcionTest",
                "author_id": authorId,
                "image": "http://www.imagen.com"
            });

            expect(response.status).toBe(200);
            expect(typeof response.body).toBe('object')
        });

        afterAll(async() => {
            await UsersModel.destroy({where: {id: newUser.body.registerNewUser.id}});
            await NewsModel.destroy({where: {id: newNew.body.id}})
        })
    })
    
    afterAll( async () => {
        server.close();
        await connection_db.sync({force: true });
        console.log('All databases are clean')
     })
})
