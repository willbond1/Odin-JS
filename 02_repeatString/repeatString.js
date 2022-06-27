const repeatString = function(str, numTimes) {
    if(numTimes < 0)
        return "ERROR";
    let resultStr = "";
    for(let i = 0; i < numTimes; i++)
        resultStr += str;
    return resultStr;
};

// Do not edit below this line
module.exports = repeatString;
