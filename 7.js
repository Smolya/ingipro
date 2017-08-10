/*7
Напишите фукнцию сортировки sortLibrary массива объектов.
    Аргументы функции:
    library - массив объектов
field_name - ключ, по которому нужно отсортировать
reverse - порядок сортировки. Если true - по убыванию, false - по возрастанию
initial - функция преобразования значения, соответствующего ключу. Если передана, сортировка будет по значению
initial(value)
    [
        {
           title: 'Steve Jobs',
           author: 'Walter Isaacson',
           libraryID: 4264
        },
        {
           title: 'Mockingjay: The Final Book of The Hunger Games',
           author: 'Suzanne Collins',
           libraryID: 3245
       },
       {
           title: 'Bill Gates',
           author: 'The Road Ahead',
           libraryID: 1254
       }
    ]
*/
"use strict";

const LIBRARY = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        libraryID: 1254
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];


function sortLibrary(library, field_name, reverse, initial) {
    let sortLibrary = library;

    sortLibrary.sort( function (a, b) {
        return (initial === undefined) ? ( a[field_name] - b[field_name] ) :
                                         ( initial(a[field_name]) - initial(b[field_name]) );
    } );

    if (reverse === true) {
        sortLibrary.reverse();
    }

    console.log (sortLibrary);
}

sortLibrary(LIBRARY, 'libraryID', true, parseInt);
