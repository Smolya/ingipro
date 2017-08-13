"use strict";

const str = 'Мама мыла раму';

function truncate(string, lengthStr) {
    let outString = "";
    let spaceFirstWord;
    let lengthCut;

    spaceFirstWord = string.indexOf(" ");

    if(string.length <= lengthStr) {
        return string;
    }

    lengthCut = (spaceFirstWord > lengthStr) ? spaceFirstWord : string.lastIndexOf(" ", lengthStr);
    outString = outString + string.substr(0, lengthCut) + "...";

    return outString;
}

console.log( truncate(str, 1) ); // 'Мама...'
console.log( truncate(str, 11) ); // 'Мама мыла...'
console.log( truncate(str, 0) ); // 'Мама...'
console.log( truncate(str, 11) ); // 'Мама мыла...'
console.log( truncate(str, 14) ); // "Мама мыла раму"
console.log( truncate(str, 4) ); // "Мама..."
console.log( truncate(str, 5) ); // 'Мама...'
console.log( truncate(str, 9) ); // 'Мама мыла...'
console.log( truncate(str, 15) ); // "Мама мыла раму"