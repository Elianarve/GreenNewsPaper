import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';
import UsersModel from '../models/userModel';
import { User } from '../interfaces/userInterface';
import { testUserAdmin, testUser, updatedTestUser, deleteUser } from './helpers/testHelpers';
import { tokenSign } from '../utils/token';
const api = request(app);

describe('TESTING CRUD users', ()=> {
    let newUser: any = {};
    let userToken;

    beforeEach(async() => {
        newUser = await UsersModel.create(
        testUserAdmin
    );
    userToken = tokenSign(newUser);
    })
    afterEach(async() => {
        await UsersModel.destroy({ where: {id: newUser.id}})
    })

    describe('GET', () => {
        test('GET Response body must be an array and then show 200 status', async() => {
            const response = await api.get('/users').set('Authorization', `Bearer ${userToken}`)
            expect(Array.isArray(response.body)).toBe(true)
            expect(response.status).toBe(200)
        })
    })

    describe('POST', () => {
        test('POST response should be an object and then return status 201', async() => {
            const response = await api.post('/users').set('Authorization', `Bearer ${userToken}`).send(
                testUser
            )
            console.log(response.body)
            expect(response.status).toBe(201)
            expect(typeof response).toBe('object')
        })
    })
    
    describe('DELETE', () => {
        let newDeleteUser: any;
        let response;
        beforeEach(async() => {
            newDeleteUser = await UsersModel.create(
            deleteUser
        )
        response = await api.delete(`/users/${newDeleteUser.id}`).set('Authorization', `Bearer ${userToken}`).send()
    });
        test('Delete response should show 201 status', async() => {
            expect(response.status).toBe(201)
        })
    });

        
    describe('PUT', () => {
        test('Put response should be an object and return status 201', async() => {
            const response = await api.put(`/users/${newUser.id}`).set('Authorization', `Bearer ${userToken}`).send(
                updatedTestUser
            );
            expect(response.status).toBe(200)
            expect(typeof response.body).toBe('object')
        })
    })

    afterAll( async () => {
        server.close();
        await connection_db.sync({force: true });
        console.log('All databases are clean')
     });
})
    
