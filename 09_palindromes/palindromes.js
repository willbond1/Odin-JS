const alphaRegex = /[a-z]/;

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(let i in arr1)
        if(arr1[i] !== arr2[i])
            return false;
    return true;
}

const palindromes = function (str) {
    let charArray = str.toLowerCase().split("");
    charArray = charArray.filter(char => alphaRegex.test(char));
    let reverseArray = charArray.slice().reverse();
    return arraysEqual(charArray, reverseArray);
};

// Do not edit below this line
module.exports = palindromes;
