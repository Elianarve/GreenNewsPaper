// Importa los módulos necesarios
import connection_db from "./database/connection_db";
import express from "express";
import { PORT } from "./config";
import NewsModel from "./models/newsModel";
import UserModel from "./models/usersModel";
import userRouter from './routes/userRouter';
import newsRouter from './routes/newsRouter';
import authRouter from './routes/authRouter';



const app=express()
app.use(express.json());

// Configuración de las rutas
app.use('/users', userRouter);
app.use('/news', newsRouter);
app.use('/auth', authRouter);

  try {

    connection_db.authenticate();

   console.log('Connection has been established successfully.');
   NewsModel.sync();
   UserModel.sync();

   console.log("modelo conectado correctamente");

} catch (error) {
 
    console.error('Unable to connect to the database:', error);
  }

  // Middleware para permitir el análisis de cuerpos JSON


  app.listen(PORT, () => {
    console.log(`La API se esta escuchando en el puerto http://localhost:${PORT}`);
});