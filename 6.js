"use strict";

const mike = {
    friends: [{
        name: 'Anna',
        avatar: {
            url: 'http://some/url/to/avatar/Anna'
        }
    }, {
        name: 'Alice',
        avatar: {
            url: 'http://some/url/to/avatar/Alice'
        }
    }]
}

const german = {
    friends: []
}

const lev = {
    friends: [{
        name: 'Anna',
        avatar: {
            url: ''
        }
    }]
}

function getAvatar(human) {
    if ( human.friends[0] === undefined || human.friends[0].avatar.url == 0 ) {
        return "http://default/url/to/avatar";
    }
    else {
        return human.friends[0].avatar.url;
    }
}

console.log( getAvatar(mike) );
console.log( getAvatar(german) );
console.log( getAvatar(lev) );