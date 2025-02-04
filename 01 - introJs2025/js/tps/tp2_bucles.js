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


for (let i = 30; i >= i; i--) {
    for(let j = 1; j <= i; j++){
        document.write(i)
    }
    document.write('<br>')
}


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

/*
let x = true;
while(x){

    let piramide = parseInt(prompt('Ingrese el tamaño de las piramides en numeros'))

    if(!isNaN(piramide)){
        if(piramide >= 1 && piramide <= 50){
            for(let i = 30; i >= 1;i--){
                for(let j =1; j <= i ;j++){
                    document.write(i)
                }
                document.write('<br>')
            }
        }else{
            document.write('La piramide no puede tener mas de 50 numeros')
        }
    } else{
        document.write('Usted no ingreso un valor valido')
    }

    x=confirm('¿Queres intentar otra vez?');
}
*/

