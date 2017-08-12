"use strict";

const str = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": { "name": "Петя" } }';
const val = JSON.parse(str);

function deepCopy(val) {
    const clone = {};
    for (let key in val) {
        clone[key] = ( val[key] instanceof Object ) ? deepCopy(val[key]) : val[key];
    }

    return clone;
}

const copy = deepCopy(val);

console.log(copy);
console.log(val);
