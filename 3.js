"use strict";

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 5, 6, 7];

function compare(a, b) {
    return a - b;
}

function f(arr1, arr2) {
    let mergerLine;

    mergerLine = arr1.slice();

    for (let i = 0; i < arr2.length; i++) {
        if (mergerLine.indexOf(arr2[i]) === -1) {
            mergerLine.push(arr2[i]);
        }
    }

    mergerLine.sort(compare);
    console.log(mergerLine);
}

f(arr1, arr2);