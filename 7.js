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

const library = [
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


function sortLibrary(library, field_name, reverse, initial = value => value) {
    const sortLibrary = Array.from(library);

    sortLibrary.sort( (a, b) => {
        return (reverse) ?
            ( initial( b[field_name] ) - initial( a[field_name] ) ) :       //reverse
            ( initial( a[field_name] ) - initial( b[field_name] ) );        //straight
    } );

    return sortLibrary;
}

console.log( sortLibrary(library, 'libraryID', true, parseInt) );
console.log('\n', library);