import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db';


const UserModel = connection_db.define('users', 
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rol: {
      type: DataTypes.STRING,
      defaultValue: "user",
      allowNull: false
    }
  },
  {
    tableName: 'users',
    timestamps: false
  }
);

export default UserModel;

