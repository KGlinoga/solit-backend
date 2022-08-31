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
    }
    // date_created: {
    //     type: DataTypes.INTEGER,
    //     allowNull:false
    // }
    // emotion: {
    //     type: DataTypes.STRING,
    //     allowNull:false
    // }
},{
    sequelize
});

module.exports= Review