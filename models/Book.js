const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init({
    book_title: {
         type: DataTypes.STRING,
         allowNull:false
    },
    author: {
        type: DataTypes.STRING,
        allowNull:false
   },
    cover: {
        type: DataTypes.STRING,
        allowNull:false
    },
    ISBN: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
},{
    sequelize,
    freezeTableName: true,
    modelName: "book"
});

module.exports= Book

