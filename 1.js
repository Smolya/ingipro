/*1
Написать функцию reverseString, которая будет возвращать реверсированную строку
*/

function reverseString(str) {
    const outStr = str.split('');

    return outStr.reverse().join('');
}

console.log( reverseString("hello") ); // "olleh"