"use strict";

const arr1 = [1, 2, 2, 4, 5];
const arr2 = [1, 5, 6, 7];

function f(arr1, arr2) {
    const mergerLine = [];

    for (let i = 0; i < arr1.length; i++) {
        if (mergerLine.indexOf(arr1[i]) === -1) {
            mergerLine.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (mergerLine.indexOf(arr2[i]) === -1) {
            mergerLine.push(arr2[i]);
        }
    }

    return mergerLine;
}

console.log( f(arr1, arr2) );