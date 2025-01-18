/*
    En una tienda hay descuentos depende el monto de la venta: Debe ingresar el monto de la venta y el sistema debe calcular el descuento:
    1- Si el monto es menor de 500, no hay descuento
    2- si es entre 500 - 1000 inclusive, descuento del 5%,
    3- entre 1000 y 7000 inclusive, 11%
    4- 7000 y 15000 inclusive 18%,
    5- más de 15000, 25%
*/

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