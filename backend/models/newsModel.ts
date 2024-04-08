import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db";
import UsersModel from "./userModel";

const NewsModel = connection_db.define('News', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW 
    },
    description: {
        type: DataTypes.TEXT,
    },
    author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id' 
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    tableName: 'news',
    timestamps: false
})

UsersModel.hasMany(NewsModel, { foreignKey: 'author_id' });


export default NewsModel;
