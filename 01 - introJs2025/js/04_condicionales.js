//? ESTRUCTURAS DE CONTROL

//? CONDICIONALES
/*
    Le presentamos al sistema una o varias condicionales de acuerod a eso que actúe o tambien no hacer nada
*/

//* SINTAXIS

/*
    if(condicion){
        si condicion es verdadera realiza una accion
    }
*/

//? Simple
//* if (si)
//Ejemplo

let billetera = 2;

if (billetera > 0){
    console.log('Tienes dinero');
}

// ------------------------------------------------------------

//? Doble
//* if(si!) y else (sino!)
//ejemplo

let cajaAhorros = 0;

if (cajaAhorros > 0){
    console.log('Tienes dinero :)');
} else{
    console.log('No hay dinero en tu cuenta :(');
}

//---------------------------------------------------------------
//? ANIDADAS

//Ejercicios: Ver si un numero es par o no

/*
Pedir al usuario que ingrese un numero y analizar opciones?
*/

let numero = parseInt(prompt('Ingrese un numero entero: '));
console.log(numero);

/*
 ! Ahora! que pasis si el susuario ingresa una palabra (string) en vez de un numero dara como valor NaN!!!
*/

//? METODO IsNan: pregunta 'si No es un numer ' y devuelve true si NO ES UN NUMERO y si SI ES devuelve un false

//if(isNaN(numero)){
//    console.warn('El valor ingresado no es un numero');
//} else{
//    console.log('El valor si es un numero')
//}

//? ANIDACION

if (isNaN(numero)){
    console.warn('El valor ingresado no es un numero')
} else{
    if(numero % 2 == 0){
        console.log(`El numero ${numero} es par`);
    } else {
        console.log(`El numero ${numero} es impar`);
        
    }
}

//-----------------------------------------------------
//? SWITCH
//* Sintaxis

/*
    switch(key){
        case value:

            break;
        case values:

            break;
        default:

            break;
    }
*/

let edad = 17;

switch(edad){
    case 16:
        console.log('Corresponde Aula A');
        break;
    case 17:
        console.log('Corresponde Aula B');
        break;
    case 18:
        console.log('Corresponde Aula C');
        break;
    default:
        console.log('No puede ingresar!');
        break;
}

//* El switch recibe en los casos VALORES, no puedo poner condiciones