const reverseString = function(str) {
    let strArray = str.split("");
    let strResult = "";
    for(let i = 0; i < str.length; i++)
        strResult += strArray.pop();
    return strResult;
};

// Do not edit below this line
module.exports = reverseString;
