"use strict";

const town = prompt("Please, enter a city", "Moscow");

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}
		&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`)
    .then(function(response) {
        return response.json();
    })
    .then(function(town) {
        return fetch(`http://api.openweathermap.org/data/2.5/find?
					    lat=${town.coord.lat}&lon=${town.coord.lon}
						&cnt=6&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`);
    })
    .then(function(circle) {
        return circle.json();
    })
    .then(function(towns) {
        let maxInd = 0;
        let max = towns.list[maxInd].main.temp;				//Текущий город

        for (let i = 1; i < towns.list.length; i++) {
            if ( towns.list[i].main.temp > max ) {
                max = towns.list[i].main.temp;
                maxInd = i;
            }
        }
        (!maxInd) ?
            alert(`В городе ${town} теплее, чем в 5 ближайщих городах`) :
            alert(`В городе ${towns.list[maxInd].name} температура` +
                ` ${towns.list[maxInd].main.temp}C. Это на` +
                ` ${towns.list[maxInd].main.temp - towns.list[0].main.temp}C` +
                ` теплее, чем в ${town}`);
    })
    .catch(alert);