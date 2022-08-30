const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init({
    // add properites here, ex:
    name: {
         type: DataTypes.STRING,
         allowNull:false
    },
    username: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false
    }
    // id: {
    //     type:DataTypes.INTEGER
        
    // }
    // dailyDiary: {
    //     type: 
    //     allowNull: true
    // },
    // followerCount: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true
    // }
},{
    sequelize
});

module.exports= User