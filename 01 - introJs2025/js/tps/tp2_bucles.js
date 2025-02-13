/*1- Escribir un programa que solicite la edad y si es  mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un menaje*/

//! Esta es la forma de que yo hice

/*
let x = false;
while(x == false){
    let edad = parseInt(prompt('Ingrese la edad del muchacho:'));
    if(!isNaN(edad)){
        console.log('El muchacho es mayor de edad puede conducir');
        x = true;
    } else{
        console.warn('Usted ingreso una edad no valida');
        
    }
}
*/

//? Asi lo hice la profe

// let age = parseInt(prompt("Ingresa tu edad  "));

// //verificar si el numero ingresado es valido
// if (!isNaN(age)) {
//     if (age >= 18) {
//         document.write("Puedes conducir");
//     }else{
//         document.write("Aun eres pequeño para conducir");
//     }
// }else {
//     alert("Introduce un numero válido");
// }

/*2- Escribir un programa que solicite una nota(número) de 0 a 10. luego mostrar la calificación es un alert según los siguientes rangos de nota.
0-2:Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

si ingreso un número que no esé dentro del rango de 0 a 10 mostrar un mensaje de "número erróneo". Si el número ingresado no es válido mostrar el mensaje, "ingroduce un numero valido"
*/

//! ESTE LO HICE YO MUY MAL

/*
let x = false;

while(x == false){
    let nota = parseInt(prompt('Ingrese una nota (0 - 10): '));
    if(isNaN(nota)){
        document.write('Introduzca un número válido')
        break;
    } else if(nota >= 0 && nota <= 10){
        if(nota >= 0 && nota <= 2){
            document.write('Muy Deficiente')
            x = true;
        } else if (nota <= 4){
            document.write('Insuficiente')
            x = true;
        } else if (nota <= 6){
            document.write('Suficiente')
            x = true;
        } else if (nota == 7){
            document.write('Bien')
            x = true;
        } else if (nota => 8 && nota <= 9){
            document.write('Notable')
            x = true;
        } else if (nota == 10){
            document.write('Sobresaliente')
            x = true;
        }
    } else{
        document.write('Numero erróneo')
        break;
    }
}
*/

//? Asi lo hice la profe
// let nota;
// do {
//   nota = parseInt(prompt("Ingresa una nota del 0 al 10"));
//   console.log(nota);
//   //verificar si la nota es un numero y ademas  esta entre 0 y 10
//   if (!isNaN(nota) && nota >= 0 && nota <= 10) {
//     switch (nota) {
//       case 0:
//       case 1:
//       case 2:
//         alert("Muy deficiente");
//         break;
//       case 3:
//       case 4:
//         alert("Insuficiente");
//         break;
//       case 5:
//       case 6:
//         alert("Suficiente");
//         break;
//       case 7:
//         alert("Bien");
//         break;
//       case 8:
//       case 9:
//         alert("Notable");
//         break;
//       case 10:
//         alert("Sobresaliente");
//         break;
//       default:
//         alert("Nota erronea");
//         break;
//     }
//   }else{
//     alert("Ingrese un numero valido");
//   }
//   //si no pulse cancelar el bucle se vuelve a repetir
// } while (confirm("¿Desea continuar?"));

/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/

//! Esta es la forma que hice Yo

/*
let x = true;
let textoCompleto = [];

while(x){
    let texto = prompt('Ingrese cualquier texto: ');
    textoCompleto.push(texto);
    x = confirm('¿Quieres agregar otro texto?')
}
console.log(textoCompleto);

let unirTextos = textoCompleto.join(' - ')

console.log(unirTextos);

*/

//? Asi lo hice la profe

// let resultado = '';
// do {
// 	let palabra = prompt('Ingresa una palabra');
// 	if (resultado == '') {
// 		//si es la primer palabra, concateno sin usar el guion
// 		resultado = palabra;
// 	} else {
// 		resultado = resultado + '-' + palabra;
// 	}
// } while ( confirm('¿Desea continuar?'));

// document.write(resultado);

/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

//! Esta es la forma que hice yo

