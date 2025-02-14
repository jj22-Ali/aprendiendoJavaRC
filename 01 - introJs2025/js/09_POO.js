//? POO - Programación Orientadas a Objetos

//Objeto

let alumno = {
//!  key    value
    nombre: 'Juan',
    apellido: 'Figueroa',
    edad: 26,
    dni: 41345809,
    curso: 'FullStack'
}

console.log(alumno);


//? METODOS RECORRER UN OBJETO --------------------------------------

//? FORIN

for(const propiedad in alumno){
    //Muestra las propiedades
    // console.log(propiedad);
    
    //*Muestro el valor de la propiedad
    // console.log(alumno[propiedad]);

    //Reaccion
    console.log(`${propiedad}: ${alumno[propiedad]}`);
  
}

//? Funciones dentro del Objeto ---------------------------------------

let alumno2 ={
    nombre: 'Mario',
    apellido: 'Robertone',
    edad: 21,
    dni: 46902843,
    curso: "Full Stack",
    contraseña: "123456",


    /*Funcion: cuando la Fx esta dentro del objeto accedemos a la propiedad deseada con "this." */

    saludar: function(){
        // Scope Local

        console.log(`Hola soy ${this.nombre}`);
        
    },
};

alumno2.saludar();

//! Recorrer el objeto alumno2

// for(const propiedad in alumno2){
//     console.log(`${propiedad} = ${alumno2[propiedad]}`);
// }

//! Ocultar datos sensibles del objeto
// for(const propiedad in alumno2){
//     if(propiedad !== "contraseña" && propiedad !== "saludar"){
//         console.log(`${propiedad}: ${alumno2[propiedad]}`);
        
//     }
// }

//--------------------------------------------------------------------
//--------------------------------------------------------------------

//! Array o arreglos de objetos

//? BD -DB - Base de Datos -------------------------------------------

let usuarios = [
    {
        nombre:'Fabricio',
        curso: 'FullStack'
    },
    {
        nombre:'Gabriela',
        curso: 'FullStack'
    },
    {
        nombre:'Pedro',
        curso: 'FrontEnd'
    },
]

console.log(usuarios);

//Recorrer un array
//for 

for(let index = 0; index < usuarios.length ; index++){
    console.log(`Nombre: ${usuarios[index].nombre} - Curso: ${usuarios[index].curso}`);
    
};

//forEach - {callBack

usuarios.forEach((alumno) =>{
    console.log(`Nombre: ${alumno.nombre} - ${alumno.curso}`);
});