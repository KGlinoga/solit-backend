const sequelize = require("../config/connection");
const {Review, Book} = require("../models");
const { User, UserShelf } = require("../models")
const {DailyDiary} = require("../models")

const userData = require("./userData.json")
const bookData = require("./bookData.json")
const reviewData = require("./reviewData.json")
const userShelfData = require('./userShelfData.json');
const diaryData = require('./diaryData.json')

const seedMe = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
        individualHooks: true,
      });
    
  
  //   await Book.bulkCreate(bookData, {
  //       individualHooks: true,
  // });

  
  await Review.bulkCreate(reviewData, {
        individualHooks: true,
      });


    await UserShelf.bulkCreate(userShelfData, {
        individualHooks: true
    });

    await DailyDiary.bulkCreate(diaryData, {
      individualHooks: true
  });

process.exit(0);
};


seedMe();

