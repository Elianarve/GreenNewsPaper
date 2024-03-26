import connection_db from "./database/connection_db";
import { PORT } from './config';
import express from 'express';
import NewsModel from "./models/newsModel";
import newsRouter from './routes/newsRouter';

const app = express();

app.use(express.json());

app.use('/news', newsRouter)

try {
    connection_db.authenticate();
    console.log('Connection has been established successfully.👏👏');

    NewsModel.sync();
    console.log('Model connected correctly 📋')

   } catch (error) {
    console.error('Unable to connect to the database:', error);
   }

   app.listen(PORT, () => {
    console.log(`La API se esta escuchando en el puerto http://localhost:${PORT}`);
});
