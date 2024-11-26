const removeFromArray = function(numbers, ...args) {
    args.forEach(element => {
        while (numbers.includes(element)) {
            numbers.splice(numbers.indexOf(element), 1);
        }
    });
    return numbers;
};

// Do not edit below this line
module.exports = removeFromArray;
