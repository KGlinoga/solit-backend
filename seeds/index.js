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
        }

    ], {
        individualHooks:true
    })

    process.exit(0)
};


seedMe();