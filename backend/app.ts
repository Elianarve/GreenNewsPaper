import connection_db from "./database/connection_db";
import { PORT } from './config';
import express from 'express';
import NewsModel from "./models/newsModel";
import newsRouter from './routes/newsRouter';
import usersRouter from './routes/usersRouter';
import UsersModel from "./models/userModel";
import authRouter from './routes/authRouter';
import cors from 'cors';


export const app = express();
app.use(cors());


app.use(express.json());

app.use('/news', newsRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

try {
    connection_db.authenticate();
    console.log('Connection has been established successfully.👏👏');

    NewsModel.sync();
    console.log('Model News connected correctly 📋');

    UsersModel.sync();
    console.log('Model Users connected correctly 👤👤');

   } catch (error) {
    console.error('Unable to connect to the database:', error);
   }

export const server = app.listen(PORT, () => {
    console.log(`La API se esta escuchando en el puerto http://localhost:${PORT}`);
});

export default app;