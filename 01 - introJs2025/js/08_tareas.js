// Ejercicio 1: Crear una función con un callback personalizado
// Deben crear una función llamada procesarDatos que reciba un array y un callback. El callback determinará cómo procesar los datos del array. Puede ser una suma, resta, multiplicacion o division como el ejemplo de clases, pero usando map o foreach

//? asi lo hice yo
/*
let numeros = [23, 54, 91, 201, 73, 123];

function sumar(numero){
    return numero + 1;
}

function procesarDatos (numeros, sumar){
    
    return numeros.map(sumar);
}

console.log(procesarDatos(numeros, sumar)
);


*/

// Ejercicio 2: Filtrar y encontrar nombres con callbacks
// Deben filtrar un array de nombres para encontrar aquellos que comiencen con una letra específica. Luego, deben encontrar el primero que cumpla esa condición.


let nombres = ['Pablo', 'Maria', 'Matias', 'Juan Jose', 'Cristian', 'Mauricio', 'Zaralegui', 'Maximiliano'];


function encontrarNombres(nombres){
    
    let arrays =  nombres.filter((nombre) =>{
        return  nombre.startsWith('M')
    })
    
    return arrays;
}

function primerNombre(nombres, encontrarNombres){
    let primero = nombres.find((encontrarNombres) =>{
        return encontrarNombres.startsWith('M')
    });

    return primero;
}

console.log(nombres);
console.log(encontrarNombres(nombres));
console.log(primerNombre(nombres, encontrarNombres));
