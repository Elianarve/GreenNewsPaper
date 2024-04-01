import { Sequelize } from 'sequelize';
import { DB_NAME,DB_PASSWORD,DB_USER } from '../config';


const connection_db = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql' // Puedes cambiar 'mysql' por el dialecto de tu base de datos (postgresql, sqlite, etc.)
});

export default connection_db;
