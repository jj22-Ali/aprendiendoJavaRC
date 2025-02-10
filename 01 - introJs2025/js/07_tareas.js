//! Tarea 1 - con declarativa o anonima

/*
Hacer una función que calcule un descuento sobre un PRECIO
*/

//let precio = parseFloat(prompt('Ingrese el precio del producto: '));

// const descuento = (precio) => precio * 0.75;

// console.log(`el precio tiene ${precio} con un descuento del 25% quedaria en: ${descuento(precio)}`);


//! Tarea 2 - con arrow
/*
Calculadora, sólo de suma, resta, multiplicacion y division
*/

const calculadora = () =>{
    let operacion = prompt('¿Que operación aritmeticas quiere realizar\n - Sumar \n - Restar \n - Multiplicar \n - Dividir').toLowerCase();

    let apagarCalculadora = false;

    while(apagarCalculadora == false){
        switch (operacion) {
            case 'sumar':
                console.log('Suma');
                let num1 = parseInt(prompt('Ingrese el primer numero:'))
                let num2 = parseInt(prompt('Ingrese el segundo numero:'))
                console.log(`${num1} + ${num2} = ${num1 + num2}`);
                
                break;
        
            case 'restar':
                
                break;
        
            case 'multiplicar':
                
                break;
        
            case 'dividir':
                
                break;
        
            default:
                break;
        }
    }
}

calculadora()