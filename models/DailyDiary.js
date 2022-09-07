const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DailyDiary extends Model {}

DailyDiary.init({
    diary_title: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    book_title: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    diary_text: {
        type: DataTypes.TEXT,
        allowNull:false
    }

},{
    sequelize, timestamps: true
});

module.exports= DailyDiary