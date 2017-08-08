"use strict";

const testOrder1 = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
const testOrder2 = [1,1,2,-2,5,2,4,4,-1,-2,5];

function compare(a, b) {
    return a - b;
}


function checkOdd(amount) {
    if(amount % 2) {
        return 1;
    }
    else {
        return 0;
    }
}


function getOdd(testOrder) {
    const sortOrder = testOrder.sort(compare);		//Сортируем массив
    const oddMass = [];								//Выходной массив нечетных чисел
    let curN;
    let amount = 1;

    for (let i = 0; i < sortOrder.length; i++) {
        curN = sortOrder[i];
        if ( curN === sortOrder[i + 1] ) {
            amount++;
        }
        else {										//Закончилось повторение чисел -> считаем количество - четное или нет.
            if( checkOdd(amount) ) {
                oddMass.push(curN);
            }
            amount = 1;
        }
    }

    return oddMass;
}


console.log(getOdd(testOrder1));
console.log(getOdd(testOrder2));