const User = require("./User")
const Book = require("./Book")
const UserShelf = require("./UserShelf")
const Review = require("./Review");
const DailyDiary = require("./dailyDiary");

// // user had many User Shelf(one to many, mandatory)
User.hasMany(UserShelf);
UserShelf.belongsTo(User);

// // userShelf many to many Book 
// // userShelf.belongstomany(Book) through UserBooks(Junction Table)
// UserShelf.belongsToMany(Book, { through: 'UserBooks' });
// // Book.belongtomany(userShelf) through UserBooks(junction table)
// Book.belongsToMany(UserShelf, { through: 'UserBooks' });


// // Users has many Review(one to many, mandatory)
User.hasMany(Review);
Review.belongsTo(User);

// // Book has many Review (one to many, mandatory)
// Book.hasMany(Review, 
//     {
//         foreignKey: "book_id"
//     });
// Review.belongsTo(Book, 
//     {
//         foreignKey: "book_id"
//     });

User.hasMany(DailyDiary);
DailyDiary.belongsTo(User);

// // User many to many User through Followers (juntion table)
// User.belongsToMany(User, { through: 'Followers' });
// User.belongsToMany(User, { through: 'Followers' });
// // will need an alias 

// module.exports = { User, Book, UserShelf, Review };


module.exports = {User, Book, Review, UserShelf, DailyDiary}

// module.exports = User

