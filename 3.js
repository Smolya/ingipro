/*3
Написать функцию, которая разбивает переданный массив arr на группы длиной size.
*/
"use strict";

function chunkArrayInGroups(arr, size) {
    const copyArr = Array.from(arr);
    const outArr = [];
    const lSize = (size === 0) ? arr.length : size;         //Если 0, то так же как и для arr.length
    const numOfChunks = arr.length / lSize;

    for (let i = 0; i < numOfChunks; i++) {
        outArr.push( copyArr.splice(0, lSize) );
    }

    return outArr;
}

console.log( chunkArrayInGroups(["a", "b", "c", "d"], 2) ); // [["a", "b"], ["c", "d"]]
