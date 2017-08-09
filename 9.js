"use strict";

const str = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": { "name": "Петя" } }';
const val = JSON.parse(str);

function deepCopy(val) {
    var clone = {};
    for (let key in val) {
        if ( typeof(val[key]) === "object" ) {
            clone[key] = deepCopy(val[key]);
        }
        else {
            clone[key] = val[key];
        }
    }

    return clone;
}

const copy = deepCopy(val);

console.log( copy );
console.log( val );
