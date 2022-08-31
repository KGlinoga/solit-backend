const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init({
    // add properites here, ex:
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
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
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    }
    // password: {
    //     password: {
    //         type: DataTypes.STRING,
    //         allowNull: false,
    //         validate: {
    //             len: [8],
    //         },
    //     },
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
    sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
});

module.exports = User;