/*4
Написать функцию, которая возвращает сумму указанных чисел и всех чисел между ними. Шаг равен 1.
Первое число необязательно наименьшее
*/
"use strict";

function sumAll(arr) {
    let sum = 0;
    let sumOfNumbersThrow = [];
    let i = arr[0];


    while ( ( arr[0] < arr[1] ) ? ( i <= arr[1] ) : ( i >= arr[1] ) ) {
        sum += i;
        sumOfNumbersThrow.push(i);

        if (arr[0] < arr[1]) {
            i++;
        }
        else {
            i--;
        }
    }

    console.log(sumOfNumbersThrow);
    return sum;
}

console.log( sumAll([1, 4]) ); // 10 (1+2+3+4)
console.log( sumAll([10, 5]) ); // 45 (10+9+8+7+6+5)
