const fibonacci = function(n) {
    if(n < 0)
        return "OOPS";

    let result = 0;
    let prevOne = 1;
    let prevTwo = 0;

    for(let i = 0; i < n; i++) {
        prevTwo = prevOne;
        prevOne = result;
        result = prevOne + prevTwo;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
