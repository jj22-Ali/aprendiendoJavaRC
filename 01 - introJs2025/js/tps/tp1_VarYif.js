//* 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

//alert('Esto es un mensaje');

//* 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

//document.write('Hello World')

//*3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

//console.log(`La suma de 3 + 5 es ${3 + 5}`);

/*4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 

input: Coder 
Output: Hola Coder
 */

//let nombre = prompt('Ingrese el nombre de usuario: ');
//console.log(`Hola ${nombre}`);

//*  5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
/*
    let num1 = parseInt(prompt('Ingrese un numero: '));
    let num2 = parseInt(prompt('ingrese otro numero: '));
    console.log(`El resultado de ${num1} + ${num2} = ${num1 + num2}`);
 */

//* 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.Ejemplo: input: 15 , 3 Output: El 15 es el número más grande

/*
let num1 = parseInt(prompt('Ingrese un numero:'));
let num2 = parseInt(prompt('Ingrese otro un numero:'));
if(num1 > num2){
    console.log(`El ${num1} es el número más grande`);
} else {
    console.log(`El ${num2} es el número más grande`);    
} 
*/


//*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.Ejemplo: input: 15 , 3, 9 Output: El 15 es el número más grande

/*
let num1 = parseInt(prompt('Ingrese el primer numero: '));
let num2 = parseInt(prompt('Ingrese el segundo numero: '));
let num3 = parseInt(prompt('Ingrese el tercer numero: '));
console.log(`El ${Math.max(num1, num2, num3)} es el número más grande`);
*/


//*8.- Escribe un programa que pida un número y diga si es divisible por 2
//*Ejemplo: input: 10 input: 15Output: El 10 es divisible por 2.Output: El 15 no es divisible por 2.

/*
let x = parseInt(prompt('Ingres un cualquier numero: '));
if(x % 2 == 0){
    console.log(`El ${x} es divisible por 2`);
} else {
    console.log(`El ${x} No es divisible por 2`);
}
*/

//* 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen Nota: Tener en cuenta la función length y substring o charAt (developer mozilla). Ejemplo: input: Hola mundo Output: oauo

/*
let texto ='hola mundo'
console.log(`${texto.substring(1,2)}${texto.substring(3,4)}${texto.substring(6,7)}${texto.substring(9)}`);
*/

//* 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro). Ejemplo:  input: 20. Output: El 20 es divisible por 2.

/*
let numero = parseInt(prompt('Ingrese cualquier numero'));
if(!isNaN(numero)){
    if(numero % 2 == 0){
        console.log(`El ${numero} es divisible por 2`);
    } else if(numero % 3 == 0){
        console.log(`El ${numero} es divisible por 3`);
    } else if(numero % 5 == 0){
        console.log(`El ${numero} es divisible por 5`);
    } else if(numero % 7 == 0){
        console.log(`El ${numero} es divisible por 7`);
    } else {
        console.log('El numero no divisible por ninguno');
    }    
} else {
    console.warn('Usted no ingreso un numero');
}

*/

//* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible) Ejemplo: input: 20 ; input: 210
//* Output: El 20 es divisible por 2 y por 5.
//* Output: El 210 es divisible por 2, por 3, por 5 y por 7.

let numero = parseInt(prompt('Ingrese cualquier numero'));
if(!isNaN(numero)){
    if(numero % 2 == 0){
        if(numero % 3 == 0){
            if (numero % 5 == 0){
                if(numero % 7 == 0){
                    console.log(`El ${numero} es divisible por 2, por 3, por 5 y por 7`);
                } else {
                    console.log(`El ${numero} es divisible por 2, por 3 y por 5`);
                }
            } else {
                console.log(`El ${numero} es divisible por 2 y por 3`);
            }
        } else {
            console.log(`El ${numero} es divisible por 2`);
        }
    } else if(numero % 3 == 0){
        if (numero % 5 == 0){
            if(numero % 7 == 0){
                console.log(`El ${numero} es divisible por 3, por 5 y por 7`);
            } else {
                console.log(`El ${numero} es divisible por 3 y por 5`);
            }
        } else {
            console.log(`El ${numero} es divisible por 3`);
        }        
    } else if(numero % 5 == 0){
        if(numero % 7 == 0){
            console.log(`El ${numero} es divisible por 5 y por 7`);
        } else {
            console.log(`El ${numero} es divisible por 5`);
        }
    } else if(numero % 7 == 0){
        console.log(`El ${numero} es divisible por 7`);
    } else {
        console.log('El numero no divisible por ninguno');
    }    
} else {
    console.warn('Usted no ingreso un numero');
}
