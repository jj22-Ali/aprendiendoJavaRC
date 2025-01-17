//? NUMBERS

//! analizamos el prompt
/*
    Opciones 
    a- aceptar: sin completar = entraga STRING ACIO
    b- CANCELAR: entrega NULL
    c- COMPLETAR: siempre entra STRING, por mas ingresemos numero

*/

/*let numeros = prompt('Ingrese un número: ');
console.log(numeros);

//parseInt - devuelve numero entero
let numerosEnteros = parseInt(numeros);
console.log(numerosEnteros);

//parsefloat - devuelve numero con decimales
let numeroDecimales = parseFloat(numeros);
console.log(numeroDecimales); */

//! NaN: Not a Number

//*EN UNA SOLA LINEA ------------------------------
/* //!ATENCIÓN!
Cuando PARSEAMOS  (convertimos a NUMBER) los datos del CAMPO, al presionar CANCELAR o ACEPTAR SIN COMPLETAR, ya NO recibimos NULL en nuestra variabales, ahora recibimos NaN(Not a Number: no es un numero)
*/

//let edad = parseInt(prompt('Ingrese su edad: '));
//console.log(edad);

//let precio = parseFloat(prompt('Ingrese el precio del producto: '));
//console.log(precio);

//? METODO MATH
//* REDONDEAR --------------------------------------

// redondea para abajo .floor()
let numero1 = 45.9;
console.log(Math.floor(numero1)); 

// redondea para arriba .ceil()
let numero2 = 45.1;
console.log(Math.ceil(numero2));

// redondea para el numero entero mas cercando
let numero3 = 45.7;
console.log(Math.round(numero3));

//*------------------------------------------------

//* MANEJO DE LOS DECIMALES -----------------------
/*
    podemos usar:
    - cualquiera de los metodos anteriores MAS LA forumula (num * 100)/100 o toFixed() OJO! 
*/

let numeroConDecimales = 45.33333333333333333;
console.log(numeroConDecimales)

// quitar decimales
console.log(Math.floor(numeroConDecimales));

//dejar decimales - 1, 2 o más
console.log(Math.round(numeroConDecimales * 1000)/1000);

// .toFixed
console.log(numeroConDecimales.toFixed(2));
//! OJO: Convierte a String
//! que hacemos???
let numero4 = parseFloat(numeroConDecimales.toFixed(2));
console.log(numero4);

//* ----------------------------------------------------------

//* MOSTRAR EL NUMERO MAYOR
console.log(`El numero mayor es: ${Math.max(21, 23, 821, 2391,2)}`);

//* MOSTRAR EL NUMERO MENOR
console.log(`El numero MENOR es: ${Math.min(21, 23, 821, 2391,2)}`);

//* -----------------------------------------------------------

//* Elevar a la potencia 
// potencia = base x exponente
//Math.pow

let base = 2;
let exponente = 3;
let resultado = Math.pow(base, exponente);
console.log(resultado);

//* Calcular la raiz cuadrada
//Math.sqrt

let numero = 22;
let raizCuadrada = Math.sqrt(numero);
console.log(raizCuadrada);
console.log(parseFloat(Math.sqrt(numero).toFixed(2)))
//*--------------------------------------------------------------

//* Numeros randoms -------------------------------------------

console.log(Math.random); // 0 - 1
console.log(Math.random * 10); //1 - 10
console.log(Math.random * 100); //100








