const removeFromArray = function(numbers, ...args) {
    for (let i = 0; i < args.length; i++) {
        const takeout = args[i];
        while (numbers.includes(takeout)) {
            numbers.splice(numbers.indexOf(takeout), 1);
        }
    }
    return numbers;
};

// Do not edit below this line
module.exports = removeFromArray;
