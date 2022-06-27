const removeFromArray = function(arr, ...toRemove) {
    let localArr = arr;
    for(let item of toRemove) {
        let itemIndex = localArr.indexOf(item);
        if(itemIndex === -1)
            continue;
        localArr.splice(itemIndex, 1);
    }
    return localArr;
};

// Do not edit below this line
module.exports = removeFromArray;
