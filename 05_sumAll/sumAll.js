const sumAll = function(firstNum, secondNum) {
    //add every number from first num to second num
    if(!Number.isInteger(firstNum) 
    || !Number.isInteger(secondNum)
    || firstNum < 0
    || secondNum < 0){
        return 'ERROR'
    }
    if (firstNum > secondNum){
        let temp = firstNum
        firstNum = secondNum
        secondNum = temp
    }

    let accumulator = 0
    for (let i = firstNum; i <= secondNum; i++){
        accumulator+=i
    }
    return accumulator
};

// Do not edit below this line
module.exports = sumAll;
