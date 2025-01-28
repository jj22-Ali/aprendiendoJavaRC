//? FOR

//Ejercicios TABLAS: pedir al usuario la tabla a calcular

//* ----------------------------------------------------


/*
let tabla = parseInt(prompt('Ingrese el numero de la tabla que quiere saber: '));

if(!isNaN(tabla) && tabla != 0){
    for (let i = 0; i <= 10; i++) {
        console.log(`${tabla} x ${i} = ${tabla * i}`);
    }
}else{
    console.warn('Ingrese un numero valido');
    
}

*/



//? DO WHILE y FOR

//Ejercicio MULTITABLAS:
/*Permitir al usuario pedir cualquier tabla */
// let multiTabla = null;

let cantidadTablas = parseInt(prompt('Ingrese la de cantidad de tablas que quiere multiplicar: '));
let ordenTabla = 1;
if(cantidadTablas === null){
    console.log('Operación cancelada');    
}else if(isNaN(cantidadTablas)){
    console.log('Porfavor ingrese en numeros cuantas tabla multiplciar quiere ver');
}else{
    do{
        let tabla = parseInt(prompt('Ingrese la tabla a saber: '));
            console.log(`Tabla de multiplicar del ${tabla}; nro ${ordenTabla}`);
            for (let i = 0; i <= 10; i++) {
                console.log(`${tabla} x ${i} = ${tabla * i}`);
            }
        ordenTabla++;
        cantidadTablas--;
    }while(cantidadTablas > 0);
}




//* -----------------------------------------------------
//TAREA: Lista de alumnos:
/*Desarrollar un programa que cree una lista de alumnos,
primero que pida la cantidad de alumnos y luego
los nombres de cada uno, una vez ingresados los nombres,
arroje la lista en consola 

- Cantidad de alumnos
- Generar una lista
- Mostrar la lista
*/

/*
let cantidadAlumnos = parseInt(prompt('Ingrese la cantidad de alumno: '));
let listaAlumnos = ''

if(!isNaN(tabla) && tabla != 0){
    for (let i = 1; i <= cantidadAlumnos; i++) {
        let nombreAlumno = prompt(`Ingrese el nombre del alumno numero ${i}: `);
        listaAlumnos = listaAlumnos + "\n" + nombreAlumno;
    }
    
    console.log('La lista de alumno es:' + listaAlumnos);    
}else{
    console.warn('Ingrese un dato valido');
    
}
*/


