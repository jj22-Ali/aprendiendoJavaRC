//EJERCICIOS

 

/*Con solo dos valores numericos realizar:

Mostramos por consola los siguientes resultados

-suma

-resta

-multiplicacion

-dividision

-comparamos y decimos si la primera variable es mayor a la segunda

 

- mostrar los resultados:

!!!! El resultado de la operacion es:

Ejemplo: El resultado de la operacion es:  58

!!!! Y TAMBIEN Mostrar toda la operación

Ejemplo: 45+13: 58 o 45 es mayor que 13: true*/

 

//? SOLUCION ----------------------------------------------------------------

let num1 = 10;
let num2 = 20;

console.log(`El resultado de la suma de ${num1} y ${num2} es: ${num1 + num2}`);
console.log(`El resultado de la resta ${num1} y ${num2} es: ${num1 - num2}`);
console.log(`El resultado de la multiplicación ${num1} y ${num2} es: ${num1 * num2}`);
console.log(`El resultado de la division ${num1} y ${num2} es: ${num1/num2}`);
console.log(`El ${num1} es mayor que ${num2}: ${num1 > num2}`);


//* -------------------------------------------------------------------------

/*

 1.

 A-PEDIR AL USUARIO QUE INGRESE SU APELLIDO - GUARDARLO EN MAYUSCULAS Y

 SIN ESPACIOS NI AL PRINCIPIO NI AL FINAL

 B-CALACULAR SU CANTIDAD DE CARACTERES, DEBE APARECER "APELLIDO" TIENE "x" CARACTERES

 C-OBTENER EL ULTIMO CARACTER DEL APELLIDO*/

 

//? SOLUCION ----------------------------------------------------------------

/* let apellido = prompt('Ingrese su apellido: ');
console.log(apellido);

let apellidoEnmayuscula = apellido.toUpperCase();
console.log(apellidoEnmayuscula); 

let ApellidoSinEsp = apellidoEnmayuscula.trim();
console.log(ApellidoSinEsp);

console.log(`El Apellido tiene ${ApellidoSinEsp.length} caracteres`);

console.log(`El ultimo caracter del apellido es: ${ApellidoSinEsp.at(0)}`);
 */

//* -------------------------------------------------------------------------

/*

 2.

 EN LA SIGUIENTE PALABRA "mascota"

A-PASARLA A MAYUSCULA

B-PASARLA A MINUSCULA

C-CAPITALIZAS LA PALABRA "Mascota"

 */

//? SOLUCION ----------------------------------------------------------------

let x = 'mascota';
//* A
console.log(x.toUpperCase());
//* B
console.log(x.toLowerCase());
//*c
let palabraCapitalizada = x.at(0).toUpperCase() + x.substring(1);
console.log(palabraCapitalizada)


