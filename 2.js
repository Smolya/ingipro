"use strict";

function randomNumber() {
    const MAX_TIME = 10000;        //max value of random interval
    const START_TIME = Date.now();
    const RAND_INTERVAL = Math.random()*MAX_TIME;
    const END_TIME = START_TIME + RAND_INTERVAL;
    let curTime = Date.now();

    while( curTime < END_TIME ) {
        curTime = Date.now();
    }
    return Math.random()*10;
}
console.log(randomNumber());