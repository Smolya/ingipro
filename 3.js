/*3
Написать функцию, котоая разбивает переданный массив arr на группы длиной size.
*/
"use strict";

function chunkArrayInGroups(arr, size) {
    let copyArr = arr;
    let outArr = [];
    let numOfChunks = arr.length / size;

    for (let i = 0; i < numOfChunks; i++) {
        outArr.push( copyArr.splice(0, size) );
    }

    return outArr;
}

console.log( chunkArrayInGroups(["a", "b", "c", "d"], 2) ); // [["a", "b"], ["c", "d"]]
