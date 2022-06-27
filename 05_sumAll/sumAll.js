const sumAll = function(firstN, secondN) {
    if(firstN < 0 || secondN < 0 ||
        typeof(firstN) !== "number" || typeof(secondN) !== "number")
        return "ERROR";

    let sum = 0;
    let beg = Math.min(firstN, secondN);
    let end = Math.max(firstN, secondN);

    for(let i = beg; i <= end; i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
