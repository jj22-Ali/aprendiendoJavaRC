//¡Tareas del dia!

/*
Tarea 1: 
- Obtener un numero aleatorio entre 1 y 100
- Calcular la raíz cuadrada y mostrar en consola
- Elevarlo a la quinta potencia y mostrarlo en consola

tarea 2: 
- Crea una lista de numeros cualquiera y mostrar por consola el mayor y el menor

tarea 3:
- Dados los siguientes numeros, 
46.84309
82.32514
53.44329
- dejarlo con dos decimales y mostrarlo en consola
*/

//? Solucionea

//* Tarea 1 
let x = parseFloat((Math.random()*100).toFixed(2));
console.log(`La raiz cuadrada de ${x} es: ${parseFloat(Math.sqrt(x).toFixed(2))}`);
console.log(`La quinta potencia de ${x} es: ${parseFloat(Math.pow(x, 5).toFixed(2))}`);

//* Tarea 2

let lista = [32, 325, 1235, 745, 12];
console.log(lista);
console.log(`El numero mayor de la lista es: ${lista.Math}`);

//* Tarea 3

let numerosConDecimales = [46.23591, 81.12340, 91.21234]

for (let i = 0; i < numerosConDecimales.length; i++){
    let z = parseFloat(numerosConDecimales[i].toFixed(2));
    console.log(z);
};