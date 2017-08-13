/*6
Написать функцию, которая вернет новый объект, у которого ключи стали значениями, а значения ключами
*/
"use strict";

function invert_key_value(obj) {
    const newObj = {};

    for (let key in obj) {
        newObj[obj[key]] = key;
    }

    return newObj;
}

console.log( invert_key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}) );
// {#00FF00: "green", #FF0000: "red", #FFFFFF: "white"}
