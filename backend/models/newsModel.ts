import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db';
import UserModel from './usersModel';


const NewsModel = connection_db.define('news', 
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    userId: { // Añade esta columna para la clave foránea
      type: DataTypes.INTEGER,
      allowNull: false,
        references: {
            model: 'users',
            key: 'id' 
        }
    }
  },
  {
    tableName: 'newsnotice', // Nombre de la tabla en la base de datos
    timestamps: false // Deshabilitar los campos createdAt y updatedAt
  }
);

UserModel.hasMany(NewsModel, { foreignKey: 'userId' });
export default NewsModel;



