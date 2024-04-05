import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';

const api = request(app);

test('Simple test', () => {
    expect(2+2).toBe(4);
});
