"use strict";

const str = 'Мама мыла раму';

function truncate(string, lengthStr) {
    let outString = "";
    let lengthCut;

    lengthCut = string.lastIndexOf(" ",  lengthStr);
    outString = outString + string.substr(0, lengthCut) + "...";

    console.log(outString);
}

truncate(str, 7); // 'Мама...'
truncate(str, 11); // 'Мама мыла...'