const sequelize = require("../config/connection");
const { User, UserShelf } = require("../models")

const userData = require('./userData.json');
const userShelfData = require('./userShelfData.json');

const seedMe = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
        individualHooks: true
    });
    // await sequelize.sync({ force: true });
    await UserShelf.bulkCreate(userShelfData, {
        individualHooks: true
    });

process.exit(0);
};


seedMe();

