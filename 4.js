"use strict";

function getMaxTown(cities) {
    let maxInd = 0;
    let max = cities.list[maxInd].main.temp;				//Текущий город
        
    for (let i = 1; i < cities.list.length; i++) {
        if ( cities.list[i].main.temp > max ) {
            max = cities.list[i].main.temp;
            maxInd = i;
        }
    }

    (!maxInd) ?
        alert(`В городе ${cities.list[0].name} теплее, чем в 5 ближайщих городах`) :
        alert(`В городе ${cities.list[maxInd].name} температура` +
                ` ${cities.list[maxInd].main.temp}C. Это на` +
                ` ${cities.list[maxInd].main.temp - cities.list[0].main.temp}C` +
                ` теплее, чем в ${cities.list[0].name}`);
}

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
            .catch( error => {
                console.error('Fetch error: ' + error.message);
            });

}

async function getCities(town) {
    try {
        const cityParams = await getCityJsonParams(town);
        const cities = await getNearbyCitiesJsonParams(cityParams);
        
        getMaxTown(cities);
        
    } catch (err) {
        console.log(err);
    }
}

getCities('Moscow');