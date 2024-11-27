const leapYears = function(year) {  
    // Broken down solution using if
    // Crucial to evaluate division by 100 before division by 400
    if (year%100 === 0) {
        if (year%400 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        if (year%4 === 0) {
            return true;
        } else {
            return false;
        }
    };

    // Ternary operator solution [fixed]
    // return  (year%100) ?
    //         ((year%4) ? false : true)
    //         : ((year%400) ? false : true);
}

// Do not edit below this line
module.exports = leapYears;
