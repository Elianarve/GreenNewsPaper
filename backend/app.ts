import connection_db from "./database/connection_db";
import { PORT } from './config';
import express from 'express';

const app = express();

// app.use(express.json());

try {
    connection_db.authenticate();
    console.log('Connection has been established successfully.👏👏');
   } catch (error) {
    console.error('Unable to connect to the database:', error);
   }

   app.listen(PORT, () => {
    console.log(`La API se esta escuchando en el puerto http://localhost:${PORT}`);
});
