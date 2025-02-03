//Tarea 1

/*De una cadena de texto generar un array.
Posteriormente mostrar la siguiente informacion:

 . a-Numero de palabras
 . b-Primera palabra
 . c-Ultima palabra
 . d-Las palabras colocadas en orden inverso
 . e-Las palabras mostradas en orden alfabetico
 . f-Las palabras mostradas de la z a la a
 Sacar toda esta informacion en consola*/

 let texto = 'Su elocuencia esta en su corazon, son esas razones que la razon ignora';
 console.log(texto);
 let palabra = texto.toLocaleLowerCase().split(' ');
 console.log(palabra);
 
//*a
console.log(palabra.length);
//*b
console.log(palabra.at(0));
//*c
console.log(palabra.at(-1));
//*d
console.log(palabra.reverse());
//*e
console.log(palabra.sort());
//*f
console.log(palabra.sort().reverse());

// Tarea 2
// Tenemos una lista de numeros:
let lista =[23, 65, 46, 553, 2, 67];
/*
Debemos: 
a- pedir al usuario que ingrese un numero.
b- le diremos si es nuero existe en la lista o no
c- si extie le daremos un mesaje de FELICITACIONES
d- si no existe un mensaje que la información se perdio
*/
let numero = parseInt(prompt('Ingrese un numero: '));

if(!isNaN(numero)){
    if(lista.includes(numero)){
        console.log(`El numero ${numero} si se encuentra la lista FELICITACIONES`);
        
    } else{
        console.warn('La información se perdio');
        
    }
    
} else{
    console.warn('Usted no ingreso ninguno numero');
    
}

