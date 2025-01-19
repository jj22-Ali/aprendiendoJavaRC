/*
    En una tienda hay descuentos depende el monto de la venta: Debe ingresar el monto de la venta y el sistema debe calcular el descuento:
    1- Si el monto es menor de 500, no hay descuento
    2- si es entre 500 - 1000 inclusive, descuento del 5%,
    3- entre 1000 y 7000 inclusive, 11%
    4- 7000 y 15000 inclusive 18%,
    5- más de 15000, 25%

    //? Solucion
    
let monto = parseFloat(prompt('Ingrese el monto de la venta: '));
//! Ambito Global

if(!isNaN(monto)){
    if(monto < 500){
        console.log(`El monto de su compra $${monto}, es menor a $500 por lo tanto no hay descuento`);
    } else if(monto >= 500 && monto < 1000){
        //! Ambito Local
        let descuento = monto * 0.05;
        let montoConDescuento = monto - descuento;
        console.log(`El monto a pagar con descuento del %5 es ${montoConDescuento}`);
    } else if(monto <= 7000){
        let descuento = monto * 0.11;
        let montoConDescuento = monto - descuento;
        console.log(`El monto a pagar con descuento del %11 es ${montoConDescuento}`);
    } else if(monto <= 15000){
        let descuento = monto * 0.18;
        let montoConDescuento = monto - descuento;
        console.log(`El monto a pagar con descuento del %18 es ${montoConDescuento}`);
    } else {
        let descuento = monto * 0.25;
        let montoConDescuento = monto - descuento;
        console.log(`El monto a pagar con descuento del %25 es ${montoConDescuento}`);
    }
} else {
    console.warn('El monto ingresado ES INCORRECTO, NO ES UN NUMERO');
}
*/


//-------------------------------------------------------------
//* Ejercicio fiesta
/*  - Solo se puede entrar personas de 18 años o más
    - Si no debe estar con un adulto responsable "tutor"
 */

let edad = parseInt(prompt('Ingrese la edad del muchacho: '))
let tutor = true;
if(!isNaN(edad)){
    if(edad >= 18){
        console.log('El muchacho/a puede ingresar al establecimiento solo');
    } else if (tutor){
        console.warn('El mucahco/a es menor de 18 años, pero tiene un tutor, Pueda Ingresar');   
    } else{
        console.log('El muchacho/a es menor de 18 años y no lo acompaña un tutor. No puede ingresar');
        
    }
} else{
    console.warn('Usted no ingreso una edad');
    
}


//--------------------------------------------------------------
//? SWITHC
//* Ejercicio verduleria
/*
    - Pedir al usuario que ingrese un producto de verduleria
    - En caso que este disponible ese producto, informar
    - En caso de que el producto NO este disponible, informar
*/

let compra = prompt('Que verdura quiere comprar?!: ').toLocaleLowerCase().trim();
//let verdura = compra.toLocaleLowerCase();

switch(compra){
    case 'manzana':
        console.log('Perfecto, el 1 kg de Manzana esta a $2500');
        break;
    case 'lechuga':
        console.log('Perfecto, la unidad de Lechuga esta a $2000 c/u ');
        break;
    case 'tomate':
        console.log('Perfecto, el 1 kg de Tomate esta a $3500');
        break;
    default:
        console.warn(`Mil disculpas no me quedan ${compra} disponibles`);
        
}