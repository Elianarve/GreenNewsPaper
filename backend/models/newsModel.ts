import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db";

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
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    tableName: 'news',
    timestamps: false
})

export default NewsModel;