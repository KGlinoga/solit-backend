// const { DATE, Sequelize } = require('sequelize');
const { DATE } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init({
    // add properites here, ex:
    review_text: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    plot_rating: {
        type: DataTypes.INTEGER,
        allowNull:false
   },
    character_rating: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    accessibility_rating: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    pacing_rating: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "book",
            key: "id"
        }
    }
    // date_created: {
    //     type: DataTypes.DATEONLY,
    //     allowNull:false,
    //     default: DATE.NOW
    // }
    // emotion: {
    //     type: DataTypes.STRING,
    //     allowNull:false
    // }
},{
    sequelize, timestamps: true
});

module.exports= Review