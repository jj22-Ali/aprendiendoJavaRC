//? DATE
/*

    El metodo DATE en javascript se utiliza para trabajar con fechas y horas

    - mew date().getDate() devuelve el dia del mes en un numero
    - new Date().getDay() devuelve posición del dia 0 es el domingo hasta el 6 que es el sabado
 */

    let dia = new Date().getDay();
    console.log(dia);

    switch(dia){
        case 0:
            console.log('Hoy es Domingo');
            
            break;
        case 1:
            console.log('Hoy es Lunes');
            
            break;
        case 2:
            console.log('Hoy es Martes');
            
            break;
        case 3:
            console.log('Hoy es Miercoles');
            
            break;
        case 4:
            console.log('Hoy es Jueves');
            
            break;
        case 5:
            console.log('Hoy es Viernes');
            
            break;
        case 6:
            console.log('Hoy es Sabado');
            
            break;
        default:
            console.log('Otro mensaje');
            
            break;
    }


//! shorthand para condicón simple
//? Operador Ternario
let edad = 15;
let mensaje = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(mensaje);