/*
let condicion = true;
let totalSuma = 0;

do{
    let numero = parseInt(prompt('Ingrese un numero: '))
    if(!isNaN(numero)){
        console.log(numero);
        totalSuma = totalSuma + numero;
        condicion = confirm('Quiere agregar otro numero');
    }else{
        console.warn('Ingrese un valor valido');
    }
}while(condicion)

console.log(`El total de la suma de los numeros ingresados es: ${totalSuma}`);

*/

/* 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 

Input:  40773821 
Output: ‘L’

*/

//! Esta es la forma que le hice yo

/*
let abc = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
let dni = parseInt(prompt('Ingrese un dni'));

if(!isNaN(dni)){
    if(dni > 0 && dni <= 99999999){
        let resto = dni % 23;
        let letra = abc[resto]
        document.write(`La letra del dni:${dni} es ${letra}`);
        
    } else{
        console.log('Numero erroneo');
        
    }
} else {
    console.warn('ingrese un valor valido');
    
}
*/

/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
 */

//! Esta es la forma que hice yo


/*
for (let i = 30; i >= 0; i--) {
    for(let j = 1; j <= i; j++){
        document.write(i)
    }
    document.write('<br>')
}

*/

/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

*/

//! Esta es la forma que hice yo
/*
let x = true;
while(x){

    let piramide = parseInt(prompt('Ingrese el tamaño de las piramides en numeros'))

    if(!isNaN(piramide)){
        if(piramide >= 1 && piramide <= 50){
            for (let i = piramide; i >= 0; i--) {
                for(let j = 1; j <= i; j++){
                    document.write(i)
                }
                document.write('<br>')
            }
            break;
        }else{
            document.write('La piramide no puede tener mas de 50 numeros')
        }
    } else{
        document.write('Usted no ingreso un valor valido')
    }

    x=confirm('¿Queres intentar otra vez?');
}
*/

/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
 */

//! Esta forma que lo resolvio yo

/*
let NumPiramide = parseInt(prompt('Ingrese la longitud de la piramidad: '));

for(let i=1; i <= NumPiramide; i++){
    for(let j = 1; j <= i; j++){
        document.write(j);
    }
    document.write('<br>')
}
*/

/*
9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.
*/

//! Esta es la forma que hice yo

/*

let numero = parseInt(prompt('Elije un numero entre 1 - 500: '));

if(!isNaN(numero)){
    for(let i = 1; i <= numero; i++){
        if( i % 4 == 0){
            document.write(i + ('(Multiplo de 4)'));
        } else if (i % 9 == 0){
            document.write(i + ('(Multiplo de 9)'));
        } else if (i % 5 == 0) {
            document.write(i + '- <br> ------------------------');
        } else {
            document.write(i);
        }
        document.write('<br>')
    }
} else{
    console.log('Usted no ingreso un valor correcto');
    
}
*/

/*
10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/ 

//? forma de hacerlo de deepp seek
/*
const filas = parseInt(prompt('Ingresa el número de filas: '));
const columnas = parseInt(prompt('Ingresa el número de columnos: '));

let numeroInicial = filas * columnas;

document.write("<table border='1'>");
for(let i = 0; i < filas; i++){
    document.write("<tr>");
    for(let j = 0; j < columnas; j++){
        document.write(`<td>${numeroInicial}</td>`);
        numeroInicial--;
    }
    document.write('</tr>')
}
document.write('</table>');

*/


//! forma hasta donde yo llegue
/*
for(let i = 1; i<= 7; i++){
    for(let j = 1; j <= 5; j++)
    {
        document.write(1);
    }
    document.write('<br>')
}
*/

//* Sección de Math.


/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */

//!Esta forma que elegir resolver

/*
alert('Eliga 3 edades y 3 nombres');
let nombre1 = prompt('Primer nombre: ');
let nombre2 = prompt('Segundo nombre: ');
let nombre3 = prompt('Tercer nombre: ');

let edad1  = parseInt(prompt('Ingrese la primer edad'));
let edad2  = parseInt(prompt('Ingrese la segunda edad'));
let edad3  = parseInt(prompt('Ingrese la tercera edad'));

let edadMaxima = Math.max(edad1,edad2,edad3);

if(edad1 == edadMaxima){
    console.log(`El nombre del mayor es: ${nombre1} con ${edad1}`);

} else if(edad2 == edadMaxima){
    console.log(`El nombre del mayor es: ${nombre2} con ${edad2}`);

}else {
    console.log(`El nombre del mayor es: ${nombre3} con ${edad3}`);
    
}
*/

