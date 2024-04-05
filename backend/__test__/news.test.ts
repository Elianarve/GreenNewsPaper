import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';

const api = request(app);

test('GET', async() => {
    const response = await api.get('/news')
    expect(response.status).toBe(200)
})

afterAll( async () => {
    server.close();
    await connection_db.sync({force: true });
    console.log('All databases are clean')
 })