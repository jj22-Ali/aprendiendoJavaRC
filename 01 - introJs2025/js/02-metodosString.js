//? PROMPT

//let nombreYapellido = prompt('Ingrese su nombre y su apellido: ');
//console.log(nombreYapellido);

//*-------------------------------------------------------------------
//? STRING - METODOS

//* Concatenacion con "+" y ","

let nombre = 'Carlos'
let apellido = 'Te Pushiste Nelviosa'

console.log(nombre + ' ' + apellido);
console.log(nombre, apellido);

//? TEMPLATE STRING

console.log(`Mi nombre es ${nombre} ${apellido}`);

//! Ejemplo con numeros

let num1 = 32;
let num2 = -130;

console.log(`La suma entre ${num1} y ${num2} es: ${num1 + num2}`);

//*---------------------------------------------------------------------
//? STRING METODOS

let texto = " Juan Jose Figueroa ";

//Cantidad de caracterer (lenght es una propiedad)
console.log(texto.length);

//Pasar a Mayusculas, todo .() es una funcion
console.log(texto.toUpperCase());

//Pasar a minusculas
console.log(texto.toLowerCase());

//Eliminar el espacio al principio y al final del string
console.log(texto.trim());

//Obtener un solo carracter de la cadena
console.log(texto.charAt(4));

//ultima posición
console.log(texto.charAt(texto.length - 3));
console.log(texto.at(-3));

//devuelve la POSISICON del primer carcter que encuentra
console.log(texto.indexOf("Juan"));

//encontrar un caracter especifico o una cadena
console.log(texto.includes("Juan"));

//obtener una parte de la cadena
console.log(texto.substring(3));

console.log(texto.substring(3, 8));

//Remplazar una parte de la cadena
console.log(texto.replace("Juan", "Patricio"));

//Divididr una cadenda de carcteres y te devuelve un arreglo
console.log(texto.split(' '));

//Concatenar con otra cadena
console.log(texto.concat(' PARA DE TOTIARTE'));











