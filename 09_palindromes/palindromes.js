const palindromes = function(string){
    //split the string into letters
    let parsedLettersArray = string.toLowerCase().match(/([A-Z0-9])/gi)
    let revArray = parsedLettersArray.slice().reverse()

    for (let i = 0; i < parsedLettersArray.length; i++){
        if (parsedLettersArray[i] !== revArray[i]){
            return false
        }
    }
    return true
}

// Do not edit below this line
module.exports = palindromes;
