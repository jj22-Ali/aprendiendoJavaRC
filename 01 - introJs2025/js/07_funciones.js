//? FUNCIONES 
/*
Procedimientos encapsulados que se ejecutan cuando le damos la orden o el usaurio desaa
*/

//? TIPOS DE FUNCIONES

//Declarativas
//Anonimas o de expresion
//Arrow function o funcion flecha


//*----------------------------------------------------------------------

//? DECLARATIVAS

/*
Sintaxis

function "nombre"('parametros'/ puede o no tener parametros){
    'Instrucciones / accion'
}
 */

//! Ejemplo:

let nombre1 = 'Juan Jose';
let apellido1 = 'Figueroa';

function saludarPersona(parametro1, parametro2){
    console.log(`Hola ${parametro1} ${parametro2}`);
    
}

saludarPersona(nombre1, apellido1);

//*--------------------------------------------------------------------

let nombre2 = 'Francisco'
let apellido2 = 'Martinera'

function dataCompleta(){
    console.log(`Hola ${nombre2} ${apellido2}`);
    
}

dataCompleta();

//*--------------------------------------------------------------------

//! valores predeterminados en los paramtros  

function sumarValores(valor1 = 2, valor2 = 2 ){
    if(isNaN(valor1) || isNaN(valor2)){
        console.warn('Algun valor ingresado no es un número');
        
    } else {
        console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
        
    }
}

sumarValores(20, 32);

//*--------------------------------------------------------------------

//? ANONIMAS
//! Para funciones anonimas si o si usamos el const

const saludarAlmuno = function (nombre){
    console.log(`Hola ${nombre}`);
    
}

saludarAlmuno('Marla')