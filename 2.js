"use strict";

function randomNumber() {
    const MAX_TIME = 10000;        //max value of random interval
    const startTime = Date.now();
    const randInterval = Math.random()*MAX_TIME;
    const endTime = startTime + randInterval;

    while( Date.now() < endTime ) { }
    
    return Math.random()*10;
}
console.log(randomNumber());