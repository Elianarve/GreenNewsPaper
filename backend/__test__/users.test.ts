import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';
import UsersModel from '../models/userModel';
import { User } from '../interfaces/userInterface';

const api = request(app);

describe('TESTING CRUD users', ()=> {

    describe('GET', () => {
        test('GET Response body must be an array and then show 200 status', async() => {
            const response = await api.get('/users')
            expect(Array.isArray(response.body)).toBe(true)
            expect(response.status).toBe(200)
        })
    })

    describe('POST', () => {
        test('POST response should be an object and then return status 201', async() => {
            const response = await api.post('/users').send({
                "name": "test",
                "email": "test@gmail.com",
                "password": "Unacontraseña!1"
            })
            expect(response.status).toBe(201)
            expect(typeof response).toBe('object')
        })
    })
    
    describe('DELETE', () => {
        let createdUser: any = {};
        let response;

        beforeEach(async() => {
            createdUser = await UsersModel.create({
                "name": "testing",
                "email": "testing@gmail.com",
                "password": "Unacontraseña!1"
            });
            response = await api.delete(`/users/${createdUser.id}`).send()
        })

        test('Delete response should show 201 status', () => {
            expect(response.status).toBe(201)
        })
    })
    
    afterAll( async () => {
        server.close();
        await connection_db.sync({force: true });
        console.log('All databases are clean')
     });
})