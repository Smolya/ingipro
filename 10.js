"use strict";

const str = "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB";


function rle(str) {
    let outStr = "";
    let curNum = 1;

    if ( str.match(/[^A-Z]/) ) return "Error. Please, type a correct string: [A-Z]";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            curNum++;
        }
        else {
            if (curNum === 1) outStr = outStr + str[i];
            else outStr = outStr + str[i] + curNum;

            curNum = 1;
        }
    }

    return outStr;
}

console.log( rle(str) );