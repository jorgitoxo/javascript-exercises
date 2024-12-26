const fibonacci = function(num) {
    let fiboBuffer = {n1:0, n2: 1};
    let fiboNum = 0;
    const fiboPos = parseInt(num);

    if (fiboPos === 0)
        return fiboBuffer.n1;
    if (fiboPos === 1)
        return fiboBuffer.n2;
    
    for (let i = 2; i <= fiboPos; i++) {
        fiboNum = fiboBuffer.n1 + fiboBuffer.n2;
        fiboBuffer.n1 = fiboBuffer.n2;
        fiboBuffer.n2 = fiboNum;
    }
    return (fiboPos >= 0) ? fiboNum : "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
