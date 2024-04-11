import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';
import UsersModel from '../models/userModel';
import NewsModel from '../models/newsModel';
import moment from 'moment';
import { testUser, testNew, updatedTestNew } from './helpers/testHelpers';
import { tokenSign } from '../utils/token';

const api = request(app);

describe('TESTING CRUD news',() => {
    let newUser: any = {};
    let userToken;

    beforeEach(async() => {
        newUser = await UsersModel.create(
        testUser
    );
    userToken = tokenSign(newUser);
    })
    afterEach(async() => {
        await UsersModel.destroy({ where: {id: newUser.id}})
    })

    describe('GET', () => {
        test('GET Response body must be an array and then show 200 status', async() => {
            const response = await api.get('/news').set('Authorization', `Bearer ${userToken}`)
            expect(response.status).toBe(200)
            expect(Array.isArray(response.body)).toBe(true)
        })    
    });

    describe('POST', () => {
    test('POST response should be an object and then show 201 status', async() => {
            const response = await api.post('/news').set('Authorization', `Bearer ${userToken}`).send(
                testNew
            );
            expect(response.status).toBe(201);
            expect(typeof response.body).toBe('object')
    })
    });

    describe('DELETE', () => {
        let newNew;
        let response;

        beforeEach(async() => {
            newNew = await api.post('/news').set('Authorization', `Bearer ${userToken}`).send(
                testNew
            )
            response = await api.delete(`/news/${newNew.body.id}`).set('Authorization', `Bearer ${userToken}`).send()

        });

        test('Delete method should be 200 status', () => {
            expect(response.status).toBe(200)
        })
    })

    describe('PUT', () => {
        let newNew;

        beforeEach(async() => {
            newNew = await api.post('/news').set('Authorization', `Bearer ${userToken}`).send(
                testNew
            );

        });

        test('Put response should be an object and return status 200', async() => {
            const response = await api.put(`/news/${newNew.body.id}`).set('Authorization', `Bearer ${userToken}`).send(
                updatedTestNew
            );

            expect(response.status).toBe(200);
            expect(typeof response.body).toBe('object')
        });

        afterAll(async() => {
            await NewsModel.destroy({where: {id: newNew.body.id}})
        })
    })
    
    afterAll( async () => {
        server.close();
        await connection_db.sync({force: true });
        console.log('All databases are clean')
     })
})
