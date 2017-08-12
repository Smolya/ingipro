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

function getAvatar(human, inUrl, defaultUrl) {
    const url = inUrl.split('.');
    let result = human;

    for (let i = 0; i < url.length; i++) {
        if (result === undefined) {
            return defaultUrl;
        }
            result = result[url[i]];
    }
    if (result == 0) {          // Не загрузил фото: url = '';
        return defaultUrl;
    }
    return result;
}

console.log( getAvatar(mike, "friends.0.avatar.url", "http://default/url/to/avatar") );
console.log( getAvatar(german, "friends.0.avatar.url", "http://default/url/to/avatar") );
console.log( getAvatar(lev, "friends.0.avatar.url", "http://default/url/to/avatar") );