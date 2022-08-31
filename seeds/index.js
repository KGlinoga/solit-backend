const sequelize = require("../config/connection");
const User = require("../models")

const seedMe = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate([
        {
            name: "Joe",
            username: "joejoe",
            email: "joe@joe.joe"
        },
        {
            name: "Dash",
            username: "DashDog",
            email: "Dash@joe.joe"
        },
        {
            name: "Pepper",
            username: "PepperCat",
            email: "Pepper@joe.joe"
        }

    ], {
        individualHooks: true
    })

}


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

//     process.exit(0);
// };


seedMe();