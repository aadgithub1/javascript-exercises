const getTheTitles = function(bookObjects) {
    let titlesArray = []
    bookObjects.forEach(book => {
        titlesArray.push(book.title)
    });
    return titlesArray
};

// Do not edit below this line
module.exports = getTheTitles;
