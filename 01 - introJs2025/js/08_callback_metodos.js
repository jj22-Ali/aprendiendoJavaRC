//? Callback

//* Basicamete callback es una funcion que pasa como argumento a otra función

/*
function multiplciar(numero){
    return numero * 2;
}

const numeros = [1, 2, 3, 4, 5];
*/

//? Ejemplo
//Callback sincrono: se ejecuta inmediatamente en orden que son llamados

/*
function procesarNumeros(numeros, multiplicar){
    //! Primero el array y despues el callback
    const resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        resultado.push(multiplciar(numeros[i]))
        
    }
    return resultado;
}

console.log(procesarNumeros(numeros, multiplciar));

*/

/*
Callbacks asincronos: se ejecutan despues de un tiempo, generalmente sirven para funciones que no sabemos cuando temrinan (ej. llamadas a servidores)
*/


/* 
function mostrarMensaje(){
    console.log('Hola soy un mensaje, despues de 3 segundos');
    setTimeout(() => {console.log('mensaje despues de un 1 segundo');
    }, 1000)
}

setTimeout(mostrarMensaje, 3000);

mostrarMensaje()
*/

/*
//? Otro ejemplo

console.log('Mensaje 1');
setTimeout(() => {console.log('mensaje 2');
}, 2000)
console.log('Mensaje 3');

*/
//! Problemas Potenciales (callback hell)
/*
Si nose organizan bien, los callbacks pueden dar lugar ar un fenómeno llamado callback hell, donde las funciones se anidan de formas execivas, creando código difcil de leer y mantener.
*/
/*
doSomething(function(result){
    doSomethingElse(result, function(newResult){
        doThirdThing(newRsults, function(finalResult){
            console.log('Todo hecho.');
            
        });
    });
});
*/
// Para mitigar este problema, existen soluciones como las promesas y la sintaxis async/await, pero esas son cuestiones mas avanzadas.

//*--------------------------------------------------------------------

//? METODOS DE ARRAYS

//? SORT()
//* ordena en orden alfabetico, de mayor a menor o alreves

const numeros = [95, 34, 2, 67, 579, 4, 213];

const nombres = ['Matilde', 'Ruben', 'Lionel', 'Adriano', 'Emilio'];

/*
let nombresOrdenados = nombres.sort();
console.log(nombresOrdenados);

let numerosOrdenados = numeros.sort(function (a,b) {
    return a - b;
})
console.log(numerosOrdenados);
*/

//? metodo .filter()

//* filter devuelve un array  con la condión desiganada en este ejemplos los pares del array original
//let pares = numeros.filter((numero) =>{
//    return numero % 2 === 0;
//});

//* Aca filtra los mayor de 100
//let mayorDeCien = numeros.filter((numero) =>{
//    return numero > 100;
//});

//console.log(pares);
//console.log(mayorDeCien);

//? Metodo .find()
//* .find() devuelve el primer valor que cumpla con la condición o devuelve null

/*
let busquedaNumero = numeros.find((numero) =>{
    return numero < 100;
});

console.log(busquedaNumero);

let busquedaNombre = nombres.find((nombre) => {
    return nombre.startsWith('L')
});

console.log(busquedaNombre);
 
*/

//? Metodo .findIndex()
//* recorre todo el array, y devuelve el indice del elemento que cumpla la condición

/*
let indice = nombres.findIndex((nombre) => {
    return nombre === 'Lionel'
});

console.log(indice);

*/

//? Metodo .forEach()
//* recorre todo el array y realiza una función por cada elemento
/*
nombres.forEach((nombre) => {
    console.log(nombre);
});

// forma engorrosa

for(let i = 0; i < nombres.length ; i++){
    console.log(nombres[i]);
    
}
*/

//? Metodo .map()
// recorre todo el array y devuelve uno nuevo

let resultados = numeros.map((numero) => {
    return numero + 1;
});

console.log(resultados);
