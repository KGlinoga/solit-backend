const User = require("./User")
const Book = require("./Book")
const UserShelf = require("./UserShelf")
const Review = require("./Review")

// // user had many User Shelf(one to many, mandatory)
User.hasMany(UserShelf, {
    foreignKey: "user_id",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
UserShelf.belongsTo(User, {
    foreignKey: "user_id",
});

// // userShelf many to many Book 
// // userShelf.belongstomany(Book) through UserBooks(Junction Table)
// UserShelf.belongsToMany(Book, { through: 'UserBooks' });
// // Book.belongtomany(userShelf) through UserBooks(junction table)
// Book.belongsToMany(UserShelf, { through: 'UserBooks' });


// // Users has many Review(one to many, mandatory)
User.hasMany(Review);
Review.belongsTo(User);

// // Book has many Review (one to many, mandatory)
Book.hasMany(Review, 
    {
        foreignKey: "book_id"
    });
Review.belongsTo(Book, 
    {
        foreignKey: "book_id"
    });

// // User many to many User through Followers (juntion table)
// User.belongsToMany(User, { through: 'Followers' });
// User.belongsToMany(User, { through: 'Followers' });
// // will need an alias 

// module.exports = { User, Book, UserShelf, Review };


module.exports = {User, Book, Review, UserShelf}

// module.exports = User

