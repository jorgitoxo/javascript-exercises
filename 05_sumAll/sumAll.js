const sumAll = function(minNum, maxNum) {
    function validPositives(minNum, maxNum) {
        return ((minNum > 0) && (maxNum > 0));
    }

    function validIntegers(minNum, maxNum) {
       return ((Math.floor(minNum) === minNum) && (Math.floor(maxNum) === maxNum));
    }  
    
    if (validPositives(minNum, maxNum) && validIntegers(minNum, maxNum)) {
        let numSum = 0;
        if (minNum > maxNum) [minNum, maxNum] = [maxNum, minNum]; // Array destructuring syntax. Stolen from solution, it's so nice.

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
