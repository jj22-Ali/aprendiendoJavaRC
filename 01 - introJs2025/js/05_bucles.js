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

let vecesAsumar = 5; //iterador, dice cuantas veces se ejecutara el bluce
let totalSuma = 0;

while(vecesAsumar > 0){
    totalSuma += 10;
    vecesAsumar--;//! Resta de a uno y detiene el bucle cuando llega a cero
    console.log(`Total de la suma: ${totalSuma} | veces que quedan por sumar ${vecesAsumar}`);  
}

console.log(`Total: ${totalSuma}`);

