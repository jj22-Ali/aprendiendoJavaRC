//*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

//? Mi forma de resolverlo 

/*
const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

document.write('<h2>Lista de Meses</h2>');
document.write('<ul>');
meses.forEach((mes) =>{
    document.write(`<li>${mes}</li>`)
});
document.write('</ul>');
*/

//*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// * Mostrar la longitud del arreglo.
// * Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// * Añade en última posición la ciudad de París.
// * Escribe por pantalla el elemento que ocupa la segunda posición.
// * Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

//? Esta es la forma final del ejercicio punto 2

// let ciudades = [];

// let asignacionCiudades = true;

// while(asignacionCiudades == true){
//     let ciudad = prompt('Ingrese una ciudad: ');
//     if(ciudad == null || ciudad == ''){
//         alert('No ingreso ninguna ciudad');
//         break;
//     }else{
//         ciudades.push(ciudad);
//         asignacionCiudades = confirm('¿Quieres seguir agregando otra ciudad?');
//     }
// };
// console.log(ciudades);

// document.write(`El arreglo de ciudades tiene ${ciudades.length} <br>`)

// if(ciudades.length > 0){
//     document.write('Lista de ciudades')
//     document.write('<ul>')
//     document.write(`La primera ciudad: ${ciudades[0]}<br>`);
//     if(ciudades.length >= 3){
//         document.write(`La tercera ciudad: ${ciudades[2]}<br>`);
//     } else{
//         document.write('No hay tercera ciudad')
//     }
//     document.write(`La ultima ciudad: ${ciudades.at(-1)}<br>`);
//     document.write('</ul>')
// } else {
//     document.write('Usted no ingreso ninguna ciudad')
// }

// ciudades.push('Paris, Francia');
// document.write(`(Actualizado)La ultima ciudad: ${ciudades.at(-1)}<br>`);

// document.write(`La segunda ciudad: ${ciudades[1]}<br>`);

// ciudades.splice(1, 2, 'Barcelona, España')
// document.write(`(Actualizado)La segunda ciudad: ${ciudades[1]}<br>`);


//*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

//? Asi lo Hice  yo

// const min = 1;
// const max = 6;
// let dado1, dado2, lanzamiento;
// let intentos = 1;
// let apariciones = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// let resultadosPosibles = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// while(intentos <= 50){
//     dado1 = Math.floor(Math.random() * (max - min + 1)) + min;
//     dado2 = Math.floor(Math.random() * (max - min + 1)) + min;
//     lanzamiento = dado1 + dado2;

//     console.log(lanzamiento);
    

//     if(lanzamiento == 2){
//         apariciones[0]++;
//     } else if(lanzamiento == 3){
//         apariciones[1]++;
//     } else if(lanzamiento == 4){
//         apariciones[2]++;
//     } else if(lanzamiento == 5){
//         apariciones[3]++;
//     } else if(lanzamiento == 6){
//         apariciones[4]++;
//     } else if(lanzamiento == 7){
//         apariciones[5]++;

//     } else if(lanzamiento == 8){
//         apariciones[6]++;

//     } else if(lanzamiento == 9){
//         apariciones[7]++;

//     } else if(lanzamiento == 10){
//         apariciones[8]++;

//     } else if(lanzamiento == 11) {
//         apariciones[9]++;

//     } else{
//         apariciones[10]++;

//     }
//     intentos++;
// }

// console.log(apariciones);

// document.write('<table border = "2" >')
//     document.write('<tr>')
//         document.write('<th> Suma </th>')
//         document.write('<th> Apariciones </th>')
//     document.write('</tr>')
//     for(let i = 0 ; i <= 10; i++){
//         document.write('<tr>')
//             document.write(`<td> ${resultadosPosibles[i]} </td>`);
//             document.write(`<td> ${apariciones[i]} </td>`);
//         document.write('/tr>')
//     }
// document.write('</table>')

//! Asi lo hizo chatgpt

const min = 1;
const max = 6;
let apariciones = Array(11).fill(0); // Inicializa un array de 11 posiciones con 0
let resultadosPosibles = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < 50; i++) {
    let dado1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let dado2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let lanzamiento = dado1 + dado2;

    console.log(lanzamiento);
    

    apariciones[lanzamiento - 2]++; // Restamos 2 para indexar correctamente
}

console.log(apariciones);

// Generación de la tabla en HTML
document.write('<table border="2">');
document.write('<tr><th>Suma</th><th>Apariciones</th></tr>');

for (let i = 0; i < resultadosPosibles.length; i++) {
    document.write(`<tr><td>${resultadosPosibles[i]}</td><td>${apariciones[i]}</td></tr>`);
}

document.write('</table>');
