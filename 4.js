/*4
Написать функцию, которая возвращает сумму указанных чисел и всех чисел между ними. Шаг равен 1.
Первое число необязательно наименьшее
*/
"use strict";

function sumAll(arr) {
    const rightArr = Array.from(arr);
    let sum = 0;
    let i;

    rightArr.sort( (a, b) => a - b );

    i = rightArr[0];

    while ( i <= rightArr[1] ) {
        sum += i;
        i++;
    }

    return sum;
}

console.log( sumAll([1, 4]) ); // 10 (1+2+3+4)
console.log( sumAll([10, 5]) ); // 45 (10+9+8+7+6+5)
