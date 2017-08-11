"use strict";

function randomNumber() {
    const MAX_TIME = 10000;        //max value of random interval
    const startTime = Date.now();
    const randInterval = Math.random()*MAX_TIME;
    const endTime = startTime + randInterval;
    let curTime = Date.now();

    while( curTime < endTime ) {
        curTime = Date.now();
    }
    return Math.random()*10;
}
console.log(randomNumber());