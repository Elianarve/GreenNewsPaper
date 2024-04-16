// import request from 'supertest';
// import { app } from '../app';
// import {userModel} from '../models/userModel.ts';
// import {bcrypt} from bcrypt;

// const api = request(app);

// describe('LoginForm', () => {
//     let newUser:any;
//     let hashedPassword;

//     beforeEach(async() => {
//         newUser = usersModel.create(testUser)
//         hashedPassword = await bcrypt.hash(newUser.password,10)
//         newsUser = UserModel.create({...testUser, password:hashedPassword})
//     })
//     test('LoginForm') async( => {
        
//     }
// });

//     it ('should return sucess on valid credentials', async () => {
//     const res = await api
//     .post('http://localhost:8000/auth/login')
//     .send({ email: 'test@example.com', password: 'Unacontraseña!1'});
// expect(res.status).toBe(200);
// expect(res.body.message).toBe('Login successful');
//  });

// it('should return error on invalid credentials',async () => {
//     const res = await api
//         .post('http://localhost:8000/auth/login')
//         .send({ email: 'wrong@example.com', password: 'wrongpassword' });
//     expect(res.status).toBe(401);
//     expect(res.body.message).toBe('Invalid credentials');
//  });

