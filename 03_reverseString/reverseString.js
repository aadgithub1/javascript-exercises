const reverseString = function(string) {
    let stringArr = string.split('')
    let revArr = stringArr.reverse()
    let revStr = revArr.join('')
    return revStr

};

//split the string into array of letters
//make a new array
//append original array position 0 to position -1, 1 to -2, etc.




// Do not edit below this line
module.exports = reverseString;
