"use strict";

function randomNumber() {
    let maxTime = 10000;        //max value of random interval

    let startTime = new Date().getTime();
    let randInterval = Math.random()*maxTime;
    let endTime = startTime+randInterval;
    let curTime = new Date().getTime();

    while( curTime < endTime ) {
        curTime = new Date().getTime();
    }
    return Math.random()*10;
}
console.log(randomNumber());