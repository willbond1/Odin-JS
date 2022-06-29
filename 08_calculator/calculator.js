const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let sum = 0;
  for(let num of arr)
    sum += num;
  return sum;
};

const multiply = function(arr) {
  let result = 1;
  for(let num of arr)
    result *= num;
  return result;
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
