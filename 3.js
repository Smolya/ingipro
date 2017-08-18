/*
Показать пользователю погоду в нескольких городах
    Пользователь вводит через запятую названия городов.
    Нужно получить для этих городов погоду из ручки http://openweathermap.org/current#name.
    И вывести пользователю информацию о погоде в этих городах
    Например, пользователь ввел: Moscow, New-York, London.
    Покажем ему сообщение:
        "Moscow: температура 21C, скорость ветра 4.1, влажность 80%,
        New-York: температура 26C, скорость ветра 7.1, влажность 70%,
        London: температура 19C, скорость ветра 1.1, влажность 90%"
 */

"use strict";

function getTownsApi(towns) {
    return towns.map( item => fetch(`http://api.openweathermap.org/data/2.5/weather?q=${item}
            &units=metric&appid=bd5e378503939ddaee76f12ad7a97608`)
        .then(response => response.json())
.catch( error => console.error('Fetch error: ' + error.message) ) );

}

function printCitiesParam(cities) {
    for (let city of cities) {
        console.log(`${city.name}: температура ${city.main.temp}C, скорость ветра ${city.wind.speed}, влажность: ${city.main.humidity}%`);
    };
}

function getWeather(cities) {
    const [...towns] = cities.split(', ');

    Promise.all(getTownsApi(towns))
        .then( cities => printCitiesParam(cities) )
        .catch( error => console.error('Fetch error: ' + error.message) );
}

getWeather('Moscow, London, New-York');