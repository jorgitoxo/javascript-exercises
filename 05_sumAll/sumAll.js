const sumAll = function(num1, num2) {
    function validPositives(num1, num2) {
        return ((num1 > 0) && (num2 > 0));
    }

    function validIntegers(num1, num2) {
       return ((Math.floor(num1) === num1) && (Math.floor(num2) === num2));
    }  
    
    if (validPositives(num1, num2) && validIntegers(num1, num2)) {
        let numSum = 0;
        let minNum = num1;
        let maxNum = num2;

        num2 > num1 ? 
        (minNum = num1, maxNum = num2) :
        (minNum = num2, maxNum = num1);

        for (let i = minNum; i <= maxNum; i++) {
            numSum += i;
        }
        return numSum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
