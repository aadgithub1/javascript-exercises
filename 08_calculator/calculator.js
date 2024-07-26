const add = function(numOne, numTwo) {
  return numOne + numTwo
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo
};

const sum = function(operands) {
  return operands.reduce((total, number) => (total + number), 0)
};

const multiply = function(operands) {
  return operands.reduce((total, number) => (total * number), 1)
};

const power = function(num, pow) {
	return Math.pow(num, pow)
};

const factorial = function(num) {
  let product = 1
  for (let i = num; i >= 1; i--){
    product *= i
  }
  return product
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
