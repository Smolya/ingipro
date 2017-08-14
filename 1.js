/*
    1) Показать пользователю информацию о погоде в его городе.
    Предложить пользователю ввести название города.
    Сделать запрос к ручке получения текущей погоды в этом городе (http://openweathermap.org/current#name).
    Если ответ получен, вывести пользователю температуру в цельсиях, продолжительность дня, скорость ветра.
    Если возникли ошибки, вывести сообщение об ошибке
 */

"use strict";

const town = prompt("Please, enter a city", "Moscow");

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`)
    .then(function(response) {
        return response.json();
    })
    .then(function(town) {
        alert(`Температура: ${town.main.temp}\nСкорость ветра в м/с: ${town.wind.speed}\nПродолжительность дня: ${ (town.sys.sunset-town.sys.sunrise) / 3600 }`);
    })
    .catch(alert);
