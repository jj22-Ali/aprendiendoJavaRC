//?WHILE
//* Calcular las tablas

/*
let tabla = 3;
let valor = 1; // iterador

while(valor <= 10){
    console.log(`${tabla} x ${valor} = ${tabla * valor}`);
    valor++;
}
*/

//*----------------------------------------------------
//* Ejercicio de chaghito de super

/*

let producto= prompt('Ingrese el nombre de su producto: ')
let changuito = "";

while(producto){
    //puedo agregar un CONDICIONAL DOBLE dentro del while
    if(changuito){
        changuito = changuito + " | " + producto;
    }else{
        changuito = producto;
    }
    producto = prompt('Ingrese otro producto: ')
};

console.log(changuito);

*/

/*El programa continuara mientras agreguemos productos, cuando ponemos aceptar con el campo vacio porque devuelve string vacio o al cancelar pq devuelve null*/

//*----------------------------------------------------
//? DO WHILE

/* Crear un script tipo trivia, donde se le pregunte al usuario la capital de un pains, tendra 3 intentos. si falla pierde */

//! Asi lo hice yo;

/*
 let respuestaCorrecta = "paris";
 let acierto = false;
 let intentos = 1;
alert('Bienvenido al juego de Adivina la Capital!!')
alert(`Tienes 3 intentos!!`)
 while(intentos <= 3 && !acierto){
    alert(`Intento nmro ${intentos}`)
    let x = prompt('¿Cual es la capital Francia?: ');
    if (x === null) {
        alert('No ingreso nada, acaba de perder un intento!!');
        intentos++;
    } else{
        if(x === respuestaCorrecta){
            console.log(`Correcto!! la palabra secreta era: ${x}`);
            acierto = true;
        }else{
            console.error('Intento incorrecto, intenta otra vez');
            intentos++;
        }
    }
 }
*/

//? Asi lo hizo el profe

let respuestaCorrecta = "PARIS";
let acierto = false;
let contador = 3;

while(contador > 0 && acierto == false){
    let respuestaUsuario = prompt('Cual es la capital de Francia');

    if(respuestaUsuario.toUpperCase() == respuestaCorrecta){
        acierto = true;
        console.log('Excelente! ACERTASTE! :)');
    } else {
        contador--;
        console.log(`Te quedan ${contador} intentos!! :)`);
    }
}

if(acierto == false){
    console.warn('Lo sentimos, acabas de perder!! :(');
    
}