"use strict";

function wrap(string, lengthStr) {
    let startString = string;
    let outString = "";
    let lengthCut;

    while (true) {
        lengthCut = startString.lastIndexOf(" ",  lengthStr);
        if (lengthCut !== -1) {
            outString += startString.substr(0, lengthCut) + "\n";
            startString = startString.slice(lengthCut + 1);
        }
        else {
            if (startString.length < lengthStr) {
                outString += startString.substr(0, startString.length);
                break;
            }
            else {
                outString += startString.substr(0, lengthStr) + "\n";
                startString = startString.slice(lengthStr);
            }
        }

    }
    return outString;
}

console.log( wrap("мама мыла раму", 11) ); // "мама мыла\nраму"
console.log( wrap("экскурсия", 4) ); // экск\nурси\nя