// Ejercicio 1: Crear una función con un callback personalizado
// Deben crear una función llamada procesarDatos que reciba un array y un callback. El callback determinará cómo procesar los datos del array. Puede ser una suma, resta, multiplicacion o division como el ejemplo de clases, pero usando map o foreach

let numeros = [23, 54, 91, 201, 73, 123];

function sumar(numero){
    return numero + 1;
}

function procesarDatos (numeros, sumar){
    
    let resultado = numeros.map(sumar)

    return console.log(resultado);
}

procesarDatos(numeros)


// Ejercicio 2: Filtrar y encontrar nombres con callbacks
// Deben filtrar un array de nombres para encontrar aquellos que comiencen con una letra específica. Luego, deben encontrar el primero que cumpla esa condición.