const removeFromArray = function(array, ...valuesToRemove) {
    //you have an array
    //you have the value of an item you want to remove 3, 'hi', etc.
    //find the items(s) in the array

    //create array fro target indices
    //declare target el with valuesToRemove[i]
    //iterate through array while indexOf !== -1 (the value still exists in the array / subsection)
        //if target value is found
        //save the index in idx, add to indices array
        //begin searching for the same value at idx + 1

    for (let i = 0; i < valuesToRemove.length; i++){
        let targetEl = valuesToRemove[i]
        let targetIndex = array.indexOf(targetEl)
        while (targetIndex !== -1){
            array.splice(targetIndex, 1)
            targetIndex = array.indexOf(targetEl)
        }
    }
    let correctedArray = array.slice()
    return correctedArray
};

// Do not edit below this line
module.exports = removeFromArray;
