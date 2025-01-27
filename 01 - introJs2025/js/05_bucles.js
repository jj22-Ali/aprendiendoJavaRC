//? BUCLES - acciones repetitivas

/*
- while
- do while
- for
*/

//? WHILE

/*
se ejecutaron acciones, mientras se cumplan una condicon*/

//Sintaxis

/*
    While(condición){
        #accion
    }
*/

/*
let vecesAsumar = 5; //iterador, dice cuantas veces se ejecutara el bluce
let totalSuma = 0;

while(vecesAsumar > 0){
    totalSuma += 10;
    vecesAsumar--;//! Resta de a uno y detiene el bucle cuando llega a cero
    console.log(`Total de la suma: ${totalSuma} | veces que quedan por sumar ${vecesAsumar}`);  
}

console.log(`Total: ${totalSuma}`);

*/
//*-------------------------------------------------

//? DO WHILE

/*
Hae que las acciones del while, se ejecuten aunque sea una vez aunque la condición no se cumpla.
*/
//*Sintaxis
/*

do{
    #acciones
}while(condicones)

*/
//*Ejemplo

/*
let vueltas = 3; // cambiar luego el valor
let respuestas = "";

do{
    //acciones
    respuestas = prompt("Ingrese un nombre");
    console.log(`hola ${respuestas}! Bienvenido! :)`);
    vueltas--;
}while(vueltas > 0);
*/

//*----------------------------------------------------
//? FOR

//* Sintaxis
/*

for(let i=0; 1 <= 10; i++){
    #acciones
}
*/
//*Ejemplo

/*
for (let i = 0; i < 5; i++) {
    let nombre = prompt('Ingrese un nombre del alumno');
    console.log(`Bienvenido ${nombre} al equipo!! `);
    
}
*/

/* 
También puedo crear una varible fuera del ciclo. y asi controlar la cantidad de veces que quiero que el ciclo se desate. Y colocarla en el segundo parametro
*/

//* Ejemplo 2

let cantidad = 3;

for (let i = 0; i < cantidad; i++) {
    let nombre = prompt('Ingresa el nombre del participante: ');
    console.log(`Bienvenido ${nombre} al Concurso!!`);
    
}