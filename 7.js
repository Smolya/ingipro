"use strict";

const arr = [
    {name: 'width', value: 10},
    {name: 'height', value: 20}
];


function getObject(arr) {
    const outObject = {};

    for (let i = 0; i < arr.length; i++) {
        outObject[arr[i].name] = arr[i].value;
    }

    return outObject;
}

console.log( getObject(arr) );