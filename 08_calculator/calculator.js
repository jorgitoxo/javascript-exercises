const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  let numArray = [];
  for (let i = 0; i < num; i++) {
    numArray[i] = i + 1;
  }
  return numArray.reduceRight((total, num) => total * num, 1);
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