/*12- Realiza un script que genere un número aleatorio entre 1 y 99*/

//! esta forma que hice yo
/*console.log(Math.floor(Math.random() * 100)); //100*/

//* Ejercicos con String

/*13- Realiza un script que pida un texto y lo muestre en mayúsculas. */

//!esta es la forma que le hizo yo
/*
let texto = prompt('Ingrese cualquier texto: ').toUpperCase();

document.write(texto);
*/

/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/

//? Forma de deepseek
/*
const texto = prompt('Introduce una cadena de texto: ');


let resultado = "";


for(let i = 0; i < texto.length; i++){
    
    resultado = resultado + texto[i];
    
    if(i < texto.length -1 ){
        resultado += "-";
    }
}

document.write(resultado);
*/

//! forma incompleta que hice yo
/*
let texto = prompt('Ingrese un texto: ')

console.log(texto.split(' '));
*/


/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

//? Forma que hizo deepseek(mucho mejor)

/*
const texto = prompt('Introduce un texto: ');

const textoMinusculas = texto.toLocaleLowerCase();

const vocales = 'aeiouáéíóú';

let contador = 0;

for(let i = 0; i < textoMinusculas.length; i++){
    if(vocales.includes(textoMinusculas[i])){
        contador++;
    }
}

console.log(textoMinusculas);


console.log(`El texto tiene ${contador} vocal(es)`);
*/


//! esta es la forma que hice yo
/*
let texto = prompt('Ingrese cualquier texto: ');

let sumVocales = 0;

for(let i = 0; i < texto.length; i++){
    if(texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i' ||  texto[i] == 'o' || texto[i] == 'u'){
        sumVocales = sumVocales + 1;
    }
}

console.log(texto);
console.log(`La cantidad de vocales que tiene el texto es:${sumVocales}`);

*/


/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

//? Deepseek me dio dos formas

//? 1 (mejor que el mio)

/*
const texto = prompt("Introduce una cadena de texto:");
console.log(texto);

const textoInvertido = texto.split("").reverse().join("");

console.log(`Texto original: ${texto}`);
console.log(`Texto invertido: ${textoInvertido}`);
*/

//? 2 (mejor que el mio)

/*
const texto = prompt("Introduce una cadena de texto:");

let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i]; 
}

console.log(`Texto original: ${texto}`);
console.log(`Texto invertido: ${textoInvertido}`);

*/

//! Esta es la forma que hice yo 
/*
let texto = prompt('Ingrese texto: ');
let x = "";
let textoAlReves = "";


for(let i = 1; i <= texto.length; i++){
    x = texto.at(-i);
    textoAlReves += x;
}

console.log(textoAlReves);

*/

/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.*/

//? Forma que hizo deepseek

const texto = prompt("Introduce un texto: ");

const textoMinusculas = texto.toLowerCase();

const vocales = "aeiouáéíóú"

let posicionPrimeraVocal = -1;

for(let i = 0; i < textoMinusculas.length; i++){
    if(vocales.includes(textoMinusculas[i])){
        posicionPrimeraVocal = i;
        break;
    }
}

if(posicionPrimeraVocal !== -1){
    console.log(`La primera vocal está en la posición: ${posicionPrimeraVocal}`);
    
} else {
    console.log('No se encontraorn vocales en el texto.');
    
}
//! foma que hice yo
/*
let texto = prompt('Ingreses un texto: ');
console.log(texto);

for(let i = 0; i < texto.length - 1; i++){
    if(texto[i] == 'a' || texto[i] == 'i' || texto[i] == 'e' || texto[i] == 'o' || texto[i] == 'u' ){
        console.log(`La primera vocal es: ${texto[i]}`);
        break;
    }
}
*/
