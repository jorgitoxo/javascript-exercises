const getTheTitles = function(books) {
    return books.reduce((titles, book) =>
        titles.concat(book.title)
    , []);
};

// Do not edit below this line
module.exports = getTheTitles;
