"use strict";

function range(start, stop, step = 1) {
    const sequence = [];

    if ( stop === undefined ) {         //Поменять местами стоп и старт, когда один аргумент.
        stop = start;
        start = 0;
    }

    for (let i = start; i < stop; i = i + step) {
        sequence.push(i);
    }

    return sequence;
}

console.log( range(10) );              // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log( range(1, 11) );           // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log( range(0, 30, 5) );        // => [0, 5, 10, 15, 20, 25]
console.log( range(0, 10, 3) );        // => [0, 3, 6, 9]
console.log( range(0) );               // => []