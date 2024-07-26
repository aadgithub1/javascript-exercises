const palindromes = function(string){
    let parsedLettersArray = string.toLowerCase().match(/([A-Z0-9])/gi)
    let revArray = parsedLettersArray.slice().reverse()
    return !parsedLettersArray
    .map((letter, index) => letter === revArray[index])
    .includes(false)
}
// Do not edit below this line
module.exports = palindromes;
