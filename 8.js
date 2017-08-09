"use strict";

function wrap(string, lengthStr) {
    let startString = string;
    let outString = "";
    let lengthCut;

    while (true) {
        lengthCut = startString.lastIndexOf(" ",  lengthStr);
        if (lengthCut != -1) {
            outString = outString + startString.substr(0, lengthCut) + "\n";
            startString = startString.slice(lengthCut + 1);
        }
        else {
            if (startString.length < lengthStr) {
                outString = outString + startString.substr(0, startString.length);
                break;
            }
            else {
                outString = outString + startString.substr(0, lengthStr) + "\n";
                startString = startString.slice(lengthStr);
            }
        }

    }
    console.log(outString);
}

wrap("мама мыла раму", 11); // "мама мыла\nраму"
wrap("экскурсия", 4); // экск\nурси\nя