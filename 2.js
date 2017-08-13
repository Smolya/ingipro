/*2
Написать функцию palindrome, которая будет возвращает true, если переданная строка является полиндромом, и false, если не является
*/
"use strict";

function palindrome(str) {
    const straightLine = str.replace(/ /g, '').toLowerCase();
    const reverseLine = straightLine.split('').reverse().join('');

    return (reverseLine === straightLine) ? true : false;
}


console.log( palindrome("eye") ); // true
console.log( palindrome("hello") ); // false
console.log( palindrome("А роза упала на лапу Азора") ); // true
