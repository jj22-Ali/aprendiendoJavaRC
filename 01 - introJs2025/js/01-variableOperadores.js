// COMENTARIOS EN JVS

// Comentarios en UNA sola linea

/* Comentarios 
de varias
lineas */

//Comentario Verde
//*Comentario en verde claro 
//?Comentario azul
//!Comentario rojo

//*-------------------------------------------------------------
//? COMO EJECUTAR JS

//a- Directo en el html
//b- Consola
//c- creando el archivo JS

//*-------------------------------------------------------------

//? CONSOLA

console.log('HOla')
console.error('error')
console.warn('Soy una advertencia')

// Cuando un ejercicio te diga imprimir en consola es usa el .log

//*---------------------------------------------------------------

//? COMENTARIO EN PANTALLA O DOCUMENTO

document.write("hola");

//*----------------------------------------------------------------

//? SINTAXIS EN JS

//! Tipos de Variables

/*
    Tipos de variables
    -var
    -let
    -const

    -NOMBRE: camelCase
*/

//*------------------------------------------------------------------

//? LET 

let nombreYapellido= 'Juan Jose Figueroa';
console.log(nombreYapellido);


//! No se puede repetir
//let nombreYapellido = 'jaimito lopez';
//console.log(nombreYapellido);

//! Con la variable LET se puede reasignar el valor
nombreYapellido = 'jaimito lopez';
console.log(nombreYapellido);

//*--------------------------------------------------------
//? CONST

const apellido = 'Figueroa'

//! No se puede repetir
//const apellido

//! No se puede reasignar
//apellido = 'Ali' en el visual no pasa nada pero en la consola marca el error

//*----------------------------------------------------------
//? VAR

var alumno = 'Rodolfo';
console.log(alumno);

var alumno = 'Humberto'
console.log(alumno);

var alumno = 'Alcaeda'
console.log(alumno);

//! La variable VAR ya no se utiliza

//*-------------------------------
//? Valores
/*
    -String
    -number
    -boolean(T/F)
    -array
    -object
    -empty (NULL)
*/

//*----------------------------------
//*----------------------------------
//? OPERADORES

//? ASIGNACION "="

//? ARITMETICOS "+, -, *, /, %"
let numero1 = 24;
let numero2 = 24;
console.log(numero1 % numero2);

let resultadoSuma = numero1 + numero2;
console.log(resultadoSuma);

let resultadoResta = numero1 - numero2;
console.log(resultadoResta);

//! Ojo!! con el + (Concatenar una cadena de string)

let nombre = 'pomberito';
let apellido1 = 'Gol';
let edad = 30;

console.log(nombre + " " + apellido1 + " " + edad)

//? COMPARACION "==" "==="

let numero3 = 32;
let numero4 = '32';
console.log(numero3 === numero4);

//? UNITARIOS "++" "--" "!(negacion)"

++numero3;
console.log(numero3);

--numero3;
console.log(numero3);

let caja = true;
console.log(!caja);

//? lOGICOS "&&" (Y - AND) "||" (O - OR) 
//* EJEMPLOS
console.log(2 > 3 && 3 < 4);
console.log(2 > 3 || 3 < 4);

//*--------------------------------------------------------------------
//*--------------------------------------------------------------------
//? ARRAYS O ARREGLOS - APLICAR EL LOG

let cajaNumeros = [1, 32, 532, -23, -33];
console.log(cajaNumeros);

let ficha = ['Martin', 'Nicolas', 'Alfredo', 'Lucas', 'Augusto']
console.log(ficha);


let ficha1 = ['Dardo', false, 57, 'Locomotora', -1000];
console.log(ficha1);

//*--------------------------------------------------------------------
//*--------------------------------------------------------------------
//? OBJETOS - APLICAR EL LOG

let persona = {
    nombre: 'Telemaco',
    apellido: 'Figueroa',
    edad: '15',
    Odiseando: true,
    domicilio: ['Monzon', 58, 'Monteros - Tucuman']
};

console.log(persona);
