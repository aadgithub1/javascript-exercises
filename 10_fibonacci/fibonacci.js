const fibonacci = function(index) {
    if (index < 0){
        return "OOPS"
    }
    let var1 = 1
    let var2 = 1
    let sum = var1 + var2
    let fibArray = [0, var1, var2, sum]

    for (let i = 0; i <= 50; i++){
        var1 = var2
        var2 = sum
        sum = var1 + var2
        fibArray.push(sum)
    }

    return fibArray[+index]
    //create a third to hold the sum of the two values
    //set the first variable equal to what the second variable was, set the second variable equal to the sum variable, calculate the new sum, repeat
};

// Do not edit below this line
module.exports = fibonacci;
