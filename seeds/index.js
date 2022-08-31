const sequelize = require("../config/connection");
const { User, UserShelf } = require("../models")

const userData = require('./userData.json');
const userShelfData = require('./userShelfData.json');

const seedMe = async () => {
    User.bulkCreate(userData, {
        individualHooks: true
    });
    await sequelize.sync({ force: true });
    await UserShelf.bulkCreate(userShelfData, {
        individualHooks: true
    });

process.exit(0);
};


seedMe();

// const userData = require("./userData.json");
// const userShelfData = require("./userShelfData.json");


// const seedMe = async () => {
//     // console.log("hello!");


//     await sequelize.sync({ force: true });

//     const users = await User.bulkCreate(userData, {
//         individualHooks: true,
//         returning: true,
//     });

//     for (const userShelf of userShelfData) {
//         await UserShelf.create({
//             ...userShelf,
//             user_id: users[Math.floor(Math.random() * users.length)].id,
//         });
//     }


// const seedMe = async () => {
//     // seeding userData
//     await sequelize.sync({ force: true });

//     await User.bulkCreate(userData, {
//         individualHooks: true,
//         returning: true,
//     });

//     // seeding userShelfData
//     await sequelize.sync({ force: true });

//     await UserShelf.bulkCreate(userShelfData, {
//         individualHooks: true,
//         // returning: true,
//     });

// const seedMe = () => {
//     return sequelize.sync({ force: true }).then(() => {
//         User.bulkCreate(userData).then(() => {
//             UserShelf.bulkCreate(userShelfData).then(() => {
//                 console.log('All Seeds Planted');
//             });
//         });
//     })

// const seedMe = async () => {
//     await sequelize.sync({ force: true });

//     await User.bulkCreate(userData);

//     await UserShelf.bulkCreate(userShelfData);
