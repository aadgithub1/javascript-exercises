const add = function(numOne, numTwo) {
  return numOne + numTwo
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo
};

const sum = function(operands) {
  let accum = 0
  for (let i = 0; i < operands.length; i++){
    accum+=operands[i]
  }
  return accum
};

const multiply = function(operands) {
  let accum = 1
  for (let i = 0; i < operands.length; i++){
    accum*=operands[i]
  }
  return accum
  
};

const power = function(num, pow) {
	return Math.pow(num, pow)
};

const factorial = function(num) {
	let accum = 1
  for (let i = num; i > 0; i--){
    accum *= i
  }
  return accum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
