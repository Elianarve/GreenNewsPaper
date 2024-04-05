import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';

const api = request(app);

describe('TESTING CRUD news', () => {

    describe('GET', () => {
        test('GET Response body must be an array and then show 200 status', async() => {
            const response = await api.get('/news')
            expect(response.status).toBe(200)
            expect(Array.isArray(response.body)).toBe(true)
        })    
    });

    // describe('POST', () => {
    //     test('POST response should be an object and then show 201 status', async() => {
    //         const actualDate = new Date();
    //         const response = await api.post('/news').send({
    //             "title": "testTitle",
    //             "date": "2020-01-01",
    //             "description": "descripcionTest",
    //             "author_id": 1,
    //             "image": "http://www.imagen.com"
    //         });
    //         expect(response.status).toBe(201);

    // })

    // })
    
    afterAll( async () => {
        server.close();
        await connection_db.sync({force: true });
        console.log('All databases are clean')
     })
})
