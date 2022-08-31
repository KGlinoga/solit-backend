const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserShelf extends Model {}

UserShelf.init({
    shelf_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    shelf_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shelf_desc: {
        type: DataTypes.STRING,
        allowNull: true
    },
    have_read: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
  
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userShelf',
});

module.exports = UserShelf;