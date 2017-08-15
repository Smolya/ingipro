"use strict";

const arr = [1, 2, 3, 4, 5];

function drop(arr, i) {
    const outArr = Array.from(arr);

    outArr.splice(i, 1);

    return outArr;
}

console.log(drop(arr, 3)); // [1, 2, 3, 5]