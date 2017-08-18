"use strict";

function getCityJsonParams(town) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}
                &units=metric&appid=bd5e378503939ddaee76f12ad7a97608`)
        .then(function(response) {
            return response.json();
        })
        .then(function(params) {
            return {
                nums: 6,
                lat: params.coord.lat,
                lon: params.coord.lon
            }
        })
        .catch( error => console.error('Fetch error: ' + error.message) );
}

function getNearbyCitiesJsonParams(params) {
    return fetch(`http://api.openweathermap.org/data/2.5/find?
				lat=${params.lat}&lon=${params.lon}
				&cnt=${params.nums}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`)
        .then(function(circle) {
            return circle.json();
        })
        .catch( error => console.error('Fetch error: ' + error.message) );
}

function getMaxTempCity(towns) {
    let maxInd = 0;
    let max = towns.list[maxInd].main.temp;				//Текущий город
    for (let i = 1; i < towns.list.length; i++) {
        if ( towns.list[i].main.temp > max ) {
            max = towns.list[i].main.temp;
            maxInd = i;
        }
    }
    (!maxInd) ?
        alert(`В городе ${towns.list[0].name} теплее, чем в 5 ближайщих городах`) :
        alert(`В городе ${towns.list[maxInd].name} температура` +
            ` ${towns.list[maxInd].main.temp}C. Это на` +
            ` ${towns.list[maxInd].main.temp - towns.list[0].main.temp}C` +
            ` теплее, чем в ${towns.list[0].name}`);
    console.log(towns);
}

function getWeather(town) {
    getCityJsonParams(town)
        .then( params => getNearbyCitiesJsonParams(params) )
        .then( params => getMaxTempCity(params) )
        .catch( error => console.error('Fetch error: ' + error.message) );
}

getWeather('Moscow');