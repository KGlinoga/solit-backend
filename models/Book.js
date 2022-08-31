const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init({
    // add properites here, ex:
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
    description: {
        type: DataTypes.STRING,
        allowNull:false
    },
    ISBN: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    avg_plotRating: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    avg_characterRating: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    avg_accessRating: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    avg_paceRating: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
},{
    sequelize
});

module.exports= Book