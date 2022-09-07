const { DATE } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init({
    review_title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    review_author: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    review_text: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    plot_rating: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            min: 0,
            max: 5,
        }
   },
    character_rating: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            min: 0,
            max: 5,
        }
    },
    accessibility_rating: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            min: 0,
            max: 5,
        }
    },
    pacing_rating: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            min: 0,
            max: 5,
        }
    },
    ol_key: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize, timestamps: true
});

module.exports= Review