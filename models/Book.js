const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init({
    // add properites here, ex:
    book_title: {
         type: DataTypes.STRING,
         allowNull:false
    },
    author: {
        type: DataTypes.STRING,
        allowNull:false
   },
    cover: {
        type: DataTypes.STRING,
        allowNull:false
    },
    ISBN: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
},{
    sequelize,
    freezeTableName: true,
    modelName: "book"
});

module.exports= Book

// {
//     "key": "/works/OL19652718W",
//     "type": "work",
//     "seed": [
//         "/books/OL26872450M",
//         "/works/OL19652718W",
//         "/subjects/magic_fiction",
//         "/subjects/schools_fiction",
//         "/subjects/children's_fiction",
//         "/authors/OL7509375A"
//     ],
//     "title": "The Secret of a Heart Note",
//     "title_suggest": "The Secret of a Heart Note",
//     "edition_count": 1,
//     "edition_key": [
//         "OL26872450M"
//     ],
//     "publish_date": [
//         "Dec 27, 2016"
//     ],
//     "publish_year": [
//         2016
//     ],
//     "first_publish_year": 2016,
//     "number_of_pages_median": 389,
//     "isbn": [
//         "0062428349",
//         "9780062428349"
//     ],
//     "last_modified_i": 1645972036,
//     "ebook_count_i": 0,
//     "ebook_access": "no_ebook",
//     "has_fulltext": false,
//     "public_scan_b": false,
//     "cover_edition_key": "OL26872450M",
//     "cover_i": 8567898,
//     "publisher": [
//         "Katherine Tegen Books"
//     ],
//     "author_key": [
//         "OL7509375A"
//     ],
//     "author_name": [
//         "Stacey Lee"
//     ],
//     "subject": [
//         "Magic, fiction",
//         "Schools, fiction",
//         "Children's fiction"
//     ],
//     "publisher_facet": [
//         "Katherine Tegen Books"
//     ],
//     "subject_facet": [
//         "Children's fiction",
//         "Magic, fiction",
//         "Schools, fiction"
//     ],
//     "version": 1735660853133312002,
//     "author_facet": [
//         "OL7509375A Stacey Lee"
//     ],
//     "subject_key": [
//         "children's_fiction",
//         "magic_fiction",
//         "schools_fiction"
//     ]
// },
// {`