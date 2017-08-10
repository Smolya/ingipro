/*1
Написать функцию reverseString, которая будет возвращать реверсированную строку
*/

function reverseString(str) {
    let outStr = "";
    for (let i = str.length; i > 0; i--) {
        outStr = outStr + str[i-1];
    }

    return outStr;
}

console.log( reverseString("hello") ); // "olleh"