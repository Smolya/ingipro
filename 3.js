"use strict";

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 5, 6, 7];

function f(arr1, arr2) {
    const mergerLine = arr1.slice();

    for (let i = 0; i < arr2.length; i++) {
        if (mergerLine.indexOf(arr2[i]) === -1) {
            mergerLine.push(arr2[i]);
        }
    }

    return mergerLine;
}

console.log( f(arr1, arr2) );