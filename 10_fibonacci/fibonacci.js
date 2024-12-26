const fibonacci = function(num) {
    let fiboBuffer = {n1:0, n2: 1};
    let fiboNum = 0;
    const fiboPos = parseInt(num);

    for (let i = 0; i < fiboPos; i++) {
        fiboNum = fiboBuffer.n1 + fiboBuffer.n2
        if (i >= 1) {
            fiboBuffer.n1 = fiboBuffer.n2;
            fiboBuffer.n2 = fiboNum;
        }
    }

    return (fiboPos >= 0) ? fiboNum : "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;

// console.log(fibonacci(0));
