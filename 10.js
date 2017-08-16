"use strict";

const str = "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB";

function replacer(str) {
    return (str.length === 1) ? str : (str[1] + str.length) ;
}

function rle(str) {
    let outStr;
    let curNum = 1;

    try {                                   //Check on Errors
        if (str.match(/[^A-Z]/)) {
            throw new SyntaxError("Error. Please, type a correct string: [A-Z]");
        }
    }
    catch (e) {
        return e;
    }

    outStr = str.replace(/([A-Z])\1+/g, replacer);

    return outStr;
}

console.log( rle(str) );