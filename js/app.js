// const
const name = 'Andrés';
const lastName = 'Mercado';

console.log( name, lastName );

// let
let age = 26;
let email = 'andrés Mercado';

console.log( {age, email} );

// Arrow Function
const getName = (name) => {
    return `Mi nombre es: ${name}`;
}

console.log( getName(name) );


const sumNumber = (num1, num2) => {
    return num1 + num2;
}

console.log( sumNumber(2,8) );

// Template String = permite concatenar String, ejecutar codigo javaScrip
console.log(`Hola soy ${name} ${lastName} y tengo ${age}`);

const html = `<table border='1'>
    <tr>
        <th>#</th>
        <th>Name</th>
        <th>LastName</th>
    </tr>
    <tr>
        <td>1</td>
        <td>${name}</td>
        <td>${lastName}</td>
    </tr>
</table>`;

document.write(html);

// forEach
const names = ['Andrés', 'Lina', 'Julian', 'Maria'];

document.write(`<p>Lista de name</p>`)
names.forEach( name => {
    document.write(`<p>${name}</p>`);
});

const numbers = [12, 4 , 8 , 7, 6, 74, 2 , 3];

numbers.forEach( number => {
    console.log(number);
});


let cont = 0;
numbers.forEach( number => {
    if(number >= cont) {
        cont = number;
    }
});

console.log(`El numero mayor del vector es: ${cont}`);