/*5
Написать функцию, которая в переданной строке str меняет слово before на слово after и возвращает новую строку.
Если слово before начиналось с заглавной буквы, вставленное вместо него слово after тоже должно начинаться с заглавной буквы
*/
"use strict";

function myReplace(str, before, after) {
    let outStr = str;
    let changeAfter = after;
    let expr = new RegExp(before, "g");

    if(before.charCodeAt(0) >= 0x0041 && before.charCodeAt(0) <= 0x005A) {
        changeAfter = changeAfter[0].toUpperCase() + changeAfter.slice(1);
    }
    else {
        changeAfter = changeAfter[0].toLowerCase() + changeAfter.slice(1);
    }

    outStr = outStr.replace(expr, changeAfter);

    return outStr;
}

console.log( myReplace("Let us get back to more Coding", "Coding", "algorithms") );
// "Let us get back to more Algorithms".

console.log( myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped") );
// "A quick brown fox leaped over the lazy dog"