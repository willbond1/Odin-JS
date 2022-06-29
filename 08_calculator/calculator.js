const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  return arr.reduce((sum, num) => {
    return sum + num;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((result, num) => {
    return result * num;
  }, 1);
};

const power = function(x, y) {
  let result = 1;
  for(let i = 0; i < y; i++)
    result *= x;
  return result;
};

const factorial = function(num) {
	let result = 1;
  for(let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
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
