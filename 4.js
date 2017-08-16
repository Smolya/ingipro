"use strict";

const testOrder1 = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
const testOrder2 = [1,1,2,-2,5,2,4,4,-1,-2,5];


function getOdd(testOrder) {
    const sortOrder = testOrder.sort( (a, b) => a - b );		//Сортируем массив
    let curN;
    let amount = 1;

    for (let i = 0; i < sortOrder.length; i++) {
        curN = sortOrder[i];
        if ( curN === sortOrder[i + 1] ) {
            amount++;
        }
        else {										//Закончилось повторение чисел -> считаем количество - четное или нет.
            if( amount % 2 ) {
                return curN;
            }
            amount = 1;
        }
    }

    return null;
}

console.log(getOdd(testOrder1));
console.log(getOdd(testOrder2));