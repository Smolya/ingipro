/*4
Написать функцию, которая возвращает сумму указанных чисел и всех чисел между ними. Шаг равен 1.
Первое число необязательно наименьшее
*/
"use strict";

function sumAll(arr) {
    let sum = 0;
    let i;
    let rightNum;
    let leftNum;

    if (arr[0] < arr[1]) {
        leftNum = arr[0];
        rightNum = arr[1];
        i = leftNum;
    }
    else {
        leftNum = arr[1];
        rightNum = arr[0];
        i = leftNum;
    }

    while ( i <= rightNum ) {
        sum += i;
        i++;
    }

    return sum;
}

console.log( sumAll([1, 4]) ); // 10 (1+2+3+4)
console.log( sumAll([10, 5]) ); // 45 (10+9+8+7+6+5)
