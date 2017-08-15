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

async function getCities(town) {
    try {
        const city = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}
				&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`);
        const cityJSON = await city.json();

        const cities = await fetch(`http://api.openweathermap.org/data/2.5/find?
							lat=${cityJSON.coord.lat}&lon=${cityJSON.coord.lon}
							&cnt=6&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`);

        getMaxTown(await cities.json());
    } catch (err) {
        console.log(err);
    }
}

const town = prompt("Please, enter a city", "Moscow");
getCities(town);