import { Sequelize } from "sequelize";
import { DB_NAME, DB_USER, DB_PASSWORD } from '../config'

const connection_db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

export default connection_db;