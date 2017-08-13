"use strict";

function getImage(url) {
    return new Promise(function(resolve, reject) {
        const img = new Image;
        img.src = url;
        console.log(img);
        img.onload = function() {
            resolve(url);
        }
        img.onerror = function() {
            reject(url);
        }
    });
}
getImage('http://bit.ly/2vntYlL').then(url => {
    console.log(`${url} successfully loaded`);
}).catch(url => {
    console.log(`Error loading ${url}`);
});
