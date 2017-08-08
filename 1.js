"use strict";

let arr = [1, 2, 3, 4, 5];

function drop(arr, i) {
    arr.splice(i, 1);
}

drop(arr, 3); // [1, 2, 3, 5]

console.log(arr);
