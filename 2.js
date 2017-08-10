/*2
Написать функцию palindrome, которая будет возвращает true, если переданная строка является полиндромом, и false, если не является
*/
"use strict";

function palindrome(str) {
    let leftPos = 0;
    let rightPos = str.length - 1;

    while (true) {
        if( rightPos === ( Math.floor(str.length / 2) - 1) ) {
            break;
        }

        if(str[leftPos] === " ") {
            leftPos++;
        }
        if(str[rightPos] === " ") {
            rightPos--;
        }

        if(str[leftPos].toLowerCase() === str[rightPos].toLowerCase()) {
            leftPos++;
            rightPos--;
            continue;
        }
        else {
            return false;
        }
    }

    return true;
}

console.log( palindrome("eye") ); // true
console.log( palindrome("hello") ); // false
console.log( palindrome("А роза упала на лапу Азора") ); // true
