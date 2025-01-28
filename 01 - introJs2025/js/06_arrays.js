//? ARRAYS o ARREGLOS

//* Son listas de datos o matrices

let alumnos = [
    'Juan',
    'Mario',
    'Jose',
    'Alicandro',
    'Matias',
    'Lolopez',
    'Ignacio',
    'Sebastian'
];
console.log(alumnos);

//* Puedo llamar a un elemento llamando a su posicion
console.log(alumnos[2]);

/* Si quiero obtener la cantidad de elementos que teine el arrego (lenght) */
console.log(alumnos.length);

//* Mostrar el ultimo elemento del arreglo
console.log(alumnos[alumnos.length - 1]);

//*-----------------------------------------------------
//? METODOS
//? ITERAR UN ARREGLO: recorrer

for (let i = 0; i < alumnos.length; i++) {
    console.log(`Hola soy ${alumnos[i]}`);
        
}

//? BUSCAR ELEMENTOS DEL ARREGLO
//* metodo '.at()' devuelve el primer elemento
console.log(alumnos.at(0));

//* Tambien buscar el ultimo elemento usuamos '.at(-1)'
console.log(alumnos.at(-1));

//* Sirve tambien para buscar elementos desde atras.
console.log(alumnos.at(-2));

//? ENCONTRAR

console.log(alumnos.includes('Juan'));
//* retorna un true o false

console.log(alumnos.indexOf('Juan'));
/* retorna la posiciion del elmeento (indice - index - i)*/

//? SEPERAR ELEMENTOS
/*Metodo ".join()" ("indico con que separo a los elementos del arreglo")*/
//!Devuelve una cadena de string

let seperarElementos = alumnos.join(', ');
console.log(seperarElementos);

//? UNIR ELEMENTOS
let unirElementos = seperarElementos.split(", ");
console.log(unirElementos);

//? AGREGAR
//* al final
alumnos.push('Tomas', 'Emanuel');
console.log(alumnos);

//* al principio
alumnos.unshift('Santiago');
console.log(alumnos);



